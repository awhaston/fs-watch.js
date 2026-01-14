import fs from 'node:fs';
import { WebSocketServer } from 'ws';

const DEBUG = false
const PORT = 3434;
const DIR  = './';
const wss  = new WebSocketServer({ port: PORT });

wss.on('connection', function connection(ws) {
    if (DEBUG) {
        console.log('New client connected');
    }

    fs.watch(DIR, { recursive: true }, (eventType, filename) => {
        if (filename) {
            if (DEBUG) {
                console.log(
                    `File ${filename} has changed (${eventType}) refreshing browser`
                );
            }

            ws.send('refresh');
        }
    });

    ws.on('close', function close() {
        if (DEBUG) {
            console.log('Client disconnected');
        }
    });
});

console.log('File watch server is running on ws://localhost:', PORT);
