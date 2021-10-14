/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { notification } from "antd";
import { CometChat } from "@cometchat-pro/chat";
import jwtDecode from "jwt-decode";
import { withStyles } from "@material-ui/core/styles";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Button from "@material-ui/core/Button";
import { isSafari, isMobileSafari } from "react-device-detect";
import $ from 'jquery';
import { signInApi } from "../../../api/user";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";
import { COMETCHAT_CONSTANTS } from "../../../consts";
import { emailValidation } from "../../../utils/formValidation";
import Socket from "../../../utils/socket";
import { uuid } from 'uuidv4';
import { updateWaitingRoomTimeApi } from "../../../api/user";
import { getAccessTokenApi } from "../../../api/auth";


import "./LoginForm.scss";

const ColorButton = withStyles((theme) => ({
	root: {
		color: "white",
		background: "linear-gradient(#ff7c7b, #ffc160);",
		"&:hover": {
			background: "linear-gradient(to botton, #ff7c7b, #ffc160)",
		},
	},
}))(Button);

const LoginForm = (props) => {
	const [token, setToken] = useState(null);
	const [inputs, setInputs] = useState({
		email: "",
	});
	const [formValid, setFormValid] = useState({
		email: false,
	});
	const { setLoading, setSaveData } = props;

	const changeForm = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
	};

	const inputValidation = async (e) => {
		const { type, name } = e.target;

		if (type === "email") {
			setFormValid({
				...formValid,
				[name]: emailValidation(e.target),
			});
		}
	};


	const signIn = async () => {
		let idSocket;
		idSocket = uuid();
		const tokenAux = getAccessTokenApi();
		setToken(tokenAux);
		console.log(idSocket);
		setLoading(true);
		const result = await signInApi(inputs);
		if (!result.ok) {
			notification["error"]({
				message: result.message,
			});
			setLoading(false);
		} else {
			const { accessToken, refreshToken } = result;
			localStorage.setItem(ACCESS_TOKEN, accessToken);
			localStorage.setItem(REFRESH_TOKEN, refreshToken);
			localStorage.setItem('idSocket', idSocket )
			const decodedToken = jwtDecode(accessToken);

			const data = {
				email: decodedToken.email,
				idSocket: idSocket
			};
			updateWaitingRoomTimeApi(token, data)
			const user = new CometChat.User(decodedToken.id);
			const UID = decodedToken.id;
			const apiKey = COMETCHAT_CONSTANTS.AUTH_KEY;
			if (decodedToken.email.length > 0) {
				user.setName(`${decodedToken.name} ${decodedToken.lastname} | ${decodedToken.enterprise}`);
			}
			localStorage.setItem("userID", decodedToken.id);
			if (!isSafari && !isMobileSafari) {
				CometChat.createUser(user, COMETCHAT_CONSTANTS.AUTH_KEY).then(
					(user) => {
						CometChat.login(UID, apiKey).then(
							(User) => {
								setSaveData(2);
							},
							(error) => {
								setLoading(false);
								notification["error"]({
									message: "Ha ocurrido un error",
								});
							}
						);
					},
					(error) => {
						if (error.details.uid[0] === "The uid has already been taken.") {
							CometChat.updateUser(user, COMETCHAT_CONSTANTS.AUTH_KEY).then(
								(user) => {
									CometChat.login(UID, apiKey).then(
										(User) => {
											setSaveData(2);
										},
										(error) => {
											setLoading(false);
											notification["error"]({
												message: "Ha ocurrido un error",
											});
										}
									);
								},
								(error) => {
									CometChat.login(UID, apiKey).then(
										(User) => {
											setSaveData(2);
										},
										(error) => {
											setLoading(false);
											notification["error"]({
												message: "Ha ocurrido un error",
											});
										}
									);
								}
							);
						} else {
							setLoading(false);
							notification["error"]({
								message: "Ocurrió un error",
							});
						}
					}
				);
			} else {
				setSaveData(2);
			}
		}
	};

	// const signIn = async () => {
	// 	setLoading(true);
	// 	const result = await signInApi(inputs);
	// 	if (!result.ok) {
	// 		notification["error"]({
	// 			message: result.message,
	// 		});
	// 		setLoading(false);
	// 	} else {
	// 		const { accessToken, refreshToken } = result;
	// 		localStorage.setItem(ACCESS_TOKEN, accessToken);
	// 		localStorage.setItem(REFRESH_TOKEN, refreshToken);
	// 		const decodedToken = jwtDecode(accessToken);
	// 		localStorage.setItem("userID", decodedToken.id);
	// 		setSaveData(2);
			// const user = new CometChat.User(decodedToken.id);
			// const UID = decodedToken.id;
			// const apiKey = COMETCHAT_CONSTANTS.AUTH_KEY;
			// if (decodedToken.email.length > 0) {
			// 	user.setName(`${decodedToken.name} ${decodedToken.lastname} | ${decodedToken.enterprise}`);
			// }
			// if (!isSafari && !isMobileSafari) {
			// 	CometChat.createUser(user, COMETCHAT_CONSTANTS.AUTH_KEY).then(
			// 		(user) => {
			// 			CometChat.login(UID, apiKey).then(
			// 				(User) => {
			// 					setSaveData(2);
			// 				},
			// 				(error) => {
			// 					setLoading(false);
			// 					notification["error"]({
			// 						message: "Ha ocurrido un error",
			// 					});
			// 				}
			// 			);
			// 		},
			// 		(error) => {
			// 			if (error.details.uid[0] === "The uid has already been taken.") {
			// 				CometChat.updateUser(user, COMETCHAT_CONSTANTS.AUTH_KEY).then(
			// 					(user) => {
			// 						CometChat.login(UID, apiKey).then(
			// 							(User) => {
			// 								setSaveData(2);
			// 							},
			// 							(error) => {
			// 								setLoading(false);
			// 								notification["error"]({
			// 									message: "Ha ocurrido un error",
			// 								});
			// 							}
			// 						);
			// 					},
			// 					(error) => {
			// 						CometChat.login(UID, apiKey).then(
			// 							(User) => {
			// 								setSaveData(2);
			// 							},
			// 							(error) => {
			// 								setLoading(false);
			// 								notification["error"]({
			// 									message: "Ha ocurrido un error",
			// 								});
			// 							}
			// 						);
			// 					}
			// 				);
			// 			} else {
			// 				setLoading(false);
			// 				notification["error"]({
			// 					message: "Ocurrió un error",
			// 				});
			// 			}
			// 		}
			// 	);
			// } else {
			// 	setSaveData(2);
			// }
		// }
	// };

	return (
		<form
			className="formLogin"
			onChange={changeForm}
			onSubmit={(e) => {
				e.preventDefault();
				e.stopPropagation();
				signIn();
			}}
		>
			<h1 className="form-title">Bienvenido</h1>
			<div className="campo">
				<input type="email" id="email" placeholder="Correo electrónico" name="email" value={inputs.email} onChange={inputValidation} />
				<label>Correo electrónico</label>
				<PersonOutlineIcon className="input-icon" />
			</div>
			<div className="campobutton">
				<ColorButton variant="contained" color="primary" className="btn">
					<button style={{ background: "transparent", border: "transparent", cursor: "pointer" }}>Ingresar</button>
				</ColorButton>
			</div>
			{/* <a onClick={() => setSaveData(1)} className="enlace">
				Aún no estoy registrado
			</a> */}
		</form>
	);
};

export default LoginForm;
