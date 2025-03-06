/**
 * Gestion de la vue en tuiles pour le gestionnaire de CV
 */
document.addEventListener('DOMContentLoaded', function() {
    // Éléments DOM
    const tableViewBtn = document.getElementById('tableViewBtn');
    const tileViewBtn = document.getElementById('tileViewBtn');
    const tableView = document.getElementById('tableView');
    const tileView = document.getElementById('tileView');
    const zoomControls = document.getElementById('zoomControls');
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');

    // Initialiser la vue par défaut (tableau)
    let currentView = 'table';
    
    // Basculer entre les vues
    function switchView(view) {
        if (view === 'table') {
            tableView.classList.remove('hidden');
            tileView.classList.add('hidden');
            zoomControls.classList.add('hidden');
            tableViewBtn.classList.add('active');
            tileViewBtn.classList.remove('active');
            currentView = 'table';
        } else if (view === 'tile') {
            tableView.classList.add('hidden');
            tileView.classList.remove('hidden');
            zoomControls.classList.remove('hidden');
            tableViewBtn.classList.remove('active');
            tileViewBtn.classList.add('active');
            currentView = 'tile';
            initializeThumbnails();
        }
    }

    // Gérer les clics sur les boutons de vue
    if (tableViewBtn) {
        tableViewBtn.addEventListener('click', function() {
            switchView('table');
        });
    }

    if (tileViewBtn) {
        tileViewBtn.addEventListener('click', function() {
            switchView('tile');
        });
    }

    // Zoom des tuiles
    let currentScale = 1;
    const tileContainer = document.querySelector('.tile-container');

    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', function() {
            if (currentScale < 1.5) {
                currentScale += 0.1;
                updateTileSize();
            }
        });
    }

    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', function() {
            if (currentScale > 0.5) {
                currentScale -= 0.1;
                updateTileSize();
            }
        });
    }

    function updateTileSize() {
        if (tileContainer) {
            tileContainer.style.setProperty('--tile-scale', currentScale);
        }
    }

    // Initialisation des miniatures PDF
    function initializeThumbnails() {
        const thumbnails = document.querySelectorAll('.pdf-thumbnail');
        
        thumbnails.forEach(async function(canvas) {
            const pdfPath = canvas.getAttribute('data-pdf-path');
            if (!pdfPath) return;
            
            const loadingElement = canvas.nextElementSibling;
            
            try {
                // Gérer les chemins absolus et relatifs
                let adjustedPath = pdfPath;
                if (pdfPath.startsWith('/cv-manager/uploads/')) {
                    adjustedPath = pdfPath.replace('/cv-manager/uploads/', 'uploads/');
                }
                
                // Charger le document PDF
                const loadingTask = pdfjsLib.getDocument(adjustedPath);
                const pdf = await loadingTask.promise;
                
                // Obtenir la première page
                const page = await pdf.getPage(1);
                
                // Calculer l'échelle pour adapter à la taille de la miniature
                const viewport = page.getViewport({ scale: 1 });
                const containerWidth = canvas.parentElement.clientWidth;
                const containerHeight = canvas.parentElement.clientHeight;
                
                const scaleX = containerWidth / viewport.width;
                const scaleY = containerHeight / viewport.height;
                const scale = Math.min(scaleX, scaleY, 0.5); // Limiter l'échelle à 0.5 pour éviter les grands rendus
                
                const scaledViewport = page.getViewport({ scale });
                
                // Définir les dimensions du canvas
                canvas.width = scaledViewport.width;
                canvas.height = scaledViewport.height;
                
                // Rendre la page sur le canvas
                const context = canvas.getContext('2d');
                const renderContext = {
                    canvasContext: context,
                    viewport: scaledViewport
                };
                
                await page.render(renderContext).promise;
                
                // Masquer l'indicateur de chargement
                if (loadingElement) {
                    loadingElement.classList.add('hidden');
                }
            } catch (error) {
                console.error('Erreur lors du chargement de la miniature PDF:', error);
                if (loadingElement) {
                    loadingElement.textContent = 'Erreur de chargement';
                }
            }
        });
    }

    // Vérifier s'il y a des tuiles à initialiser dès le chargement
    if (!tileView.classList.contains('hidden')) {
        currentView = 'tile';
        initializeThumbnails();
    }
});
