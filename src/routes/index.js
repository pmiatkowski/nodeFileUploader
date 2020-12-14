const express = require('express');
const ctrl = require('../controllers/files.controller');

const router = express.Router();

const routes = (app) => {
	router.post('/upload', ctrl.upload);
	router.get('/files', ctrl.getFilesList);
	router.get('/files/:name', ctrl.download);

	app.use(router);
};

module.exports = routes;
