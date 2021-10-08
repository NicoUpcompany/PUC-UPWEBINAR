const express = require('express');
const FileController = require('../controllers/file');
const api = express.Router();


api.get("/file/:file", FileController.getFile);

module.exports = api;