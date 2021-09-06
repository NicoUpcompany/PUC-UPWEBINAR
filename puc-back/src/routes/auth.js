const express = require("express");

const AuthController = require("../controllers/auth");

const api = express.Router();

/**
 * @module AuthRoutes
 */

/**
 * Refresca un token de forma automática
 * 
 * @name refreshAccessToken
 * @path {POST} /refresh-access-token
 */
api.post("/refresh-access-token", AuthController.refreshAccessToken);

module.exports = api;
