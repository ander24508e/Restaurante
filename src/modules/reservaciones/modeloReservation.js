const pool = require('../../DB/Mysql');

// Ver productos
function ReservationView() {
    return new Promise((resolve, reject) => {
        pool.query(`CALL get_all_reservations()`, (error, result) => {
            if (error) return reject(error);
            resolve(result[0]); // Adjusted to return the first result set
        });
    });
}

// Crear productos
const ReservationCreate = async (body) => {
    const { cedula, clienteId, businessId, placeId, reservationDate, reservationValue, transactionType, transactionNumber, transactionDate, verification } = body;

    return new Promise((resolve, reject) => {
        pool.query(`CALL create_reservation(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [ cedula, clienteId, businessId, placeId, reservationDate, reservationValue, transactionType, transactionNumber, transactionDate, verification ],
            (error, results) => {
                if (error) return reject(error);
                resolve({ message: "Reservation  created successfully" });
            });
    });
};

// Actualizar productos
const ReservationUpdate = async (productId, body) => {
    const { businessId, productName, productDes, basePrice, productPrice, categoryId, availability, imageUrl, menuPotrait, featured } = body;

    return new Promise((resolve, reject) => {
        pool.query(`CALL edit_product(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [productId, businessId, productName, productDes, basePrice, productPrice, categoryId, availability, imageUrl, menuPotrait, featured],
            (error, results) => {
                if (error) return reject(error);
                resolve({ message: "Reservation updated successfully" });
            });
    });
};

// Eliminar productos
const ReservationDelete = async (productId, businessId, businessOwnerCed, password) => {
    return new Promise((resolve, reject) => {
        pool.query(`CALL delete_product(?, ?, ?, ?)`, [productId, businessId, businessOwnerCed, password], (error, results) => {
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
