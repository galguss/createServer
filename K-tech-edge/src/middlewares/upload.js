const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'uploads/');
    },

    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "application/pdf"){
        cb(null, true);
    }
    cb(null, false);
}

const upload = multer({
    storage,
    linits: {
        fileSize: 1024 * 1024 * 2
    },
    fileFilter
});

module.exports = upload;