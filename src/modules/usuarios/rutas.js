const express = require('express');
const router = express.Router();
const respuesta = require('../../red/answer');
const controlador = require('./controlador');

// GET users
router.get('/', async function (req, res) {
    try {
        const users = await controlador.getUsers();
        respuesta.success(req, res, users, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// POST users
router.post('/', async function (req, res, body) {
    const userData = req.body;
    try {
        await controlador.createUser(userData); // No es necesario devolver el ID en este caso
        respuesta.success(req, res, body, { message: 'User created successfully' }, 201);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// GET user by cedula
router.get('/:', async function (req, res) {
    const { cedula } = req.params;
    try {
        const user = await controlador.getUserByCedula(cedula);
        if (user) {
            respuesta.success(req, res, user, 200);
        } else {
            respuesta.error(req, res, 'User not found', 404);
        }
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

module.exports = router;