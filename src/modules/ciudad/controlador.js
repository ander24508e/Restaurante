const db = require('../../DB/Mysql');
const ciudades = 'city';

async function getCiudad() {
    try {
        const ciudad = await db.cityView(ciudades);
        return ciudad;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getCiudad 
}
