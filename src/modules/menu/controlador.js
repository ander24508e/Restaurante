const db = require('../../DB/Mysql');
const menus = 'menu';

async function getMenu() {
    try {
        const categorias = await db.menuView(menus);
        return categorias;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getMenu 
}
