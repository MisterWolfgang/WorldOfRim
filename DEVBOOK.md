# DEVBOOK - World Of Rim

## Introduction

Ce document sert de suivi pour le développement du projet "World Of Rim". Il détaille les étapes nécessaires pour mener à bien le projet en suivant une méthodologie TDD (Test-Driven Development) et les principes SOLID. Chaque étape sera marquée comme réalisée une fois terminée, et des commits atomiques seront effectués avec des messages clairs et descriptifs.

## Étapes du projet

### Initialisation

- [x] Initialiser un dépôt Git pour le projet.
- [x] Configurer le fichier `.gitignore` pour exclure les fichiers inutiles.
- [x] Créer la structure de base du projet avec les dossiers nécessaires.
- [x] Ajouter un fichier `README.md` décrivant le projet.
- [x] Configurer un environnement de développement pour C#, TypeScript, et React Native.
- [x] Installer les dépendances nécessaires (Harmony Library pour le mod).

### Développement du Mod

1. **Connexion WebSocket**
   - [x] Implémenter la communication en temps réel via WebSocket entre le mod et l'API.
   - [ ] Ajouter des tests unitaires pour valider la connexion WebSocket.

2. **Lancement et configuration du Mod**
   - [ ] Créer une popup au lancement du jeu pour demander les autorisations nécessaires.
   - [ ] Charger la liste des viewers et les enregistrer en base de données.
   - [ ] Générer des factions procédurales pour les viewers non enregistrés.
   - [ ] Ajouter des options de configuration pour le mod dans le jeu.

3. **Gestion des parties**
   - [ ] Implémenter la logique pour vider et recharger la base de données lors de la génération d'une nouvelle partie.
   - [ ] Ajouter des tests pour valider cette fonctionnalité.

4. **Interactions en jeu**
   - [ ] Permettre aux viewers de demander leur apparition en jeu.
   - [ ] Gérer les files d'attente pour intégrer les viewers dans le monde.
   - [ ] Connecter l'inventaire et l'apparence des pions à l'extension Twitch via WebSocket.

### Développement de l'API

1. **Connexion WebSocket**
   - [ ] Implémenter la communication en temps réel via WebSocket.
   - [ ] Ajouter des tests unitaires pour valider la connexion WebSocket.

2. **API REST**
   - [ ] Créer une API REST avec TypeORM et MySQL8.
   - [ ] Ajouter des tests unitaires pour chaque endpoint.

### Développement de l'extension Twitch

1. **Interface utilisateur**
   - [ ] Créer une interface pour la personnalisation des pions.
   - [ ] Créer une interface pour la gestion de l'inventaire.
   - [ ] Implémenter une boutique avec paiement en "Bits".

2. **Fonctionnalités avancées**
   - [ ] Étudier la possibilité d'utiliser deux API Twitch pour gérer les transactions.
   - [ ] Ajouter des tests unitaires pour valider les fonctionnalités.

### Tests et Déploiement

- [ ] Écrire des tests unitaires pour l'API et l'extension Twitch.
- [ ] Déployer le mod sur Steam Workshop.
- [ ] Déployer l'API et l'extension Twitch.

### Documentation et Support

- [ ] Rédiger une documentation pour le mod et l'extension Twitch.
- [ ] Mettre en place une FAQ et un support par mail.

### Conformité et Légal

- [ ] Vérifier la conformité avec les conditions d'utilisation des extensions Twitch.
- [ ] Rédiger des mentions légales et des conditions d'utilisation pour l'extension et l'API.

## Suivi des étapes réalisées

Chaque étape réalisée sera marquée avec un "[x]" et un message de commit correspondant sera ajouté au dépôt Git.
