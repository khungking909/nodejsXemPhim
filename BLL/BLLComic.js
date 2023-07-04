const Comic = require('../models/comic')
const bcrypt = require('bcryptjs')
class BLLComic {
    mySingleton = (function () {
        var instance;
        function init() {
            return {
                getAllComic: async function () {
                    try {
                        let data = await Comic.findAll({ raw: true })
                        return data
                    } catch (error) {
                        return null
                    }
                },
                addComic: async function (comic) {
                    try {
                        let maxID = await Comic.max('id')
                        await Comic.create({ id: maxID + 1, ...comic })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                }
                ,
                deleteComic: async function (id) {
                    try {
                        await Comic.destroy({ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                updateComic: async function (id, valueUpdate) {
                    try {
                        await Comic.update(valueUpdate,{ where: { id: id } })
                        return 'Thanh cong'
                    } catch (error) {
                        return error
                    }
                },
                getComicByID : async function(id)
                {
                    try {
                        let data = await Comic.findOne({ where: { id: id },raw:true })
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
module.exports = new BLLComic