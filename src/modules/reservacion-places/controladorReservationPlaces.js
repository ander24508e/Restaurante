const db = require('./modeloReservationPlaces');

async function ReservationPlacesView(reservation_id, business_id) {
    try {
        const reservationDetails = await db.ReservationPlacesView(reservation_id, business_id);
        return reservationDetails;
    } catch (error) {
        throw error;
    }
}


async function ReservationPlacesCreate(body) {
    try {
        const productos = await db.ReservationPlacesCreate(body);
        return productos;
    } catch (error) {
        throw error;
    }
}

async function ReservationPlacesUpdate(productId, body) {
    try {
        const productos = await db.ReservationPlacesUpdate(productId, body);
        return productos;
    } catch (error) {
        throw error;
    }
}

async function ReservationPlacesDelete(reservationId) {
    try {
        const result = await db.ReservationPlacesDelete(reservationId);
        return result;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    ReservationPlacesView,
    ReservationPlacesCreate,
     ReservationPlacesUpdate,
     ReservationPlacesDelete
};
