class authorizationController {
    async getData(req, res) {
        try {
            res.status(200).json(req.user)
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                message: 'Fails'
            })
        }
    }
  
    
}
module.exports = new authorizationController