const dotenv = require ('dotenv');
const Server = require('./models/server');

//configuracion dotenv
dotenv.config();

//configuracion servidor
const server = new Server();
//iniciar servidor
server.listen();