const Question = require("../models/question");
const User = require('../models/user');
const moment = require("moment");
require("moment/locale/es");

/**
 * @module QuestionController
 */

/**
 * Guarda en la bd los datos de una pregunta
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function makeQuestion(req, res) {
	const { user, question } = req.body;
	const questionObj = new Question();

	const time = moment().format();

	questionObj.user = user;

	console.log(user);
	questionObj.question = question;
	questionObj.time = time;

	questionObj.save((err, questionMaked) => {
		if (err) {
			res.status(500).send({ ok: false, message: "Error del servidor" });
		} else {
			if (!questionMaked) {
				res.status(404).send({ ok: false, message: "Error al hacer pregunta" });
			} else {
				res.status(200).send({ ok: true, message: "Pregunta enviada" });
			}
		}
	});
}

/**
 * Retorna todas las preguntas con estado ``active`` en true
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function getQuestions(req, res) {
	Question.find({ active: { $ne: false } })
		.populate("user")
		.sort({ order: "asc" })
		.exec((err, questionStored) => {
			if (err) {
				res.status(500).send({ ok: false, message: "Error del servidor" });
			} else {
				if (!questionStored) {
					res.status(404).send({ ok: false, preguntas: [] });
				} else {
					console.log(questionStored);
					res.status(200).send({ ok: true, preguntas: questionStored });
				}
			}
		});
}

/**
 * Retorna todas las preguntas realizadas por un usuario filtrando por id
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function getUserQuestion(req, res) {
	const { id } = req.params;

	Question.findById({ user: id })
		.populate("user", "email")
		.sort({ order: "asc" })
		.exec((err, questionStored) => {
			if (err) {
				res.status(500).send({ ok: false, message: "Error del servidor" });
			} else {
				if (!questionStored) {
					res.status(404).send({ ok: false, preguntas: [] });
				} else {
					res.status(200).send({ ok: true, preguntas: questionStored });
				}
			}
		});
}

/**
 * Cambia el estado de una pregunta (``active`` => false)
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function deleteQuestion(req, res) {
	const { id } = req.params;

	Question.findById({ _id: id }, (err, questionStored) => {
		if (err) {
			res.status(500).send({ ok: false, message: "Error del servidor" });
		} else {
			if (!questionStored) {
				res.status(404).send({ ok: false, message: "Usuario no encontrado" });
			} else {
				questionStored.active = false;
				Question.findByIdAndUpdate({ _id: questionStored.id }, questionStored, (err, questionUpdate) => {
					if (err) {
						res.status(500).send({ ok: false, message: "Error del servidor" });
					} else {
						if (!questionUpdate) {
							res.status(404).send({ ok: false, message: "No se ha encontrado la pregunta" });
						} else {
							res.status(200).send({
								ok: true,
								message: "Pregunta eliminada",
							});
						}
					}
				});
			}
		}
	});
}

module.exports = {
	makeQuestion,
	getQuestions,
	getUserQuestion,
	deleteQuestion,
};
