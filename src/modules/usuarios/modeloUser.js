const pool = require('../../DB/Mysql');

// Procedimientos Almacenados - Usuarios \\

// Ver todos los usuarios
function usersView(table) {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM ${table}`, (error, result) => {
            if (error) return reject(error);
            resolve(result);
        });
    });
}

// Crear usuarios
const createUsers = async (body) => {
    const { userName, userCed, userPhone, userMail, cityName, userUrl, userPlan, userDirec, userPass } = body;
    return new Promise((resolve, reject) => {
        pool.query(`CALL create_user(?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [userCed, userName, userPhone, userDirec, userMail, userPlan, cityName, userUrl, userPass],
            (error, results) => {
                if (error) return reject(error);
                resolve({ message: "User created successfully" });
            });
    });
};

// Actualizar usuario
const updateUser = async (body) => {
    const { userCed, userName, userPhone, userDirec, userMail, cityName, userUrl, userPlan, userPass, status, resetToken, resetTokenExpiry } = body;
    return new Promise((resolve, reject) => {
        pool.query("CALL edit_user(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
            [userCed, userName, userPhone, userDirec, userMail, cityName, userUrl, userPlan, userPass, status, resetToken, resetTokenExpiry],
            (error, results) => {
                if (error) return reject(error);
                resolve({ message: "User updated successfully" });
            });
    });
};

// Eliminar usuario
const deleteUser = async (userCed, userPass) => {
    return new Promise((resolve, reject) => {
        pool.query('CALL delete_user(?, ?)', [userCed, userPass], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = {
    usersView,
    createUsers,
    updateUser,
    deleteUser
};
