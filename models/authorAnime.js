const { Model, DataTypes, Sequelize } = require('sequelize')
const DB = require('../config/connect')
class AuthorAnime extends Model {
    
 }
 AuthorAnime.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: DB,
    modelName: 'AuthorAnime',
    tableName: 'author_anime',
    timestamps:false
})
module.exports = AuthorAnime