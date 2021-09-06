const express = require("express");
const AgendaController = require("../controllers/agenda");

const md_auth = require("../middleware/authenticated");

const api = express.Router();

/**
 * @module AgendaStandRoutes
 */

/**
 * Agendar una reunión en un stand
 *
 * @name scheduling
 * @path {PUT} /agenda/:id
 */
api.put("/agenda/:id", [md_auth.ensureAuth], AgendaController.scheduling);
/**
 * Obtener los horarios disponibles para un stand
 *
 * @name getAgendaAvailableByDay
 * @path {POST} /agenda
 */
api.post("/agenda", [md_auth.ensureAuth], AgendaController.getAgendaAvailableByDay);
/**
 * Obtener los horarios del ejecutivo
 *
 * @name getAgendaByOwner
 * @path {POST} /agenda-owner
 */
api.post("/agenda-owner", [md_auth.ensureAuth], AgendaController.getAgendaByOwner);
/**
 * Obtener los horarios de todos los ejecutivos
 *
 * @name getAgendaAll
 * @path {GET} /agenda
 */
api.get("/agenda", [md_auth.ensureAuth], AgendaController.getAgendaAll);
/**
 * Guarda los datos guardados en un xlsx
 *
 * @name xlsxToJson
 * @path {POST} /importXlsx
 */
api.post("/importXlsx", AgendaController.xlsxToJson);
/**
 * Cambia el estado de una agenda
 *
 * @name xlsxToJson
 * @path {PUT} /change-agenda-status/:id
 */
api.put("/change-agenda-status/:id", [md_auth.ensureAuth], AgendaController.changeAgendaStatus);

module.exports = api;
