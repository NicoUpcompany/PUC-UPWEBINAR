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

	const idUser=req.params.idUser;

	TestVote.find({user: idUser})
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
					let option5Count = 0;
					let option6Count = 0;
					let option7Count = 0;
					let option8Count = 0;
					let cuenta9 = 0;
					let cuenta10= 0;
					let cuenta11 =0;
					let cuenta12 = 0;
					let cuenta13 = 0;
					let cuenta14= 0;
					let cuenta15 =0;
					let cuenta16 = 0;
					let cuenta17 = 0;
					let cuenta18 = 0;
					let cuenta19 = 0;
					let cuenta20 = 0;
					let cuenta21 = 0;
					let cuenta22 = 0;
					let cuenta23 = 0;
					let cuenta24 = 0;
					let cuenta25 = 0;
					let cuenta26 = 0;
					let cuenta27 = 0;
					let cuenta28 = 0;
					let cuenta29 = 0;
					let cuenta30 = 0;
					let cuenta31 = 0;
					let cuenta32 = 0;
					let cuenta33 = 0;
					let cuenta34 = 0;
					let cuenta35 = 0;
					let cuenta36 = 0;
					let cuenta37 = 0;
					let cuenta38 = 0;
					let cuenta39 = 0;
					let cuenta40 = 0;
					let cuenta41 = 0;
					let cuenta42 = 0;
					let cuenta43 = 0;
					let cuenta44 = 0;
					let cuenta45 = 0;
					let cuenta46 = 0;
					let cuenta47 = 0;
					let cuenta48 = 0;
					let cuenta49 = 0;
					let cuenta50 = 0;
					let cuenta51 = 0;
					let cuenta52 = 0;
					let cuenta53 = 0;
					let cuenta54 = 0;
					let cuenta55 = 0;
					let cuenta56 = 0;
					let cuenta57 = 0;
					let cuenta58 = 0;
					let cuenta59 = 0;
					let cuenta60 = 0;
					let cuenta61 = 0;
					let cuenta62 = 0;
					let cuenta63 = 0;
					let cuenta64 = 0;
					let cuenta65 = 0;
					let cuenta66 = 0;
					let cuenta67 = 0;
					let cuenta68 = 0;
					let cuenta69 = 0;
					let cuenta70 = 0;
					let cuenta71 = 0;
					let cuenta72 = 0;
					let cuenta73 = 0;
					let cuenta74 = 0;
					let cuenta75 = 0;
					let cuenta76 = 0;
					let cuenta77 = 0;
					let cuenta78 = 0;
					let cuenta79 = 0;
					let cuenta80 = 0;
					let cuenta81 = 0;
					let cuenta82 = 0;
					let cuenta83 = 0;
					let cuenta84 = 0;
					let cuenta85 = 0;
					let cuenta86 = 0;
					let cuenta87 = 0;
					let cuenta88 = 0;
					let cuenta89 = 0;
					let cuenta90 = 0;
					let cuenta91 = 0;
					let cuenta92 = 0;
					let cuenta93 = 0;
					let cuenta94 = 0;
					let cuenta95 = 0;
					let cuenta96 = 0;
					let cuenta97 = 0;
					let cuenta98 = 0;
					let cuenta99 = 0;
					let cuenta100 = 0;
					let cuenta101 = 0;
					let cuenta102 = 0;
					let cuenta103 = 0;
					let cuenta104 = 0;
					let cuenta105 = 0;
					let cuenta106 = 0;
					let cuenta107 = 0;
					let cuenta108 = 0;
					let cuenta109 = 0;
					let cuenta110 = 0;
					let cuenta111 = 0;
					let cuenta112 = 0;
					let cuenta113 = 0;
					let cuenta114 = 0;
					let cuenta115 = 0;
					let cuenta116 = 0;
					let cuenta117 = 0;
					let cuenta118 = 0;
					let cuenta119 = 0;
					let cuenta120 = 0;
					let cuenta121 = 0;
					let cuenta122 = 0;
					let cuenta123 = 0;
					let cuenta124 = 0;
					let cuenta125 = 0;
					let cuenta126 = 0;
					let cuenta127 = 0;
					let cuenta128 = 0;
					

					voteStored.forEach((element) => {

						// changePercentage(element);

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
						//Pregunta 2
						if (element.question2 === 1) {
							option5Count = option5Count + 1;
						}
						if (element.question2 === 2) {
							option6Count = option6Count + 1;
						}
						if (element.question2 === 3) {
							option7Count = option7Count + 1;
						}
						if (element.question2 === 4) {
							option8Count = option8Count + 1
						}
						//Pregunta 3
						if (element.question3 === 1) {
							cuenta9 = cuenta9 + 1;
						}
						if (element.question3 === 2) {
							cuenta10 = cuenta10 + 1;
						}
						if (element.question3 === 3) {
							cuenta11 = cuenta11 + 1;
						}
						if (element.question3 === 4) {
							cuenta12 = cuenta12 + 1
						}
						//Pregunta 4
						if (element.question4 === 1) {
							cuenta13 = cuenta13 + 1;
						}
						if (element.question4 === 2) {
							cuenta14 = cuenta14 + 1;
						}
						if (element.question4 === 3) {
							cuenta15 = cuenta15 + 1;
						}
						if (element.question4 === 4) {
							cuenta16 = cuenta16 + 1
						}
						//Pregunta 5
						if (element.question5 === 1) {
							cuenta17 = cuenta17 + 1;
						}
						if (element.question5 === 2) {
							cuenta18 = cuenta18 + 1;
						}
						if (element.question5 === 3) {
							cuenta19 = cuenta19 + 1;
						}
						if (element.question5 === 4) {
							cuenta20 = cuenta20 + 1
						}
						//Pregunta 6
						if (element.question6 === 1) {
							cuenta21 = cuenta21 + 1;
						}
						if (element.question6 === 2) {
							cuenta22 = cuenta22 + 1;
						}
						if (element.question6 === 3) {
							cuenta23 = cuenta23 + 1;
						}
						if (element.question6 === 4) {
							cuenta24 = cuenta24 + 1
						}
						//Pregunta 7
						if (element.question7 === 1) {
							cuenta25 = cuenta25 + 1;
						}
						if (element.question7 === 2) {
							cuenta26 = cuenta26 + 1;
						}
						if (element.question7 === 3) {
							cuenta27 = cuenta27 + 1;
						}
						if (element.question7 === 4) {
							cuenta28 = cuenta28 + 1
						}
						//Pregunta 8
						if (element.question8 === 1) {
							cuenta29 = cuenta29 + 1;
						}
						if (element.question8 === 2) {
							cuenta30 = cuenta30 + 1;
						}
						if (element.question8 === 3) {
							cuenta31 = cuenta31 + 1;
						}
						if (element.question8 === 4) {
							cuenta32 = cuenta32 + 1
						}
						//Pregunta 9
						if (element.question9 === 1) {
							cuenta33 = cuenta33 + 1;
						}
						if (element.question9 === 2) {
							cuenta34 = cuenta34 + 1;
						}
						if (element.question9 === 3) {
							cuenta35 = cuenta35 + 1;
						}
						if (element.question9 === 4) {
							cuenta36 = cuenta36 + 1
						}
						//Pregunta 10
						if (element.question10 === 1) {
							cuenta37 = cuenta37 + 1;
						}
						if (element.question10 === 2) {
							cuenta38 = cuenta38 + 1;
						}
						if (element.question10 === 3) {
							cuenta39 = cuenta39 + 1;
						}
						if (element.question10 === 4) {
							cuenta40 = cuenta40 + 1
						}
					
						//Pregunta 11
						if (element.question11 === 1) {
							cuenta41 = cuenta41 + 1;
						}
						if (element.question11 === 2) {
							cuenta42 = cuenta42 + 1;
						}
						if (element.question11 === 3) {
							cuenta43 = cuenta43 + 1;
						}
						if (element.question11 === 4) {
							cuenta44 = cuenta44 + 1
						}
						//Pregunta 12
						if (element.question12 === 1) {
							cuenta45 = cuenta45 + 1;
						}
						if (element.question12 === 2) {
							cuenta46 = cuenta46 + 1;
						}
						if (element.question12 === 3) {
							cuenta47 = cuenta47 + 1;
						}
						if (element.question12 === 4) {
							cuenta48 = cuenta48 + 1
						}
						//Pregunta 13
						if (element.question13 === 1) {
							cuenta49 = cuenta49 + 1;
						}
						if (element.question13 === 2) {
							cuenta50 = cuenta50 + 1;
						}
						if (element.question13 === 3) {
							cuenta51 = cuenta51 + 1;
						}
						if (element.question13 === 4) {
							cuenta52 = cuenta52 + 1
						}
						//Pregunta 14
						if (element.question14 === 1) {
							cuenta53 = cuenta53 + 1;
						}
						if (element.question14 === 2) {
							cuenta54 = cuenta54 + 1;
						}
						if (element.question14 === 3) {
							cuenta55 = cuenta55 + 1;
						}
						if (element.question14 === 4) {
							cuenta56 = cuenta56 + 1
						}
						//Pregunta 15
						if (element.question15 === 1) {
							cuenta57 = cuenta57 + 1;
						}
						if (element.question15 === 2) {
							cuenta58 = cuenta58 + 1;
						}
						if (element.question15 === 3) {
							cuenta59 = cuenta59 + 1;
						}
						if (element.question15 === 4) {
							cuenta60 = cuenta60 + 1
						}
						//Pregunta 16
						if (element.question16 === 1) {
							cuenta61 = cuenta61 + 1;
						}
						if (element.question16 === 2) {
							cuenta62 = cuenta62 + 1;
						}
						if (element.question16 === 3) {
							cuenta63 = cuenta63 + 1;
						}
						if (element.question16 === 4) {
							cuenta64 = cuenta64 + 1
						}
						//Pregunta 17
						if (element.question17 === 1) {
							cuenta65 = cuenta65 + 1;
						}
						if (element.question17 === 2) {
							cuenta66 = cuenta66 + 1;
						}
						if (element.question17 === 3) {
							cuenta67 = cuenta67 + 1;
						}
						if (element.question17 === 4) {
							cuenta68 = cuenta68 + 1
						}
						//Pregunta 18
						if (element.question18 === 1) {
							cuenta69 = cuenta69 + 1;
						}
						if (element.question18 === 2) {
							cuenta70 = cuenta70 + 1;
						}
						if (element.question18 === 3) {
							cuenta71 = cuenta71 + 1;
						}
						if (element.question18 === 4) {
							cuenta72 = cuenta72 + 1
						}
						//Pregunta 19
						if (element.question19 === 1) {
							cuenta73 = cuenta73 + 1;
						}
						if (element.question19 === 2) {
							cuenta74 = cuenta74 + 1;
						}
						if (element.question19 === 3) {
							cuenta75 = cuenta75 + 1;
						}
						if (element.question19 === 4) {
							cuenta76 = cuenta76 + 1
						}
						//Pregunta 20
						if (element.question20 === 1) {
							cuenta77 = cuenta77 + 1;
						}
						if (element.question20 === 2) {
							cuenta78 = cuenta78 + 1;
						}
						if (element.question20 === 3) {
							cuenta79 = cuenta79 + 1;
						}
						if (element.question20 === 4) {
							cuenta80 = cuenta80 + 1
						}
						if(element.question20 ===5){
							cuenta125 = cuenta125 + 1
						}
						
							
						//Pregunta 21
						if (element.question21 === 1) {
							cuenta81 = cuenta81 + 1;
						}
						if (element.question21 === 2) {
							cuenta82 = cuenta82 + 1;
						}
						if (element.question21 === 3) {
							cuenta83 = cuenta83 + 1;
						}
						if (element.question21 === 4) {
							cuenta84 = cuenta84 + 1
						}
						//Pregunta 22
						if (element.question22 === 1) {
							cuenta85 = cuenta85 + 1;
						}
						if (element.question22 === 2) {
							cuenta86 = cuenta86 + 1;
						}
						if (element.question22 === 3) {
							cuenta87 = cuenta87 + 1;
						}
						if (element.question22 === 4) {
							cuenta88 = cuenta88 + 1
						}
						//Pregunta 23
						if (element.question23 === 1) {
							cuenta89 = cuenta89 + 1;
						}
						if (element.question23 === 2) {
							cuenta90 = cuenta90 + 1;
						}
						if (element.question23 === 3) {
							cuenta91 = cuenta91 + 1;
						}
						if (element.question23 === 4) {
							cuenta92 = cuenta92 + 1
						}
						if(element.question23 === 5){
							cuenta126 = cuenta126 + 1
						}
						//Pregunta 24
						if (element.question24 === 1) {
							cuenta93 = cuenta93 + 1;
						}
						if (element.question24 === 2) {
							cuenta94 = cuenta94 + 1;
						}
						if (element.question24 === 3) {
							cuenta95 = cuenta95 + 1;
						}
						if (element.question24 === 4) {
							cuenta96 = cuenta96 + 1
						}
						//Pregunta 25
						if (element.question25 === 1) {
							cuenta97 = cuenta97 + 1;
						}
						if (element.question25 === 2) {
							cuenta98 = cuenta98 + 1;
						}
						if (element.question25 === 3) {
							cuenta99 = cuenta99 + 1;
						}
						if (element.question25 === 4) {
							cuenta100 = cuenta100 + 1
						}
						if (element.question25 === 5) {
							cuenta127 = cuenta127 + 1
						}

						//Pregunta 26
						if (element.question26 === 1) {
							cuenta101 = cuenta101 + 1;
						}
						if (element.question26 === 2) {
							cuenta102 = cuenta102 + 1;
						}
						if (element.question26 === 3) {
							cuenta103 = cuenta103 + 1;
						}
						if (element.question26 === 4) {
							cuenta104 = cuenta104 + 1
						}
						if (element.question26 === 5) {
							cuenta128 = cuenta128 + 1
						}
						//Pregunta 27
						if (element.question27 === 1) {
							cuenta105 = cuenta105 + 1;
						}
						if (element.question27 === 2) {
							cuenta106 = cuenta106 + 1;
						}
						if (element.question27 === 3) {
							cuenta107 = cuenta107 + 1;
						}
						if (element.question27 === 4) {
							cuenta108 = cuenta108 + 1
						}
						//Pregunta 28
						if (element.question28 === 1) {
							cuenta109 = cuenta109 + 1;
						}
						if (element.question28 === 2) {
							cuenta110 = cuenta110 + 1;
						}
						if (element.question28 === 3) {
							cuenta111 = cuenta111 + 1;
						}
						if (element.question28 === 4) {
							cuenta112 = cuenta112 + 1
						}
						//Pregunta 29
						if (element.question29 === 1) {
							cuenta113 = cuenta113 + 1;
						}
						if (element.question29 === 2) {
							cuenta114 = cuenta114 + 1;
						}
						if (element.question29 === 3) {
							cuenta115 = cuenta115 + 1;
						}
						if (element.question29 === 4) {
							cuenta116 = cuenta116 + 1
						}
						//Pregunta 30
						if (element.question30 === 1) {
							cuenta117 = cuenta117 + 1;
						}
						if (element.question30 === 2) {
							cuenta118 = cuenta118 + 1;
						}
						if (element.question30 === 3) {
							cuenta119 = cuenta119 + 1;
						}
						if (element.question30 === 4) {
							cuenta120 = cuenta120 + 1
						}
						//Pregunta 30
						if (element.question30 === 1) {
							cuenta117 = cuenta117 + 1;
						}
						if (element.question30 === 2) {
							cuenta118 = cuenta118 + 1;
						}
						if (element.question30 === 3) {
							cuenta119 = cuenta119 + 1;
						}
						if (element.question30 === 4) {
							cuenta120 = cuenta120 + 1
						}
						//Pregunta 31
						if (element.question31 === 1) {
							cuenta121 = cuenta121 + 1;
						}
						if (element.question31 === 2) {
							cuenta122 = cuenta122 + 1;
						}
						if (element.question31 === 3) {
							cuenta123 = cuenta123 + 1;
						}
						if (element.question31 === 4) {
							cuenta124 = cuenta124 + 1
						}


					


					});
					
					//Declaración %
					let percentage1 = 0;
					let percentage2 = 0;
					let percentage3 = 0;
					let percentage4 = 0;
					let percentage5 = 0;
					let percentage6 = 0;
					let percentage7 = 0;
					let percentage8 = 0;
					let perc9 = 0;
					let perc10 = 0;
					let perc11 = 0;
					let perc12 = 0;
					let perc13 = 0;
					let perc14 = 0;
					let perc15 = 0;
					let perc16 = 0;
					let perc17 = 0;
					let perc18 = 0;
					let perc19 = 0;
					let perc20 = 0;
					let perc21 = 0;
					let perc22 = 0;
					let perc23 = 0;
					let perc24 = 0;
					let perc25 = 0;
					let perc26 = 0;
					let perc27 = 0;
					let perc28 = 0;
					let perc29 = 0;
					let perc30 = 0;
					let perc31 = 0;
					let perc32 = 0;
					let perc33 = 0;
					let perc34 = 0;
					let perc35 = 0;
					let perc36 = 0;
					let perc37 = 0;
					let perc38 = 0;
					let perc39 = 0;
					let perc40 = 0;
					let perc41 = 0;
					let perc42 = 0;
					let perc43 = 0;
					let perc44 = 0;
					let perc45 = 0;
					let perc46 = 0;
					let perc47 = 0;
					let perc48 = 0;
					let perc49 = 0;
					let perc50 = 0;
					let perc51 = 0;
					let perc52 = 0;
					let perc53 = 0;
					let perc54 = 0;
					let perc55 = 0;
					let perc56 = 0;
					let perc57 = 0;
					let perc58 = 0;
					let perc59 = 0;
					let perc60 = 0;
					let perc61 = 0;
					let perc62 = 0;
					let perc63 = 0;
					let perc64 = 0;
					let perc65 = 0;
					let perc66 = 0;
					let perc67 = 0;
					let perc68 = 0;
					let perc69 = 0;
					let perc70 = 0;
					let perc71 = 0;
					let perc72 = 0;
					let perc73 = 0;
					let perc74 = 0;
					let perc75 = 0;
					let perc76 = 0;
					let perc77 = 0;
					let perc78 = 0;
					let perc79 = 0;
					let perc80 = 0;
					let perc81 = 0;
					let perc82 = 0;
					let perc83 = 0;
					let perc84 = 0;
					let perc85 = 0;
					let perc86 = 0;
					let perc87 = 0;
					let perc88 = 0;
					let perc89 = 0;
					let perc90 = 0;
					let perc91 = 0;
					let perc92 = 0;
					let perc93 = 0;
					let perc94 = 0;
					let perc95 = 0;
					let perc96 = 0;
					let perc97 = 0;
					let perc98 = 0;
					let perc99 = 0;
					let perc100 = 0;
					let perc101 = 0;
					let perc102 = 0;
					let perc103 = 0;
					let perc104 = 0;
					let perc105 = 0;
					let perc106 = 0;
					let perc107 = 0;
					let perc108 = 0;
					let perc109 = 0;
					let perc110 = 0;
					let perc111 = 0;
					let perc112 = 0;
					let perc113 = 0;
					let perc114 = 0;
					let perc115 = 0;
					let perc116 = 0;
					let perc117 = 0;
					let perc118 = 0;
					let perc119 = 0;
					let perc120 = 0;
					let perc121 = 0;
					let perc122 = 0;
					let perc123 = 0;
					let perc124 = 0;
					let perc125 = 0;
					let perc126 = 0;
					let perc127 = 0;
					let perc128 = 0;
		
					//Totales	
					let total = option1Count + option2Count + option3Count + option4Count;
					let total2 = option5Count + option6Count + option7Count + option8Count;
					let total3 = cuenta9 + cuenta10 + cuenta11 + cuenta12;
					let total4 = cuenta13 + cuenta14 + cuenta15 + cuenta16;
					let total5 = cuenta17 + cuenta18 + cuenta19 + cuenta20;
					let total6 = cuenta21 + cuenta22 + cuenta23 + cuenta24;
					let total7 = cuenta25 + cuenta26 + cuenta27 + cuenta28;
					let total8 = cuenta29 + cuenta30 + cuenta31 + cuenta32;
					let total9 = cuenta33 + cuenta34 + cuenta35 + cuenta36;
					let total10 = cuenta37 + cuenta38 + cuenta39 + cuenta40;
					let total11 = cuenta41 + cuenta42 + cuenta43 + cuenta44;
					let total12 = cuenta45 + cuenta46 + cuenta47 + cuenta48;
					let total13 = cuenta49 + cuenta50 + cuenta51 + cuenta52;
					let total14 = cuenta53 + cuenta54 + cuenta55 + cuenta56;
					let total15 = cuenta57 + cuenta58 + cuenta59 + cuenta60;
					let total16 = cuenta61 + cuenta62 + cuenta63 + cuenta64;
					let total17 = cuenta65 + cuenta66 + cuenta67 + cuenta68;
					let total18 = cuenta69 + cuenta70 + cuenta71 + cuenta72;
					let total19 = cuenta73 + cuenta74 + cuenta75 + cuenta76;
					let total20 = cuenta77 + cuenta78 + cuenta79 + cuenta80 + cuenta125;
					let total21 = cuenta81 + cuenta82 + cuenta83 + cuenta84;
					let total22 = cuenta85 + cuenta86 + cuenta87 + cuenta88;
					let total23 = cuenta89 + cuenta90 + cuenta91 + cuenta92 + cuenta126;
					let total24 = cuenta93 + cuenta94 + cuenta95 + cuenta96;
					let total25 = cuenta97 + cuenta98 + cuenta99 + cuenta100 + cuenta127;
					let total26 = cuenta101 + cuenta102 + cuenta103 + cuenta104 + cuenta128;
					let total27 = cuenta105 + cuenta106 + cuenta107 + cuenta108;
					let total28 = cuenta109 + cuenta110 + cuenta111 + cuenta112;
					let total29 = cuenta113 + cuenta114 + cuenta115 + cuenta116;
					let total30 = cuenta117 + cuenta118 + cuenta119 + cuenta120;
					let total31 = cuenta121 + cuenta122 + cuenta123 + cuenta124;
					

					//Pregunta 1
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

					//Pregunta 2
					if (option5Count > 0) {
						percentage5 = Math.round(((option5Count * 100) / total2) * 10) / 10;
					}
					if (option6Count > 0) {
						percentage6 = Math.round(((option6Count * 100) / total2) * 10) / 10;
					}
					if (option7Count > 0) {
						percentage7 = Math.round(((option7Count * 100) / total2) * 10) / 10;
					}
					if (option8Count > 0) {
						percentage8 = Math.round(((option8Count * 100) / total2) * 10) / 10;
					}

					//Pregunta 3
					if (cuenta9 > 0) {
						perc9 = Math.round(((cuenta9 * 100) / total3) * 10) / 10;
					}
					if (cuenta10 > 0) {
						perc10 = Math.round(((cuenta10 * 100) / total3) * 10) / 10;
					}
					if (cuenta11 > 0) {
						perc11 = Math.round(((cuenta11 * 100) / total3) * 10) / 10;
					}
					if (cuenta12 > 0) {
						perc12 = Math.round(((cuenta12 * 100) / total3) * 10) / 10;
					}
					//Pregunta 4
					if (cuenta13 > 0) {
						perc13 = Math.round(((cuenta13 * 100) / total4) * 10) / 10;
					}
					if (cuenta14 > 0) {
						perc14 = Math.round(((cuenta14 * 100) / total4) * 10) / 10;
					}
					if (cuenta15 > 0) {
						perc15 = Math.round(((cuenta15 * 100) / total4) * 10) / 10;
					}
					if (cuenta16 > 0) {
						perc16 = Math.round(((cuenta16 * 100) / total4) * 10) / 10;
					}
					//Pregunta 5
					if (cuenta17 > 0) {
						perc17 = Math.round(((cuenta17 * 100) / total5) * 10) / 10;
					}
					if (cuenta18 > 0) {
						perc18 = Math.round(((cuenta18 * 100) / total5) * 10) / 10;
					}
					if (cuenta19 > 0) {
						perc19 = Math.round(((cuenta19 * 100) / total5) * 10) / 10;
					}
					if (cuenta20 > 0) {
						perc20 = Math.round(((cuenta20 * 100) / total5) * 10) / 10;
					}
					//Pregunta 6
					if (cuenta21 > 0) {
						perc21 = Math.round(((cuenta21 * 100) / total6) * 10) / 10;
					}
					if (cuenta22> 0) {
						perc22= Math.round(((cuenta22* 100) / total6) * 10) / 10;
					}
					if (cuenta23 > 0) {
						perc23 = Math.round(((cuenta23 * 100) / total6) * 10) / 10;
					}
					if (cuenta24 > 0) {
						perc24 = Math.round(((cuenta24 * 100) / total6) * 10) / 10;
					}
					//Pregunta 7
					if (cuenta25 > 0) {
						perc25 = Math.round(((cuenta25 * 100) / total7) * 10) / 10;
					}
					if (cuenta26> 0) {
						perc26= Math.round(((cuenta26* 100) / total7) * 10) / 10;
					}
					if (cuenta27 > 0) {
						perc27 = Math.round(((cuenta27 * 100) / total7) * 10) / 10;
					}
					if (cuenta28 > 0) {
						perc28 = Math.round(((cuenta28 * 100) / total7) * 10) / 10;
					}
					//Pregunta 8
					if (cuenta29 > 0) {
						perc29 = Math.round(((cuenta29 * 100) / total8) * 10) / 10;
					}
					if (cuenta30> 0) {
						perc30= Math.round(((cuenta30* 100) / total8) * 10) / 10;
					}
					if (cuenta31 > 0) {
						perc31 = Math.round(((cuenta31 * 100) / total8) * 10) / 10;
					}
					if (cuenta32 > 0) {
						perc32 = Math.round(((cuenta32 * 100) / total8) * 10) / 10;
					}
					//Pregunta 9
					if (cuenta33 > 0) {
						perc33 = Math.round(((cuenta33 * 100) / total9) * 10) / 10;
					}
					if (cuenta34> 0) {
						perc34= Math.round(((cuenta34* 100) / total9) * 10) / 10;
					}
					if (cuenta35 > 0) {
						perc35 = Math.round(((cuenta35 * 100) / total9) * 10) / 10;
					}
					if (cuenta36 > 0) {
						perc36 = Math.round(((cuenta36 * 100) / total9) * 10) / 10;
					}
					//Pregunta 10
					if (cuenta37 > 0) {
						perc37 = Math.round(((cuenta37 * 100) / total10) * 10) / 10;
					}
					if (cuenta38> 0) {
						perc38= Math.round(((cuenta38* 100) / total10) * 10) / 10;
					}
					if (cuenta39 > 0) {
						perc39 = Math.round(((cuenta39 * 100) / total10) * 10) / 10;
					}
					if (cuenta40 > 0) {
						perc40 = Math.round(((cuenta40 * 100) / total10) * 10) / 10;
					}
					//Pregunta 11
					if (cuenta41 > 0) {
						perc41 = Math.round(((cuenta41 * 100) / total11) * 10) / 10;
					}
					if (cuenta42> 0) {
						perc42= Math.round(((cuenta42* 100) / total11) * 10) / 10;
					}
					if (cuenta43 > 0) {
						perc43 = Math.round(((cuenta43 * 100) / total11) * 10) / 10;
					}
					if (cuenta44> 0) {
						perc44= Math.round(((cuenta44* 100) / total11) * 10) / 10;
					}
					//Pregunta 12
					if (cuenta45 > 0) {
						perc45 = Math.round(((cuenta45 * 100) / total12) * 10) / 10;
					}
					if (cuenta46> 0) {
						perc46= Math.round(((cuenta46* 100) / total12) * 10) / 10;
					}
					if (cuenta47 > 0) {
						perc47 = Math.round(((cuenta47 * 100) / total12) * 10) / 10;
					}
					if (cuenta48> 0) {
						perc48= Math.round(((cuenta48* 100) / total12) * 10) / 10;
					}
					//Pregunta 13
					if (cuenta49 > 0) {
						perc49 = Math.round(((cuenta49 * 100) / total13) * 10) / 10;
					}
					if (cuenta50> 0) {
						perc50= Math.round(((cuenta50* 100) / total13) * 10) / 10;
					}
					if (cuenta51 > 0) {
						perc51 = Math.round(((cuenta51 * 100) / total13) * 10) / 10;
					}
					if (cuenta52> 0) {
						perc52= Math.round(((cuenta52* 100) / total13) * 10) / 10;
					}
					//Pregunta 14
					if (cuenta53 > 0) {
						perc53 = Math.round(((cuenta53 * 100) / total14) * 10) / 10;
					}
					if (cuenta54> 0) {
						perc54= Math.round(((cuenta54* 100) / total14) * 10) / 10;
					}
					if (cuenta55 > 0) {
						perc55 = Math.round(((cuenta55 * 100) / total14) * 10) / 10;
					}
					if (cuenta56> 0) {
						perc56= Math.round(((cuenta56* 100) / total14) * 10) / 10;
					}
					//Pregunta 15
					if (cuenta57 > 0) {
						perc57 = Math.round(((cuenta57 * 100) / total15) * 10) / 10;
					}
					if (cuenta58> 0) {
						perc58= Math.round(((cuenta58* 100) / total15) * 10) / 10;
					}
					if (cuenta59 > 0) {
						perc59 = Math.round(((cuenta59 * 100) / total15) * 10) / 10;
					}
					if (cuenta60> 0) {
						perc60= Math.round(((cuenta60* 100) / total15) * 10) / 10;
					}
					//Pregunta 16
					if (cuenta61 > 0) {
						perc61 = Math.round(((cuenta61 * 100) / total16) * 10) / 10;
					}
					if (cuenta62> 0) {
						perc62= Math.round(((cuenta62* 100) / total16) * 10) / 10;
					}
					if (cuenta63 > 0) {
						perc63 = Math.round(((cuenta63 * 100) / total16) * 10) / 10;
					}
					if (cuenta64> 0) {
						perc64= Math.round(((cuenta64* 100) / total16) * 10) / 10;
					}
					//Pregunta 17
					if (cuenta65 > 0) {
						perc65 = Math.round(((cuenta65 * 100) / total17) * 10) / 10;
					}
					if (cuenta66> 0) {
						perc66= Math.round(((cuenta66* 100) / total17) * 10) / 10;
					}
					if (cuenta67 > 0) {
						perc67 = Math.round(((cuenta67 * 100) / total17) * 10) / 10;
					}
					if (cuenta68> 0) {
						perc68= Math.round(((cuenta68* 100) / total17) * 10) / 10;
					}
					//Pregunta 18
					if (cuenta69 > 0) {
						perc69 = Math.round(((cuenta69 * 100) / total18) * 10) / 10;
					}
					if (cuenta70> 0) {
						perc70= Math.round(((cuenta70* 100) / total18) * 10) / 10;
					}
					if (cuenta71 > 0) {
						perc71 = Math.round(((cuenta71 * 100) / total18) * 10) / 10;
					}
					if (cuenta72> 0) {
						perc72= Math.round(((cuenta72* 100) / total18) * 10) / 10;
					}
					//Pregunta 19
					if (cuenta73 > 0) {
						perc73 = Math.round(((cuenta73 * 100) / total19) * 10) / 10;
					}
					if (cuenta74> 0) {
						perc74= Math.round(((cuenta74* 100) / total19) * 10) / 10;
					}
					if (cuenta75 > 0) {
						perc75 = Math.round(((cuenta75 * 100) / total19) * 10) / 10;
					}
					if (cuenta76> 0) {
						perc76= Math.round(((cuenta76* 100) / total19) * 10) / 10;
					}
					//Pregunta 20
					if (cuenta77 > 0) {
						perc77 = Math.round(((cuenta77 * 100) / total20) * 10) / 10;
					}
					if (cuenta78> 0) {
						perc78= Math.round(((cuenta78* 100) / total20) * 10) / 10;
					}
					if (cuenta79 > 0) {
						perc79 = Math.round(((cuenta79 * 100) / total20) * 10) / 10;
					}
					if (cuenta80> 0) {
						perc80= Math.round(((cuenta80* 100) / total20) * 10) / 10;
					}
					if(cuenta125 > 0){
						perc125= Math.round(((cuenta125* 100) / total20) * 10) / 10;
					}
					//Pregunta 21
					if (cuenta81 > 0) {
						perc81 = Math.round(((cuenta81 * 100) / total21) * 10) / 10;
					}
					if (cuenta82> 0) {
						perc82= Math.round(((cuenta82* 100) / total21) * 10) / 10;
					}
					if (cuenta83 > 0) {
						perc83 = Math.round(((cuenta83 * 100) / total21) * 10) / 10;
					}
					if (cuenta84> 0) {
						perc84= Math.round(((cuenta84* 100) / total21) * 10) / 10;
					}
					//Pregunta 22
					if (cuenta85 > 0) {
						perc85 = Math.round(((cuenta85 * 100) / total22) * 10) / 10;
					}
					if (cuenta86> 0) {
						perc86= Math.round(((cuenta86* 100) / total22) * 10) / 10;
					}
					if (cuenta87 > 0) {
						perc87 = Math.round(((cuenta87 * 100) / total22) * 10) / 10;
					}
					if (cuenta88> 0) {
						perc88= Math.round(((cuenta88* 100) / total22) * 10) / 10;
					}
				
					//Pregunta 23
					if (cuenta89 > 0) {
						perc89 = Math.round(((cuenta89 * 100) / total23) * 10) / 10;
					}
					if (cuenta90> 0) {
						perc90= Math.round(((cuenta90* 100) / total23) * 10) / 10;
					}
					if (cuenta91 > 0) {
						perc91 = Math.round(((cuenta91 * 100) / total23) * 10) / 10;
					}
					if (cuenta92> 0) {
						perc92= Math.round(((cuenta92* 100) / total23) * 10) / 10;
					}
					if (cuenta126> 0) {
						perc126= Math.round(((cuenta126* 100) / total23) * 10) / 10;
					}
					
					//Pregunta 24
					if (cuenta93 > 0) {
						perc93 = Math.round(((cuenta93 * 100) / total24) * 10) / 10;
					}
					if (cuenta94> 0) {
						perc94= Math.round(((cuenta94* 100) / total24) * 10) / 10;
					}
					if (cuenta95> 0) {
						perc95= Math.round(((cuenta95* 100) / total24) * 10) / 10;
					}
					if (cuenta96> 0) {
						perc96= Math.round(((cuenta96* 100) / total24) * 10) / 10;
					}
					//Pregunta 25
					if (cuenta97 > 0) {
						perc97 = Math.round(((cuenta97 * 100) / total25) * 10) / 10;
					}
					if (cuenta98> 0) {
						perc98= Math.round(((cuenta98* 100) / total25) * 10) / 10;
					}
					if (cuenta99> 0) {
						perc99= Math.round(((cuenta99* 100) / total25) * 10) / 10;
					}
					if (cuenta100> 0) {
						perc100= Math.round(((cuenta100* 100) / total25) * 10) / 10;
					}
					if (cuenta127> 0) {
						perc127= Math.round(((cuenta127* 100) / total25) * 10) / 10;
					}
					//Pregunta 26
					if (cuenta101 > 0) {
						perc101 = Math.round(((cuenta101 * 100) / total26) * 10) / 10;
					}
					if (cuenta102> 0) {
						perc102= Math.round(((cuenta102* 100) / total26) * 10) / 10;
					}
					if (cuenta103> 0) {
						perc103= Math.round(((cuenta103* 100) / total26) * 10) / 10;
					}
					if (cuenta104> 0) {
						perc104= Math.round(((cuenta104* 100) / total26) * 10) / 10;
					}
					if (cuenta128> 0) {
						perc128= Math.round(((cuenta128* 100) / total26) * 10) / 10;
					}
				
					//Pregunta 27
					if (cuenta105 > 0) {
						perc105 = Math.round(((cuenta105 * 100) / total27) * 10) / 10;
					}
					if (cuenta106> 0) {
						perc106= Math.round(((cuenta106* 100) / total27) * 10) / 10;
					}
					if (cuenta107> 0) {
						perc107= Math.round(((cuenta107* 100) / total27) * 10) / 10;
					}
					if (cuenta108> 0) {
						perc108= Math.round(((cuenta108* 100) / total27) * 10) / 10;
					}
					//Pregunta 28
					if (cuenta109 > 0) {
						perc109 = Math.round(((cuenta109 * 100) / total28) * 10) / 10;
					}
					if (cuenta110> 0) {
						perc110= Math.round(((cuenta110* 100) / total28) * 10) / 10;
					}
					if (cuenta111> 0) {
						perc111= Math.round(((cuenta111* 100) / total28) * 10) / 10;
					}
					if (cuenta112> 0) {
						perc112= Math.round(((cuenta112* 100) / total28) * 10) / 10;
					}
					//Pregunta 29
					if (cuenta113 > 0) {
						perc113 = Math.round(((cuenta113 * 100) / total29) * 10) / 10;
					}
					if (cuenta114> 0) {
						perc114= Math.round(((cuenta114* 100) / total29) * 10) / 10;
					}
					if (cuenta115> 0) {
						perc115= Math.round(((cuenta115* 100) / total29) * 10) / 10;
					}
					if (cuenta116> 0) {
						perc116= Math.round(((cuenta116* 100) / total29) * 10) / 10;
					}
				
					//Pregunta 30
					if (cuenta117 > 0) {
						perc117 = Math.round(((cuenta117 * 100) / total30) * 10) / 10;
					}
					if (cuenta118> 0) {
						perc118= Math.round(((cuenta118* 100) / total30) * 10) / 10;
					}
					if (cuenta119> 0) {
						perc119= Math.round(((cuenta119* 100) / total30) * 10) / 10;
					}
					if (cuenta120> 0) {
						perc120= Math.round(((cuenta120* 100) / total30) * 10) / 10;
					}
					//Pregunta 31
					if (cuenta121 > 0) {
						perc121 = Math.round(((cuenta121 * 100) / total31) * 10) / 10;
					}
					if (cuenta122> 0) {
						perc122= Math.round(((cuenta122* 100) / total31) * 10) / 10;
					}
					if (cuenta123> 0) {
						perc123= Math.round(((cuenta123* 100) / total31) * 10) / 10;
					}
					if (cuenta124> 0) {
						perc124= Math.round(((cuenta124* 100) / total31) * 10) / 10;
					}

					
				
					res.status(200).send({
						ok: true, total,
						opt1q1: percentage1,
						opt2q1: percentage2,
						opt3q1: percentage3,
						opt4q1: percentage4,
						opt1q2: percentage5,
						opt2q2: percentage6,
						opt3q2: percentage7,
						opt4q2: percentage8,
						opt1q3: perc9,
						opt2q3: perc10,
						opt3q3: perc11,
						opt4q3: perc12,
						opt1q4: perc13,
						opt2q4: perc14,
						opt3q4: perc15,
						opt4q4: perc16,
						opt1q5: perc17,
						opt2q5: perc18,
						opt3q5: perc19,
						opt4q5: perc20,
						opt1q6: perc21,
						opt2q6: perc22,
						opt3q6: perc23,
						opt4q6: perc24,
						opt1q7: perc25,
						opt2q7: perc26,
						opt3q7: perc27,
						opt4q7: perc28,
						opt1q8: perc29,
						opt2q8: perc30,
						opt3q8: perc31,
						opt4q8: perc32,
						opt1q9: perc33,
						opt2q9: perc34,
						opt3q9: perc35,
						opt4q9: perc36,
						opt1q10: perc37,
						opt2q10: perc38,
						opt3q10: perc39,
						opt4q10: perc40,
						opt1q11: perc41,
						opt2q11: perc42,
						opt3q11: perc43,
						opt4q11: perc44,
						opt1q12: perc45,
						opt2q12: perc46,
						opt3q12: perc47,
						opt4q12: perc48,
						opt1q13: perc49,
						opt2q13: perc50,
						opt3q13: perc51,
						opt4q13: perc52,
						opt1q14: perc53,
						opt2q14: perc54,
						opt3q14: perc55,
						opt4q14: perc56,
						opt1q15: perc57,
						opt2q15: perc58,
						opt3q15: perc59,
						opt4q15: perc60,
						opt1q16: perc61,
						opt2q16: perc62,
						opt3q16: perc63,
						opt4q16: perc64,
						opt1q17: perc65,
						opt2q17: perc66,
						opt3q17: perc67,
						opt4q17: perc68,
						opt1q18: perc69,
						opt2q18: perc70,
						opt3q18: perc71,
						opt4q18: perc72,
						opt1q19: perc73,
						opt2q19: perc74,
						opt3q19: perc75,
						opt4q19: perc76,
						opt1q20: perc77,
						opt2q20: perc78,
						opt3q20: perc79,
						opt4q20: perc80,
						opt5q20: perc125,
						opt1q21: perc81,
						opt2q21: perc82,
						opt3q21: perc83,
						opt4q21: perc84,
						opt1q22: perc85,
						opt2q22: perc86,
						opt3q22: perc87,
						opt4q22: perc88,
						opt1q23: perc89,
						opt2q23: perc90,
						opt3q23: perc91,
						opt4q23: perc92,
						opt5q23: perc126,
						opt1q24: perc93,
						opt2q24: perc94,
						opt3q24: perc95,
						opt4q24: perc96,
						opt1q25: perc97,
						opt2q25: perc98,
						opt3q25: perc99,
						opt4q25: perc100,
						opt5q25: perc127,
						opt1q26: perc101,
						opt2q26: perc102,
						opt3q26: perc103,
						opt4q26: perc104,
						opt5q26:perc128,
						opt1q27: perc105,
						opt2q27: perc106,
						opt3q27: perc107,
						opt4q27: perc108,
						opt1q28: perc109,
						opt2q28: perc110,
						opt3q28: perc111,
						opt4q28: perc112,
						opt1q29: perc113,
						opt2q29: perc114,
						opt3q29: perc115,
						opt4q29: perc116,
						opt1q30: perc117,
						opt2q30: perc118,
						opt3q30: perc119,
						opt4q30: perc120,
						opt1q31: perc121,
						opt2q31: perc122,
						opt3q31: perc123,
						opt4q31: perc124,
		
			
						
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
