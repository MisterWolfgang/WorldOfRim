// Serveur WebSocket minimal pour tester la connexion du mod
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 5000 });

wss.on('connection', (ws) => {
  console.log('Mod connecté via WebSocket !');
  ws.send('Bienvenue, mod RimWorld !');

  ws.on('message', (message) => {
    console.log('Message reçu du mod :', message.toString());
    ws.send('Message bien reçu !');
  });

  ws.on('close', () => {
    console.log('Connexion WebSocket fermée.');
  });
});

console.log('Serveur WebSocket World Of Rim API démarré sur ws://localhost:5000');
