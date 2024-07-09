const express = require('express');
const router = express.Router();
const respuesta = require('../../DB/answer');
const controlador = require('./controladorReservation');

// GET productos
router.get('/', async function (req, res) {
    try {
        const productos = await controlador.ReservationView();
        respuesta.success(req, res, productos, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// POST productos
router.post('/', async function (req, res) {
    const productData = req.body;
    try {
        await controlador.ReservationCreate(productData);
        respuesta.success(req, res, { message: 'Reservation created successfully' }, 201);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// PUT productos
router.put('/:productId', async function (req, res) {
    const productId = req.params.productId;
    const productData = req.body;
    try {
        await controlador.ReservationUpdate(productId, productData);
        respuesta.success(req, res, { message: 'Reservation updated successfully' }, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// DELETE producto
router.delete('/:productId', async function (req, res) {
    const productId = req.params.productId;
    const { businessId, businessOwnerCed, password } = req.body;
    try {
        await controlador.ReservationDelete(productId, { businessId, businessOwnerCed, password });
        respuesta.success(req, res, { message: 'Reservation deleted successfully' }, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

module.exports = router;
