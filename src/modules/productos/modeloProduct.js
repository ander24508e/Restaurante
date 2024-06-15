const pool = require('../../DB/Mysql');

// Ver productos
function productsView() {
    return new Promise((resolve, reject) => {
        pool.query(`CALL get_all_products_with_details()`, (error, result) => {
            if (error) return reject(error);
            resolve(result[0]); // Adjusted to return the first result set
        });
    });
}

// Crear productos
const productsCreate = async (body) => {
    const { businessId, productName, productDes, basePrice, productPrice, categoryId, availability, imageUrl, menuPotrait, featured } = body;

    return new Promise((resolve, reject) => {
        pool.query(`CALL create_product(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [businessId, productName, productDes, basePrice, productPrice, categoryId, availability, imageUrl, menuPotrait, featured],
            (error, results) => {
                if (error) return reject(error);
                resolve({ message: "Product created successfully" });
            });
    });
};

// Actualizar productos
const updateProduct = async (productId, body) => {
    const { businessId, productName, productDes, basePrice, productPrice, categoryId, availability, imageUrl, menuPotrait, featured } = body;

    return new Promise((resolve, reject) => {
        pool.query(`CALL edit_product(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [productId, businessId, productName, productDes, basePrice, productPrice, categoryId, availability, imageUrl, menuPotrait, featured],
            (error, results) => {
                if (error) return reject(error);
                resolve({ message: "Product updated successfully" });
            });
    });
};

// Eliminar productos
const deleteProduct = async (productId, businessId, businessOwnerCed, password) => {
    return new Promise((resolve, reject) => {
        pool.query(`CALL delete_product(?, ?, ?, ?)`, [productId, businessId, businessOwnerCed, password], (error, results) => {
            if (error) return reject(error);
            resolve({ message: "Product deleted successfully" });
        });
    });
};

module.exports = {
    productsView,
    productsCreate,
    updateProduct,
    deleteProduct
};
