const { Model, DataTypes, Sequelize } = require('sequelize')
const DB = require('../config/connect')
class FilmItem extends Model {
 }
FilmItem.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    },
    film_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    video:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    episode:
    {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    episode_description:
    {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    sequelize: DB,
    modelName: 'FilmItem',
    tableName: 'film_item',
    timestamps:false
})
module.exports = FilmItem