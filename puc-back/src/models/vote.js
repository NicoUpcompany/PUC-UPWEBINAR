const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * @module VoteModel
 */

/**
 * Schema de Votos
 */
const voteSchema = new Schema({
	option: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", default: null, unique: true },
	time: { type: String, required: true },
});

module.exports = mongoose.model("Vote", voteSchema);
 