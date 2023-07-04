const { Sequelize, Model, DataTypes } = require('sequelize')
const DB = require('../config/connect')
class Character extends Model { }
Character.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    film_id: {
        type: DataTypes.INTEGER,
    }, 
    name: {
        type: DataTypes.STRING,
    }, 
    image: {
        type: DataTypes.STRING,
    }
}, {
    sequelize: DB,
    timestamps: false,
    modelName: 'Character',
    tableName: 'character_movies'
})

module.exports = Character