const multer = require('multer');
const File = require('../classes/File');

module.exports = {
    storage: new multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, 'images');
        },
        filename: (req, file, callback) => {
            callback(null, File.rename(file.originalname, file.mimetype));
        },
    }),
};
