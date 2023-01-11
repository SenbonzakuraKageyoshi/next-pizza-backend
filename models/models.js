import { DataTypes } from "sequelize";
import sequelize from '../db.js';

const User = sequelize.define('User', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    userFirstName: {type: DataTypes.STRING, allowNull: false},
    userLastName: {type: DataTypes.STRING, allowNull: false},
    userMail: {type: DataTypes.STRING, allowNull: false},
    userTelephone: {type: DataTypes.STRING, allowNull: false},
    userPasswordHash: {type: DataTypes.STRING, allowNull: false},
});

const Product = sequelize.define('Product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    productName: {type: DataTypes.STRING, allowNull: false},
    productDescription: {type: DataTypes.STRING, allowNull: false},
    productCategory: {type: DataTypes.STRING, allowNull: false},
    productImage: {type: DataTypes.STRING, allowNull: false},
    productPrice: {type: DataTypes.INTEGER, allowNull: false, defaultValue: 0},
});

const SelectedProduct = sequelize.define('SelectedProduct', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
});

Product.belongsToMany(User, {through: SelectedProduct});
User.belongsToMany(Product, {through: SelectedProduct});

export {
    User, Product, SelectedProduct
}