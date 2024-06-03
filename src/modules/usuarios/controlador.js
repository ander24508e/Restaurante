const db = require('../../DB/Mysql');
const usu = 'users';

async function getUsers() {
    try {
        return await db.usersView(usu);
    } catch (error) {
        throw error;
    }
}

async function createUser(body) {
    try {
        return await db.createUsers(body); // Asegúrate de que esta línea esté correcta
    } catch (error) {
        throw error;
    }
}

async function getUserByCedula(cedula) {
    try {
        return await db.usersCed(usu, cedula);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getUsers,
    createUser,
    getUserByCedula,
};
