const express = require('express');
const respuesta = require('../../DB/answer');
const controlador = require('./controladorUsers');
const router = express.Router();

// GET users
router.get('/', async function (req, res) {
    try {
        const users = await controlador.usersView();
        respuesta.success(req, res, users, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// POST users
router.post('/', async function (req, res) {
    const userData = req.body;
    try {
        await controlador.createUsers(userData);
        respuesta.success(req, res, { message: 'User created successfully' }, 201);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// PUT user
router.put('/:cedula', async function (req, res) {
    const { userName, userCed, userPhone, userMail, cityName, userUrl, userPlan, userDirec, userPass } = req.body;
    try {
        await controlador.updateUser( userName, userCed, userPhone, userMail, cityName, userUrl, userPlan, userDirec, userPass );
        respuesta.success(req, res, { message: 'User updated successfully' }, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// DELETE user
router.delete('/:cedula', async function (req, res) {
    const { cedula } = req.params;
    const { password } = req.body;
    try {
        await controlador.deleteUser(cedula, password);
        respuesta.success(req, res, { message: 'Usuario deleted successfully' }, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

module.exports = router;