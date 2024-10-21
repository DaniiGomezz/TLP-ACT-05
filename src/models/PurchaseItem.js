import { DataTypes } from 'sequelize';
import { sequelize } from '../db/db.js';

const PurchaseItem = sequelize.define('PurchaseItem', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    purchaseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Purchases', // Nombre de la tabla Purchase
            key: 'id'
        }
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Products', // Nombre de la tabla Product
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    priceAtPurchase: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    timestamps: false
});

export default PurchaseItem;
