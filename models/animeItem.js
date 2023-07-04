const { Model, DataTypes, Sequelize } = require('sequelize')
const DB = require('../config/connect')
class AnimeItem extends Model {
 }
AnimeItem.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    },
    anime_id: {
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
    modelName: 'AnimeItem',
    tableName: 'anime_item',
    timestamps:false
})
module.exports = AnimeItem