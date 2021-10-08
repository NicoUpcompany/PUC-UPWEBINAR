const express = require("express");
const VoteController = require("../controllers/vote");

const md_auth = require("../middleware/authenticated");

const api = express.Router();

/**
 * @module VoteRoutes
 */

/**
 * Guarda una votación
 *
 * @name saveVote
 * @path {POST} /vote
 */
api.post("/vote", [md_auth.ensureAuth], VoteController.saveVote2);
/**
 * Retorna las votaciones con porcentaje
 *
 * @name getClientVotes
 * @path {GET} /vote-client
 */
api.get("/vote-client", [md_auth.ensureAuth], VoteController.getClientVotes);
/**
 * Retorna las votaciones (Admin)
 *
 * @name getVotes
 * @path {GET} /vote
 */
api.get("/vote/:idUser", [md_auth.ensureAuth], VoteController.getVotes);

module.exports = api;
