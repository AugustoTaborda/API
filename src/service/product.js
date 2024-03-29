const mysql = require("mysql2/promise");
const databaseconfig = require("../config/database.js");

async function getAllproduct() {
    const connection = await mysql.createConnection(databaseconfig);

    const [rows] = await connection.query("SELECT * FROM product");

    await connection.end();

    return rows;
}

async function createproduct (id, descricao, quantidadeEstoque, unidadeMedida, valorUnidade) {
    
    const connection = await mysql.createConnection(databaseconfig);

    const insertproduct = "INSERT INTO product(id, descricao, quantidadeEstoque, unidadeMedida, valorUnidade) VALUES (?, ?, ?, ?, ?)";

    await connection.query(insertproduct, [id, descricao, quantidadeEstoque, unidadeMedida, valorUnidade]);

    await connection.end();

}

async function updateProduct(id, descricao, quantidadeEstoque, unidadeMedida, valorUnidade) {

    const connection = await mysql.createConnection(databaseconfig);

    const updateProduct = 'UPDATE product SET descricao = ?, quantidadeEstoque = ?, unidadeMedida = ?, valorUnidade = ? WHERE id = ?';

    await connection.query(updateProduct, [descricao, quantidadeEstoque, unidadeMedida, valorUnidade, id])
}

async function deleteProduct(id) {
    const connection = await mysql.createConnection(databaseconfig);

    await connection.query('DELETE FROM product WHERE id = ?', [id]);

    await connection.end();
}

async function getProductById(id) {
    const connection = await mysql.createConnection(databaseconfig);

    const [product] = await connection.query("SELECT * FROM product WHERE id = ?", [id]);

    await connection.end();

    return product;
}

module.exports = {
    getAllproduct,
    createproduct,
    updateProduct,
    deleteProduct,
    getProductById,
};