const db = require('./modeloCity');
const ciudades = 'city';

async function cityView() {
    try {
        const ciudad = await db.cityView(ciudades);
        return ciudad;
    } catch (error) {
        throw error;
    }
}

async function cityCreate(body) {
    try {
        const ciudad = await db.cityCreate(body);
        return ciudad;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    cityView,
    cityCreate 
}
