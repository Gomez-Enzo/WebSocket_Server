const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';
        
        //configuraciones de socket
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);
        
        this.paths = {};
        this.middlewares();
        this.routes();

        this.sockets();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('./src/public'));
        
    }
    routes(){
        
    }
    sockets(){
        this.io.on('connection', socketController);
    }

    listen() {
        this.server.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports = Server;