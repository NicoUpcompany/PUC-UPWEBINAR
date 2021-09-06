const express = require("express");
const UserAgendaController = require("../controllers/userAgenda");

const md_auth = require("../middleware/authenticated");

const api = express.Router();

/**
 * @module AgendaRoutes
 */

/**
 * Retorna los usuarios de una charla
 *
 * @name getUsersByAgenda
 * @path {GET} /user-agenda
 */
api.get("/user-agenda", [md_auth.ensureAuth], UserAgendaController.getUsersByAgenda);

module.exports = api;
