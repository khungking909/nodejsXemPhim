
const AnimeItem = require('../models/animeItem')
class BLLAnimeItem {
    mySingleton = (function () {
        var instance;
        function init() {
            return {
                getAllAnimeItemByIDAnime: async function (anime_id) {
                    try {
                        let data = await AnimeItem.findAll({ 
                            raw: true,
                            where:{
                                anime_id
                            }
                        })
                        return data
                    } catch (error) {
                        return error
                    }
                },
                addAnimeItem: async function (anime_item) {
                    try {
                        let maxID = await AnimeItem.max('id')
                        await AnimeItem.create({ id: maxID + 1, ...anime_item })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                }
                ,
                deleteAnimeItem: async function (id) {
                    try {
                        await AnimeItem.destroy({ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                updateAnimeItemByID: async function (id, valueUpdate) {
                    try {
                        await AnimeItem.update(valueUpdate,{ where: { id: id },
                            fields: ['episode', 'episode_description', 'video'] })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                getAnimeItemByID : async function(id)
                {
                    try {
                        let data = await AnimeItem.findOne({ where: { id: id },raw:true })
                        return data
                    } catch (error) {
                        return error
                    }
                },
                getAnimeItemByEpisodeAnime : async function(idAnime,episode)
                {
                   
                    try {
                        let data = await AnimeItem.findOne({ where: { anime_id: idAnime,episode:episode },raw:true })
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
module.exports = new BLLAnimeItem