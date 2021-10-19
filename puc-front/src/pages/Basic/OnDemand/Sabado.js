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

import "./OnDemand.scss";

// const CUSTOMER_MESSAGE_LISTENER_KEY = "client-listener";
const { SubMenu } = Menu;

export const Sabado = () => {
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
				Socket.emit("UPDATE_ROUTE", user)
			}
		}
	}, []);

	// useEffect(() => {
	// 	let action = "pageView";
	// 	let description = "";
	// 	switch (saveData) {
	// 		case 1:
	// 			action = "Pregunta";
	// 			description = "Pregunta enviada";
	// 			break;
	// 		case 2:
	// 			action = "Footer";
	// 			description = "Powered By Up";
	// 			break;
	// 		case 3:
	// 			action = "Menu";
	// 			description = "Activar notificaciones";
	// 			break;
	// 		case 4:
	// 			action = "Menu";
	// 			description = "Silenciar notificaciones";
	// 			break;
	// 		case 5:
	// 			action = "Menu";
	// 			description = "Abrir Chat";
	// 			break;
	// 		case 6:
	// 			action = "Menu";
	// 			description = "Cerrar Chat";
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// 	const data = {
	// 		conectionType: window.conectionType,
	// 		page: "/streaming",
	// 		action,
	// 		description,
	// 		userId: localStorage.getItem("userID"),
	// 	};
	// 	eventApi(data);
	// 	if (saveData === 2) {
	// 		window.open("https://www.upwebinar.cl/", "_blank");
	// 	}
	// }, [saveData]);

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
							<a href="/salaespera">Sala de espera</a>
							<a href="/salaespera#agenda">Agenda</a>
							<a href="/salaespera#stands">Stands</a>
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
					 
							<div className="streaming">
								<iframe
									title="streaming"
									width="560"
									height="315"
									className="transmission"
									src="https://player.vimeo.com/video/634889152?h=7b40f3d836"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer setSaveData={setSaveData} />
		</>
	);
};


