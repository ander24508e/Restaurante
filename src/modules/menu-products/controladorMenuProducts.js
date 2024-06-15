const db = require('./modeloMenuProducts');
const menuProd = 'menu_products';

async function menuProductsView() {
    try {
        const categorias = await db.menuProductsView(menuProd);
        return categorias;
    } catch (error) {
        throw error;
    }
}

async function menuProductsCreate() {
    try {
        const categorias = await db.menuProductsCreate(menuProd);
        return categorias;
    } catch (error) {
        throw error;
    }
}

async function menuProductsUpdate() {
    try {
        const categorias = await db.menuProductsUpdate(menuProd);
        return categorias;
    } catch (error) {
        throw error;
    }
}

async function menuProductsDelete() {
    try {
        const categorias = await db.menuProductsDelete(menuProd);
        return categorias;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    menuProductsView,
    menuProductsCreate,
    menuProductsUpdate,
    menuProductsDelete
}