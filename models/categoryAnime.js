const {Sequelize,Model,DataTypes} = require('sequelize')
const DB = require('../config/connect')
class CategorieAnime extends Model{}
CategorieAnime.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
        
    },
    name: DataTypes.STRING,
},{
    sequelize:DB,
    timestamps:false,
    modelName:'CategoryAnime',
    tableName:'categories_anime'
})

module.exports = CategorieAnime