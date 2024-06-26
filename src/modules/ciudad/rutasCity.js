const express = require('express');
const router = express.Router();
const respuesta = require('../../DB/answer');
const controlador = require('./controladorCity');

// GET ciudades
router.get('/', async function (req, res) {
    try {
        const ciudad = await controlador.cityView(); 
        respuesta.success(req, res, ciudad, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// POST ciudad
router.post('/', async function (req, res) {
    try {
        const ciudad = await controlador.cityCreate(req.body); 
        respuesta.success(req, res, ciudad, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

module.exports = router;
