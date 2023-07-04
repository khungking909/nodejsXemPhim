
const BLLCommentFilm = require('../BLL/BLLCommentFilm')

class commentFilmController {
    async getAllCommentFilmByIDFilm(req, res) {
        try {
            let data = await BLLCommentFilm.mySingleton.getInstance().getAllCommentFilmByIDFilm(req.params.id)
            
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'getAllComments',
                message: 'Fails!!!',
            })
        }
    }
    async AddComments(req, res) {
        try {
            await BLLCommentFilm.mySingleton.getInstance().addCommentFilm(req.body.content,req.params.id,req.params.filmid)
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
    async deleteComments(req, res) {
        try {
            let id = req.params.id
            let message = await BLLCommentFilm.mySingleton.getInstance().deleteAuthor(id)
            res.json({
                errCode: 1,
                content: 'deleteComments',
                message: message,
            })
        } catch (error) {
            res.json({
                errCode: 2,
                content: 'deleteComments',
                message: 'fails!!!',
            })
        }
    }
    async updateComments(req, res) {
        try {
            let dataUpdate = req.body
            let id = req.params.id
            let message = await BLLCommentFilm.mySingleton.getInstance().updateAuthor(id, dataUpdate)
            res.json({
                errCode: 1,
                content: 'updateComments',
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
    async getAuthorByID(req, res) {
        try {
            let id = req.params.id
            let data = await BLLCommentFilm.mySingleton.getInstance().getAuthorByID(id)
            res.json({
                errCode: 1,
                content: 'getAuthorByID',
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
module.exports = new commentFilmController
