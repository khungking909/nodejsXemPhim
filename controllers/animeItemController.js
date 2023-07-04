

const BLLAnimeItem = require('../BLL/BLLAnimeItem')

class AnimeItemController {
    async getAllAnimeItemByIDAnime(req, res) {
        
        try {
            let data = await BLLAnimeItem.mySingleton.getInstance().getAllAnimeItemByIDAnime(req.params.id)
        
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'getAllAnimes',
                message: 'Fails!!!',
            })
        }
    }
    async AddAnimeItem(req, res) {
        try {
            await BLLAnimeItem.mySingleton.getInstance().addAnimeItem(req.body)
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
    async deleteAnimeItem(req, res) {
        try {
            let id = req.params.id
            let message = await BLLAnimeItem.mySingleton.getInstance().deleteAnimeItem(id)
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
    async updateAnimeItem(req, res) {
        try {
            let dataUpdate = req.body
            let id = req.params.id
            let message = await BLLAnimeItem.mySingleton.getInstance().updateAnimeItemByID(id, dataUpdate)
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
    async getAnimeItemByID(req, res) {
        try {
            let id = req.params.id
            let data = await BLLAnimeItem.mySingleton.getInstance().getAnimeItemByID(id)
            res.json({
                errCode: 1,
                content: 'getAnimeByID',
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
    async getAnimeItemByEpisodeAnime(req, res) {
        try {
            let id = req.params.id
            let episode = req.params.episode
            let data = await BLLAnimeItem.mySingleton.getInstance().getAnimeItemByEpisodeAnime(id,episode)
            
            res.json(data)
        } catch (error) {
            res.json({
                errCode: 2,
                message: 'Fails!!!',
            })
        }
    }
}
module.exports = new AnimeItemController
