const {Sequelize,Model,DataTypes} = require('sequelize')
const DB = require('../config/connect')
class Film extends Model{}
Film.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
        
    },
    categories_id:DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    episode_sum: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    author_id :DataTypes.INTEGER,
    evaluate:DataTypes.INTEGER,
    image:DataTypes.STRING,
    trailer:DataTypes.STRING,
    hot:DataTypes.INTEGER,
},{
    sequelize:DB,
    timestamps:false,
    modelName:'Film',
    tableName:'film'
})
module.exports = Film