const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    try {
      cb(null, 'E:/PBL5/PBL5-WebPhim-Truyen/public/serverImages');
    } catch (error) {
      cb("Khong tim thay duong dan")
    }
  },
  filename: (req, file, cb) => {
    try {
      let arr = file.originalname.split('.')
      let imgName = ""
      for(let i=0; i<arr.length-1;i++) imgName+=arr[i]+'.'

      imgName = imgName + "jpg"
      cb(null, imgName);
    } catch (error) {
      cb(error)
    }
  }
});
const upload = multer({ storage });
module.exports = upload


