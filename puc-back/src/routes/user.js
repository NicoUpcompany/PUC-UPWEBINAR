const express = require("express");
const UserController = require("../controllers/user");

const md_auth = require("../middleware/authenticated");

const api = express.Router();

/**
 * @module UserRoutes
 */

/**
 * Registro de usuario
 *
 * @name signUp
 * @path {POST} /sign-up
 */
api.post("/sign-up", UserController.signUp);
/**
 * Inicio de sesión
 *
 * @name signIn
 * @path {POST} /sign-in
 */
api.post("/sign-in", UserController.signIn);

/**
 * Inicio de sesión de administrador
 *
 * @name signInAdmin
 * @path {POST} /sign-in-admin
 */
api.post("/sign-in-admin", UserController.signInAdmin);

/**
 * Retona todos los usuarios
 *
 * @name getUsers
 * @path {GET} /users
 */
api.get("/users", [md_auth.ensureAuth], UserController.getUsers);
/**
 * Actualiza el usuario
 *
 * @name updateWaitingRoomTime
 * @path {PUT} /update-waiting-room-time
 */
api.put("/update-waiting-room-time", [md_auth.ensureAuth], UserController.updateWaitingRoomTime);
/**
 * Actualiza el usuario
 *
 * @name updateStreamTime
 * @path {PUT} /update-stream-time
 */
api.put("/update-stream-time", [md_auth.ensureAuth], UserController.updateStreamTime);
/**
 * Cambia el rol del usuario
 *
 * @name changeRole
 * @path {PUT} /change-role/:id
 */
api.put("/change-role/:id", [md_auth.ensureAuth], UserController.changeRole);
/**
 * Actualiza el usuario
 *
 * @name updateUser
 * @path {PUT} /user/:id
 */
api.put("/user/:id", [md_auth.ensureAuth], UserController.updateUser);
/**
 * Desactiva un usuario
 *
 * @name deleteUser
 * @path {DELETE} /user/:id
 */
api.delete("/user/:id", [md_auth.ensureAuth], UserController.deleteUser);

module.exports = api;
