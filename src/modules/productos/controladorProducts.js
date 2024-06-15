const db = require('./modeloProduct');

async function productsView() {
    try {
        const productos = await db.productsView();
        return productos;
    } catch (error) {
        throw error;
    }
}

async function productsCreate(body) {
    try {
        const productos = await db.productsCreate(body);
        return productos;
    } catch (error) {
        throw error;
    }
}

async function updateProductos(productId, body) {
    try {
        const productos = await db.updateProduct(productId, body);
        return productos;
    } catch (error) {
        throw error;
    }
}

async function deleteProductos(productId, body) {
    const { businessId, businessOwnerCed, password } = body;
    try {
        const productos = await db.deleteProduct(productId, businessId, businessOwnerCed, password);
        return productos;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    productsView,
    productsCreate,
    updateProductos,
    deleteProductos
};
