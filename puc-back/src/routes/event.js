const express = require("express");
const EventController = require("../controllers/event");

const md_auth = require("../middleware/authenticated");

const api = express.Router();

/**
 * @module EventRoutes
 */

/**
 * Guarda un evento
 * 
 * @name newEvent
 * @path {POST} /event
 */
api.post("/event", EventController.newEvent);
/**
 * Retorna todos los evento
 * 
 * @name newEvent
 * @path {GET} /event
 */
api.get("/event", [md_auth.ensureAuth], EventController.getEvent);

module.exports = api;
