require("dotenv").config();
const nodemailer = require("nodemailer");
const moment = require("moment");
require("moment/locale/es");

const jwt = require("../services/jwt");
const User = require("../models/user");

/**
 * @module UserController
 */

const upEmail = process.env.EMAIL;
const upPassword = process.env.PASSWORD_EMAIL;

/** 
 * Objeto de credenciales del mailing
 * @typedef {Object} transporter
 * @property {string} service Dominio del correo
 * @property {Object} auth Usuario y contraseña mailing
 * @property {Object} tls rejectUnauthorized - No falle en certificados inválidos
*/
const transporter = nodemailer.createTransport({
	service: "Gmail",
	auth: {
		user: upEmail,
		pass: upPassword,
	},
	tls: {
		rejectUnauthorized: false,
	},
});

/**
 * Registro de usuario
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function signUp(req, res) {
	let { email } = req.body;

	const signUpTime = moment().format();

	const user = new User();
	user.email = email.toString().toLowerCase();
	user.signUpTime = signUpTime;
	user.save((err, userStored) => {
		if (err) {
			console.log(err);
			res.status(400).send({ ok: false, message: "El usuario ya fue registrado" });
		} else {
			if (!userStored) {
				res.status(500).send({ ok: false, message: "Error al crear el usuario" });
			} else {
				const mailOptions = {
					from: `Escuela de Medicina <${upEmail}>`,
					to: userStored.email,
					subject: "Gracias por registrarte al evento PUC",
					text: "Gracias por registrarte al evento PUC",
					html: `Gracias por registrarte al evento PUC`,
				};
				transporter.sendMail(mailOptions, function (error, info) {
					if (error) {
						res.status(500).send({ ok: false, message: "Error del servidor" });
					} else {
						res.status(200).send({ ok: true, userId: userStored.id });
					}
				});
			}
		}
	});
}

/**
 * Inicio de sesión
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function signIn(req, res) {
	let { email } = req.body;

	email = email.toString().toLowerCase();
	const signInTime = moment().format();

	User.findOne({ email }, (err, userStored) => {
		if (err) {
			res.status(500).send({ ok: false, message: "Error del servidor" });
		} else {
			if (!userStored) {
				res.status(404).send({ ok: false, message: "Usuario no encontrado" });
			} else {
				if (!userStored.active) {
					res.status(403).send({ ok: false, message: "Ingreso no permitido" });
				} else {
					userStored.signInTime = signInTime;
					User.findByIdAndUpdate({ _id: userStored.id }, userStored, (err, userUpdate) => {
						if (err) {
							res.status(500).send({ ok: false, message: "Error del servidor" });
						} else {
							if (!userUpdate) {
								res.status(404).send({ ok: false, message: "No se ha encontrado el usuario" });
							} else {
								res.status(200).send({
									ok: true,
									accessToken: jwt.createAccessToken(userUpdate),
									refreshToken: jwt.createRefreshToken(userUpdate),
								});
							}
						}
					});
				}
			}
		}
	});
}

/**
 * Inicio de sesión (Admin)
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function signInAdmin(req, res) {
	const { email } = req.body;

	const signInTime = moment().format();

	User.findOne({ email }, (err, userStored) => {
		if (err) {
			res.status(500).send({ ok: false, message: "Error del servidor" });
		} else {
			if (!userStored) {
				res.status(404).send({ ok: false, message: "Usuario no encontrado" });
			} else {
				if (userStored.role !== "Admin") {
					res.status(403).send({ ok: false, message: "No eres administrador" });
				} else {
					userStored.signInTime = signInTime;
					User.findByIdAndUpdate({ _id: userStored.id }, userStored, (err, userUpdate) => {
						if (err) {
							res.status(500).send({ ok: false, message: "Error del servidor" });
						} else {
							if (!userUpdate) {
								res.status(404).send({ ok: false, message: "No se ha encontrado el usuario" });
							} else {
								res.status(200).send({
									ok: true,
									accessToken: jwt.createAccessToken(userStored),
									refreshToken: jwt.createRefreshToken(userStored),
								});
							}
						}
					});
				}
			}
		}
	});
}

/**
 * Retorna todos los usuarios con estado ``active`` en true
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function getUsers(req, res) {
	User.find({ active: { $ne: false } }).then((users) => {
		if (!users) {
			res.status(404).send({ ok: false, message: "No se ha encontrado ningún usuario" });
		} else {
			res.status(200).send({ ok: true, users });
		}
	});
}

/**
 * Actualiza el campo ``waitingRoomTime``
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function updateWaitingRoomTime(req, res) {
	
	const { email, idSocket } = req.body;

	console.log(idSocket);

	const waitingRoomTime = moment().format();
	User.findOne({ email }, (err, userStored) => {
		if (err) {
			res.status(500).send({ ok: false, message: "Error del servidor" });
		} else {
			if (!userStored) {
				res.status(404).send({ ok: false, message: "Usuario no encontrado" });
			} else {
				userStored.waitingRoomTime = waitingRoomTime;
				userStored.idSocket = idSocket;
				User.findByIdAndUpdate({ _id: userStored.id }, userStored, (err, userUpdate) => {
					if (err) {
						res.status(500).send({ ok: false, message: "Error del servidor" });
					} else {
						if (!userUpdate) {
							res.status(404).send({ ok: false, message: "No se ha encontrado el usuario" });
						} else {
							res.status(200).send({
								ok: true,
								message: "Usuario actualizado",
								user: userStored
							});
						}
					}
				});
			}
		}
	});
}

/**
 * Actualiza el campo ``streamTime``
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function updateStreamTime(req, res) {
	const { email } = req.body;

	const streamTime = moment().format();

	User.findOne({ email }, (err, userStored) => {
		if (err) {
			res.status(500).send({ ok: false, message: "Error del servidor" });
		} else {
			if (!userStored) {
				res.status(404).send({ ok: false, message: "Usuario no encontrado" });
			} else {
				userStored.streamTime = streamTime;
				User.findByIdAndUpdate({ _id: userStored.id }, userStored, (err, userUpdate) => {
					if (err) {
						res.status(500).send({ ok: false, message: "Error del servidor" });
					} else {
						if (!userUpdate) {
							res.status(404).send({ ok: false, message: "No se ha encontrado el usuario" });
						} else {
							res.status(200).send({
								ok: true,
								message: "Usuario actualizado",
							});
						}
					}
				});
			}
		}
	});
}

/**
 * Cambia el rol del usuario
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function changeRole(req, res) {
	const { id } = req.params;

	User.findById({ _id: id }, (err, userStored) => {
		if (err) {
			res.status(500).send({ ok: false, message: "Error del servidor" });
		} else {
			if (!userStored) {
				res.status(404).send({ ok: false, message: "Usuario no encontrado" });
			} else {
				if (userStored.role === "Admin") {
					userStored.role = "User";
				} else {
					userStored.role = "Admin";
				}
				User.findByIdAndUpdate({ _id: userStored.id }, userStored, (err, userUpdate) => {
					if (err) {
						res.status(500).send({ ok: false, message: "Error del servidor" });
					} else {
						if (!userUpdate) {
							res.status(404).send({ ok: false, message: "No se ha encontrado el usuario" });
						} else {
							res.status(200).send({
								ok: true,
								message: "Usuario actualizado",
							});
						}
					}
				});
			}
		}
	});
}

/**
 * Actualiza todos los campos del usuario
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function updateUser(req, res) {
	let userData = req.body;
	const params = req.params;

	User.findByIdAndUpdate({ _id: params.id }, userData, (err, userUpdate) => {
		if (err) {
			res.status(500).send({ message: "Error del servidor" });
		} else {
			if (!userUpdate) {
				res.status(404).send({ message: "No se ha encontrado el usuario" });
			} else {
				res.status(200).send({ message: "Usuario actualizado" });
			}
		}
	});
}

/**
 * Cambia el estado ``active`` a false
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function deleteUser(req, res) {
	const { id } = req.params;

	User.findById({ _id: id }, (err, userStored) => {
		if (err) {
			res.status(500).send({ ok: false, message: "Error del servidor" });
		} else {
			if (!userStored) {
				res.status(404).send({ ok: false, message: "Usuario no encontrado" });
			} else {
				userStored.active = false;
				User.findByIdAndUpdate({ _id: userStored.id }, userStored, (err, userUpdate) => {
					if (err) {
						res.status(500).send({ ok: false, message: "Error del servidor" });
					} else {
						if (!userUpdate) {
							res.status(404).send({ ok: false, message: "No se ha encontrado el usuario" });
						} else {
							res.status(200).send({
								ok: true,
								message: "Usuario eliminado",
							});
						}
					}
				});
			}
		}
	});
}

/**
 * Busca un usuario por id
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function searchById(req, res) {
	const { id } = req.params;

	User.findById({ _id: id }, (err, userStored) => {
		if (err) {
			res.status(500).send({ ok: false, message: "Error del servidor" });
		} else {
			if (!userStored) {
				res.status(404).send({ ok: false, message: "Usuario no encontrado" });
			} else {
				res.status(200).send({
					ok: true,
					user: userStored,
				});
			}
		}
	});
}

module.exports = {
	signUp,
	signIn,
	signInAdmin,
	getUsers,
	updateWaitingRoomTime,
	updateStreamTime,
	changeRole,
	updateUser,
	deleteUser,
	searchById,
};
