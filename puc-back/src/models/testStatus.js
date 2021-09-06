const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * @module TestStatusModel
 */

/**
 * Schema de Estado de la evaluación
 */
const testStatusSchema = new Schema({
	active: { type: Boolean, default: false },
	vote1: { type: Boolean, default: false },
	vote2: { type: Boolean, default: false },
	time: { type: String, default: "0" },
});

module.exports = mongoose.model("TestStatus", testStatusSchema);
