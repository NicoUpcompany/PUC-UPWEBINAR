const Event = require("../models/event");
const moment = require("moment");
require("moment/locale/es");

/**
 * @module EventController
 */

/**
 * Guarda en la bd los datos de un evento
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function newEvent(req, res) {
	const { conectionType, page, action, description, userId } = req.body;

	const conectionTime = moment().format();

	const event = new Event();
	event.conectionType = conectionType;
	event.conectionTime = conectionTime;
	event.page = page;
	event.action = action;
	event.description = description;
	event.user = userId;
	event.save((err, eventStored) => {
		if (err) {
			res.status(400).send({ ok: false, message: "Error de servidor" });
		} else {
			if (!eventStored) {
				res.status(500).send({ ok: false, message: "Error al crear el evento" });
			} else {
				res.status(200).send({ ok: true, message: "Registro exitoso" });
			}
		}
	});
}

/**
 * Retorna todos los eventos existentes
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function getEvent(req, res) {
	Event.find({})
		.populate("user", "email")
		.exec((err, eventStored) => {
			if (err) {
				res.status(400).send({ ok: false, message: "Error de servidor" });
			} else {
				if (!eventStored) {
					res.status(404).send({ ok: false, eventos: [] });
				} else {
					res.status(200).send({ ok: true, eventos: eventStored });
				}
			}
		});
}

module.exports = {
	newEvent,
	getEvent,
};
