const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * @module Vote2Model
 */

/**
 * Schema de Preguntas
 */
const vote2Schema = new Schema({
	question: { type: String, required: true },
	time: { type: String, required: true },
	user: { type: Schema.Types.ObjectId, ref: "User", default: null },
	active: { type: Boolean, default: true },
});

module.exports = mongoose.model("Vote2", vote2Schema);
