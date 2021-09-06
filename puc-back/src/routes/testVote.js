const express = require("express");
const TestController = require("../controllers/testVote");

const md_auth = require("../middleware/authenticated");

const api = express.Router();

/**
 * @module TestRoutes
 */

/**
 * Guarda una evaluación
 *
 * @name saveTest
 * @path {POST} /test
 */
api.post("/test-vote", [md_auth.ensureAuth], TestController.saveTest);
/**
 * Obtiene todas las evaluaciones
 *
 * @name getTests
 * @path {GET} /test
 */
api.get("/test-vote", [md_auth.ensureAuth], TestController.getTests);

module.exports = api;
