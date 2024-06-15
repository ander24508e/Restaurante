const express = require('express');
const router = express.Router();
const respuesta = require('../../red/answer');
const controlador = require('./controladorPlan');

// GET ciudades
router.get('/', async function (req, res) {
    try {
        const ciudad = await controlador.planView(); 
        respuesta.success(req, res, ciudad, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// POST ciudad
router.post('/', async function (req, res) {
    try {
        const ciudad = await controlador.planCreate(req.body); 
        respuesta.success(req, res, ciudad, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

module.exports = router;