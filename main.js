const WebSocket = require('ws');


const wss = new WebSocket.Server({ port: 8080 });


let url = window.location.href;
let paramsStr = url.split('?')[1];
let params = new URLSearchParams(paramsStr);

for (let pair of params.entries()) 
{
    let name = pair[0];
    let value = pair[1];

    document.write(name + "=" + value + '; ');
}

wss.on('connection', function connection(ws) {

    console.log('Client connected');


    ws.on('message', function incoming(message) {

        console.log('Received: %s', message);

        ws.send(`${message}`);
    });


    ws.on('close', function () {
        console.log('Client disconnected');
    });
});