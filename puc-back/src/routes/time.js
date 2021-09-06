const express = require("express");
const TimeController = require("../controllers/time");

const api = express.Router();

/**
 * @module TimeRoutes
 */

/**
 * Obtiene la hora actual y la hora del evento
 *
 * @name getTime
 * @path {GET} /time
 */
api.get("/time", TimeController.getTime);

module.exports = api;
