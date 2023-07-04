const { Sequelize, Model, DataTypes } = require('sequelize')
const DB = require('../config/connect')
class Favorite extends Model { }
Favorite.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    film_id: {
        type: DataTypes.INTEGER,
    }, 
    account_id: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize: DB,
    timestamps: false,
    modelName: 'Favorite',
    tableName: 'favorites_movies'
})

module.exports = Favorite