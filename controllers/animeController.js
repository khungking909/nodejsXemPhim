const Fuse = require('fuse.js');
const BLLAnime = require('../BLL/BLLAnime');
const BLLCharacterAnime = require('../BLL/BLLCharacterAnime');
class AnimeController {
    async getAllAnimes(req, res) {

        try {
            let data = await BLLAnime.mySingleton.getInstance().getAllAnime()
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'getAllAnimes',
                message: 'Fails!!!',
            })
        }
    }
    async AddAnimes(req, res) {
        try {
            
            await BLLAnime.mySingleton.getInstance().addAnime(req.body)
            res.status(200).json({
                errCode: 1,
                message: 'add successfully'
            })
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                message: error
            })
        }
    }
    async deleteAnimes(req, res) {
        try {
            let id = req.params.id
            let message = await BLLAnime.mySingleton.getInstance().deleteAnime(id)
            res.json({
                errCode: 1,
                content: 'deleteAnimes',
                message: message,
            })
        } catch (error) {
            res.json({
                errCode: 2,
                content: 'deleteAnimes',
                message: 'fails!!!',
            })
        }
    }
    async addCharacterAnimeToAnimeID(req, res) {
        try {
            
            let id = req.params.id
            let body = req.body
            let message = await BLLCharacterAnime.mySingleton.getInstance().addCharacterAnimeToAnimeID(body,id)
            res.json({
                errCode: 1,
                message: message,
            })
        } catch (error) {
            res.json({
                errCode: 2,
                message: 'fails!!!',
            })
        }
    }
    async updateCharacterAnimeByID(req, res) {
        try {
            let id = req.params.id
            let body = req.body
            let message = await BLLCharacterAnime.mySingleton.getInstance().updateCharacterAnimeByID(id,body)
            res.json({
                errCode: 1,
                message: message,
            })
        } catch (error) {
            res.json({
                errCode: 2,
                message: 'fails!!!',
            })
        }
    }
    async deleteCharacterAnimeByID(req, res) {
        try {
            let id = req.params.id
            let message = await BLLCharacterAnime.mySingleton.getInstance().deleteCharacterAnimeByID(id)
            res.json({
                errCode: 1,
                message: message,
            })
        } catch (error) {
            res.json({
                errCode: 2,
                message: 'fails!!!',
            })
        }
    }
    async updateAnimes(req, res) {
        try {
            let dataUpdate = req.body
            let id = req.params.id
            let message = await BLLAnime.mySingleton.getInstance().updateAnime(id, dataUpdate)
            res.json({
                errCode: 1,
                content: 'updateAnimes',
                message: message,

            })
        } catch (error) {
            res.json({
                errCode: 2,
                content: 'update Fails',
                message: 'fails!!!',
            })
        }
    }
    async getAnimeByID(req, res) {
        try {
            let id = req.params.id
            let data = await BLLAnime.mySingleton.getInstance().getAnimeByID(id)
            res.json(data)
        } catch (error) {
            res.json({
                errCode: 2,
                message: 'Fails!!!',
            })
        }
    }
    async getAnimeByName(req, res) {
        try {
            let search = req.params.search
            let data = await BLLAnime.mySingleton.getInstance().getAllAnime()
            const fuse = new Fuse(data, { keys: ['name'] });
            const ketQua = fuse.search(search);
            let dataSearch = [];
            ketQua.map(item => dataSearch.push(item.item))
            res.json(dataSearch)
        } catch (error) {
            res.json({
                errCode: 2,
                message: 'Fails!!!',

            })
        }
    }
    async getAnimeByCategories(req, res) {
        
        try {
            let id = req.params.id
            let data = await BLLAnime.mySingleton.getInstance().getAnimeByCategories(id)
            res.json(data)
        } catch (error) {
            res.json({
                errCode: 2,
                message: 'Fails!!!',
            })
        }
    }
    async getCharacterAnimeByIDAnime(req, res) {
        
        try {
            let id = req.params.id
            let data = await BLLCharacterAnime.mySingleton.getInstance().getCharacterAnimeByIDAnime(id)
            res.json(data)
        } catch (error) {
            res.json({
                errCode: 2,
                message: 'Fails!!!',
            })
        }
    }
}
module.exports = new AnimeController
