// Ciudades
const pool = require('../../DB/Mysql');

function cityView(table) {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

const cityCreate = async (body) => {
    const { cityName, cityDescri } = body;
    console.log(cityName, cityDescri);
    
    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO city (city_name, city_desc) VALUES (?, ?)`,
            [cityName, cityDescri],
            (error, results) => {
                if (error) {
                    console.log('Error al insertar datos:', error);
                    return reject(error);
                }
                resolve({ message: "City created successfully" });
            }
        );
    });
};

module.exports = {
    cityView,
    cityCreate
}
