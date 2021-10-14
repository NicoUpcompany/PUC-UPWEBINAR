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
	vote3: {type: Boolean, default: false},
	vote4: {type: Boolean, default: false},
	vote5: {type: Boolean, default: false},
	vote6: {type: Boolean, default: false},
	vote7: {type: Boolean, default: false},
	vote8: {type: Boolean, default: false},
	vote9: {type: Boolean, default: false},
	vote10: {type: Boolean, default: false},
	vote11: {type: Boolean, default: false},
	vote12: {type: Boolean, default: false},
	vote13: {type: Boolean, default: false},
	vote14: {type: Boolean, default: false},
	vote15: {type: Boolean, default: false},
	vote16: {type: Boolean, default: false},
	vote17: {type: Boolean, default: false},
	vote18: {type: Boolean, default: false},
	vote19: {type: Boolean, default: false},
	vote20: {type: Boolean, default: false},
	vote21: {type: Boolean, default: false},
	vote22: {type: Boolean, default: false},
	vote23: {type: Boolean, default: false},
	vote24: {type: Boolean, default: false},
	vote25: {type: Boolean, default: false},
	vote26: {type: Boolean, default: false},
	vote27: {type: Boolean, default: false},
	vote28: {type: Boolean, default: false},
	vote29: {type: Boolean, default: false},
	vote30: {type: Boolean, default: false},
	vote31: {type: Boolean, default: false},
	vote32: {type: Boolean, default: false},
	time: { type: String, default: "0" },
});

module.exports = mongoose.model("TestStatus", testStatusSchema);
