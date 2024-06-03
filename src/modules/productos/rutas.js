const express = require('express');
const router = express.Router();
const respuesta = require('../../red/answer');
const controlador = require('./controlador');

// GET productos
router.get('/', async function (req, res) {
    try {
        const productos = await controlador.getProductos();
        respuesta.success(req, res, productos, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

module.exports = router;
