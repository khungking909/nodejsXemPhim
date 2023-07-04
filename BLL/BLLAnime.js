const Anime = require('../models/anime')
class BLLAnime {
    mySingleton = (function () {
        var instance;
        function init() {
            return {
                getAllAnime: async function () {
                    try {
                        let data = await Anime.findAll({ raw: true })
                        return data
                    } catch (error) {
                        return null
                    }
                },
                addAnime: async function (anime) {
                    try {
                        let maxID = await Anime.max('id')
                        await Anime.create({ id: maxID + 1, ...anime })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                }
                ,
                deleteAnime: async function (id) {
                    try {
                        
                        await Anime.destroy({ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                updateAnime: async function (id, valueUpdate) {
                    try {
                        await Anime.update(valueUpdate,{ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                getAnimeByID : async function(id)
                {
                    try {
                        let data = await Anime.findOne({ where: { id: id },raw:true })
                        return data
                    } catch (error) {
                        return error
                    }
                },
                getAnimeByCategories : async function(id)
                {
                    try {
                        let result = await Anime.findAll({ where: { categories_id: id },raw:true })
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
module.exports = new BLLAnime