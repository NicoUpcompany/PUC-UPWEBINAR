const XLSX = require("xlsx");
const path = require("path");
const User = require("../models/user");

/**
 * @module XlsxController
 */

/**
 * Lee un archivo xlsx guardado en ./src/uploads, lo transforma a json y guarda al usuario en la bd
 * @param {Object} req 
 * @param {Object} res 
 * @returns {string} Mensaje
 */
function xlsxToJson(req, res) {
	const pathXLSX = path.resolve(__dirname, "../uploads/usuarios.xlsx");
	const workbook = XLSX.readFile(pathXLSX);
	const sheet_name_list = workbook.SheetNames;
	sheet_name_list.forEach(async function (y) {
		const worksheet = workbook.Sheets[y];
		let headers = {};
		let data = [];
		for (z in worksheet) {
			if (z[0] === "!") continue;
			let tt = 0;
			for (let i = 0; i < z.length; i++) {
				if (!isNaN(z[i])) {
					tt = i;
					break;
				}
			}
			const col = z.substring(0, tt);
			const row = parseInt(z.substring(tt));
			const value = worksheet[z].v;
			if (row == 1 && value) {
				headers[col] = value;
				continue;
			}
			if (!data[row]) data[row] = {};
			data[row][headers[col]] = value;
		}
		data.shift();
		data.shift();

		for (let i = 0; i < data.length; i++) {
			const user = new User();

			const signUpTime = moment().format();
			user.email = data[i].email.toString().toLowerCase();
			user.signUpTime = signUpTime;

			user.save((err, userStored) => {});
			console.log(i);
		}
		res.status(200).send({ message: "Guardado de usuarios exitosos" });
	});
}

module.exports = {
	xlsxToJson,
};
