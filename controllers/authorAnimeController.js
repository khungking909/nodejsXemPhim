
const BLLAuthor = require('../BLL/BLLAuthorAnime')

class AuthorController {
    async getAllAuthors(req, res) {
        try {
            let data = await BLLAuthor.mySingleton.getInstance().getAllAuthor()
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'getAllAuthors',
                message: 'Fails!!!',
            })
        }
    }
    async AddAuthors(req, res) {
        try {
            await BLLAuthor.mySingleton.getInstance().addAuthor(req.body)
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
    async deleteAuthors(req, res) {
        try {
            let id = req.params.id
            let message = await BLLAuthor.mySingleton.getInstance().deleteAuthor(id)
            res.json({
                errCode: 1,
                content: 'deleteAuthors',
                message: message,
            })
        } catch (error) {
            res.json({
                errCode: 2,
                content: 'deleteAuthors',
                message: 'fails!!!',
            })
        }
    }
    async updateAuthors(req, res) {
        try {
            let dataUpdate = req.body
            let id = req.params.id
            let message = await BLLAuthor.mySingleton.getInstance().updateAuthor(id, dataUpdate)
            res.json({
                errCode: 1,
                content: 'updateAuthors',
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
            let data = await BLLAuthor.mySingleton.getInstance().getAuthorByID(id)
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
module.exports = new AuthorController
