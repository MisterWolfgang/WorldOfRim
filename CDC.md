# Cahier des charges World Of Rim

## Présentation

World Of Rim est un Projet colossale liant le jeu Rimworld, à Twitch via les extensions twitch.

### Mod

Technologie C# Librairie NET Framework 4.7.2
Les trois projets seront géré dans un Workspace NX on utilisera "bun"
Il faudra configurer VSCode pour du developpement en C#
Le package.json à la racine permettra le lancement des trois projet.
Le mod fera un build, une copie du DLL sera envoyé dans le dossier du Mod dans les dossiers du jeu et lancera le jeu en -quicktest
Utilisation de Harmony Library pour dialogué plus facilement avec le jeu
Communication en temps réel via webSocket avec l'API du mod.

### Cibles

1. Streamer : Utilisateur du mod chargé sur son jeu, en générale c'est un streamer Twitch
2. Viewer : Utilisateur de l'extention Twitch lié à la partie et au live du streamer

Un streamer peut être un viewer et inversement un viewer peut devenir un streamer dans ces cas, les infos enregistré en base sont les mêmes le type d'utilisateur change en fonction de son utilisation actuelle du projet.

### Securité et Authentification

Bcrypt et JWToken
Systeme d'Auth Twitch API via notre API et sauvegarde du Token et Refreash Token Twitch en base

### Gestion des Performances

Il faudra des limite pour ne pas surcharger le monde du streamer en jeu et donc implémenté une file d'attente

### Scénarios d'Erreur

En cas de connexion Websocket interrompue coté extention twitch, il ne se passera rien, le streamer n'aura aucun impacte sur sa partie.
En cas de connexion Websocket interrompue coté Mod, bah soit le jeu a planté soit le streamer l'a fermer, si le jeu est pas planté et toujours actif afficher un message au streamer sur sa fenetre de jeu en bas a droite.

### Tests et Déploiement

Test unitaire coté API et Extention Twitch mais pas Coté Mod.
Déploiement du mod sur steam Workshop, l'api et l'extention je ne sais pas encore

### Documentation et Support

Il faudra une documentation en jeu et sur l'extention twitch pour guider les nouveau utilisateurs
Il y aura un support par mail et une FAQ

### Conformité et Légal

Il faudra vérifié l'aspect Légal des condition d'utilisation des extentions twitch.
Il faudra mettre en place des mentions légales et des conditions d'utilisation pour mon extension et mon API

### Les besoins coté Mod

1. Dialogue en WebSocket
2. Lancement du jeu par le streamer et chargement du mod
   1. Au lancement, une popup devra apparaitre présentant le mod et demandant à l'utilisateur les authorisation nécessaires pour dialogué avec l'API Twitch et l'API du mod.
   2. On chargera la liste des viewers du streamer et on les enregistrera dans la base de données si inexistant
   3. On créera des factions procedurales avec les viewers qui ne sont pas déjà présent dans une faction en BDD
   4. Dans les options du mod, le streamer pourra paramétré le mod, activer la boutique, choisir les items en vente pour l'extention twitch etc.
   5. Les items disponible pour une mise en vente seront paramétré en BDD et non modifiable par le streamer il pourra juste les rendre payant ou gratuit. car (Un catalogue peut contenir au maximum 250 produits et le mod n'aura le droit qu'a 1 seul catalogue).
3. A la génération d'une nouvelle partie après configuration et choix de mode de jeu par l'utilisateur
   1. le jeu affiche la carte du monde pour que le joueur se place sur le monde
   2. juste avant d'afficher la carte du monde on videra la base de données des pions, factions etc enregistré en jeu
   3. on les remplacera par nos pions et faction enregistré en base de données avec une limite pour le pas surchargé le monde du streamer.
4. Pendant la partie les viewers pourrons request leur apparition en jeu (si non présent dans le monde)
   1. Si le viewer est déjà dans une faction et force sa requette alors il sera retiré de la faction et apparaitra dans la faction du joueur.
   2. Si le viewer n'est pas dans une faction, ni dans le monde alors il dans la faction du joueur.
5. Les autres viewers seront enregistré dans la file d'attente pour intégré le monde via des évents du jeu (le jeu possède une file d'attente de pions il me semble)
6. l'inventaire et l'apparence des pions sera administrable via l'extention twitch et sera connecté en temps réel avec notre API en websocket.

### Les besoins coté API

1. Dialogue en WebSocket
2. API REST avec TypeORM
3. MySQL8

### Les besoins coté extention Twitch

1. Dialogue en WebSocket
2. Expo.JS React Native Mobile et Web. (il y aura l'extension twitch, un site web et deux app IOS et Android avec la même base de code)
3. Une interface de création de pion personalisé
4. Une interface e gestion d'inventaire
5. Une boutique (Payment en "Bits" via l'API Twitch et "Bits in Extensions" <https://dev.twitch.tv/extensions/bits/>)
6. Il faudra voir si il n'y as pas un moyen d'utiliser deux API twitch pour afficher un produit au prix de 100Bits mais crédité que 90Bits au streamer et les 10 sur mon compte twitch à moi. Avec l'ajout d'une information sur l'extention informant que 10% des transaction revienne au créateur de l'extention.
