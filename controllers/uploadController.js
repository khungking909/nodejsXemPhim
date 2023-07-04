
class uploadController {
    async uploadImage(req, res) {
        try {
            res.status(200).send('Image uploaded successfully');
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                message: 'Fails'
            })
        }
    }
    async uploadVideo(req, res) {
        try {
            res.status(200).send('Video uploaded successfully');
        } catch (error) {
            res.status(400).json({
                errCode: 2,
                message: 'Fails'
            })
        }
    }
  
    
}
module.exports = new uploadController