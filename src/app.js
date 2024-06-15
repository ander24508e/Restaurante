const express = require('express');
const morgan = require('morgan');

const config = require('./config');
const usuarios = require('./modules/usuarios/rutas');
const productos = require('./modules/productos/rutas');
const negocios = require('./modules/negocios/rutas');
const negociosNetworks = require('./modules/negocios-networks/rutas');
const categorias = require('./modules/categorias/rutas');
const menu = require('./modules/menu/rutas');
const menuProducts = require('./modules/menu-products/rutas');
const ciudad = require('./modules/ciudad/rutas');
const plans = require('./modules/planes/rutas')
const app = express();

// Middleware - Morgan ayuda a ver las solicitudes que realizamos. 
app.use(morgan('dev'));
app.use(express.json()); 

// Configuración - Puesto asignado
app.set('port', config.app.port);

// Rutas - Usuarios
app.use('/api/users', usuarios);

// Rutas - Productos
app.use('/api/products', productos);

// Rutas - Plans
app.use('/api/plan', plans);

// Rutas - Negocios
app.use('/api/businesses', negocios);

//Rutas - Negocios Redes Sociales
app.use('/api/businessesNetworks', negociosNetworks);

// Rutas - Categorias
app.use('/api/category', categorias);

//Rutas - Menu 
app.use('/api/menu', menu)

//Rutas - Menu Productos
app.use('/api/menuproducts', menuProducts)

//Rutas Ciudades
app.use('/api/city', ciudad);

module.exports = app;