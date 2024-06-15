const pool = require('../../DB/Mysql');

function menuView(table) {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

const createMenu = async (body) => {
    const { businessId, menuName, menuDes, mainUrl, portraitUrl, Active, Featured } = body;
    console.log(businessId, menuName, menuDes, mainUrl, portraitUrl, Active, Featured);
    
    return new Promise((resolve, reject) => {
        pool.query(
            `CALL create_menu(?, ?, ?, ?, ?, ?, ?)`,
            [businessId, menuName, menuDes, mainUrl, portraitUrl, Active, Featured],
            (error, results) => {
                if (error) {
                    console.log('Error al crear menú:', error);
                    return reject(error);
                }
                resolve({ message: "Menu created successfully" });
            }
        );
    });
};

module.exports = {
    menuView,
    createMenu,
    // updateMenu,
    // deleteMenu
}
