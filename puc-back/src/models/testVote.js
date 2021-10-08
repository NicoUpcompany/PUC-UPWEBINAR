const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * @module TestModel
 */

/**
 * Schema de Evaluación
 */
const testVoteSchema = new Schema({
	question1: { type: Number, required: true},
	question2: { type: Number, default:0},
	question3: {type: Number, default: 0},
	question4: {type: Number, default: 0},
	question5: {type: Number, default: 0},
	question6: {type: Number, default: 0},
	question7: {type: Number, default: 0},
	question8: {type: Number, default: 0},
	question9: {type: Number, default: 0},
	question10: {type: Number, default: 0},
	question11: {type: Number, default: 0},
	question12: {type: Number, default: 0},
	question13: {type: Number, default: 0},
	question14: {type: Number, default: 0},
	question15: {type: Number, default: 0},
	question16: {type: Number, default: 0},
	question17: {type: Number, default: 0},
	question18: {type: Number, default: 0},
	question19: {type: Number, default: 0},
	question20: {type: Number, default: 0},
	question21: {type: Number, default: 0},
	question22: {type: Number, default: 0},
	question23: {type: Number, default: 0},
	question24: {type: Number, default: 0},
	question25: {type: Number, default: 0},
	question26: {type: Number, default: 0},
	question27: {type: Number, default: 0},
	question28: {type: Number, default: 0},
	question29: {type: Number, default: 0},
	question30: {type: Number, default: 0},
    user: { type: Schema.Types.ObjectId, ref: "User", default: null, unique: true },
	time: { type: String, required: true },
});

module.exports = mongoose.model("TestVote", testVoteSchema);
