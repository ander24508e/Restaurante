const express = require('express');
const router = express.Router();
const respuesta = require('../../DB/answer');
const controlador = require('./controladorReservationPlaces');

// GET productos
router.get('/', async function (req, res) {
    try {
        const reservationId = await controlador.ReservationPlacesView();
        respuesta.success(req, res, reservationId, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// POST productos
router.post('/', async function (req, res) {
    const reservacion_detailsData = req.body;
    try {
        await controlador.ReservationPlacesCreate(reservacion_detailsData);
        respuesta.success(req, res, { message: 'Reservation places created successfully' }, 201);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// PUT productos
router.put('/:resevationdeailsId', async function (req, res) {
    const reservationId = req.params.productId;
    const reservacion_placesData = req.body;
    try {
        await controlador.ReservationPlacesUpdate(reservationId, reservacion_placesData);
        respuesta.success(req, res, { message: 'Reservation places updated successfully' }, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// DELETE Reservaciones con Detalles
router.delete('/:reservationId', async function (req, res) {
    const reservationId = req.params.reservationId;
    try {
        await controlador.ReservationPlacesDelete(reservationId);
        respuesta.success(req, res, { message: 'Reservation detail deleted successfully' }, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

module.exports = router;