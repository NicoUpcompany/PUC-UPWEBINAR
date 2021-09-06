const express = require("express");
const QuestionController = require("../controllers/question");

const md_auth = require("../middleware/authenticated");

const api = express.Router();

/**
 * @module QuestionRoutes
 */

/**
 * Crea una pregunta
 *
 * @name makeQuestion
 * @path {POST} /question
 */
api.post("/question", [md_auth.ensureAuth], QuestionController.makeQuestion);
/**
 * Obtiene todas las preguntas
 *
 * @name getQuestions
 * @path {GET} /question
 */
api.get("/question", [md_auth.ensureAuth], QuestionController.getQuestions);
/**
 * Obtiene todas las preguntas de un usuario
 *
 * @name getUserQuestion
 * @path {GET} /question/:id
 */
api.get("/question/:id", [md_auth.ensureAuth], QuestionController.getUserQuestion);
/**
 * Desactiva una pregunta
 *
 * @name deleteQuestion
 * @path {DELETE} /question/:id
 */
api.delete("/question/:id", [md_auth.ensureAuth], QuestionController.deleteQuestion);

module.exports = api;
