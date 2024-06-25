const pool = require('../../DB/Mysql');

function businessView(table) {
    return new Promise((resolve, reject) => {
        pool.query(`CALL get_all_businesses`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

const createBusiness = async (body) => {
    const { businessOwnerCed, businessName, businessPhone, businessMail, businessCity, businessmainDesc, businessDesc, businessSlogan, businessUrl, businessPic } = body;

    return new Promise((resolve, reject) => {
        pool.query(`CALL create_business(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [businessOwnerCed, businessName, businessPhone, businessMail, businessCity, businessmainDesc, businessDesc, businessSlogan, businessUrl, businessPic],
            (error, results) => {
                if (error) return reject(error);
                resolve({ message: "Business created successfully" });
            });
    });
};

const updateBusiness = async (businessId, body) => {
    const { businessOwnerCed, businessName, businessPhone, businessMail, businessCity, businessmainDesc, businessDesc, businessSlogan, businessUrl, businessPic } = body;

    return new Promise((resolve, reject) => {
        pool.query(`CALL edit_business(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [businessId, businessOwnerCed, businessName, businessPhone, businessMail, businessCity, businessmainDesc, businessDesc, businessSlogan, businessUrl, businessPic],
            (error, results) => {
                if (error) return reject(error);
                resolve({ message: "Business updated successfully" });
            });
    });
};

const deleteBusiness = async (businessId, businessOwnerCed, password) => {
    return new Promise((resolve, reject) => {
        pool.query(`CALL delete_business(?, ?, ?)`, [businessId, businessOwnerCed, password],
            (error, results) => {
                if (error) return reject(error);
                resolve({ message: "Business deleted successfully" });
            });
    });
};

module.exports = {
    businessView,
    createBusiness,
    updateBusiness,
    deleteBusiness
};