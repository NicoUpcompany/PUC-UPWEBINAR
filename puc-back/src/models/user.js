const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * @module UserModel
 */

/**
 * Roles permitidos de usuario
 */
const validRoles = {
	values: ["Admin", "User"],
	message: "{VALUE} no es un rol permitido",
};

/**
 * Schema de Usuario
 */
const userSchema = Schema({
	email: { type: String, required: true, unique: true },
	role: { type: String, default: "User", enum: validRoles },
	signUpTime: { type: String, default: "0" },
	signInTime: { type: String, default: "0" },
	waitingRoomTime: { type: String, default: "0" },
	name: {type: String, default: ''},
	lastname: {type: String, default: ''},
	enterprise: {type: String, default: ''},
	streamTime: { type: String, default: "0" },
	vote: { type: Boolean, default: false },
	test: { type: Boolean, default: false },
	active: { type: Boolean, default: true },
	ptos: {type: Number, default: 0},
	note: {type: Number, default:0},
	startTest: {type: Boolean, default: false},
	aprobado: {type: Boolean, default: false},
	correctas: {type: Number, default: 0},
	finishTest: {type: String, default:"0"}
});


module.exports = mongoose.model("User", userSchema);
