const Fuse = require('fuse.js');
const BLLFilm = require('../BLL/BLLFilm');
const BLLCharacterFilm = require('../BLL/BLLCharacterFilm');
class FilmController {
    async getAllFilms(req, res) {

        try {
            let data = await BLLFilm.mySingleton.getInstance().getAllFilm()
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'getAllFilms',
                message: 'Fails!!!',
            })
        }
    }
    async AddFilms(req, res) {
        try {
            
            await BLLFilm.mySingleton.getInstance().addFilm(req.body)
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
    async deleteFilms(req, res) {
        try {
            let id = req.params.id
            
            let message = await BLLFilm.mySingleton.getInstance().deleteFilm(id)
            res.json({
                errCode: 1,
                content: 'deleteFilms',
                message: message,
            })
        } catch (error) {
            res.json({
                errCode: 2,
                content: 'deleteFilms',
                message: 'fails!!!',
            })
        }
    }
    async addCharacterFilmToFilmID(req, res) {
        try {
           
            let id = req.params.id
            let body = req.body
            let message = await BLLCharacterFilm.mySingleton.getInstance().addCharacterFilmToFilmID(body,id)
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
    async updateCharacterFilmByID(req, res) {
        try {
            let id = req.params.id
            let body = req.body
            let message = await BLLCharacterFilm.mySingleton.getInstance().updateCharacterFilmByID(id,body)
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
    async deleteCharacterFilmByID(req, res) {
        try {
            let id = req.params.id
            let message = await BLLCharacterFilm.mySingleton.getInstance().deleteCharacterFilmByID(id)
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
    async updateFilms(req, res) {
        try {
            let dataUpdate = req.body
            let id = req.params.id
            let message = await BLLFilm.mySingleton.getInstance().updateFilm(id, dataUpdate)
            res.json({
                errCode: 1,
                content: 'updateFilms',
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
    async getFilmByID(req, res) {
        try {
            let id = req.params.id
            let data = await BLLFilm.mySingleton.getInstance().getFilmByID(id)
            res.json(data)
        } catch (error) {
            res.json({
                errCode: 2,
                message: 'Fails!!!',
            })
        }
    }
    async getFilmByName(req, res) {
        try {
            let search = req.params.search
            let data = await BLLFilm.mySingleton.getInstance().getAllFilm()
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
    async getFilmByCategories(req, res) {
        
        try {
            let id = req.params.id
            let data = await BLLFilm.mySingleton.getInstance().getFilmByCategories(id)
            res.json(data)
        } catch (error) {
            res.json({
                errCode: 2,
                message: 'Fails!!!',
            })
        }
    }
    async getCharacterFilmByIDFilm(req, res) {
        
        try {
            let id = req.params.id
            let data = await BLLCharacterFilm.mySingleton.getInstance().getCharacterFilmByIDFilm(id)
            res.json(data)
        } catch (error) {
            res.json({
                errCode: 2,
                message: 'Fails!!!',
            })
        }
    }
}
module.exports = new FilmController
