const {Sequelize,Model,DataTypes} = require('sequelize')
const DB = require('../config/connect')
class Account extends Model{}
Account.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
        
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.INTEGER,
    name: DataTypes.STRING,
    gender :DataTypes.INTEGER,
    age:DataTypes.INTEGER,
    phonenumber:DataTypes.STRING,
    address:DataTypes.STRING,
    image:DataTypes.STRING,
    VIP: DataTypes.INTEGER
},{
    sequelize:DB,
    timestamps:false,
    modelName:'Account',
    tableName:'account'
})

module.exports = Account