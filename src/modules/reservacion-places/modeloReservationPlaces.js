const pool = require('../../DB/Mysql');

// Ver Reservacion Lugares
function ReservationPlacesView(p_business_id) {
    return new Promise((resolve, reject) => {
        pool.query(`CALL get_all_reservable_places(?)`, [p_business_id], (error, result) => {
            if (error) return reject(error);
            resolve(result[0]); // Ajustado para devolver el primer conjunto de resultados
        });
    });
}

// Crear Reservacion Lugares
const ReservationPlacesCreate = async (body) => {
    const { business_id, name, description, configuration, images, gallery, seat_capacity, initial_price, current_price } = body;
    return new Promise((resolve, reject) => {
        pool.query(`CALL create_reservable_place(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [ business_id, name, description, configuration, images, gallery, seat_capacity, initial_price, current_price ],
            (error, results) => {
                if (error) return reject(error);
                resolve({ message: "Reservation place created successfully" });
            });
    });
};

// business_id, name, description, configuration, images, gallery, seat_capacity, initial_price, current_price

// Editar Reservacion Lugares 
function ReservationPlacesUpdate(data) {
    return new Promise((resolve, reject) => {
        const { place_id, name, description, configuration, images, gallery, seat_capacity, initial_price, current_price } = data;
        pool.query('CALL edit_reservable_place(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [place_id, name, description, configuration, images, gallery, seat_capacity, initial_price, current_price], 
            (error, result) => {
                if (error) {
                    console.log('Error al actualizar lugar reservable:', error);
                    return reject(error);
                }
                resolve({ message: "Reservation place updated successfully" });
            }
        );
    });
}

// Eliminar Reservacion Lugares
function ReservationPlacesDelete(placeId) {
    return new Promise((resolve, reject) => {
        pool.query('CALL delete_reservable_place(?)', [placeId], (error, result) => {
            if (error) {
                console.log('Error al eliminar lugar reservable:', error);
                return reject(error);
            }
            resolve({ message: "Reservation place deleted successfully" });
        });
    });
}

module.exports ={
    ReservationPlacesView,
    ReservationPlacesCreate,
    ReservationPlacesUpdate,
    ReservationPlacesDelete
}