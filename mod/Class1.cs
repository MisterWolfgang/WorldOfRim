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
        private CancellationTokenSource _cts = new CancellationTokenSource();

        public WebSocketClient(string serverUrl)
        {
            _client = new ClientWebSocket();
            _serverUri = new Uri(serverUrl);
        }

        public async Task ConnectAsync()
        {
            await _client.ConnectAsync(_serverUri, CancellationToken.None);
            _ = ReceiveLoop();
        }

        public bool IsConnected => _client.State == WebSocketState.Open;

        public async Task SendAsync(string message)
        {
            if (!IsConnected) return;
            var buffer = System.Text.Encoding.UTF8.GetBytes(message);
            await _client.SendAsync(new ArraySegment<byte>(buffer), WebSocketMessageType.Text, true, CancellationToken.None);
        }

        private async Task ReceiveLoop()
        {
            var buffer = new byte[1024];
            while (_client.State == WebSocketState.Open)
            {
                var result = await _client.ReceiveAsync(new ArraySegment<byte>(buffer), _cts.Token);
                if (result.MessageType == WebSocketMessageType.Close)
                {
                    await _client.CloseAsync(WebSocketCloseStatus.NormalClosure, string.Empty, CancellationToken.None);
                }
                else
                {
                    var msg = System.Text.Encoding.UTF8.GetString(buffer, 0, result.Count);
                    Log.Message($"[WorldOfRim] Message reçu de l'API : {msg}");
                }
            }
        }
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
                    {
                        Log.Message("[WorldOfRim] Connecté à l'API WebSocket !");
                        await wsClient.SendAsync("Coucou depuis RimWorld !");
                    }
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
