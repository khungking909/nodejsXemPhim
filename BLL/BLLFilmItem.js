const { getFilmByID } = require('../controllers/filmController');
const { getFilmItemByEpisodeFilm } = require('../controllers/filmItemController');
const FilmItem = require('../models/filmItem')
class BLLFilmItem {
    mySingleton = (function () {
        var instance;
        function init() {
            return {
                getAllFilmItemByIDFilm: async function (film_id) {
                    try {
                        let data = await FilmItem.findAll({ 
                            raw: true,
                            where:{
                                film_id
                            }
                        })
                        return data
                    } catch (error) {
                        return error
                    }
                },
                addFilmItem: async function (film_item) {
                    try {
                        let maxID = await FilmItem.max('id')
                        await FilmItem.create({ id: maxID + 1, ...film_item })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                }
                ,
                deleteFilmItem: async function (id) {
                    try {
                        await FilmItem.destroy({ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                updateFilmItemByID: async function (id, valueUpdate) {
                    try {
                        await FilmItem.update(valueUpdate,{ where: { id: id },
                            fields: ['episode', 'episode_description', 'video'] })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                getFilmItemByID : async function(id)
                {
                    try {
                        let data = await FilmItem.findOne({ where: { id: id },raw:true })
                        return data
                    } catch (error) {
                        return error
                    }
                },
                getFilmItemByEpisodeFilm : async function(idFilm,episode)
                {
                   
                    try {
                        let data = await FilmItem.findOne({ where: { film_id: idFilm,episode:episode },raw:true })
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
module.exports = new BLLFilmItem