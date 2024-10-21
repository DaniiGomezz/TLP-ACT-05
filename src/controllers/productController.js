import productServices from "../services/productServices.js";
import { CatchError } from "../utils/CatchError.js";

class ProductController {
    async getAllProducts(req, res) {
        try {
            const products = await productServices.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            return CatchError(error, res);
        }
    }

    async getProductById(req, res) {
        try {
            const { productId } = req.params;
            const product = await productServices.getProductById(productId);
            res.status(200).json(product);
        } catch (error) {
            return CatchError(error, res);
        }
    }

    async createProduct(req, res) {
        try {
            const productData = req.body;
            const newProduct = await productServices.createProduct(productData);
            res.status(201).json(newProduct);
        } catch (error) {
            return CatchError(error, res);
        }
    }

    async updateProduct(req, res) {
        try {
            const { productId } = req.params;
            const productData = req.body;
            const updatedProduct = await productServices.updateProduct(productId, productData);
            res.status(200).json(updatedProduct);
        } catch (error) {
            return CatchError(error, res);
        }
    }

    async deleteProduct(req, res) {
        try {
            const { productId } = req.params;
            await productServices.deleteProduct(productId);
            res.status(200).json({ message: "Product deleted successfully" });
        } catch (error) {
            return CatchError(error, res);
        }
    }
}

export default new ProductController();
