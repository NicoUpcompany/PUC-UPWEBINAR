const mongoose = require("mongoose");

const Schema = mongoose.Schema;

/**
 * @module TestModel
 */

/**
 * Schema de Evaluación
 */
const testSchema = new Schema({
	question1: { type: Number, required: true },
	question2: { type: Number, required: true },
	question3: { type: Number, required: true },
	question4: { type: Number, required: true },
	question5: { type: Number, required: true },
	question6: { type: Number, required: true },
	question7: { type: Number, required: true },
	question8: { type: Number, required: true },
	question9: { type: Number, required: true },
	question10: { type: Number, required: true },
	question11: { type: Number, required: true },
	question12: { type: Number, required: true },
	question13: { type: Number, required: true },
	question14: { type: Number, required: true },
	question15: { type: Number, required: true },
	question16: { type: Number, required: true },
	question17: { type: Number, required: true },
	question18: { type: Number, required: true },
	question19: { type: Number, required: true },
	question20: { type: Number, required: true },
	question21: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", default: null, unique: true },
	time: { type: String, required: true },
});

module.exports = mongoose.model("Test", testSchema);
