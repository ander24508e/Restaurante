const db = require('./modelMenu');
const menus = 'menu';

async function menuView() {
    try {
        const categorias = await db.menuView(menus);
        return categorias;
    } catch (error) {
        throw error;
    }
}

async function createMenu(body) {
    try {
        const categorias = await db.createMenu(body);
        return categorias;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    menuView,
    createMenu,
    // updateMenu,
    // deleteMenu
}
