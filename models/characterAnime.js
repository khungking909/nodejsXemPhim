const { Sequelize, Model, DataTypes } = require('sequelize')
const DB = require('../config/connect')
class CharacterAnime extends Model { }
CharacterAnime.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    anime_id: {
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
    modelName: 'CharacterAnime',
    tableName: 'character_anime'
})

module.exports = CharacterAnime