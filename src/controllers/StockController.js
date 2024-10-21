import stockServices from "../service/stockService.js";
import { CatchError } from "../utils/catchError.js";

class StockController {
    async updateStock(req, res) {
        try {
            const { productId } = req.params;
            const { quantity } = req.body;
            const updatedStock = await stockServices.updateStock(productId, quantity);
            res.status(200).json(updatedStock);
        } catch (error) {
            return CatchError(error, res);
        }
    }

    async getStock(req, res) {
        try {
            const { productId } = req.params;
            const stock = await stockServices.getStockByProductId(productId);
            res.status(200).json(stock);
        } catch (error) {
            return CatchError(error, res);
        }
    }
}

export default new StockController();
