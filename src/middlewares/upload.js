const util = require('util');
const multer = require('multer');
const path = require('path');
const fileSize = require('../utils/fileSize');

const storage = multer.diskStorage({
	destination: (req, file, cbHandler) => {
		cbHandler(null, path.join(global.__basedir, 'resources', 'static', 'uploads'));
	},
	filename: (req, file, cbHandler) => {
		const name = file.originalname;
		console.log('Uploading:', name);
		req.file = file;
		cbHandler(null, name);
	},
});

const upload = multer({
	limits: {
		fileSize: fileSize.fileSizeLimit(),
	},
	storage,
}).single('file');

module.exports = util.promisify(upload);
