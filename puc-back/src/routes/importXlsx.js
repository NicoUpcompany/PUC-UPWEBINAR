const express = require("express");
const ImportXlsxController = require("../controllers/importXlsx");

const api = express.Router();

/**
 * @module XlsxRoutes
 */

/**
 * Importar datos desde un xlsx
 * 
 * @name xlsxToJson
 * @path {POST} /import-xlsx
 */
api.post("/import-xlsx", ImportXlsxController.xlsxToJson);

module.exports = api;