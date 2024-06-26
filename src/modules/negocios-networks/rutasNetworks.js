const express = require('express');
const router = express.Router();
const respuesta = require('../../DB/answer');
const controlador = require('./controladorNetworks');

// GET categorias
router.get('/', async function (req, res) {
    try {
        const negocios = await controlador.getNegociosNetworks(); 
        respuesta.success(req, res, negocios, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

module.exports = router;
