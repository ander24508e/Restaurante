const express = require('express');
const router = express.Router();
const respuesta = require('../../red/answer');
const controlador = require('./controladorPlan');

// GET Plan
router.get('/', async function (req, res) {
    try {
        const plan = await controlador.planView(); 
        respuesta.success(req, res, plan, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// POST Plan
router.post('/', async function (req, res) {
    try {
        const plan = await controlador.planCreate(req.body); 
        respuesta.success(req, res, plan, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

module.exports = router;