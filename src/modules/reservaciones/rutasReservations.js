const express = require('express');
const router = express.Router();
const respuesta = require('../../DB/answer');
const controlador = require('./controladorReservation');

// GET reservaciones
router.get('/:businessId', async function (req, res) {
    const businessId = req.params.businessId;
    if (!businessId) {
        return respuesta.error(req, res, { message: 'businessId is required' }, 400);
    }
    try {
        const reservations = await controlador.ReservationView(businessId);
        respuesta.success(req, res, reservations, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// POST reservaciones
router.post('/', async function (req, res) {
    const reservationData = req.body;
    try {
        const result = await controlador.ReservationCreate(reservationData);
        respuesta.success(req, res, result, 201);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// PUT reservaciones
router.put('/:reservationId', async function (req, res) {
    const reservationId = req.params.reservationId;
    const reservationDataData = req.body;
    try {
        await controlador.ReservationUpdate(reservationId, reservationDataData);
        respuesta.success(req, res, { message: 'Reservation updated successfully' }, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// DELETE reservaciones
router.delete('/:reservationId', async function (req, res) {
    const reservationId = req.params.reservationId;
    const { businessId } = req.body;
    try {
        await controlador.ReservationDelete(reservationId, businessId);
        respuesta.success(req, res, { message: 'Reservation deleted successfully' }, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});


module.exports = router;
