const mysql = require('mysql');
const config = require('../config');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});

// Usuarios
function usersView(table) {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

const createUsers = async (body) => {
    
    const { userName, userAge, userCed, userPhone, userMail, cityName, userUrl, userPlan, userDirec, userPass } =
      body;
      console.log( userName, userAge, userCed, userPhone, userMail, cityName, userUrl, userPlan, userDirec);
    try {
      pool.query(`CALL create_user(${userCed}, "${userName}", "${userPhone}", "${userDirec},"${userMail}", "${userPlan}", ${cityName}, "${userUrl}", "${userPass}")`);
      res.json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Productos
function productsView(table) {
    return new Promise((resolve, reject) => {
        pool.query(`CALL get_all_products_with_details`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

// Negocios
function businessView(table) {
    return new Promise((resolve, reject) => {
        pool.query(`CALL get_all_businesses`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

// Negocios - Redes Sociales
function businessNetworkView(table) {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

// Categorias
function categoriesView(table) {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

// Menu de comidas
function menuView(table) {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

// Menu de productos
function menuProductsView(table) {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

// Ciudades
function cityView(table) {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

module.exports = {
    usersView, createUsers,
    productsView,
    businessView,
    businessNetworkView,
    categoriesView,
    menuView,
    menuProductsView,
    cityView
};
