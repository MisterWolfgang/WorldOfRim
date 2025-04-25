using System;
using System.Net.WebSockets;
using System.Threading;
using System.Threading.Tasks;
using Verse;

namespace WorldOfRimMod
{
    public class WebSocketClient
    {
        private ClientWebSocket _client;
        private Uri _serverUri;

        public WebSocketClient(string serverUrl)
        {
            _client = new ClientWebSocket();
            _serverUri = new Uri(serverUrl);
        }

        public async Task ConnectAsync()
        {
            await _client.ConnectAsync(_serverUri, CancellationToken.None);
        }

        public bool IsConnected => _client.State == WebSocketState.Open;
    }

    public class Program
    {
        public static async Task Main(string[] args)
        {
            var wsClient = new WebSocketClient("ws://localhost:5000");
            Console.WriteLine("Tentative de connexion WebSocket...");
            await wsClient.ConnectAsync();
            Console.WriteLine(wsClient.IsConnected ? "Connecté à l'API WebSocket !" : "Échec de la connexion WebSocket.");
        }
    }

    // Classe d'entrée du mod pour RimWorld
    public class WorldOfRimMod : Mod
    {
        public WorldOfRimMod(ModContentPack content) : base(content)
        {
            Log.Message("[WorldOfRim] Mod chargé !");
            var wsClient = new WebSocketClient("ws://localhost:5000");
            Task.Run(async () =>
            {
                try
                {
                    await wsClient.ConnectAsync();
                    if (wsClient.IsConnected)
                        Log.Message("[WorldOfRim] Connecté à l'API WebSocket !");
                    else
                        Log.Error("[WorldOfRim] Échec de la connexion WebSocket.");
                }
                catch (Exception ex)
                {
                    Log.Error("[WorldOfRim] Exception WebSocket : " + ex.Message);
                }
            });
        }
    }
}
