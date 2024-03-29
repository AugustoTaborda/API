const productService = require('../service/product.js');

async function getAllproduct(req, res) {
    try{
        const rows = await productService.getAllproduct();

        res.status(200).json(rows);
    }catch(error){
        res.status(500).sand({
            message: "Error getting product",
            body: error.message,
        });
    }
}

async function createproduct(req, res) {
    try{

        const { id, descricao, quantidadeEstoque, unidadeMedida, valorUnidade } = req.body;

        await productService.createproduct(id, descricao, quantidadeEstoque, unidadeMedida, valorUnidade);

        res.status(201).json({ message: "Sucess" });

    } catch (error) {
        res.status(500).send({
            message: "Error adding product!",
            error: error.message,
        });  
    }
}

async function updateProduct (req, res) {
    try{
        const { id } = req.params;
        const { descricao, quantidadeEstoque, unidadeMedida, valorUnidade } = req.body;

        await productService.updateProduct(id, descricao, quantidadeEstoque, unidadeMedida, valorUnidade);

        } catch (error) {
            res.status(500).send({
                message: "Error updating product",
                body: error.message,

        });
    }
}

async function deleteProduct (req, res) {
    try{
        const { id } = req.params;
        await productService.deleteProduct(id);

        res.status(200).send({message: "Deleted product!" });

    } catch (error) {
            res.status(500).send({
                message: "Error deleting produto",
                body: error.message,

        });
    }
}

async function getProductById (req, res) {
    try{

        const { id } = req.params;
        const product = await productService.getProductById(id);

        res.status(200).json(product);


    } catch (error) {
        res.status(500).send({

            message: "Error getting produto by ID.",
            error: error.message,
        });

    }
    
}

module.exports = {
    getAllproduct,
    createproduct,
    updateProduct,
    deleteProduct,
    getProductById,

};