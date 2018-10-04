'use strict'

function home(req, h) {
    return h.view('index', {
        title: 'Inicio'
    })
}

function createPokemon(req, h) {
    console.log(req.payload)
    return 'fine'
}

function deletePokemon(req, h) {
    console.log(req.payload)
    return 'delete'
}

module.exports = {
    home: home,
    createPokemon: createPokemon,
    deletePokemon: deletePokemon,
}
