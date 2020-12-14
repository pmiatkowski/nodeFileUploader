const path = require('path');
const fs = require('fs').promises;
const uploadFile = require('../middlewares/upload');
const fileSize = require('../utils/fileSize');

const dir = () => path.join(global.__basedir, 'resources', 'static', 'uploads');

const upload = async (req, res) => {
	try {
		await uploadFile(req, res);

		if (req.file === undefined) {
			return res.status(400).send({
				message: 'File is reqired!',
			});
		}

		res.status(200).send({
			message: `File uploaded successfully: ${req.file.originalname}.`,
		});
	} catch (error) {
		let message = `Could not upload the file: ${req.file.originalname}. ${error}`;

		if (error.code === 'LIMIT_FILE_SIZE') {
			message = `File size cannot be larger than ${fileSize.LIMIT_MB}MB.`;
		}

		res.status(500).send({
			message,
		});
	}
};

const getFilesList = async (req, res) => {
	try {
		const files = await fs.readdir(dir());

		const filesSummary = files.map((file) => ({
			name: file,
			url: `http://${req.headers.host}/files/${file}`,
		}));

		res.status(200).send(filesSummary);
	} catch (error) {
		res.status(500).send({
			message: `Unable to read dir ${dir()}. ${error}`,
		});
	}
};

const download = async (req, res) => {
	const fileName = req.params.name;

	res.download(`${dir()}/${fileName}`, fileName, (err) => {
		if (err) {
			res.status(500).send({
				message: `Unable to download ${fileName} file. ${err}`,
			});
		}
	});
};

module.exports = {
	download,
	getFilesList,
	upload,
};
