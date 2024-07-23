const pool = require('../../DB/Mysql');

// Ver productos
function ReservationView(businessId) { // Aceptar el parámetro necesario
    return new Promise((resolve, reject) => {
        pool.query(`CALL get_all_reservations(?)`, [businessId], (error, result) => { // Pasar el parámetro
            if (error) return reject(error);
            resolve(result[0]); // Adjusted to return the first result set
        });
    });
}

// Crear productos
const ReservationCreate = async (body) => {
    const { cedula, clienteId, businessId, placeId, reservationDate, reservationValue, transactionType, transactionNumber, transactionDate } = body;

    return new Promise((resolve, reject) => {
        pool.query(
            `CALL create_reservation(?, ?, ?, ?, ?, ?, ?, ?, ?, @reservation_id, @message)`,
            [cedula, clienteId, businessId, placeId, reservationDate, reservationValue, transactionType, transactionNumber, transactionDate],
            (error, results) => {
                if (error) return reject(error);
                pool.query(
                    `SELECT @reservation_id AS reservation_id, @message AS message`,
                    (error, results) => {
                        if (error) return reject(error);
                        resolve({
                            reservation_id: results[0].reservation_id,
                            message: results[0].message
                        });
                    }
                );
            }
        );
    });
};

// Actualizar productos
const ReservationUpdate = async (reservationId, body) => {
    const { businessId, productName, productDes, basePrice, productPrice, categoryId, availability, imageUrl, menuPotrait, featured } = body;

    return new Promise((resolve, reject) => {
        pool.query(`CALL edit_product(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [reservationId, businessId, productName, productDes, basePrice, productPrice, categoryId, availability, imageUrl, menuPotrait, featured],
            (error, results) => {
                if (error) return reject(error);
                resolve({ message: "Reservation updated successfully" });
            });
    });
};

// Eliminar reservación
const ReservationDelete = async (reservationId, businessId) => {
    return new Promise((resolve, reject) => {
        pool.query('CALL delete_reservation(?, ?)', [reservationId, businessId], (error, results) => {
            if (error) return reject(error);
            resolve({ message: "Reservation deleted successfully" });
        });
    });
};

module.exports = {
    ReservationView,
    ReservationCreate,
    ReservationUpdate,
    ReservationDelete
};
