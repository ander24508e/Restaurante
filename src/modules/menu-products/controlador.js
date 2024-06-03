const db = require('../../DB/Mysql');
const menuProd = 'menu_products';

async function getMenuProducts() {
    try {
        const categorias = await db.menuProductsView(menuProd);
        return categorias;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getMenuProducts 
}