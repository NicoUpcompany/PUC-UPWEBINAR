/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { notification, Menu } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
// import { CometChat } from "@cometchat-pro/chat";
import $ from "jquery";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import moment from "moment";

// import VolumeOffIcon from "@material-ui/icons/VolumeOff";
// import VolumeUpIcon from "@material-ui/icons/VolumeUp";

// import cerrar from "../../../assets/images/cerrar.svg";
// import audio from "../../../assets/audio/audio.mp3";
import logo from "../../../assets/images/logo.png";
// import aplausos from "../../../assets/images/clapping.png";
// import face1 from "../../../assets/images/face1.png";
// import face2 from "../../../assets/images/face2.png";
// import face3 from "../../../assets/images/face3.png";
// import face4 from "../../../assets/images/face4.png";
// import like from "../../../assets/images/like.png";
// import likeActive from "../../../assets/images/like-active.png";
// import download from "../../../assets/images/download.png";

import { makeQuestionApi } from "../../../api/question";
// import { postClapsApi } from "../../../api/clapMeter";
import { eventApi } from "../../../api/events";
import { getAccessTokenApi } from "../../../api/auth";
import { updateStreamTimeApi } from "../../../api/user";
import { getTime } from "../../../api/time";
// import { COMETCHAT_CONSTANTS } from "../../../consts";
import Socket from "../../../utils/socket";

// import { CometChatUnified } from "../../../components/CometChatPro";
import Agenda from "../../../components/Basic/Agenda/Agenda";
import Footer from "../../../components/Basic/Footer/Footer";

import "./Streaming.scss";

// const CUSTOMER_MESSAGE_LISTENER_KEY = "client-listener";
const { SubMenu } = Menu;

