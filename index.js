'use strict'

const Hapi = require('hapi')
const inert = require('inert')
const vision = require('vision')
const path = require('path')
const routes = require('./routes')
const Pug = require('pug')

const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: 'localhost',
    routes: {
        files: {
            relativeTo: path.join(__dirname, 'public')
        }
    }
})

async function init () {

    try {
        await server.register(inert)
        await server.register(vision)

        server.views({
            engines: {
                pug: Pug
            },
            relativeTo: __dirname,
            path: 'views',
            layout: true,
            layoutPath: 'views'
        })

        server.route(routes)

        await server.start()
    } catch (error) {
        console.log(error)
        process.exit(1)
    }

    console.log(`Servidor lanzado en ${server.info.uri}`)
}

init()
