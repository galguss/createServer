const httpServer = require('http').Server;
const fs = require('fs');
const util = require('util');

class myServer extends httpServer{
    constructor(){
        super();
        this.listen(3000);
        this.on('request', this.requestHendler);
    }

    requestHendler(request, response){
        fs.readFile('./test.txt', (err, data) => {
            response.end(data);
        });
    }
}

const newServer = new myServer();