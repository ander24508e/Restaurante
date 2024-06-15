// Menu de productos
function menuProductsView(table) {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

function menuProductsDelete(id) {
    return new Promise((resolve, reject) => {
        pool.query('CALL delete_product(?, ?)', [id], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}



module.exports = {
    menuProductsView,
    //menuProductsCreate,
    //menuProductsUpdate,
    menuProductsDelete
}