const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      cb(null, 'E:/PBL5/PBL5-WebPhim-Truyen/public/serverVideos');
    } catch (error) {
      cb("Khong tim thay duong dan")
    }
  },
  filename: (req, file, cb) => {
    try {
      let arr = file.originalname.split('.')
      let imgName = arr[0] + ".mp4"
      cb(null, imgName);
    } catch (error) {
      cb(error)
    }
  }
});
const upload = multer({ storage });
module.exports = upload


