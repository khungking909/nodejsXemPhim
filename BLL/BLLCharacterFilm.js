const CharacterFilm = require('../models/characterFilm')
class BLLCharacterFilm {
    mySingleton = (function () {
        var instance;
        function init() {
            return {
                getAllCharacterFilm: async function () {
                    try {
                        let data = await CharacterFilm.findAll({ raw: true })
                        return data
                    } catch (error) {
                        return error
                    }
                },
                addCharacterFilmToFilmID: async function (dataCharacter,film_id) {
                    try {
                        let maxID = await CharacterFilm.max('id')
                        await CharacterFilm.create({ id: maxID + 1, ...dataCharacter,film_id:film_id })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                }
                ,
                deleteCharacterFilmByID: async function (id) {
                    try {
                        await CharacterFilm.destroy({ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                updateCharacterFilmByID: async function (id, valueUpdate) {
                    try {
                        await CharacterFilm.update(valueUpdate,{ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                getCharacterFilmByIDFilm : async function(id_film)
                {
                    try {
                        let data = await CharacterFilm.findAll({ where: { film_id: id_film },raw:true })
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
module.exports = new BLLCharacterFilm