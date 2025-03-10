# CV Manager

Une application web PHP pour gérer les CV et les candidatures.

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
- 📄 Visualisation des CV directement dans l'application en vue liste ou tuile
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
