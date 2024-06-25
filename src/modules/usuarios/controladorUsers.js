const db = require('./modeloUser');
const usu = 'users';

async function usersView() {
    try {
        return await db.usersView(usu);
    } catch (error) {
        throw error;
    }
}

async function createUsers(body) {
    try {
        return await db.createUsers(body);
    } catch (error) {
        throw error;
    }
}

async function updateUser(body) {
    try {
        return await db.updateUser(body);
    } catch (error) {
        throw error;
    }
}

async function deleteUser(cedula, password) {
    try {
        return await db.deleteUser(cedula, password);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    usersView,
    createUsers,
    updateUser,
    deleteUser
};