// Negocios - Redes Sociales
function businessNetworkView(table) {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}





module.exports = {
    businessNetworkView
}