const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * @module QuestionVoteModel
 */

/**
 * Schema de Votos
 */
const questionVoteSchema = new Schema({
	question: { type: String, required: true },
	time: { type: String, required: true },
	user: { type: Schema.Types.ObjectId, ref: "User", default: null },
	active: { type: Boolean, default: true },
});

module.exports = mongoose.model("QuestionVote", questionVoteSchema);