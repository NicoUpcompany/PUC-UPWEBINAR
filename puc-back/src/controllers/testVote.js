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
	const { question1, userID } = req.body;
	const test = new Test();
	const time = moment().format();
	if(question1 === undefined){
		test.question1 = 0;
	}else{
		test.question1 = question1;
	}
	test.user = userID;
	test.time = time;
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

function updateTest(req,res) {
	const {voteId, votes} = req.body

	Test.findByIdAndUpdate({_id: voteId}, votes, (err, testStores) =>{
		if(err){
			res.status(500).send({ok: false, message: "Error del servidor"});
		}else{
			if(!testStores){
				res.status(404).send({ ok: false, message: "Error al guardar la votación" });
			}else{
				res.status(200).send({ok: true, votes: testStores, message:'Voto Guardado'});
			}
		}
	})
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
	updateTest
};
