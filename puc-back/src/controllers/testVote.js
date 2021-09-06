const Test = require("../models/testVote");
const jwt = require("../services/jwt");
const User = require("../models/user");
const moment = require("moment");
require("moment/locale/es");

/**
 * @module TestVoteController
 */

/**
 * Guarda en la bd los datos de una evaluación
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function saveTest(req, res) {
	const { question1, question2, userID } = req.body;
	const test = new Test();
	const time = moment().format();
	test.question1 = question1;
	test.question2 = question2;
	test.user = userID;
	test.time = time;

	console.log(question1, question2, userID);

	test.save((err, testStored) => {
		if (err) {
			res.status(500).send({ ok: false, message: "Error del servidor" });
		} else {
			if (!testStored) {
				res.status(404).send({ ok: false, message: "Error al guardar la evaluación" });
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
											message: "Respuestas enviadas",
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
 * Retorna todas las evaluaciones realizadas
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function getTests(req, res) {
	Test.find({})
		.populate("user", "email")
		.sort({ order: "asc" })
		.exec((err, testStored) => {
			if (err) {
				res.status(500).send({ ok: false, message: "Error del servidor" });
			} else {
				if (!testStored) {
					res.status(404).send({ ok: false, tests: [] });
				} else {
					res.status(200).send({ ok: true, tests: testStored });
				}
			}
		});
}

module.exports = {
	saveTest,
	getTests,
};
