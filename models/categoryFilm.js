const {Sequelize,Model,DataTypes} = require('sequelize')
const DB = require('../config/connect')
class Categories extends Model{}
Categories.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
        
    },
    name: DataTypes.STRING,
},{
    sequelize:DB,
    timestamps:false,
    modelName:'Category',
    tableName:'categories_film'
})

module.exports = Categories