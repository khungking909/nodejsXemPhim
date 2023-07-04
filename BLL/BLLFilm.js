const Film = require('../models/film')
const categories_list = require('../models/categoriesFilmList')
class BLLFilm {
    mySingleton = (function () {
        var instance;
        function init() {
            return {
                getAllFilm: async function () {
                    try {
                        let data = await Film.findAll({ raw: true })
                        return data
                    } catch (error) {
                        return null
                    }
                },
                addFilm: async function (film) {
                    try {
                        let maxID = await Film.max('id')
                        await Film.create({ id: maxID + 1, ...film })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                }
                ,
                deleteFilm: async function (id) {
                    try {
                        
                        await Film.destroy({ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        
                        return error
                    }
                },
                updateFilm: async function (id, valueUpdate) {
                    try {
                        await Film.update(valueUpdate,{ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                getFilmByID : async function(id)
                {
                    try {
                        let data = await Film.findOne({ where: { id: id },raw:true })
                        return data
                    } catch (error) {
                        return error
                    }
                },
                getFilmByCategories : async function(id)
                {
                    try {
                        let result = await Film.findAll({ where: { categories_id: id },raw:true })
                        return result
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
module.exports = new BLLFilm