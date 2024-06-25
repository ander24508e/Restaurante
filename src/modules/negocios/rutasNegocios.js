const express = require('express');
const router = express.Router();
const respuesta = require('../../red/answer');
const controlador = require('./controladorBusiness');

// GET negocios
router.get('/', async function (req, res) {
    try {
        const negocios = await controlador.businessView(); 
        respuesta.success(req, res, negocios, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// POST negocios
router.post('/', async function (req, res) {
    const businessesData = req.body;
    try {
        await controlador.createBusiness(businessesData);
        respuesta.success(req, res, { message: 'Business created successfully' }, 201);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// PUT (Actualizar) negocios
router.put('/:businessId', async function (req, res) {
    const { businessId } = req.params;
    const businessData = req.body;
    try {
        await controlador.updateBusiness(businessId, businessData);
        respuesta.success(req, res, { message: 'Business updated successfully' }, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// DELETE negocios
router.delete('/:businessId', async function (req, res) {
    const { businessId } = req.params;
    const { businessOwnerCed, password } = req.body;
    try {
        await controlador.deleteBusiness(businessId, businessOwnerCed, password);
        respuesta.success(req, res, { message: 'Business deleted successfully' }, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

module.exports = router;