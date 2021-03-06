const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * @module AgendaModel
 */

/**
 * Schema de Agenda
 */
const userAgendaSchema = new Schema({
	day: { type: String, default: "0" },
	title: { type: String, default: "0" },
	hour: { type: String, default: "0" },
	hourEnd: { type: String, default: "0" },
	users: [Object],
	peakCount: { type: String, default: "0" },
	peakTime: { type: String, default: "0" },
	method: { type: String, default: "0" },
});

module.exports = mongoose.model("UserAgenda", userAgendaSchema);
