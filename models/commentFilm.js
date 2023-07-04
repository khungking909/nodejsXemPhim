const { Model, DataTypes, Sequelize } = require('sequelize')
const DB = require('../config/connect')
class CommentFilm extends Model {
    
 }
CommentFilm.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    film_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    account_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    content:{
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: DB,
    modelName: 'CommentFilm',
    tableName: 'comment_film',
    timestamps:false
})
module.exports = CommentFilm