const Vote = require("../models/vote2");
const jwt = require("../services/jwt");
const User = require("../models/user");
const moment = require("moment");
const TestVote = require('../models/testVote');
require("moment/locale/es");

/**
 * @module VoteController
 */

/**
 * Guarda en la bd los datos de una votación
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */

/**
 * Guarda en la bd los datos de la votación
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function saveVote2(req, res) {

	const {question, userID } = req.body;
	const time = moment().format();
	const vote = new Vote();
	vote.question = question;
	vote.user = userID;
	vote.time = time;

	console.log(question, userID);

	vote.save((err, voteStored) => {
		if (err) {
			res.status(500).send({ ok: false, message: "Error del servidor" });
		} else {
			if (!voteStored) {
				res.status(404).send({ ok: false, message: "Error al guardar la votación" });
			} else {
				User.findById({ _id: userID }, (err, userStored) => {
					if (err) {
						res.status(500).send({ ok: false, message: "Error del servidor" });
					} else {
						if (!userStored) {
							res.status(404).send({ ok: false, message: "Usuario no encontrado" });
						} else {
							userStored.vote = true;
							User.findByIdAndUpdate({ _id: userStored.id }, userStored, (err, userUpdate) => {
								if (err) {
									res.status(500).send({ ok: false, message: "Error del servidor" });
								} else {
									if (!userUpdate) {
										res.status(404).send({ ok: false, message: "No se ha encontrado el usuario" });
									} else {
										res.status(200).send({
											ok: true,
											message: "Voto guardado",
											accessToken: jwt.createAccessToken(userStored),
											refreshToken: jwt.createRefreshToken(userStored),
										});
									}
								}
							});
						}
					}
				});
			}
		}
	})
}


function saveVote(req, res) {
	const { option, userID } = req.body;
	const vote = new Vote();

	const time = moment().format();

	vote.option = option;
	vote.user = userID;
	vote.time = time;

	vote.save((err, voteStored) => {
		if (err) {
			res.status(500).send({ ok: false, message: "Error del servidor" });
		} else {
			if (!voteStored) {
				res.status(404).send({ ok: false, message: "Error al guardar votación" });
			} else {
				User.findById({ _id: userID }, (err, userStored) => {
					if (err) {
						res.status(500).send({ ok: false, message: "Error del servidor" });
					} else {
						if (!userStored) {
							res.status(404).send({ ok: false, message: "Usuario no encontrado" });
						} else {
							userStored.vote = true;
							User.findByIdAndUpdate({ _id: userStored.id }, userStored, (err, userUpdate) => {
								if (err) {
									res.status(500).send({ ok: false, message: "Error del servidor" });
								} else {
									if (!userUpdate) {
										res.status(404).send({ ok: false, message: "No se ha encontrado el usuario" });
									} else {
										res.status(200).send({
											ok: true,
											message: "Voto guardado",
											accessToken: jwt.createAccessToken(userStored),
											refreshToken: jwt.createRefreshToken(userStored),
										});
									}
								}
							});
						}
					}
				});
			}
		}
	});
}

/**
 * Obtiene todas las votaciones (Admin)
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function getVotes(req, res) {
	Vote.find({})
		.populate("user", "email")
		.sort({ order: "asc" })
		.exec((err, voteStored) => {
			if (err) {
				res.status(500).send({ ok: false, message: "Error del servidor" });
			} else {
				if (!voteStored) {
					res.status(404).send({ ok: false, votes: [] });
				} else {
					res.status(200).send({ ok: true, votes: voteStored });
				}
			}
		});
}

/**
 * Obtiene todas las votaciones (Cliente) con porcentajes
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function getClientVotes(req, res) {
	TestVote.find({})
		.populate("user", "email")
		.sort({ order: "asc" })
		.exec((err, voteStored) => {
			if (err) {
				res.status(500).send({ ok: false, message: "Error del servidor" });
			} else {
				if (!voteStored) {
					res.status(404).send({ ok: false, votes: [] });
				} else {
					let option1Count = 0;
					let option2Count = 0;
					let option3Count = 0;
					let option4Count = 0;
					voteStored.forEach((element) => {
						//Pregunta 1
						if (element.question1 === 1) {
							option1Count = option1Count + 1;
						}
						if (element.question1 === 2) {
							option2Count = option2Count + 1;
						}
						if (element.question1 === 3) {
							option3Count = option3Count + 1;
						}
						if (element.question1 === 4) {
							option4Count = option4Count + 1
						}
					});
					let total = option1Count + option2Count + option3Count + option4Count;
					let percentage1 = 0;
					let percentage2 = 0;
					let percentage3 = 0;
					let percentage4 = 0;

					if (option1Count > 0) {
						percentage1 = Math.round(((option1Count * 100) / total) * 10) / 10;
					}
					if (option2Count > 0) {
						percentage2 = Math.round(((option2Count * 100) / total) * 10) / 10;
					}
					if (option3Count > 0) {
						percentage3 = Math.round(((option3Count * 100) / total) * 10) / 10;
					}
					if (option4Count > 0) {
						percentage4 = Math.round(((option4Count * 100) / total) * 10) / 10;
					}
					// res.status(200).send({ ok: true, total, option1: percentage1, option2: percentage2 });
					res.status(200).send({
						ok: true, total,
						opt1q1: percentage1,
						opt2q1: percentage2,
						opt3q1: percentage3,
						opt4q1: percentage4
					})
				}
			}
		});
}

//Borrar!!
function getClientVotes2(req, res) {
	Vote.find({})
		.populate("user", "email")
		.sort({ order: "asc" })
		.exec((err, voteStored) => {
			if (err) {
				res.status(500).send({ ok: false, message: "Error del servidor" });
			} else {
				if (!voteStored) {
					res.status(404).send({ ok: false, votes: [] });
				} else {
					console.log(voteStored);
					let option1Count = 0;
					let option2Count = 0;
					let option3Count = 0;
					let option4Count = 0;
					voteStored.forEach((element) => {
						console.log(element);
						if (element.option === 1) {
							option1Count = option1Count + 1;
						}
						if (element.option === 2) {
							option2Count = option2Count + 1;
						}
					});
					let total = option1Count + option2Count + option3Count + option4Count;
					let percentage1 = 0;
					let percentage2 = 0;
					let percentage3 = 0;
					let percentage4 = 0;
					if (option1Count > 0) {
						percentage1 = Math.round(((option1Count * 100) / total) * 10) / 10;
					}
					if (option2Count > 0) {
						percentage2 = Math.round(((option2Count * 100) / total) * 10) / 10;
					}
					if (option3Count > 0) {
						percentage3 = Math.round(((option3Count * 100) / total) * 10) / 10;
					}
					if (option4Count > 0) {
						percentage4 = Math.round(((option4Count * 100) / total) * 10) / 10;
					}
					res.status(200).send({ ok: true, total, option1: percentage1, option2: percentage2 });
				}
			}
		});
}



module.exports = {
	saveVote,
	saveVote2,
	getVotes,
	getClientVotes,
};
