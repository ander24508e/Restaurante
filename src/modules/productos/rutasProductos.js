const express = require('express');
const router = express.Router();
const respuesta = require('../../DB/answer');
const controlador = require('./controladorProducts');

// GET productos
router.get('/', async function (req, res) {
    try {
        const productos = await controlador.productsView();
        respuesta.success(req, res, productos, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// POST productos
router.post('/', async function (req, res) {
    const productData = req.body;
    try {
        await controlador.productsCreate(productData);
        respuesta.success(req, res, { message: 'Product created successfully' }, 201);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// PUT productos
router.put('/:productId', async function (req, res) {
    const productId = req.params.productId;
    const productData = req.body;
    try {
        await controlador.updateProductos(productId, productData);
        respuesta.success(req, res, { message: 'Product updated successfully' }, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

// DELETE producto
router.delete('/:productId', async function (req, res) {
    const productId = req.params.productId;
    const { businessId, businessOwnerCed, password } = req.body;
    try {
        await controlador.deleteProductos(productId, { businessId, businessOwnerCed, password });
        respuesta.success(req, res, { message: 'Product deleted successfully' }, 200);
    } catch (err) {
        respuesta.error(req, res, err, 500);
    }
});

module.exports = router;
