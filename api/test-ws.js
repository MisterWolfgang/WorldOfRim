import { WebSocket } from 'ws';
import assert from 'assert';

// Test unitaire de connexion WebSocket à l'API
(async () => {
  const ws = new WebSocket('ws://localhost:5000');
  let isOpen = false;
  let messageRecu = false;

  ws.on('open', () => {
    isOpen = true;
    console.log('[TEST] Connexion WebSocket ouverte');
  });

  ws.on('message', (msg) => {
    messageRecu = true;
    console.log('[TEST] Message reçu du serveur :', msg.toString());
    ws.close();
  });

  ws.on('close', () => {
    try {
      assert.ok(isOpen, 'La connexion WebSocket doit être ouverte');
      assert.ok(messageRecu, 'Un message doit être reçu du serveur');
      console.log('[TEST] ✅ Test de connexion WebSocket réussi');
      process.exit(0);
    } catch (e) {
      console.error('[TEST] ❌', e.message);
      process.exit(1);
    }
  });

  ws.on('error', (err) => {
    console.error('[TEST] ❌ Erreur WebSocket :', err.message);
    process.exit(1);
  });
})();
