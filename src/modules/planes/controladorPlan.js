const db = require('./modeloPlan');
const plan = 'plans';

async function planView() {
    try {
        return await db.planView(plan);
    } catch (error) {
        throw error;
    }
}

async function planCreate(body) {
    try {
        return await db.planCreate(body);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    planView,
    planCreate
}