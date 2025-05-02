# 🏆 Scoreur pour le Badminton

## 📋 Description
L'application **Scoreur-badminton** est une application web simple qui affiche deux nombres sur une image de fond représentant un terrain de badminton. Les utilisateurs peuvent incrémenter ces nombres en cliquant sur la partie gauche ou droite de l'écran. L'application est conçue pour être responsive et fonctionne bien sur tablettes et smartphones.

## 📁 Structure du Projet
```
Scoreur-badminton
├── index.html        # Point d'entrée de l'application
├── css
│   └── styles.css    # Styles pour l'application
├── js
│   └── script.js     # JavaScript pour gérer les incréments des nombres
├── images
│   ├── Terrain-Bad2.svg  # 🏟️ Image de fond pour l'application
│   ├── redemarrer.svg    # 🔄 Icône pour réinitialiser les scores
│   ├── annuler.svg       # ↩️ Icône pour annuler la dernière action
│   └── parametres.svg    # ⚙️ Icône pour ouvrir les paramètres
└── README.md         # 📄 Documentation du projet
```

## 🔍 Aperçu des Fichiers

### 📝 index.html
Ce fichier sert de point d'entrée principal pour l'application. Il inclut les fichiers CSS et JavaScript nécessaires et définit la structure HTML pour afficher l'image de fond et les deux nombres.

### 🎨 css/styles.css
Ce fichier contient les styles CSS pour l'application. Il configure l'image de fond `Terrain-Bad2.svg`, positionne les nombres à 30% et 70% de la largeur, et applique une police de caractères qui ressemble à celle d'une calculatrice. Il gère également la réactivité des tailles des nombres.

### ⚙️ js/script.js
Ce fichier contient le code JavaScript qui utilise jQuery et jQuery UI. Il gère :
- L'incrémentation des nombres lorsque l'utilisateur clique sur la partie gauche ou droite de l'écran.
- La réinitialisation des scores avec confirmation.
- L'annulation de la dernière action.
- L'adaptation des tailles des nombres en fonction de la taille de l'écran.

### 🖼️ images/
Ce dossier contient :
- `Terrain-Bad2.svg` : 🏟️ Image de fond représentant un terrain de badminton.
- `redemarrer.svg` : 🔄 Icône pour réinitialiser les scores.
- `annuler.svg` : ↩️ Icône pour annuler la dernière action.
- `parametres.svg` : ⚙️ Icône pour ouvrir les paramètres.

## 🚀 Instructions d'Installation
1. Clonez le dépôt sur votre machine locale.
   `git clone https://github.com/mmaunier/Scoreur-badminton/`
3. Ouvrez `index.html` dans votre navigateur web pour voir l'application.
4. Assurez-vous d'avoir une connexion Internet pour charger jQuery et jQuery UI depuis leur CDN.

## 📱 Utilisation
- **Incrémentation des nombres** :
  - Cliquez sur la partie gauche de l'écran (moins de 50% de la largeur) pour incrémenter le premier nombre.
  - Cliquez sur la partie droite de l'écran (plus de 50% de la largeur) pour incrémenter le deuxième nombre.
- **Réinitialisation des scores** :
  - Cliquez sur l'icône 🔄 `redemarrer.svg` (située à 10% de la largeur et 3% de la hauteur) pour réinitialiser les deux nombres à zéro. Une confirmation sera demandée.
- **Annulation de la dernière action** :
  - Cliquez sur l'icône ↩️ `annuler.svg` (située à 85% de la largeur et 3% de la hauteur) pour revenir à l'état précédent.
- **Paramètres** :
  - Cliquez sur l'icône ⚙️ `parametres.svg` (située à 90% de la largeur et 3% de la hauteur) pour accéder aux options (fonctionnalité à venir).

## 📜 Licence
Ce projet est open-source et disponible sous la licence MIT.
