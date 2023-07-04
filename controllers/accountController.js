const BLLAccount = require('../BLL/BLLAccount')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
class accountController {
    async getAllAccount(req, res) {
        try {
            let data = await BLLAccount.mySingleton.getInstance().getAllAccount()
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                message: 'Fails'
            })
        }
    }
    async getAccountByID(req,res)
    {
        try {
            let data = await BLLAccount.mySingleton.getInstance().getAccountByID(req.params.id)
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                message: 'Fails'
            })
        }
    }
    async HandleChangePassWord(req, res) {
        try {
            let id = req.params.id
            let password = req.body.password
            let NewPass = req.body.Newpass
            let data = await BLLAccount.mySingleton.getInstance().getAccountByID(id)
            let isLogin = await bcrypt.compare(password, data.password)
            if (isLogin) {
                await BLLAccount.mySingleton.getInstance().changePassWord(NewPass, id)
                res.status(200).json({
                    errCode: 1,
                    message: 'changePassSucess',

                })
            }
            else res.json({
                errCode: 2,
                message: 'changePassFail',

            })
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                message: 'Fails'
            })
        }
    }
    async AddAccount(req, res) {
        let data = await BLLAccount.mySingleton.getInstance().addAccount(req.body)
        res.status(200).json({
            errCode: 1,
            message: data
        })
    }
    async deleteAccount(req, res) {
        try {
            let message = await BLLAccount.mySingleton.getInstance().deleteAccount(req.params.id)
            res.status(200).json({
                errCode: 1,
                content: 'delete',
                message: message
            })
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'delete',
                message: "Fails"
            })
        }
    }
    async updateAccount(req, res) {
        try {
            let user = await BLLAccount.mySingleton.getInstance().updateAccount(req.params.id, req.body)
            let token = {
                id : user.id,
                username: user.username,
                role:user.role,
                name: user.name,
                gender:user.gender,
                age:user.age,
                image:user.image,
                VIP:user.VIP,
                phonenumber:user.phonenumber,
                address:user.address
            }
            let accessToken = jwt.sign(token,process.env.SECRET_KEY)
            res.status(200).json({
                errCode: 1,
                content: 'update',
                accessToken:accessToken,
                message:'Sửa thành công'
            })
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'update',
                message: 'Fails'
            })
        }
    }
    async getAllListFavoritesByID(req, res) {
        try {
            let data = await BLLAccount.mySingleton.getInstance().getAllListFavoritesByID(req.params.id)
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'update',
                message: 'Fails'
            })
        }
    }
    async getAllListFavoritesAnimeByID(req, res) {
        try {
            let data = await BLLAccount.mySingleton.getInstance().getAllListFavoritesAnimeByID(req.params.id)
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'update',
                message: 'Fails'
            })
        }
    }
    async addFavoritesFilmByAccountID(req, res) {
        try {
            let data = await BLLAccount.mySingleton.getInstance().addFavoritesFilmByAccountID(req.params.id,req.body.film_id)
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'update',
                message: 'Fails'
            })
        }
    }
    async addFavoritesAnimeByAccountID(req, res) {
        try {
          
            let data = await BLLAccount.mySingleton.getInstance().addFavoritesAnimeByAccountID(req.params.id,req.body.anime_id)
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'update',
                message: 'Fails'
            })
        }
    }
    async deleteFavoritesFilmByIDFilmOfUser(req, res) {
        try {
            let data = await BLLAccount.mySingleton.getInstance().deleteFavoritesFilmByIDFilmOfUser(req.params.idaccount,req.params.idfilm)
            
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'update',
                message: 'Fails'
            })
        }
    }
    async deleteFavoritesAnimeByIDAnimeOfUser(req, res) {
        try {
            let data = await BLLAccount.mySingleton.getInstance().deleteFavoritesAnimeByIDAnimeOfUser(req.params.idaccount,req.params.idanime)
            
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'update',
                message: 'Fails'
            })
        }
    }
    async getAllAccountByRoleUser(req,res)
    {
        try {
            let data = await BLLAccount.mySingleton.getInstance().getAllAccountByRoleUser()
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'update',
                message: 'Fails'
            })
        }
    }
}
module.exports = new accountController