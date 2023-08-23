'use strict';

const Hapi   = require('@hapi/hapi');

const Server = new Hapi.Server({
    host: 'https://cce0-129-205-121-42.ngrok-free.app',
    port: 8080
});
const Hello  = require('./lib/hello');

Server.route({
    method: 'GET',
    path: '/hello/{user}',
    handler: function (request, reply) {

        const result = Hello(decodeURIComponent(request.params.user));
        return result;
    }
});

// don't start server if this file was required

if (!module.parent) {

    Server.start((err) => {

        if (err) {
            throw err;
        }

        console.log(`Server running at: ${Server.info.uri}`);
    });
}

module.exports = Server;
