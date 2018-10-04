'use strict'

const site = require('./controllers/site')

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: site.home
    },
    {
        method: 'POST',
        path: '/create-pokemon',
        handler: site.createPokemon
    },
    {
        method: 'DELETE',
        path: '/delete-pokemon',
        handler: site.deletePokemon
    },
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                index: ['index.html']
            }
        }
    }

]
