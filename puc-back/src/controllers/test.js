const Test = require("../models/test");
const jwt = require("../services/jwt");
const User = require("../models/user");
const moment = require("moment");
const momentTimezone = require("moment-timezone");
require("moment/locale/es");

/**
 * @module TestController
 */

/**
 * Guarda en la bd los datos de una evaluación
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function saveTest(req, res) {
	const { question1,
		question2,
		question3,
		question4,
		question5,
		question6,
		question7,
		question8,
		question9,
		question10,
		question11,
		question12,
		question13,
		question14,
		question15,
		question16,
		question17,
		question18,
		question19,
		question20,
		question21,
		note,
		ptos,
		userID } = req.body;
	const test = new Test();

	const time = moment().format();

	test.question1 = question1;
	test.question2 = question2;
	test.question3 = question3;
	test.question4 = question4;
	test.question5 = question5;
	test.question6 = question6;
	test.question7 = question7;
	test.question8 = question8;
	test.question9 = question9;
	test.question10 = question10;
	test.question11 = question11;
	test.question12 = question12;
	test.question13 = question13;
	test.question14 = question14;
	test.question15 = question15;
	test.question16 = question16;
	test.question17 = question17;
	test.question18 = question18;
	test.question19 = question19;
	test.question20 = question20;
	test.question21 = question21;
	test.user = userID;
	test.time = time;
	// test.note = note;
	// test.ptos = ptos;

	 
	test.save((err, testStored) => {
		if (err) {
			console.log(err);
			res.status(500).send({ ok: false, message: "Error del servidor 1" });
		} else {
			if (!testStored) {
				res.status(404).send({ ok: false, message: "Error al guardar la evaluación" });
			} else {
				User.findById({ _id: userID }, (err, userStored) => {
					if (err) {
						res.status(500).send({ ok: false, message: "Error del servidor 2" });
					} else {
						if (!userStored) {
							res.status(404).send({ ok: false, message: "Usuario no encontrado" });
						} else {
							userStored.test = true;
							userStored.note = note;
							userStored.ptos = ptos;
							userStored.finishTest = time;
							User.findByIdAndUpdate({ _id: userStored.id }, userStored, (err, userUpdate) => {
								if (err) {
									res.status(500).send({ ok: false, message: "Error del servidor 3" });
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


function startTest(req, res) {

	const {userID} = req.body;

	const time = moment().format();
	const timeFinish = moment().add(60,'m').format();
 
	const eventTime = momentTimezone.tz(timeFinish, "America/Santiago");

	User.findById({ _id: userID }, (err, userStored) => {
		if (err) {
			res.status(500).send({ ok: false, message: "Error del servidor 2" });
		} else {
			if (!userStored) {
				res.status(404).send({ ok: false, message: "Usuario no encontrado" });
			} else {
				userStored.startTest = true;
				userStored.finishTest = timeFinish;
				User.findByIdAndUpdate({ _id: userStored.id }, userStored, (err, userUpdate) => {
					if (err) {
						res.status(500).send({ ok: false, message: "Error del servidor 3" });
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
	startTest
};
