const express = require("express");
const TestStatusontroller = require("../controllers/testStatus");

const md_auth = require("../middleware/authenticated");

const api = express.Router();

/**
 * @module TestStatusRoutes
 */

/**
 * Cambia el estado de la evaluación
 *
 * @name changeStatus
 * @path {POST} /test-status
 */
api.put("/test-status", [md_auth.ensureAuth], TestStatusontroller.changeStatus);
/**
 * Retorna el estado de la evaluación
 *
 * @name changeStatus
 * @path {GET} /test-status
 */
api.get("/test-status", [md_auth.ensureAuth], TestStatusontroller.getTestStatus);

module.exports = api;
