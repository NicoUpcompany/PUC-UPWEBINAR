const fs = require("fs");
const path = require("path");


function getFile(req, res) {

	const file = req.params.file;
	const filePath = "./uploads/file/" + file;

	fs.exists(filePath, (exists) => {
		if (!exists) {
			res.status(404).send({
				ok: false,
				message: "Imagen no encontrada",
			});
		} else {
			res.sendFile(path.resolve(filePath));
		}
	});
}

module.exports = {
    getFile
}