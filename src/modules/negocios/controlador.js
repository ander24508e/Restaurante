const db = require('../../DB/Mysql');
const business = 'businesses';

async function getNegocios() {
    try {
        const negocios = await db.businessView(business);
        return negocios;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getNegocios
}
