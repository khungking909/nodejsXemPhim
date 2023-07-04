

const BLLFilmItem = require('../BLL/BLLFilmItem')

class FilmItemController {
    async getAllFilmItemByIDFilm(req, res) {
        
        try {
            let data = await BLLFilmItem.mySingleton.getInstance().getAllFilmItemByIDFilm(req.params.id)
        
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'getAllFilms',
                message: 'Fails!!!',
            })
        }
    }
    async AddFilmItem(req, res) {
        try {
            await BLLFilmItem.mySingleton.getInstance().addFilmItem(req.body)
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
    async deleteFilmItem(req, res) {
        try {
            let id = req.params.id
            let message = await BLLFilmItem.mySingleton.getInstance().deleteFilmItem(id)
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
    async updateFilmItem(req, res) {
        try {
            let dataUpdate = req.body
            let id = req.params.id
            let message = await BLLFilmItem.mySingleton.getInstance().updateFilmItemByID(id, dataUpdate)
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
    async getFilmItemByID(req, res) {
        try {
            let id = req.params.id
            let data = await BLLFilmItem.mySingleton.getInstance().getFilmItemByID(id)
            res.json({
                errCode: 1,
                content: 'getFilmByID',
                message: 'successfuly!!!',
                data: {
                    ...data
                }
            })
        } catch (error) {
            res.json({
                errCode: 2,
                message: 'Fails!!!',
            })
        }
    }
    async getFilmItemByEpisodeFilm(req, res) {
        try {
            let id = req.params.id
            let episode = req.params.episode
            let data = await BLLFilmItem.mySingleton.getInstance().getFilmItemByEpisodeFilm(id,episode)
            
            res.json(data)
        } catch (error) {
            res.json({
                errCode: 2,
                message: 'Fails!!!',
            })
        }
    }
}
module.exports = new FilmItemController
