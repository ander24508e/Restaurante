const express = require('express');
const router = express.Router();
const respuesta = require('../../red/answer');
const controlador = require('./controladorMenu');

// GET MENU
router.get('/', async function (req, res) {
    try {
        const negocios = await controlador.menuView(); 
        respuesta.success(req, res, negocios, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// POST MENU
router.post('/', async function (req, res) {
    try {
        const menuData = req.body;
        const negocios = await controlador.createMenu(menuData); 
        respuesta.success(req, res, negocios, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

module.exports = router;