# 🫀 Cabinet de Cardiologie - Dr. Safi Med ZMOULI

Bienvenue sur le code source du site web officiel du cabinet de cardiologie du Docteur Safi Med Zmouli (Pornic & Nantes). Ce site a été conçu pour offrir une expérience fluide, moderne et accessible aux patients, tout en mettant à disposition des outils de prévention interactifs.

🌐 **Voir le site en ligne :** [Insère ici ton lien github.io, ex: https://ton-pseudo.github.io/ton-projet/]

---

## ✨ Fonctionnalités principales

Ce site n'est pas qu'une simple vitrine, il intègre plusieurs fonctionnalités interactives développées en JavaScript "Vanilla" (sans framework externe) :

* **Outils de prévention santé :**
    * ⚖️ **Calculateur d'IMC :** Évaluation instantanée de la corpulence avec un code couleur et des conseils personnalisés.
    * ⏱️ **Test de Fréquence Cardiaque :** Un outil interactif permettant aux patients de mesurer leurs battements par minute (BPM) avec un minuteur intégré.
* **Glossaire interactif :** Un dictionnaire médical avec un système de recherche en temps réel et un filtrage par ordre alphabétique.
* **Prise de rendez-vous optimisée :**
    * Boutons d'accès directs vers la plateforme Maiia.
    * Mise en évidence automatique du jour actuel dans le tableau des horaires.
    * 📇 **Génération de vCard :** Téléchargement direct des coordonnées du cabinet dans le répertoire du téléphone du patient.
* **Expérience Utilisateur (UX) :**
    * 🌙 **Mode Sombre / Clair :** Bouton de bascule avec sauvegarde des préférences de l'utilisateur (via `localStorage`).
    * 📱 **Responsive Design :** Entièrement adapté aux smartphones et tablettes (Menu flex, CSS grid).
    * ان **Animations au défilement :** Utilisation de la librairie AOS (Animate On Scroll) pour des apparitions fluides.
    * ⏳ **Écran de chargement (Loader) :** Animation personnalisée en forme de cœur pour faire patienter l'utilisateur.

---

## 🛠️ Technologies Utilisées

* **HTML5** : Sémantique et structure claire.
* **CSS3** : Flexbox, Grid, Variables CSS (`:root`), Media Queries pour le responsive, et animations "keyframes".
* **JavaScript (ES6)** : Logique des outils interactifs, manipulation du DOM, gestion du thème.
* **Bibliothèques externes :**
    * [FontAwesome](https://fontawesome.com/) (Icônes)
    * [AOS](https://michalsnik.github.io/aos/) (Animations)

---

## 📂 Structure du projet

* `index.html` : Page d'accueil.
* `profil.html` : Présentation du médecin et de ses expertises.
* `rendezvous.html` : Horaires, accès (Google Maps), contact et vCard.
* `faq.html` : Checklist de préparation et accordéon de questions fréquentes.
* `glossaire.html` : Dictionnaire médical filtrable.
* `imc.html` : Page dédiée aux outils de prévention (IMC & BPM).
* `style.css` : Feuille de style principale gérant également le mode sombre.
* `script.js` : Toute la logique interactive du site.

---

## 👨‍💻 Déploiement

Ce projet est conçu pour être hébergé statiquement. Il est actuellement déployé en continu via **GitHub Pages**. Toute modification poussée sur la branche `main` met à jour le site automatiquement.
