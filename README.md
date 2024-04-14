# MetCity
![Texte alternatif](./public/images/websiteView.png)

# Application Météo ExpressJS + Twig

Ce projet est une application web permettant de suivre la météo de la journée en cours en utilisant ExpressJS et Twig. Elle offre plusieurs fonctionnalités, notamment l'ajout de villes, la consultation de la liste des villes ajoutées, la recherche de villes, l'accès à la page météorologique d'une ville sélectionnée, ainsi que la récupération et l'affichage des alertes météorologiques.

## Installation

1. Clonez le dépôt depuis GitHub :
   https://github.com/lamya1baidouri/MetCity
2. Accédez au répertoire du projet:
   cd projetLarka
3. Installez les dépendances :
npm install

## Utilisation

1. Lancez l'application :
npm start
2. Accédez à l'application dans votre navigateur à l'adresse :
http://localhost:3000

# Fonctionnalités

- **Ajout d'une ville :** Ajoutez une ville en spécifiant son nom ainsi que ses coordonnées LON et LAT. (Ajout unique de la ville)
- **Consultation de la liste des villes ajoutées :** Consultez la liste des villes ajoutées depuis la page d'accueil.
- **Recherche d'une ville :** Utilisez la barre de recherche pour trouver une ville dans la liste des villes ajoutées.
- **Accès à la page météorologique d'une ville :** Sélectionnez une ville dans la liste des villes ajoutées pour accéder à sa page météorologique.
- **Récupération et affichage des alertes météorologiques :** Les alertes météorologiques sont récupérées à partir de l'API du Meteorologisk Institutt et affichées sur la page météorologique de chaque ville.
- **Filtrage par plage horaire en météo :** Filtrez les données météorologiques en fonction de la plage horaire choisie, y compris le matin, l'après-midi, le soir et la nuit.
- **Filtrage par sévérité en alertes météorologiques :** Filtrez les alertes météorologiques en fonction de leur sévérité, par exemple, en affichant uniquement les alertes de niveau rouge ou les alertes de niveau jaune.

## Base de données

SQLite est utilisé comme système de base de données pour stocker les informations sur les villes ajoutées.
## Autorisations API

Ce projet utilise l'API du Meteorologisk Institutt pour récupérer les données météorologiques et les alertes. Assurez-vous de respecter les conditions d'utilisation et les politiques de l'API, notamment en matière de fréquence des requêtes et d'utilisation appropriée des données.
Exemple de requête API pour récupérer les données météorologiques d'une ville :
https://api.met.no/weatherapi/locationforecast/2.0/complete?lat=-16.516667&lon=-68.166667&altitude=4150   
Exemple de requête API pour récupérer les alertes météorologiques :
https://api.met.no/weatherapi/metalerts/1.1/.json

By Lamya Baidouri 
