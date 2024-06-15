const db = require('../../DB/Mysql');
const categories = 'categories';

async function getNegociosNetworks() {
    try {
        const categorias = await db.businessNetworkView(categories);
        return categorias;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getNegociosNetworks 
}