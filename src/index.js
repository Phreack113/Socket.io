import app from './app.js'; //Importo el servidor de express
import {Server as WebsocketServer} from 'socket.io';
import http from 'http'; //Importamos http de node
import {connectDB} from './db';
import sockets from './sockets';
import {PORT} from './config';


connectDB();

const server = http.createServer(app); //Asociamos la app de express al http de node
const httpserver = server.listen(PORT); //Ambos servidores HTTP y Socket.io utilian el mismo servidor llamado server
console.log('Server running on port 3000', PORT);


const io = new WebsocketServer(httpserver); //Pasamos este servidor HTTP a Socket.io para configurarlo
//Para esta instancia podemos hacer la prueba de navegar en http://localhost:3000/socket.io/socket.io.js y si logramos ver el js significa que la configuración está OK
sockets(io);

