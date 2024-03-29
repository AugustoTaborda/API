const mysql = require("mysql2/promise");
const databaseconfig = require("../config/database.js");


async function getAllUser() {
    const connection = await mysql.createConnection(databaseconfig);

    const [rows] = await connection.query("SELECT * FROM user");

    await connection.end();

    return rows;
}

async function createUser(name, email, password) {
    const connection = await mysql.createConnection(databaseconfig);

    const insertUser = "INSERT INTO user(name, email, password) VALUES (?, ?, ?)";

    await connection.query(insertUser, [name, email, password]);

    await connection.end();
} 

async function updateUser(id, name, email, password) {
    const connection = await mysql.createConnection(databaseconfig);

    const updateUser = 'UPDATE user SET name = ?, email = ?, password = ? WHERE id = ?';

    await connection.query(updateUser, [name, email, password, id]);
}

async function deleteUser(id) {
    const connection = await mysql.createConnection(databaseconfig);

    await connection.query('DELETE FROM user WHERE id = ?', [id]);

    await connection.end();
}

async function getUserById(id) {
    const connection = await mysql.createConnection(databaseconfig);

    const [user] = await connection.query("SELECT * FROM user WHERE id = ?", [id]);

    await connection.end();

    return user;
}

module.exports = {
    getAllUser,
    createUser,
    updateUser,
    deleteUser,
    getUserById,
}