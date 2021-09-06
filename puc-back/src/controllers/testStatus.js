const TestStatus = require("../models/testStatus");
const moment = require("moment");
require("moment/locale/es");

/**
 * @module TestStatusController
 */

/**
 * Activa/desactiva la evaluación
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function changeStatus(req, res) {
	const { active, vote1, vote2 } = req.body;
	const testStatus = new TestStatus();
	const time = moment().format();
	if (vote1 !== undefined) {
		testStatus.vote1 = vote1
	}
	if (vote2 !== undefined) {
		testStatus.vote2 = vote2
	}
	if (active !== undefined) {
		testStatus.active= active
	}

	testStatus.time = time;

	testStatus.save((err, testStatusStored) => {
		if (err) {
			res.status(500).send({ ok: false, message: "Error del servidor" });
		} else {
			if (!testStatusStored) {
				res.status(404).send({ ok: false, message: "Error al activar la evaluación" });
			} else {
				res.status(200).send({
                    ok: true,
                    message: active ? "Evaluación activada" : "Evaluación desactivada",
                });
			}
		}
	});
}

/**
 * Retorna todos el estado de la evaluación
 * @param {Object} req 
 * @param {Object} res 
 * @returns {boolean} estado ``ok`` true/false
 */
function getTestStatus(req, res) {
	TestStatus.find({})
		.populate("user", "email")
		.sort({ order: "asc" })
		.exec((err, testStatusStored) => {
			if (err) {
				res.status(500).send({ ok: false, message: "Error del servidor" });
			} else {
				if (!testStatusStored) {
					res.status(404).send({ ok: false, testStatus: {} });
				} else {
                    // console.log(testStatusStored)
					res.status(200).send({ ok: true, testStatus: testStatusStored });
				}
			}
		});
}

module.exports = {
	changeStatus,
	getTestStatus,
};
