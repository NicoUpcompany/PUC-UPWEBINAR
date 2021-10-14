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
	const { active, 
		vote1, 
		vote2, 
		vote3,
		vote4,
		vote5,
		vote6,
		vote7,
		vote8,
		vote9,
		vote10,
		vote11,
		vote12,
		vote13,
		vote14,
		vote15,
		vote16,
		vote17,
		vote18,
		vote19,
		vote20,
		vote21,
		vote22,
		vote23,
		vote24,
		vote25,
		vote26,
		vote27,
		vote28,
		vote29,
		vote30,
		vote31,
		vote32,
		id
	} = req.body
	const time = moment().format();

	const newStatus = {
		vote1: vote1,
		vote2: vote2,
		vote3: vote3,
		vote4: vote4,
		vote5: vote5,
		vote6: vote6,
		vote7: vote7,
		vote8: vote8,
		vote9: vote9,
		vote10: vote10,
		vote11: vote11,
		vote12: vote12,
		vote13: vote13,
		vote14: vote14,
		vote15: vote15,
		vote16: vote16,
		vote17: vote17,
		vote18: vote18,
		vote19: vote19,
		vote20: vote20,
		vote21: vote21,
		vote22: vote22,
		vote23: vote23,
		vote24: vote24,
		vote25: vote25,
		vote26: vote26,
		vote27: vote27,
		vote28: vote28,
		vote29: vote29,
		vote30: vote30,
		vote31: vote31,
		vote32: vote32,
		time : time

	}
	if (active !== undefined) {
		testStatus.active= active
	}

	TestStatus.findByIdAndUpdate(id, newStatus,(err, testStatusStored) => {
		if (err) {
			res.status(500).send({ ok: false, message: "Error del servidor" });
		} else {
			if (!testStatusStored) {
				res.status(404).send({ ok: false, message: "Error al activar la evaluación" });
			} else {
				// console.log(testStatusStored);
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
					res.status(200).send({ ok: true, testStatus: testStatusStored });
				}
			}
		});
}

module.exports = {
	changeStatus,
	getTestStatus
};
