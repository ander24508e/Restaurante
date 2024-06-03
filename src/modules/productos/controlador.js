const db = require('../../DB/Mysql');
const product = 'products';

async function getProductos() {
    try {
        const productos = await db.productsView(product);
        return productos;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getProductos
}