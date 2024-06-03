const express = require('express');
const router = express.Router();
const respuesta = require('../../red/answer');
const controlador = require('./controlador');

// GET negocios
router.get('/', async function (req, res) {
    try {
        const negocios = await controlador.getNegocios(); 
        respuesta.success(req, res, negocios, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

module.exports = router;