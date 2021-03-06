const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "asDHYdsvCRGSCdPUChgbvASVBGFDcszxbVCAvds";

/**
 * @module Middleware
 */

/**
 * Middleware para protejer rutas que necesitan un token como cabecera
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
exports.ensureAuth = (req, res, next) => {
	if (!req.headers.authorization) {
		return res.status(403).send({
			ok: false,
			message: "La peticion no tiene la cabecera de Autenticacion.",
		});
	}

	const token = req.headers.authorization.replace(/['"]+/g, "");
	let payload;

	try {
		payload = jwt.decode(token, SECRET_KEY);

		if (payload.exp <= moment().unix()) {
			return res.status(404).send({ ok: false, message: "El token ha expirado." });
		}
	} catch (ex) {
		return res.status(404).send({ ok: false, message: "Token invalido." });
	}
	req.user = payload;
	next();
};
