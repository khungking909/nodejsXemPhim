const DB = require('../config/connect')
const Account = require('../models/account')
const Favorite = require('../models/favoriteFilm')
const FavoriteAnime = require('../models/favoriteAnime')
const bcrypt = require('bcryptjs')
const BLLFilm = require('../BLL/BLLFilm')
const BLLAnime = require('../BLL/BLLAnime')
class BLLAccount {
    mySingleton = (function () {
        var instance;
        function init() {
            return {
                checkLogin: function (username, password) {
                    return new Promise(async (resolve, reject) => {
                        try {
                            let data = await this.getAllAccount()
                            data.forEach(async element => {

                                if (username == element.username) {
                                    let isLogin = await bcrypt.compare(password, element.password)
                                    if (isLogin) resolve(element)

                                }
                            })

                        } catch (error) {
                            reject('Khong tim thay user')
                        }
                    })
                },
                changePassWord: async function (password, id) {
                    try {
                        console.log(password, id);
                        password = await bcrypt.hash(password, 10)
                        await Account.update({ password }, {
                            where: { id: id },
                            fields: ['password']
                        }, { raw: true })
                        return "Thanh cong"
                    } catch (error) {
                        return error
                    }
                },
                getAllAccount: async function () {
                    try {
                        let data = await Account.findAll({ raw: true })
                        return data
                    } catch (error) {
                        return error
                    }

                },
                getAccountByID: async function (id) {
                    try {
                        let data = await Account.findOne({ where: { id: id } }, { raw: true })
                        return data
                    } catch (error) {
                        return error
                    }

                },
                addAccount: async function (account) {
                    try {
                        let id = await Account.max('id')
                        let accountHash = {
                            id: id + 1,
                            ...account
                        }
                        accountHash.password = await bcrypt.hash(account.password, 10)
                        await Account.create(accountHash)
                        return 'Thanh Cong'
                    } catch (error) {
                        return error
                    }
                },
                deleteAccount: async function (id) {
                    try {
                        await Account.destroy({ where: { id: id } })
                        return 'Thanh Cong'
                    } catch (error) {
                        return error
                    }
                },
                deleteFavoritesFilmByIDFilmOfUser: async function (idUser,idfilm) {
                    try {
                      
                        await Favorite.destroy({ where: { account_id: idUser, film_id:idfilm } })
                        return 'Thanh Cong'
                    } catch (error) {
                        return error
                    }
                },
                deleteFavoritesAnimeByIDAnimeOfUser: async function (idUser,idanime) {
                    try {
                        await FavoriteAnime.destroy({ where: { account_id: idUser, anime_id:idanime } })
                        return 'Thanh Cong'
                    } catch (error) {
                        return error
                    }
                },
                updateAccount: async function (id, newAccount) {
                    try {
                        await Account.update(newAccount, {
                            where: { id: id },
                            fields: ['name', 'phonenumber', 'age', 'image', 'address','VIP']
                        })
                        let data = await Account.findOne({ where: { id: id } }, { raw: true })
                        return data
                    } catch (error) {
                        return error
                    }
                },
                getAllListFavoritesByID: async function (id) {
                    try {
                        let result = await Favorite.findAll({ where: { account_id: id }, raw: true })
                        let data = await Promise.all(result.map(async data => {
                            let data1 = await BLLFilm.mySingleton.getInstance().getFilmByID(data.film_id)
                            return data1
                        }))
                        return data
                    } catch (error) {

                        return error
                    }
                },
                getAllListFavoritesAnimeByID: async function (id) {
                    try {

                        let result = await FavoriteAnime.findAll({ where: { account_id: id }, raw: true })

                        let data = await Promise.all(result.map(async data => {
                            let data1 = await BLLAnime.mySingleton.getInstance().getAnimeByID(data.anime_id)
                            return data1
                        }))
                        return data
                    } catch (error) {

                        return error
                    }
                },
                getAllAccountByRoleUser: async function () {
                    try {
                        let data = await Account.findAll({
                            where: { role: 0 }
                        }, { raw: true })
                        return data
                    } catch (error) {
                        return error
                    }
                },
                addFavoritesFilmByAccountID: async function (idAccount,id_film) {
                    try {
                        let id = await Favorite.max('id')
                        let favorites = {
                            id: id + 1,
                            account_id: idAccount,
                            film_id:id_film
                        }
                        await Favorite.create(favorites)
                        return "THANH CONG"
                    } catch (error) {

                        return error
                    }
                },
                addFavoritesAnimeByAccountID: async function (idAccount,id_anime) {
                    try {
                        let id = await FavoriteAnime.max('id')
                        let favorites = {
                            id: id + 1,
                            account_id: idAccount,
                            anime_id:id_anime
                        }
                        await FavoriteAnime.create(favorites)
                        return "THANH CONG"
                    } catch (error) {

                        return error
                    }
                }
            }
        }
        return {
            getInstance: function () {
                if (!instance) instance = init()
                return instance
            }
        }
    })();

}
module.exports = new BLLAccount