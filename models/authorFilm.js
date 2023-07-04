const { Model, DataTypes, Sequelize } = require('sequelize')
const DB = require('../config/connect')
class AuthorFilm extends Model {
    
 }
 AuthorFilm.init({
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
    modelName: 'AuthorFilm',
    tableName: 'author_film',
    timestamps:false
})
module.exports = AuthorFilm