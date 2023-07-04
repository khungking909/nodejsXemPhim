const CommentFilm = require('../models/commentFilm')
class BLLCommentFilm {
    mySingleton = (function () {
        var instance;
        function init() {
            return {
                getAllCommentFilmByIDFilm: async function (id) {
                    try {
                        let data = await CommentFilm.findAll({ where:{
                            film_id:id
                        },raw: true })
                       
                        return data
                    } catch (error) {
                        return null
                    }
                },
                addCommentFilm: async function (Comment,idUser,idFilm) {
                    try {

                        let maxID = await CommentFilm.max('id')
                        await CommentFilm.create({ id: maxID + 1, film_id:idFilm,account_id:idUser,content:Comment })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                }
                ,
                deleteCommentFilm: async function (id) {
                    try {
                        await CommentFilm.destroy({ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                updateCommentFilm: async function (id, valueUpdate) {
                    try {
                        await CommentFilm.update(valueUpdate,{ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                getCommentFilmByID : async function(id)
                {
                    try {
                        let data = await CommentFilm.findOne({ where: { id: id },raw:true })
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
module.exports = new BLLCommentFilm