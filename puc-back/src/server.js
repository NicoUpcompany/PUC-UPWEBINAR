/**
 * @file Documentación del Back end del evento PUC - Archivo principal server.js
 * @author Claudio Stuardo
 */

const mongoose = require("mongoose");
const moment = require("moment");
require("moment/locale/es");

const app = require("./app");
const { API_VERSION, IP_SERVER, PORT_DB } = require("./config");
const RealTime = require("./models/realTime");

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
	},
});

/** 
 * Variable para activar/descativar guadado de usuarios por horario de agenda
 * @type {boolean}
*/
let agendaStatus = false;
/** 
 * Arreglo para guardar los usuarios conectados por socket
 * @type {Array<Object>}
*/
let users = [];
/** 
 * Arreglo para guardar los usuarios conectados por socket por agenda
 * @type {Array<Object>}
*/
let agendaArray = [];
/** 
 * Objeto que guarda el peak de usuarios con el tiempo en el que se produce el peak
 * @typedef {Object} peak
 * @property {string} time Tiempo en que se realizó el peak
 * @property {number} count Cantidad de usuarios
*/
let peak = {
	time: null,
	count: 0,
};

/**
 * @module Socket
 */
io.on("connection", (socket) => {
	/**
     * Inicialización del socket
     *
     * @event module:connection
     * @property {Object} socket - Objeto para el manejo del socket
     */
	socket.on("NEW_USER", (user) => {
		/**
		 * Recibe un usuario y lo guarda en el arreglo {@link users} actualizando {@link peak} si corresponde
		 *
		 * @event module:NEW_USER
		 * @property {Object} user - Objeto usuario enviado desde el front
		 */
		try {
			const newUser = {
				id: socket.id,
				userId: user.userId,
				email: user.email,
				route: user.route,
				flagIcon: user.flagIcon,
				city: user.city,
				postalCode: user.postalCode,
				continent: user.continent,
				continentCode: user.continentCode,
				country: user.country,
				countryIsoCode: user.countryIsoCode,
				locationLatLong: user.locationLatLong,
				accuracyRadius: user.accuracyRadius,
				timeZone: user.timeZone,
				region: user.region,
				regionIsoCode: user.regionIsoCode,
				ipAddress: user.ipAddress,
				ipType: user.ipType,
				isp: user.isp,
				conectionType: user.conectionType,
				navigatorName: user.navigatorName,
				operatingSystem: user.operatingSystem,
				conectionTime: moment().valueOf(),
				conectionTimeEnd: null,
			};
			/** Guarda el nuevo objeto usuario  */
			users.push(newUser);
			/** Emite el evento USER para avisar al front de un nuevo usuario  */
			io.emit("USER", newUser);
			/** Emite el evento UPDATE_USER_LIST para enviar nueva lista de usuario al front  */
			io.emit("UPDATE_USER_LIST", users);
			if (users.length > peak.count) {
				peak.count = users.length;
				peak.time = moment().format();
				io.emit("PEAK", peak);
			}
			if (agendaStatus) {
				const index = agendaArray.findIndex((element) => element.id === newUser.id);
				if (index < 0) {
					agendaArray.push(newUser);
				}
			}
		} catch (error) {
			console.log(error);
		}
	});

	/**
	 * Recibe un objeto usuario y actualiza el parámetro ``route`` emititiendo un 'UPDATE_USER_LIST'
	 *
	 * @event module:UPDATE_ROUTE
	 * @property {Object} user - Objeto usuario enviado desde el front
	 */
	socket.on("UPDATE_ROUTE", (user) => {
		try {
			const index = users.findIndex((element) => element.id === socket.id);
			if (index >= 0) {
				users[index].route = user.route;
				io.emit("UPDATE_USER_LIST", users);
			}
			if (agendaStatus) {
				const index2 = agendaArray.findIndex((element) => element.id === socket.id);
				if (index2 >= 0) {
					agendaArray[index2].route = user.route;
				}
			}
		} catch (error) {
			console.log(error);
		}
	});

	/**
	 * Recibe el llamado 'GET_USERS' para retornar {@link users}
	 *
	 * @event module:GET_USERS
	 */
	socket.on("GET_USERS", () => {
		io.emit("UPDATE_USER_LIST", users);
	});

	/**
	 * Recibe el llamado 'GET_PEAK' para retornar {@link peak}
	 *
	 * @event module:GET_PEAK
	 */
	socket.on("GET_PEAK", () => {
		io.emit("PEAK", peak);
	});

	/**
	 * Recibe el llamado 'disconnect' de forma automática y guarda el objeto usuario en la tabla ``RealTime``
	 *
	 * @event module:disconnect
	 */
	socket.on("disconnect", () => {
		try {
			const index = users.findIndex((element) => element.id === socket.id);
			if (index >= 0) {
				const realTime = new RealTime();
				realTime.user = users[index].userId;
				realTime.flagIcon = users[index].flagIcon;
				realTime.city = users[index].city;
				realTime.postalCode = users[index].postalCode;
				realTime.continent = users[index].continent;
				realTime.continentCode = users[index].continentCode;
				realTime.country = users[index].country;
				realTime.countryIsoCode = users[index].countryIsoCode;
				realTime.locationLatLong = users[index].locationLatLong;
				realTime.accuracyRadius = users[index].accuracyRadius;
				realTime.timeZone = users[index].timeZone;
				realTime.region = users[index].region;
				realTime.regionIsoCode = users[index].regionIsoCode;
				realTime.ipAddress = users[index].ipAddress;
				realTime.ipType = users[index].ipType;
				realTime.isp = users[index].isp;
				realTime.conectionType = users[index].conectionType;
				realTime.navigatorName = users[index].navigatorName;
				realTime.operatingSystem = users[index].operatingSystem;
				realTime.conectionTime = users[index].conectionTime;
				realTime.conectionTimeEnd = moment().valueOf();
				realTime.save((err, realTimeStored) => {});
				users = users.filter((u) => u.id !== socket.id);
				io.emit("UPDATE_USER_LIST", users);
				socket.removeAllListeners();
			}
			if (agendaStatus) {
				const index2 = agendaArray.findIndex((element) => element.id === socket.id);
				if (index2 >= 0) {
					agendaArray[index2].conectionTimeEnd = moment().valueOf();
				}
			}
		} catch (error) {
			console.log(error);
		}
	});
});

/** 
 * Constante para centralizar el valor del puerto a ocupar
 * @type {number}
*/
const port = process.env.PORT || 8080;

/**
 * @module Servidor
 */
/**
 * Inicialización de Base de datos
 * Se forma la url de conexión con {@link IP_SERVER} y {@link PORT_DB}
 * @event module:mongoose
 */
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/puc`, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
	if (err) {
		throw err;
	} else {
		/**
		 * Inicialización de servidor
		 * Se forma la url de conexión con {@link IP_SERVER}, {@link port} y {@link API_VERSION}
		 * @event module:listen
		 */
		server.listen(port, function () {
			console.log("-------------------------");
			console.log("|          PUC          |");
			console.log("-------------------------");
			console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}`);
		});
	}
});
