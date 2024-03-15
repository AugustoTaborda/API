const mysql = require("mysql2/promise");
const databaseconfig = require("../config/database.js");

async function createproducttable() {
    try{
        const connection = await mysql.createConnection(databaseconfig);

        await connection.query(`USE ${databaseconfig.database}`);

        await connection.query(`CREATE TABLE IF NOT EXISTS product (
            id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
            descricao VARCHAR(255) NOT NULL,
            quantidadeEstoque VARCHAR(255) NOT NULL,
            unidadeMedida VARCHAR(255) NOT NULL,
            valorUnidade VARCHAR(255) NOT NULL
        )`);

        await connection.end();

        console.log("Table product created!");
    }catch(error) {
        console.log(`Error creating table product: ${error}`);
    }
}

createproducttable();