const CharacterAnime = require('../models/characterAnime')
class BLLCharacterAnime {
    mySingleton = (function () {
        var instance;
        function init() {
            return {
                getAllCharacterAnime: async function () {
                    try {
                        let data = await CharacterAnime.findAll({ raw: true })
                        return data
                    } catch (error) {
                        return error
                    }
                },
                addCharacterAnimeToAnimeID: async function (dataCharacter,anime_id) {
                    try {
                        
                        let maxID = await CharacterAnime.max('id')
                        await CharacterAnime.create({ id: maxID + 1, ...dataCharacter,anime_id:anime_id })
                        return 'Thanh cong'
                    } catch (error) {
                       
                        return error
                    }
                }
                ,
                deleteCharacterAnimeByID: async function (id) {
                    try {
                        await CharacterAnime.destroy({ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                updateCharacterAnimeByID: async function (id, valueUpdate) {
                    try {
                        await CharacterAnime.update(valueUpdate,{ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                getCharacterAnimeByIDAnime : async function(id_Anime)
                {
                    try {
                        let data = await CharacterAnime.findAll({ where: { anime_id: id_Anime },raw:true })
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
module.exports = new BLLCharacterAnime