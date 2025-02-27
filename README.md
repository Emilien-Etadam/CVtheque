# CV Manager

Une application très simple en PHP pour gérer les CV et les candidatures codée par IA 

![Gestionnaire de CV](https://img.shields.io/badge/Application-Gestion%20CV-blue)
![PHP](https://img.shields.io/badge/PHP-8.0+-green)
![SQLite](https://img.shields.io/badge/Database-SQLite-orange)
![License](https://img.shields.io/badge/License-GPL%20v3-blue)

## 📋 Description

CV Manager est une application web légère développée en PHP qui permet de gérer efficacement les CV et les candidatures. Elle utilise SQLite comme base de données, ce qui la rend facile à déployer sans configuration complexe de serveur de base de données.

### Fonctionnalités principales

- 📤 Upload de CV au format PDF
- 🔍 Extraction automatique des informations (nom, email) depuis les PDF
- 📊 Gestion des candidats (ajout, modification, suppression)
- 🏷️ Suivi du statut des candidatures (Nouveau, En cours, Entretien planifié, Accepté, Refusé)
- 🔎 Filtrage des candidats par statut et poste
- 📄 Visualisation des CV directement dans l'application
- 🌓 Mode sombre/clair

## 🚀 Installation

### Prérequis

- PHP 8.0 ou supérieur
- Extension SQLite pour PHP
- Serveur web (Apache, Nginx, etc.)

### Étapes d'installation

1. Clonez ce dépôt sur votre serveur web :
   ```bash
   git clone https://github.com/votre-username/cv-manager.git
   ```

2. Créez les dossiers nécessaires s'ils n'existent pas déjà :
   ```bash
   mkdir -p cv-manager/uploads cv-manager/temp
   ```

3. Assurez-vous que les permissions sont correctement configurées :
   ```bash
   chmod 755 -R cv-manager
   chmod 777 -R cv-manager/uploads
   chmod 777 -R cv-manager/temp
   ```

4. Accédez à l'application via votre navigateur :
   ```
   http://votre-serveur/cv-manager/
   ```

L'application créera automatiquement la base de données SQLite (`cv.db`) et les tables nécessaires lors de la première utilisation.

## 📖 Utilisation

### Ajouter un candidat

1. Sur la page d'accueil, utilisez la zone de dépôt de fichier pour uploader un CV au format PDF
2. L'application extraira automatiquement les informations disponibles dans le PDF
3. Complétez les informations manquantes dans le formulaire
4. Cliquez sur "Ajouter le candidat"

### Gérer les candidats

- **Visualiser un CV** : Cliquez sur l'icône "œil" à côté du candidat
- **Modifier les informations** : Cliquez sur l'icône "crayon" pour éditer les détails
- **Changer le statut** : Utilisez le menu déroulant dans la colonne "Statut"
- **Supprimer un candidat** : Cliquez sur l'icône "corbeille" (cette action supprime également le fichier PDF)

### Filtrer les candidats

Utilisez les filtres en haut de la liste des candidats pour afficher uniquement les candidats correspondant à certains critères (statut, poste).

## 🧩 Structure du projet

```
cv-manager/
├── add_candidate.php    # Formulaire d'ajout de candidat
├── cv.db                # Base de données SQLite
├── darkmode.css         # Styles pour le mode sombre
├── db.php               # Gestion de la connexion à la base de données
├── extract_cv.php       # Fonctions d'extraction des informations des PDF
├── index.php            # Page principale de l'application
├── template.php         # Template HTML principal
├── upload_pdf.php       # Gestion de l'upload des fichiers PDF
├── uploads/             # Répertoire de stockage des CV
└── temp/                # Répertoire temporaire pour les uploads
```

## 🔒 Sécurité

- Les noms de fichiers sont générés de manière unique pour éviter les collisions
- Les entrées utilisateur sont validées et échappées pour prévenir les injections SQL et XSS
- Les chemins de fichiers sont vérifiés pour éviter les attaques de type directory traversal

## 🛠️ Personnalisation

### Statuts des candidats

Vous pouvez modifier la liste des statuts disponibles en éditant la variable `$statuses` dans le fichier `db.php` :

```php
$statuses = ['Nouveau', 'En cours', 'Entretien planifié', 'Accepté', 'Refusé'];
```

### Apparence

Le style de l'application peut être personnalisé en modifiant les fichiers CSS :
- `darkmode.css` pour les styles du mode sombre/clair

## 📝 Licence

Ce projet est sous licence GNU GPL v3. Voir le fichier LICENSE pour plus de détails ou visiter [gnu.org/licenses/gpl-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

1. Forkez le projet
2. Créez votre branche de fonctionnalité (`git checkout -b feature/amazing-feature`)
3. Committez vos changements (`git commit -m 'Add some amazing feature'`)
4. Poussez vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur ce dépôt.
