const { Sequelize, Model, DataTypes } = require('sequelize')
const DB = require('../config/connect')
class FavoriteAnime extends Model { }
FavoriteAnime.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    anime_id: {
        type: DataTypes.INTEGER,
    }, 
    account_id: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize: DB,
    timestamps: false,
    modelName: 'FavoriteAnime',
    tableName: 'favorites_anime'
})

module.exports = FavoriteAnime