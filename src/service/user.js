const mysql = require("mysql2/promise");
const databaseconfig = require("../config/database.js");

async function getAllUser() {
    const connection = await mysql.createConnection(databaseconfig);

    const [rows] = await connection.query("SELECT * FROM user");

    await connection.end();

    return rows;
}

module.exports = {
    getAllUser,
}