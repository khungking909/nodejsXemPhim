const {Sequelize,Model,DataTypes} = require('sequelize')
const DB = require('../config/connect')
class Comic extends Model{}
Comic.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
        
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    chapter_sum: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    author_id :DataTypes.INTEGER,
    evaluate:DataTypes.INTEGER,
    image:DataTypes.STRING
},{
    sequelize:DB,
    timestamps:false,
    modelName:'comic',
    tableName:'comics'
})
module.exports = Comic