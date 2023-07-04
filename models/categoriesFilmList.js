const { Sequelize, Model, DataTypes } = require('sequelize')
const DB = require('../config/connect')
class Categories extends Model { }
Categories.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    film_id: {
        type: DataTypes.INTEGER,
    }, 
    categories_film_id: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize: DB,
    timestamps: false,
    modelName: 'CategoryList',
    tableName: 'categories_film_web'
})

module.exports = Categories