import User from "./users.js";
import Product from "./products.js";
import Cart from "./cart.js";
import CartItem from "./cartItem.js";
import Purchase from "./purchase.js";
import PurchaseItem from "./purchaseItem.js";
import Sale from "./sale.js";
import SaleItem from "./saleItem.js";



const defineRelations = async () => {
    // Relación uno a muchos entre User y Purchase (Un usuario puede realizar muchas compras)
    User.hasMany(Purchase, {
        foreignKey: 'userId',
        as: 'purchases'
    });
    Purchase.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user'
    });

    // Relación uno a muchos entre User y Sale (Un usuario puede realizar muchas ventas)
    User.hasMany(Sale, {
        foreignKey: 'userId',
        as: 'sales'
    });
    Sale.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user'
    });

    // Relación uno a uno entre User y Cart (Un usuario puede tener un carrito)
    User.hasOne(Cart, {
        foreignKey: 'userId',
        as: 'cart'
    });
    Cart.belongsTo(User, {
        foreignKey: 'userId',
        as: 'user'
    });

    // Relación uno a muchos entre Cart y CartItem (Un carrito puede tener muchos items)
    Cart.hasMany(CartItem, {
        foreignKey: 'cartId',
        as: 'items'
    });
    CartItem.belongsTo(Cart, {
        foreignKey: 'cartId',
        as: 'cart'
    });

    // Relación uno a muchos entre Product y CartItem (Un producto puede aparecer en muchos items del carrito)
    Product.hasMany(CartItem, {
        foreignKey: 'productId',
        as: 'cartItems'
    });
    CartItem.belongsTo(Product, {
        foreignKey: 'productId',
        as: 'product'
    });

    // Relación muchos a muchos entre Purchase y Product (Una compra puede tener muchos productos y un producto puede aparecer en muchas compras)
    Purchase.belongsToMany(Product, {
        through: PurchaseItem,
        foreignKey: 'purchaseId',
        as: 'products'
    });
    Product.belongsToMany(Purchase, {
        through: PurchaseItem,
        foreignKey: 'productId',
        as: 'purchases'
    });

    // Relación muchos a muchos entre Sale y Product (Una venta puede tener muchos productos y un producto puede aparecer en muchas ventas)
    Sale.belongsToMany(Product, {
        through: SaleItem,
        foreignKey: 'saleId',
        as: 'products'
    });
    Product.belongsToMany(Sale, {
        through: SaleItem,
        foreignKey: 'productId',
        as: 'sales'
    });

    // Relación uno a muchos entre Purchase y PurchaseItem (Una compra puede tener muchos items)
    Purchase.hasMany(PurchaseItem, {
        foreignKey: 'purchaseId',
        as: 'items'
    });
    PurchaseItem.belongsTo(Purchase, {
        foreignKey: 'purchaseId',
        as: 'purchase'
    });

    // Relación uno a muchos entre Sale y SaleItem (Una venta puede tener muchos items)
    Sale.hasMany(SaleItem, {
        foreignKey: 'saleId',
        as: 'items'
    });
    SaleItem.belongsTo(Sale, {
        foreignKey: 'saleId',
        as: 'sale'
    });
};

export default defineRelations;
