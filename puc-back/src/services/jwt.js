const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "asDHYdsvCRGSCdPUChgbvASVBGFDcszxbVCAvds";

/**
 * @module JWT
 */

/**
 * Recibe un objeto usuario y retorna un token que dura 10 horas para rutas protegidas
 * @param {Object} user 
 * @returns {string} jwt
 */
exports.createAccessToken = function (user) {
	const payload = {
		id: user._id,
		email: user.email,
		role: user.role,
		vote: user.vote,
		test: user.test,
		createToken: moment().unix(),
		exp: moment().add(10, "hours").unix(),
	};

	return jwt.encode(payload, SECRET_KEY);
};

/**
 * Recibe un objeto usuario y retorna un token duradero para no relogear
 * @param {Object} user 
 * @returns {string} jwt
 */
exports.createRefreshToken = function (user) {
	const payload = {
		id: user._id,
		email: user.email,
		role: user.role,
		vote: user.vote,
		test: user.test,
		exp: moment().add(30, "days").unix(),
	};

	return jwt.encode(payload, SECRET_KEY);
};

/**
 * Recibe un token y devuelve el usuario
 * @param {string} token 
 * @returns {Object} Usuario
 */
exports.decodedToken = function (token) {
	return jwt.decode(token, SECRET_KEY, true);
};
