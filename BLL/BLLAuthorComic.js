const Author = require('../models/authorComic')
class BLLAuthor {
    mySingleton = (function () {
        var instance;
        function init() {
            return {
                getAllAuthor: async function () {
                    try {
                        let data = await Author.findAll({ raw: true })
                        return data
                    } catch (error) {
                        return null
                    }
                },
                addAuthor: async function (author) {
                    try {
                        let maxID = await Author.max('id')
                        await Author.create({ id: maxID + 1, ...author })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                }
                ,
                deleteAuthor: async function (id) {
                    try {
                        await Author.destroy({ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                updateAuthor: async function (id, valueUpdate) {
                    try {
                        await Author.update(valueUpdate,{ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                getAuthorByID : async function(id)
                {
                    try {
                        let data = await Author.findOne({ where: { id: id },raw:true })
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
module.exports = new BLLAuthor