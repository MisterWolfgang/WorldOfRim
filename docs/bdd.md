# Modélisation de la base de données World Of Rim

## Table : User (Utilisateur Twitch)

- id : int (clé primaire, auto-incrément)
- twitchId : string (id Twitch du viewer, unique)
- twitchPseudo : string (pseudo Twitch)
- twitchAccessToken : string (token d'accès Twitch)
- twitchRefreshToken : string (refresh token Twitch)
- twitchTokenType : string (type de token Twitch)
- twitchTokenExpiresIn : int (durée de validité du token)
- avatar : string (url de l'avatar Twitch)
- createdAt : datetime
- updatedAt : datetime

## Table : Pawn (Pion)

- id : int (clé primaire, auto-incrément)
- userId : int (clé étrangère vers User, nullable)
- factionId : int (clé étrangère vers Faction)
- nom : string
- surnom : string
- genre : enum('male','female','none')
- espece : string (humain, animal, etc.)
- age : int
- traits : json (liste de traits de caractère)
- skills : json (compétences et niveaux)
- sante : json (états de santé, blessures, maladies)
- inventaire : json (liste d’objets)
- apparence : json (couleur de peau, cheveux, vêtements, etc.)
- statut : enum('vivant','mort','prisonnier','esclave','autre')
- createdAt : datetime
- updatedAt : datetime

## Table : Faction

- id : int (clé primaire, auto-incrément)
- nom : string
- type : enum('joueur','neutre','hostile','autre')
- chefId : int (clé étrangère vers Pawn)
- couleur : string (hex ou nom)
- membres : relation OneToMany vers Pawn
- relations : json (relations avec autres factions)
- createdAt : datetime
- updatedAt : datetime

## Relations

- Un User peut avoir plusieurs Pawn via PawnUser (relation N-N)
- Un Pawn peut être lié à plusieurs User via PawnUser (relation N-N)
- Un Pawn appartient à une Faction (factionId)
- Une Faction a plusieurs Pawn (membres)
- chefId référence le Pawn chef de la faction

## Extensions possibles

- Table Item (pour l’inventaire détaillé)
- Table EventLog (historique des actions)

---

Ce schéma est une base pour la génération des entités TypeORM et l’API REST.
