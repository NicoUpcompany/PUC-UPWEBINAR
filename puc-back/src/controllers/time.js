const momentTimezone = require("moment-timezone");
const moment = require("moment");
require("moment/locale/es");

/**
 * @module TimeController
 */

/**
 * Retorna la hora actual y el horario del evento
 * @param {Object} req 
 * @param {Object} res 
 * @returns {Object} estado ``ok`` true/false, ``time`` y ``eventTime``
 */
function getTime(req, res) {
	const time = moment().format();
	const eventTime = momentTimezone.tz("2021-10-14T08:00:00", "America/Santiago");
	res.status(200).send({ ok: true, time, eventTime });
}

module.exports = {
	getTime,
};
