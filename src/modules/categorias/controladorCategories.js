const db = require('./modeloCategories');
const category = 'categories';

async function categoriesView() {
    try {
        const categorias = await db.categoriesView(category);
        return categorias;
    } catch (error) {
        throw error;
    }
}

async function categoriesCreate(body) {
    try {
        const categorias = await db.categoriesCreate(body);
        return categorias;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    categoriesView,
    categoriesCreate 
}
