const express = require("express");
const RealTimeController = require("../controllers/realTime");

const api = express.Router();

/**
 * @module RealTimeRoutes
 */

/**
 * Guarda los datos cuando un usuario se desconecta
 *
 * @name newRealTimeData
 * @path {POST} /real-time
 */
api.post("/real-time", RealTimeController.newRealTimeData);
/**
 * Obtiene el historial de conexiones
 *
 * @name getRealTimeData
 * @path {GET} /real-time
 */
api.get("/real-time", RealTimeController.getRealTimeData);

module.exports = api;
