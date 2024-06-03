const db = require('../../DB/Mysql');
const categories = 'categories';

async function getCategorias() {
    try {
        const categorias = await db.categoriesView(categories);
        return categorias;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getCategorias 
}
