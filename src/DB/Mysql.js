// mysql.js
const mysql = require('mysql');
const config = require('../config');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});

module.exports = pool;