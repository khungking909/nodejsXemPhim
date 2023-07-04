const { where } = require('sequelize');
const Categories = require('../models/categoryFilm')
class BLLCategories {
    mySingleton = (function () {
        var instance;
        function init() {
            return {
                getAllCategories: async function () {
                    try {
                        let data = await Categories.findAll({ raw: true })
                        return data
                    } catch (error) {
                        return error
                    }
                },
                getCategoriesByID: async function (id) {
                    try {
                        let data = await Categories.findOne( {where:{id:id}},{ raw: true })
                        return data
                    } catch (error) {
                        return error
                    }
                },
                addCategories: async function (cate) {
                    try {
                        let maxID = await Categories.max('id')
                        await Categories.create({ id: maxID + 1, ...cate })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                }
                ,
                deleteCategories: async function (id) {
                    try {
                        await Categories.destroy({ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        
                        return error
                    }
                },
                updateCategories: async function (id, valueUpdate) {
                    try {
                        await Categories.update(valueUpdate,{ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                getCategoriesByID : async function(id)
                {
                    try {
                        let data = await Categories.findOne({ where: { id: id },raw:true })
                        return data
                    } catch (error) {
                        return error
                    }
                }
               


            }
        }
        return {
            getInstance: function () {
                if (!instance) instance = init();
                return instance;
            }
        }
    })();

}
module.exports = new BLLCategories