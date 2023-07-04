
const BLLComic = require('../BLL/BLLComic')

class comicController {
    async getAllComics(req, res) {
        try {
            let data = await BLLComic.mySingleton.getInstance().getAllComic()
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'getAllComics',
                message: 'Fails!!!',
            })
        }
    }
    async AddComics(req, res) {
        try {
            await BLLComic.mySingleton.getInstance().addComic(req.body)
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
    async deleteComics(req, res) {
        try {
            let id = req.params.id
            let message = await BLLComic.mySingleton.getInstance().deleteComic(id)
            res.json({
                errCode: 1,
                content: 'deleteComics',
                message: message,
            })
        } catch (error) {
            res.json({
                errCode: 2,
                content: 'deleteComics',
                message: 'fails!!!',
            })
        }
    }
    async updateComics(req, res) {
        try {
            let dataUpdate = req.body
            let id = req.params.id
            let message = await BLLComic.mySingleton.getInstance().updateComic(id, dataUpdate)
            res.json({
                errCode: 1,
                content: 'updateComics',
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
    async getComicByID(req, res) {
        try {
            let id = req.params.id
            let data = await BLLComic.mySingleton.getInstance().getComicByID(id)
            res.json({
                errCode: 1,
                content: 'getComicByID',
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
}
module.exports = new comicController
