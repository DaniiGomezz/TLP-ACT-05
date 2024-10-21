import saleServices from "../services/saleServices.js";
import { CatchError } from "../utils/catchError.js";

class SaleController {
    async createSale(req, res) {
        try {
            const userId = req.userId;
            const { items } = req.body;
            const newSale = await saleServices.createSale(userId, items);
            res.status(201).json(newSale);
        } catch (error) {
            return CatchError(error, res);
        }
    }

    async getUserSales(req, res) {
        try {
            const userId = req.userId;
            const sales = await saleServices.getUserSales(userId);
            res.status(200).json(sales);
        } catch (error) {
            return CatchError(error, res);
        }
    }
}

export default new SaleController();
