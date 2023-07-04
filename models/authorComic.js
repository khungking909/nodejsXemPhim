const { Model, DataTypes, Sequelize } = require('sequelize')
const DB = require('../config/connect')
class AuthorComic extends Model {
    
 }
AuthorComic.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        get(){
            return this.getDataValue('id')
        }
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
    modelName: 'AuthorComic',
    tableName: 'author_comic',
    timestamps:false
})
module.exports = AuthorComic