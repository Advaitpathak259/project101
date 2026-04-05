import { WebSocket, WebSocketServer } from "ws"
import jwt, { decode, JwtPayload } from "jsonwebtoken"
const wss= new WebSocketServer({port:8080});

wss.on('connection',function connection(ws,request){

     const url = request.url;

     if(!url){
        return;
     }

     const queryParams= new URLSearchParams(url.split('?')[1]);
     const token = queryParams.get('token') ?? "";

     const decoded =  jwt.verify(token,"123456")
 if(!decoded  || !(decode as JwtPayload)){
    wss.close();
    return;
 }
    wss.on('message',function message(data){
        ws.send('pong')
    });
});