const PORT = 3434
const url  = 'ws://localhost:' + PORT;
const ws   = new WebSocket(url);

ws.onopen = () => {
    console.log("Connected to file watch server");
    
    ws.onmessage = (e) => {
        if(e.data === "refresh") {
            location.reload();
        }
    }
}
