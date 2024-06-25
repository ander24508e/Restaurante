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
app.use('/users', usuarios);

// Rutas - Productos
app.use('/products', productos);

// Rutas - Plans
app.use('/plan', plans);

// Rutas - Negocios
app.use('/businesses', negocios);

//Rutas - Negocios Redes Sociales
app.use('/businessesNetworks', negociosNetworks);

// Rutas - Categorias
app.use('/category', categorias);

//Rutas - Menu 
app.use('/menu', menu)

//Rutas - Menu Productos
app.use('/menuproducts', menuProducts)

//Rutas Ciudades
app.use('/city', ciudad);

module.exports = app;