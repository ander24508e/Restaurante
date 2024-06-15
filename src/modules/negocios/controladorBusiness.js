const db = require('./modeloBusiness');
const business = 'businesses';

async function businessView() {
    try {
        const negocios = await db.businessView(business);
        return negocios;
    } catch (error) {
        throw error;
    }
}

async function createBusiness(body) {
    try {
        return await db.createBusiness(body);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function updateBusiness(businessId, body) {
    try {
        return await db.updateBusiness(businessId, body);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteBusiness(businessId, businessOwnerCed, password) {
    try {
        return await db.deleteBusiness(businessId, businessOwnerCed, password);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    businessView,
    createBusiness,
    updateBusiness,
    deleteBusiness
};
