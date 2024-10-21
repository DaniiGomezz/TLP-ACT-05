import express from "express";
import cors from 'cors';
import morgan from "morgan";
import { environments } from '../config/environments.js';
import { connectDB } from "../db/db.js";

// Importar las rutas
import authRoutes from '../routes/authRoutes.js';
import userRoutes from '../routes/userRoutes.js';
import productRoutes from '../routes/productRoutes.js';
import saleRoutes from '../routes/saleRoutes.js';
import cartRoutes from '../routes/cartRoutes.js';

class Server {

    constructor() {
        this.app = express();
        this.port = environments.PORT;

        this.dbConnect();

        this.middlewares();
        this.routes();
    }

    async dbConnect() {
        await connectDB();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes() {
        // Integrar las rutas
        this.app.use('/api/auth', authRoutes);
        this.app.use('/api/users', userRoutes);
        this.app.use('/api/products', productRoutes);
        this.app.use('/api/sales', saleRoutes);
        this.app.use('/api/cart', cartRoutes);
    }

    listen() {
        this.app.listen(this.port, () => console.log(`Server on http://localhost:${this.port}`));
    }

}

export default Server;
