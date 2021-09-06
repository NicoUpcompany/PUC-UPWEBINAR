const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * @module TestModel
 */

/**
 * Schema de Evaluación
 */
const testVoteSchema = new Schema({
	question1: { type: Number, required: true },
	question2: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", default: null, unique: true },
	time: { type: String, required: true },
});

module.exports = mongoose.model("TestVote", testVoteSchema);
