const express = require('express');
const router = express.Router();
const respuesta = require('../../red/answer');
const controlador = require('./controladorCategories');

// GET categorias
router.get('/', async function (req, res) {
    try {
        const categorias = await controlador.categoriesView(); 
        respuesta.success(req, res, categorias, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// POST categorias
router.post('/', async function (req, res) {
    try {
        const categorias = await controlador.categoriesCreate(req.body); 
        respuesta.success(req, res, categorias, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});
module.exports = router;
