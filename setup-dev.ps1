# Script d'installation automatisée pour World Of Rim
# Usage : Exécuter dans PowerShell avec les droits nécessaires

Write-Host "Installation des dépendances Node.js pour l'API..." -ForegroundColor Cyan
if (Test-Path "api/package.json") {
  cd api
  npm install
  cd ..
} else {
  Write-Host "Le dossier api ou package.json est manquant." -ForegroundColor Yellow
}

Write-Host "Installation des dépendances Node.js pour l'extension Twitch..." -ForegroundColor Cyan
if (Test-Path "twitch-extension/package.json") {
  cd twitch-extension
  npm install
  cd ..
} else {
  Write-Host "Le dossier twitch-extension ou package.json est manquant." -ForegroundColor Yellow
}

Write-Host "\nVérifiez que .NET Framework 4.7.2 est installé pour le développement C# (mod RimWorld)." -ForegroundColor Green
Write-Host "Pour React Native, installez Expo CLI si ce n'est pas déjà fait : npm install -g expo-cli" -ForegroundColor Green
