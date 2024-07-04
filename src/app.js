const express = require('express');
const morgan = require('morgan');

const config = require('./config');
const usuarios = require('./modules/usuarios/rutasUsuarios');
const productos = require('./modules/productos/rutasProductos');
const negocios = require('./modules/negocios/rutasNegocios');
const negociosNetworks = require('./modules/negocios-networks/rutasNetworks');
const categorias = require('./modules/categorias/rutasCategory');
const menu = require('./modules/menu/rutasMenu');
const menuProducts = require('./modules/menu-products/rutasMenuProducts');
const ciudad = require('./modules/ciudad/rutasCity');
const plans = require('./modules/planes/rutasPlan')
const app = express();

// Middleware - Morgan ayuda a ver las solicitudes que realizamos. 
app.use(morgan('dev'));
app.use(express.json()); 

// Configuración - Puesto asignado
app.set('port', config.app.port);

// Rutas - Usuarios
app.use('/restaurant/users', usuarios);

// Rutas - Productos
app.use('/restaurant/products', productos);

// Rutas - Plans
app.use('/restaurant/plan', plans);

// Rutas - Negocios
app.use('/restaurant/businesses', negocios);

//Rutas - Negocios Redes Sociales
app.use('/restaurant/businessesNetworks', negociosNetworks);

// Rutas - Categorias
app.use('/restaurant/category', categorias);

//Rutas - Menu 
app.use('/restaurant/menu', menu)

//Rutas - Menu Productos
app.use('/restaurant/menuproducts', menuProducts)

//Rutas Ciudades
app.use('/restaurant/city', ciudad);

module.exports = app;