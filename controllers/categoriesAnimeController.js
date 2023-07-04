const BLLCategories = require('../BLL/BLLCategoryAnime')
class categoriesController {
    async getAllCategories(req, res) {
        try {
            let data = await BLLCategories.mySingleton.getInstance().getAllCategories()
            res.status(200).json({
                errCode: 1,
                message: 'getAllCategories',
                data
            })
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                message: 'Fails'
            })
        }
    }
    async getCategoriesByID(req, res) {
        try {
            let data = await BLLCategories.mySingleton.getInstance().getCategoriesByID(req.params.id)
            res.status(200).json(data)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                message: 'Fails'
            })
        }
    }
    async AddCategories(req, res) {

        let data = await BLLCategories.mySingleton.getInstance().addCategories(req.body)
        res.status(200).json({
            errCode: 1,
            message: data
        })
    }
    async deleteCategories(req, res) {
        try {
            let message = await BLLCategories.mySingleton.getInstance().deleteCategories(req.params.id)
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
    async updateCategories(req, res) {
        try {
            await BLLCategories.mySingleton.getInstance().updateCategories(req.params.id,req.body)
            res.status(200).json({
                errCode: 1,
                content: 'update',
                message: 'successfuly!!!'
            })
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                content: 'update',
                message: 'Fails'
            })
        }
    }
}
module.exports = new categoriesController