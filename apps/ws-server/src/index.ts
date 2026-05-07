import { WebSocketServer } from "ws";
import {UserModel} from '@repo/db';

const server = new WebSocketServer({port:8080});

server.on('connection',async (socket)=>{
    await UserModel.create({
       username:Math.random().toString(),
       password:Math.random().toString()
    });
    socket.send('hi there you are connected to server');
});

