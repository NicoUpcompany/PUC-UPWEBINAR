const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * @module EventModel
 */

/**
 * Schema de Evento
 */
const eventSchema = new Schema({
	conectionType: { type: String, default: "" },
	conectionTime: { type: String, default: "" },
	page: { type: String, default: "" },
	action: { type: String, default: "" },
	description: { type: String, default: "" },
	user: { type: Schema.Types.ObjectId, ref: "User", default: null },
});

module.exports = mongoose.model("Event", eventSchema);
