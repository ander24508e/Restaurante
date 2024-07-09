const db = require('./modeloReservationDetails');

async function ReservationDetailsView(reservation_id, business_id) {
    try {
        const reservationDetails = await db.ReservationDetailsView(reservation_id, business_id);
        return reservationDetails;
    } catch (error) {
        throw error;
    }
}


async function ReservationDetailsCreate(body) {
    try {
        const productos = await db.ReservationDetailsCreate(body);
        return productos;
    } catch (error) {
        throw error;
    }
}

async function ReservationDetailsUpdate(productId, body) {
    try {
        const productos = await db.ReservationDetailsUpdate(productId, body);
        return productos;
    } catch (error) {
        throw error;
    }
}

async function ReservationDetailsDelete(reservationId) {
    try {
        const result = await db.ReservationDetailsDelete(reservationId);
        return result;
    } catch (error) {
        throw error;
    }
}


module.exports = {
     ReservationDetailsView,
     ReservationDetailsCreate,
     ReservationDetailsUpdate,
     ReservationDetailsDelete
};
