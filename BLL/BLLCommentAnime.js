const CommentAnime = require('../models/commentAnime')
class BLLCommentAnime {
    mySingleton = (function () {
        var instance;
        function init() {
            return {
                getAllCommentAnimeByIDAnime: async function (id) {
                    try {
                        let data = await CommentAnime.findAll({ where:{
                            anime_id:id
                        },raw: true })
                       
                        return data
                    } catch (error) {
                        return null
                    }
                },
                addCommentAnime: async function (Comment,idUser,idAnime) {
                    try {

                       
                        let maxID = await CommentAnime.max('id')
                        await CommentAnime.create({ id: maxID + 1, anime_id:idAnime,account_id:idUser,content:Comment })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                }
                ,
                deleteCommentAnime: async function (id) {
                    try {
                        await CommentAnime.destroy({ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                updateCommentAnime: async function (id, valueUpdate) {
                    try {
                        await CommentAnime.update(valueUpdate,{ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                getCommentAnimeByID : async function(id)
                {
                    try {
                        let data = await CommentAnime.findOne({ where: { id: id },raw:true })
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
module.exports = new BLLCommentAnime