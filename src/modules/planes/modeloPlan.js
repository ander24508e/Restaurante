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
    const { planName, planPrice, planMenus, planProducts, planBusiness, planReservations } = body;
    console.log(planName, planPrice, planMenus, planProducts, planBusiness, planReservations);

    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO plans (plan_name, plan_price, max_menus, max_products, max_businesses, max_reservations) VALUES (?, ?, ?, ?, ?, ?)`,
            [planName, planPrice, planMenus, planProducts, planBusiness, planReservations],
            (error, results) => {
                if (error) {
                    console.log('Error al crear plan:', error);
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