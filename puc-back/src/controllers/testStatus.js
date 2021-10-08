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
		vote30
	} = req.body
	console.log(vote1)
	console.log(vote2)
	console.log(vote3)
	console.log(vote4)
	console.log(vote5)
	console.log(vote6)
	console.log(vote7)
	console.log(vote8)
	console.log(vote9)
	console.log(vote10)
	console.log(vote11)
	console.log(vote12)
	console.log(vote13)
	console.log(vote14)
	console.log(vote15)
	console.log(vote16)
	console.log(vote17)
	console.log(vote16)
	console.log(vote17)
	console.log(vote18)
	console.log(vote19)
	console.log(vote20)
	console.log(vote21)
	console.log(vote22)
	console.log(vote23)
	console.log(vote24)
	console.log(vote25)
	console.log(vote26)
	console.log(vote27)
	console.log(vote28)
	console.log(vote29)
	console.log('---------')
	const testStatus = new TestStatus();
	const time = moment().format();
	testStatus.vote1 = vote1;
	testStatus.vote2 = vote2;
	testStatus.vote3 = vote3;
	testStatus.vote4 = vote4;
	testStatus.vote5 = vote5;
	testStatus.vote6 = vote6;
	testStatus.vote7 = vote7;
	testStatus.vote8 = vote8;
	testStatus.vote9 = vote9;
	testStatus.vote11 = vote11;
	testStatus.vote12 = vote12;
	testStatus.vote13 = vote13;
	testStatus.vote14 = vote14;
	testStatus.vote15 = vote15;
	testStatus.vote16 = vote16;
	testStatus.vote17 = vote17;
	testStatus.vote18 = vote18;
	testStatus.vote19 = vote19;
	testStatus.vote20 = vote20;
	testStatus.vote21 = vote21;
	testStatus.vote22 = vote22;
	testStatus.vote23 = vote23;
	testStatus.vote24 = vote24;
	testStatus.vote25 = vote25;
	testStatus.vote26 = vote26;
	testStatus.vote27 = vote27;
	testStatus.vote28 = vote28;
	testStatus.vote29 = vote29;
	testStatus.vote30 = vote30;
	if (active !== undefined) {
		testStatus.active= active
	}
	// if (vote1 !== undefined) {
	// 	testStatus.vote1 = vote1
	// }
	// if (vote2 !== undefined) {
	// 	testStatus.vote2 = vote2
	// }
	// if(vote3 !== undefined){
	// 	testStatus.vote3 = vote3
	// }

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
