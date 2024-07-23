const db = require('./modeloReservation');

async function ReservationView(businessId) { 
    try {
        const reservations = await db.ReservationView(businessId);
        return reservations;
    } catch (error) {
        throw error;
    }
}

async function ReservationCreate(body) {
    try {
        const reservations = await db.ReservationCreate(body);
        return reservations;
    } catch (error) {
        throw error;
    }
}

async function ReservationUpdate(reservationId, body) {
    try {
        const reservations = await db.ReservationUpdate(reservationId, body);
        return reservations;
    } catch (error) {
        throw error;
    }
}

async function ReservationDelete(reservationId, businessId) {
    try {
        const reservations = await db.ReservationDelete(reservationId, businessId);
        return reservations;
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
