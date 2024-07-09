const db = require('./modeloReservation');

async function ReservationView() {
    try {
        const productos = await db.ReservationView();
        return productos;
    } catch (error) {
        throw error;
    }
}

async function ReservationCreate(body) {
    try {
        const productos = await db.ReservationCreate(body);
        return productos;
    } catch (error) {
        throw error;
    }
}

async function ReservationUpdate(productId, body) {
    try {
        const productos = await db.ReservationUpdate(productId, body);
        return productos;
    } catch (error) {
        throw error;
    }
}

async function ReservationDelete(productId, body) {
    const { businessId, businessOwnerCed, password } = body;
    try {
        const productos = await db.ReservationDelete(productId, businessId, businessOwnerCed, password);
        return productos;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    ReservationView,
    ReservationCreate,
    ReservationUpdate,
    ReservationDelete
};
