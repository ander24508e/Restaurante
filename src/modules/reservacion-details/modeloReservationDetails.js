const pool = require('../../DB/Mysql');

// Ver Reservacion con Detalles
function ReservationDetailsView(p_reservation_id, p_business_id) {
    return new Promise((resolve, reject) => {
        pool.query(`CALL get_reservation_details(?, ?)`, [p_reservation_id, p_business_id], (error, result) => {
            if (error) return reject(error);
            resolve(result[0]); // Ajustado para devolver el primer conjunto de resultados
        });
    });
}

// Crear Reservacion con Detalles
const ReservationDetailsCreate = async (body) => {
    const { resevation_id, product_id } = body;
    
    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO reservation_details (resevation_id, product_id) VALUES (?, ?)`,
            [resevation_id, product_id],
            (error, results) => {
                if (error) {
                    console.log('Error al insertar datos:', error);
                    return reject(error);
                }
                resolve({ message: "Reservation with details created successfully" });
            }
        );
    });
};


// Eliminar Reservacion con Detalles

function ReservationDetailsDelete(reservationId) {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM reservation_details WHERE detail_id = ?', [reservationId], (error, result) => {
            if (error) return reject(error);
            resolve({ message: "Reservation detail deleted successfully" });
        });
    });
}


module.exports ={
    ReservationDetailsView,
    ReservationDetailsCreate,
    ReservationDetailsDelete
}