const Streaming = () => {
	const history = useHistory();

	const [user, setUser] = useState();
	const [questionInput, setQuestionInput] = useState("");
	const [agendaTime, setAgendaTime] = useState(null);
	const [token, setToken] = useState(null);
	// const [notifications, setNotifications] = useState(false);
	const [saveData, setSaveData] = useState(0);
	// const [state2, setState2] = useState(true);
	const [state3, setState3] = useState(true);
	const [current, setCurrent] = useState("mail");
	// const [options, setOptions] = useState({
	// 	option1: false,
	// 	option2: false,
	// 	option3: false,
	// });

	useEffect(() => {
		let interval;
		getTime2(interval);
		if (!isMobile) {
			$(window).scroll(function () {
				const distanceY = window.pageYOffset || document.documentElement.scrollTop;
				const shrinkOn = 550;
				if (distanceY > shrinkOn) {
					$(".transmission").addClass("scroll");
				} else {
					$(".transmission").removeClass("scroll");
				}
			});
		}
		const auxToken = getAccessTokenApi();
		if (auxToken === null) {
			history.push("/iniciarsesion");
		} else {
			const decodedToken = jwtDecode(auxToken);
			if (!decodedToken) {
				history.push("/iniciarsesion");
			} else {
				setToken(auxToken);
				setUser(decodedToken);
				const user = {
					id: decodedToken.id,
					route: window.location.pathname,
				};
				Socket.emit("UPDATE_ROUTE", user);
				const data = {
					email: decodedToken.email,
				};
				updateStreamTimeApi(auxToken, data);

				// if (!isSafari && !isMobileSafari) {
				// 	const UID = decodedToken.id;
				// 	const apiKey = COMETCHAT_CONSTANTS.AUTH_KEY;
				// 	const GUID = "chat_general";
				// 	const password = "";
				// 	const groupType = CometChat.GROUP_TYPE.PUBLIC;
				// 	CometChat.joinGroup(GUID, groupType, password).then(
				// 		(group) => {},
				// 		(error) => {}
				// 	);
				// 	// Socket.on("DO_CLAPS", () => {
				// 	// 	crearAnimationSocket();
				// 	// });
				// } else {
				// 	setState3(false);
				// }
			}
		}
	}, []);

	useEffect(() => {
		let action = "pageView";
		let description = "";
		switch (saveData) {
			case 1:
				action = "Pregunta";
				description = "Pregunta enviada";
				break;
			case 2:
				action = "Footer";
				description = "Powered By Up";
				break;
			case 3:
				action = "Menu";
				description = "Activar notificaciones";
				break;
			case 4:
				action = "Menu";
				description = "Silenciar notificaciones";
				break;
			case 5:
				action = "Menu";
				description = "Abrir Chat";
				break;
			case 6:
				action = "Menu";
				description = "Cerrar Chat";
				break;
			default:
				break;
		}
		const data = {
			conectionType: window.conectionType,
			page: "/streaming",
			action,
			description,
			userId: localStorage.getItem("userID"),
		};
		eventApi(data);
		if (saveData === 2) {
			window.open("https://www.upwebinar.cl/", "_blank");
		}
	}, [saveData]);

	// useEffect(() => {
	// 	if (state3) {
	// 		if (notifications) {
	// 			CometChat.addMessageListener(
	// 				CUSTOMER_MESSAGE_LISTENER_KEY,
	// 				new CometChat.MessageListener({
	// 					onTextMessageReceived: (textMessage) => {
	// 						const newAudio = new Audio(audio);
	// 						newAudio.play();
	// 						let message = textMessage.data.text;
	// 						if (message.length > 25) {
	// 							message = message.substring(0, 25) + "...";
	// 						}
	// 						notification["info"]({
	// 							message: "Nuevo mensaje",
	// 							description: message,
	// 						});
	// 					},
	// 				})
	// 			);
	// 		} else {
	// 			CometChat.removeMessageListener(CUSTOMER_MESSAGE_LISTENER_KEY);
	// 		}
	// 	}
	// }, [notifications]);

	// const crearAnimation = () => {
	// 	const numero = Math.floor(Math.random() * 7) + 1;
	// 	const idElement = `apl${numero}`;
	// 	const clase = `aplauso${numero}`;
	// 	const doc = document.getElementById(idElement);

	// 	doc.classList.remove();
	// 	doc.classList.add(clase);
	// 	const interval = setInterval(() => {
	// 		doc.classList.remove(clase);
	// 		clearInterval(interval);
	// 	}, 3000);
	// 	Socket.emit("CLAPS", () => {});
	// 	ClapPost();
	// };

	// const crearAnimationSocket = () => {
	// 	const numero = Math.floor(Math.random() * 7) + 1;
	// 	const idElement = `apl${numero}`;
	// 	const clase = `aplauso${numero}`;
	// 	const doc = document.getElementById(idElement);

	// 	doc.classList.remove();
	// 	doc.classList.add(clase);
	// 	const interval = setInterval(() => {
	// 		doc.classList.remove(clase);
	// 		clearInterval(interval);
	// 	}, 3000);
	// };

	// const OnOffNotifications = () => {
	// 	if (state3) {
	// 		if (notifications) {
	// 			setSaveData(4);
	// 		} else {
	// 			setSaveData(3);
	// 		}
	// 		setNotifications(!notifications);
	// 	}
	// };

	useEffect(() => {
		if (!state3) {
			let doc2 = document.getElementById("col2");
			let doc = document.getElementById("col1");
			doc.style.width = "100%";
			doc2.style.display = "none";
		}
	}, [state3]);

	// const cerrarChat = () => {
	// 	let doc = document.getElementById("col1");
	// 	let doc3 = document.getElementById("open");
	// 	let doc2 = document.getElementById("col2");
	// 	let doc4 = document.getElementById("base");

	// 	if (doc.style.width === "100%") {
	// 		doc.style.width = "calc(100% - 400px)";
	// 		doc2.style.visibility = "visible";
	// 		doc2.style.opacity = "1";
	// 		doc3.style.transform = "rotate(360deg)";
	// 		// doc3.style.transitionDuration = '1s';
	// 		doc2.style.width = "400px";
	// 		doc2.style.display = "block";

	// 		doc4.style.width = "calc( 100% - 400px) ";
	// 		setState2(true);
	// 		// doc2.style.transform = "translateX(400%)";
	// 		setSaveData(5);
	// 	} else {
	// 		doc3.style.transform = "rotate(180deg)";
	// 		// doc3.style.transitionDuration = '1s';
	// 		doc4.style.width = "100%";
	// 		doc.style.width = "100%";
	// 		doc2.style.width = "0px";

	// 		doc2.style.visibility = "hidden";
	// 		doc2.style.opacity = "0";
	// 		doc2.style.display = "none";
	// 		// doc2.style.transform = "translateX(-400%)";
	// 		setState2(false);
	// 		setSaveData(6);
	// 	}
	// };

	// const cerrarChat2 = () => {
	// 	// let doc = document.getElementById("col1");
	// 	let doc3 = document.getElementById("open2");
	// 	let doc2 = document.getElementById("col2");

	// 	if (doc2.style.display === "none") {
	// 		doc2.style.display = "block";
	// 		doc3.style.transitionDuration = "1s";
	// 		doc3.classList.remove("img");
	// 		doc3.classList.add("img2");
	// 		doc3.style.translate = "rotate(270deg) !important";
	// 		setSaveData(5);
	// 		setState2(false);
	// 	} else {
	// 		doc2.style.display = "none";
	// 		doc3.style.translate = "rotate(90deg) !important";
	// 		doc3.style.transitionDuration = "1s";
	// 		doc3.classList.remove("img2");
	// 		doc3.classList.add("img");
	// 		setSaveData(6);
	// 		setState2(true);
	// 	}
	// };

	// const ClapPost = async () => {
	// 	if (token != null) {
	// 		const decodedToken = jwtDecode(token);
	// 		const data = {
	// 			userId: decodedToken.id,
	// 		};
	// 		await postClapsApi(token, data);
	// 	} else {
	// 		history.push("/iniciarsesion");
	// 	}
	// };

	const handleClick = (e) => {
		setCurrent({ current: e.key });
	};

	const onChange = (e) => {
		setQuestionInput(e.target.value);
	};

	const sendQuestion = async () => {
		const userQuestion = questionInput;
		if (userQuestion.trim() !== "") {
			const data = {
				user: user.id,
				question: userQuestion,
			};
			const result = await makeQuestionApi(token, data);
			if (!result.ok) {
				notification["error"]({
					message: result.message,
				});
			} else {
				notification["success"]({
					message: result.message,
				});
				setQuestionInput("");
				setSaveData(1);
			}
		} else {
			notification["error"]({
				message: "Ingrese una pregunta válida",
			});
		}
	};

	const getTime2 = async (interval) => {
		try {
			const resp = await getTime();
			const timeApi = moment(resp.time).valueOf();
			setAgendaTime(resp.time);
			$(".cronometro").each(function () {
				const $this = $(this);
				let now = timeApi;

				interval = setInterval(function () {
					const countDownDate = moment(resp.eventTime).valueOf();
					const distance = countDownDate - now;
					const days_t = Math.floor(distance / (1000 * 60 * 60 * 24));
					const hours_t = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					const minutes_t = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
					const seconds_t = Math.floor((distance % (1000 * 60)) / 1000);
					let days, m1, m2, hours, minutes, seconds;
					if (days_t < 10) {
						days = "0" + days_t;
					} else {
						m1 = String(days_t).substring(0, 1);
						m2 = String(days_t).substring(1, 2);
						days = m1 + m2;
					}
					if (hours_t < 10) {
						hours = "0" + hours_t;
					} else {
						m1 = String(hours_t).substring(0, 1);
						m2 = String(hours_t).substring(1, 2);
						hours = m1 + m2;
					}
					if (minutes_t < 10) {
						minutes = "0" + minutes_t;
					} else {
						m1 = String(minutes_t).substring(0, 1);
						m2 = String(minutes_t).substring(1, 2);
						minutes = m1 + m2;
					}
					if (seconds_t < 10) {
						seconds = "0" + seconds_t;
					} else {
						m1 = String(seconds_t).substring(0, 1);
						m2 = String(seconds_t).substring(1, 2);
						seconds = m1 + m2;
					}
					$this.empty();
					if (countDownDate > now) {
						$this.append("<div><h1>" + days + "</h1><span>Días</span></div>");
						$this.append("<div><h1>" + hours + "</h1><span>Horas</span></div>");
						$this.append("<div><h1>" + minutes + "</h1><span>Minutos</span></div>");
						$this.append("<div><h1>" + seconds + "</h1><span>Segundos</span></div>");
					} else {
						clearInterval(interval);
					}
					now = moment(now).add(1, "seconds").valueOf();
				}, 1000);
			});
		} catch (exception) {
			console.log(exception);
		}
	};

	return (
		<>
			<div className="fondo">
				<div className="background-streaming">
					<div className="menu">
						<div className="logo">
							<img src={logo} alt="logo" width="180" />
						</div>
						<div className="subMenu desktop">
							<Link to="/salaespera">Sala de espera</Link>
							<Link to="/salaespera#agenda">Agenda</Link>
							<Link to="/salaespera#stands">Stands</Link>
						</div>
						<div className="movil">
							<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
								<SubMenu key="SubMenu" icon={<UnorderedListOutlined />} title="">
									<Menu.Item key="setting:1">
										<Link className="opcion" to="/salaespera">
											Sala de espera
										</Link>
									</Menu.Item>
									<Menu.Item key="setting:2">
										<Link className="opcion" to="salaespera#agenda">
											Agenda
										</Link>
									</Menu.Item>
									<Menu.Item key="setting:3">
										<Link className="opcion" to="salaespera#stands">
											stands
										</Link>
									</Menu.Item>
								</SubMenu>
							</Menu>
						</div>
					</div>
					<div className="contenedorStreaming">
						<div className="col1" id="col1">
							{/* <div className="header">
								<div className="logo"></div>
								{state3 ? (
									<div className="opciones">
										<div onClick={() => OnOffNotifications()}>
											{notifications ? (
												<Tooltip placement="topLeft" title="Silenciar notificaciones" arrowPointAtCenter>
													<VolumeUpIcon className="icon" />
												</Tooltip>
											) : (
												<Tooltip placement="topLeft" title="Activar notificaciones" arrowPointAtCenter>
													<VolumeOffIcon className="icon" />
												</Tooltip>
											)}
										</div>
										<>
											<div onClick={cerrarChat} className="desktop">
												<img id="open" src={cerrar} alt="cerrar" />
											</div>
											<div onClick={cerrarChat2} className="movil">
												<img id="open2" src={cerrar} alt="cerrar" className="img" />
											</div>
										</>
									</div>
								) : null}
							</div> */}
							<div className="streaming">
								<iframe
									title="streaming"
									width="560"
									height="315"
									className="transmission"
									src="https://player.vimeo.com/video/496943592"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
								{/* <div className="claps-container">
									<div className="base" id="base">
										<img src={aplausos} alt="logoFestival" onClick={() => crearAnimation()} />
									</div>
								</div>
								<img src={aplausos} id="apl1" alt="logoFestival" className="base" />
								<img src={aplausos} id="apl2" alt="logoFestival" className="base" />
								<img src={aplausos} id="apl3" alt="logoFestival" className="base" />
								<img src={aplausos} id="apl4" alt="logoFestival" className="base" />
								<img src={aplausos} id="apl5" alt="logoFestival" className="base" />
								<img src={aplausos} id="apl6" alt="logoFestival" className="base" />
								<img src={aplausos} id="apl7" alt="logoFestival" className="base" /> */}
							</div>
						</div>
					</div>
				</div>
				<div className="col-1">
					<div className="question-container">
						<h1>Envía aquí tus preguntas o saludos</h1>
						<input type="text" placeholder="Escribe aquí..." name="question" id="question" value={questionInput} onChange={onChange} />
						<button onClick={sendQuestion}>Enviar</button>
					</div>
					<Agenda agendaTime={agendaTime} state={true} setSaveData={setSaveData} />
					{/* <div className="like-container">
						<h1>¿Te a gustado el evento?</h1>
						<div className="faces">
							<img src={face1} alt="face1" />
							<img src={face2} alt="face2" />
							<img src={face3} alt="face3" />
							<img src={face4} alt="face4" />
						</div>
					</div> */}
					{/* <div className="votes-container">
						<h1>Vota por tu Tema favorito</h1>
						<div className="option" onClick={() => setOptions({ option1: !options.option1 })}>
							{options.option1 ? <img src={likeActive} alt="like" /> : <img src={like} alt="like" />}
							<p className="description">Creatividad en la gestión de proyectos</p>
						</div>
						<div className="option" onClick={() => setOptions({ option2: !options.option2 })}>
							{options.option2 ? <img src={likeActive} alt="like" /> : <img src={like} alt="like" />}
							<p className="description">Relación entre CMMi, ITIL y PMI</p>
						</div>
						<div className="option" onClick={() => setOptions({ option3: !options.option3 })}>
							{options.option3 ? <img src={likeActive} alt="like" /> : <img src={like} alt="like" />}
							<p className="description">Actitudes necesarias en la gestión de proyectos</p>
						</div>
					</div> */}
					{/* <div className="download-container">
						<img src={download} alt="download" />
					</div> */}
					{/* <div className="bingo-container">
						<div></div>
					</div> */}
				</div>
			</div>
			<Footer setSaveData={setSaveData} />
		</>
	);
};

export default Streaming;
