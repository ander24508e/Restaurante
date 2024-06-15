const pool = require('../../DB/Mysql');

function planView(table) {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

const planCreate = async (body) => {
    const { planName, planPrice } = body;
    console.log(planName, planPrice);
    
    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO plans (plan_name, plan_price) VALUES (?, ?)`,
            [ planName, planPrice],
            (error, results) => {
                if (error) {
                    console.log('Error al insertar datos:', error);
                    return reject(error);
                }
                resolve({ message: "Plan created successfully" });
            }
        );
    });
};

module.exports = {
    planView,
    planCreate
}