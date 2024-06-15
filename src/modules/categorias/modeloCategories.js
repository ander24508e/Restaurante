// Categorias
const pool = require('../../DB/Mysql');

function categoriesView(table) {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

const categoriesCreate = async (body) => {
    const { categoryName, categoryDescri } = body;
    console.log(categoryName, categoryDescri);
    
    return new Promise((resolve, reject) => {
        pool.query(
            `INSERT INTO categories (category_name, category_desc) VALUES (?, ?)`,
            [ categoryName, categoryDescri],
            (error, results) => {
                if (error) {
                    console.log('Error al insertar datos:', error);
                    return reject(error);
                }
                resolve({ message: "Category created successfully" });
            }
        );
    });
};

module.exports = {
    categoriesView,
    categoriesCreate
}