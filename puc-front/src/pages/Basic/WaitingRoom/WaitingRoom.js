/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Menu, Spin, notification, Drawer } from "antd";
import { UnorderedListOutlined, LoadingOutlined } from "@ant-design/icons";
import { useHistory, Link } from "react-router-dom";
import $ from "jquery";
import jwtDecode from "jwt-decode";
import moment from "moment";
import Tooltip from "@material-ui/core/Tooltip";
import { isSafari, isMobileSafari } from "react-device-detect";
import { CometChat } from "@cometchat-pro/chat";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import ChatIcon from "@material-ui/icons/Chat";
// import EventIcon from "@material-ui/icons/Event";
// import AccessTimeIcon from "@material-ui/icons/AccessTime";

import { getTime } from "../../../api/time";
import { eventApi } from "../../../api/events";
import { getAccessTokenApi } from "../../../api/auth";
import { updateWaitingRoomTimeApi } from "../../../api/user";
import { COMETCHAT_CONSTANTS } from "../../../consts";
import { getTestStatusApi, postTestStatusApi } from "../../../api/testStatus";


import logo from "../../../assets/images/logo.png";

// stands images
import standFondo from "../../../assets/images/stand.png";
import standAztra from '../../../assets/images/stands/astrazeneca/standAztra.jpg'
import standSanofi from '../../../assets/images/stands/sanofi/logoStand.jpg'
import standBiomerux from '../../../assets/images/stands/biomerieux/logoStand.jpg'
import standTeva from '../../../assets/images/stands/teva/logoStand.jpg'
import standBiomarin from '../../../assets/images/stands/biomarin/standBiomarin.jpg'
import standBiotoscana from '../../../assets/images/stands/biotoscana/standBiotoscana.jpg'
import standPasteur from '../../../assets/images/stands/pasteur/standPasteur.jpg'
import standSaval from '../../../assets/images/stands/saval/standSaval.jpg'
import standCelnova from '../../../assets/images/stands/celNova/standCelnova.jpg'
import standEuro from '../../../assets/images/stands/europharma/standEuro.jpg'
import standGsk from '../../../assets/images/stands/gsk/standGsk.jpg'

// Stands components
import PucComponent from "../../../components/Basic/Stand/puc";
import SavalComponent from "../../../components/Basic/Stand/saval";
import CelNovaComponent from "../../../components/Basic/Stand/CelNova";
import AstrazenecaComponent from '../../../components/Basic/Stand/Astrazeneca';
import BiomarinComponent from '../../../components/Basic/Stand/Biomarin';
import BiomerieuxComponent from '../../../components/Basic/Stand/Biomerieux';
import BiotoscanaComponent from '../../../components/Basic/Stand/Biotoscana';
import Europharma from "../../../components/Basic/Stand/Europharma";
import Gsk from "../../../components/Basic/Stand/Gsk";
import Pasteur from "../../../components/Basic/Stand/Pasteur";
import Teva from "../../../components/Basic/Stand/Teva";


import audio from "../../../assets/audio/audio.mp3";

import Agenda from "../../../components/Basic/Agenda/Agenda";
import Footer from "../../../components/Basic/Footer/Footer";
import { CometChatUnified } from "../../../components/CometChat";
import Socket from "../../../utils/socket";
import { postTestApi } from "../../../api/test";

import "./WaitingRoom.scss";
import Sanofi from "../../../components/Basic/Stand/Sanofi";

const CUSTOMER_MESSAGE_LISTENER_KEY = "client-listener";
const { SubMenu } = Menu;

const WaitingRoom = () => {
	const history = useHistory();
	const [current, setCurrent] = useState("mail");
	const [loading, setLoading] = useState(false);
	const [state, setState] = useState(true);
	const [perfilState, setPerfilState] = useState(false);
	const [saveData, setSaveData] = useState(0);
	const [agendaTime, setAgendaTime] = useState(null);
	const [token, setToken] = useState(null);
	const [unreadMessage, setUnreadMessage] = useState(0);
	const [notifications, setNotifications] = useState(true);
	const [chat, setChat] = useState(false);
	const [state2, setState2] = useState(true);
	const [changeStreaming, setChangeStreaming] = useState(false);

	// Drawers
	const [savalDrawer, setSavalDrawer] = useState(false);
	const [celNova, setCelNova] = useState(false);
	const [astrazeneca, setAstrazeneca] = useState(false);
	const [biomarin, setBiomarin] = useState(false);
	const [biomerieux, setBiomerieux] = useState(false);
	const [biotoscana, setBiotoscana] = useState(false);
	const [europharma, setEuropharma] = useState(false);
	const [gsk, setGsk] = useState(false);
	const [pasteur, setPasteur] = useState(false);
	const [sanofi, setSanofi] = useState(false);
	const [teva, setTeva] = useState(false);
	const [idSocket, setIdSocket] = useState('');
	const [idSocketBD, setIdSocketBD] = useState('');
	const [votesStatus, setVotesStatus] = useState({
		vote1: false,
		vote2: false,
		vote3: false,
		vote4: false,
		vote5: false,
		vote6: false,
		vote7: false,
		vote8: false,
		vote9: false,
		vote10: false,
		vote11: false,
		vote12: false,
		vote13: false,
		vote14: false,
		vote15: false,
		vote16: false,
		vote17: false,
		vote18: false,
		vote19: false,
		vote20: false,
		vote21: false,
		vote22: false,
		vote23: false,
		vote24: false,
		vote25: false,
		vote26: false,
		vote27: false,
		vote28: false,
		vote29: false,
		vote30: false,
		vote31: false,
		vote32: false
	})

	useEffect(() => {
		let interval;
		getTime2(interval);
		Socket.on('USER', user => {
			setIdSocket(user.id);
		})
		const day = moment().date();
		const month = moment().month();
		if (day === 16 && month === 9) {
			setChangeStreaming(true);
		}
		const tokenAux = getAccessTokenApi();
		if (tokenAux === null) {
			history.push("/iniciarsesion");
		} else {
			if (!isMobileSafari && isSafari) {
				setState2(false);
			}
			const decodedToken = jwtDecode(tokenAux);
			if (!decodedToken) {
				history.push("/iniciarsesion");
			} else {
				setToken(tokenAux);
				setIdSocketBD(decodedToken.idSocket);
				const user = {
					id: decodedToken.id,
					route: window.location.pathname,
				};
				Socket.emit("UPDATE_ROUTE", user);
				if (decodedToken.id === "6030020f11dc556d0599d445") {
					setPerfilState(true);
				}
				const data = {
					email: decodedToken.email,
					idSocket: idSocket
				};
				updateWaitingRoomTimeApi(token, data)
				const UID = decodedToken.id;
				const apiKey = COMETCHAT_CONSTANTS.AUTH_KEY;
				const GUID = "chat_general";
				const password = "";
				const groupType = CometChat.GROUP_TYPE.PUBLIC;
				CometChat.login(UID, apiKey).then(
					(User) => {
						CometChat.joinGroup(GUID, groupType, password).then(
							(group) => { },
							(error) => { }
						);
					},
					(error) => { }
				);

				interval = setInterval(() => {
					getTestsStatus(tokenAux);
				}, 5000);
			}
			return () => clearInterval(interval);
		}
		// if(idSocketBD !==idSocket){
		// 	history.push("/iniciarsesion");
		// }
	}, [idSocketBD]);


	useEffect(() => {
		let interval;
		getTime2(interval);
	}, [chat]);

	useEffect(() => {
		let action = "pageView";
		let description = "";
		switch (saveData) {
			case 1:
				action = "Menu";
				description = "Visitar mi Perfil";
				break;
			case 2:
				action = "Footer";
				description = "Powered By Up";
				break;
			case 3:
				action = "Agenda";
				description = "Entrar al Salón";
				break;
			case 4:
				action = "Cronometro";
				description = "Evaluación";
				break;
			default:
				break;
		}
		const data = {
			conectionType: window.conectionType,
			page: "/salaespera",
			action,
			description,
			userId: localStorage.getItem("userID"),
		};
		eventApi(data);

		if (saveData === 1) {
			history.push("/perfil");
		}
		if (saveData === 2) {
			window.open("https://www.upwebinar.cl/", "_blank");
		}
		const day = moment().date();
		const month = moment().month();
		if (day === 16 && month === 9) {
			if (saveData === 3 || saveData === 4) {
				history.push("/evaluacion");
			}
		} else {
			if (saveData === 3 || saveData === 4) {
				history.push("/evaluacion");
			}
		}
	}, [saveData]);

	const getTestsStatus = async (tokenAux) => {
		await getTestStatusApi(tokenAux).then((resp) => {
			if (!resp.ok) {
				notification["error"]({
					message: resp.message,
				});
			} else {
                try {
                    const arr = resp.testStatus;
					// console.log('estatus '+arr[arr.length -1].vote1);
					// console.log('estatus '+arr[arr.length -1].vote2);
					setVotesStatus({
						...votesStatus,
						vote32: arr[arr.length -1].vote32,
						
					})
                } catch (error) {
					setVotesStatus({
						vote1: false,
						vote2: false,
						vote3: false,
						vote4: false,
						vote5: false,
						vote6: false,
						vote7: false,
						vote8: false,
						vote9: false,
						vote10: false,
						vote11: false,
						vote12: false,
						vote13: false,
						vote14: false,
						vote15: false,
						vote16: false,
						vote17: false,
						vote18: false,
						vote19: false,
						vote20: false,
						vote21: false,
						vote22: false,
						vote23: false,
						vote24: false,
						vote25: false,
						vote26: false,
						vote27: false,
						vote28: false,
						vote29: false,
						vote30: false,
						vote31: false,
						vote32: false
					});
                }
			}
			setLoading(false);
		});
	};

	useEffect(() => {
		if (!isSafari && !isMobileSafari) {
			if (notifications) {
				CometChat.addMessageListener(
					CUSTOMER_MESSAGE_LISTENER_KEY,
					new CometChat.MessageListener({
						onTextMessageReceived: (textMessage) => {
							const newAudio = new Audio(audio);
							newAudio.play();
							let message = textMessage.data.text;
							if (message.length > 25) {
								message = message.substring(0, 25) + "...";
							}
							notification["info"]({
								message: "Nuevo mensaje",
								description: message,
							});
						},
					})
				);
			} else {
				CometChat.removeMessageListener(CUSTOMER_MESSAGE_LISTENER_KEY);
			}
		}
	}, [notifications]);

	const handleClick = (e) => {
		setCurrent({ current: e.key });
	};

	const OnOffNotifications = () => {
		let action;
		if (notification) {
			action = "Silenciar notificaciones";
		} else {
			action = "Activar notificaciones";
		}
		const data = {
			conexionType: window.conectionType,
			page: "/salaespera",
			action,
			country: window.country,
			userId: localStorage.getItem("userID"),
		};
		eventApi(data);
		setNotifications(!notifications);
	};

	const changeChatStatus = () => {
		let action;
		if (chat) {
			action = "Cerrar Chat";
		} else {
			action = "Abrir Chat";
			$('.css-83nmom').trigger('click');
		}
		const data = {
			conexionType: window.conectionType,
			page: "/salaespera",
			action,
			country: window.country,
			userId: localStorage.getItem("userID"),
		};
		eventApi(data);
		setChat(!chat);
	};

	const getTime2 = async (interval) => {
		setLoading(true);
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
						setLoading(false);
					} else {
						setState(false);
						setLoading(false);
						clearInterval(interval);
					}
					now = moment(now).add(1, "seconds").valueOf();
				}, 1000);
			});
			setLoading(false);
		} catch (exception) {
			setLoading(false);
			console.log(exception);
		}
	};

	const antIcon = <LoadingOutlined spin />;

	return (
		<Spin spinning={loading} size="large" tip="Cargando..." indicator={antIcon}>
			{chat ? (
				<>
					<CometChatUnified />
					<div className="pregunta2">
						<div className="card">
							<div className="barra fadeInUpBig">
								<h3 onClick={() => changeChatStatus()}>NETWORKING</h3>
								<div className="message">
									<div className="message-container">
										<Tooltip title="Cerrar networking" placement="top">
											<ChatIcon className="mensaje" onClick={() => changeChatStatus()} />
										</Tooltip>
									</div>
									{unreadMessage > 0 ? <span className="noti">{unreadMessage}</span> : null}
									{notifications ? (
										<div onClick={OnOffNotifications} className="volumen">
											<Tooltip title="Silenciar Notificaciones" placement="top">
												<VolumeUpIcon className="icon" />
											</Tooltip>
										</div>
									) : (
										<div onClick={OnOffNotifications} className="volumen">
											<Tooltip title="Habilitar Notificaciones" placement="top">
												<VolumeOffIcon className="icon" />
											</Tooltip>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="fondo">
						<div className="header-container">
							<div className="menu">
								<div className="logo">
									<img src={logo} alt="logo" width="180" />
								</div>
								<div className="subMenu desktop">
									<Link to="/salaespera">Sala de espera</Link>
									<a href="#agenda">Agenda</a>
									{state2 ? <Link onClick={() => changeChatStatus()}>Networking</Link> : null}
									<a href="#stands">Stands</a>
									{/* {!state && !changeStreaming ? (
										<Link to="/streaming" className="perfil">
											Entrar a sala
										</Link>
									) : null}
									{!state && changeStreaming ? (
										<Link to="/streaming" className="perfil">
											Entrar a sala
										</Link>
									) : null} */}
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
												<Link className="opcion" to="#agenda">
													Agenda
												</Link>
											</Menu.Item>
											{state2 ? (
												<Menu.Item key="setting:3">
													<Link className="opcion" onClick={() => changeChatStatus()}>
														Networking
													</Link>
												</Menu.Item>
											) : null}
											<Menu.Item key="setting:4">
												<Link className="opcion" to="#stands">
													stands
												</Link>
											</Menu.Item>
											{!state && !changeStreaming ? (
												<Menu.Item key="setting:5">
													<Link className="opcion" to="/streaming">
														Streaming
													</Link>
												</Menu.Item>
											) : null}
											{/* {!state && changeStreaming ? (
												<Menu.Item key="setting:5">
													<Link className="opcion" to="/streaming">
														Entrar a sala
													</Link>
												</Menu.Item>
											) : null} */}
										</SubMenu>
									</Menu>
								</div>
							</div>
							<div className="header2">
								{state ? (
									<div className="centrado">
										<div className="cronometro"></div>
									</div>
								) : null}
								{!state ? (
										<div className="centrado">
											<div className="btn">
												{
													votesStatus.vote32 &&
													<button onClick={() => setSaveData(4)}>Entrar a la prueba</button>
												}
											</div>
										</div>
									) : null}
							</div>
						</div>
						{state2 ? (
							<div className="pregunta2">
								<div className="card">
									<div className="barra fadeInUpBig">
										<h3 onClick={() => changeChatStatus()}>Networking</h3>
										 <div className="message">
											<div className="message-container">
												<Tooltip title="Ingresar a networking" placement="top">
													<ChatIcon className="mensaje" onClick={() => changeChatStatus()} />
												</Tooltip>
											</div>
											{unreadMessage > 0 ? <span className="noti">{unreadMessage}</span> : null}
											{notifications ? (
												<div onClick={OnOffNotifications} className="volumen">
													<Tooltip title="Silenciar Notificaciones" placement="top">
														<VolumeUpIcon className="icon" />
													</Tooltip>
												</div>
											) : (
												<div onClick={OnOffNotifications} className="volumen">
													<Tooltip title="Habilitar Notificaciones" placement="top">
														<VolumeOffIcon className="icon" />
													</Tooltip>
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						) : null}
						<div className="contenedor" id="stands">
							<div className="stands">
								{/* Aztracenaca */}
								<div className="col-2" onClick={() => setAstrazeneca(true)}>
									<img
										src={standAztra}
										alt="stand l"
									/>
								</div>
								<div className="col-2" onClick={() => setGsk(true)}>
									<img
										src={standGsk}
										alt="stand l"
									/>
								</div>
								<div className='center'>
									<div className="col-2" onClick={() => setSanofi(true)}>
										<img
											src={standSanofi}
											alt="stand l"
										/>
									</div>

									<div className='stand-l'>
										<div className='biomarin' onClick={() => setBiomarin(true)}>
											<img
												src={standBiomarin}
												alt="stand l"
											/>
										</div>
										<div className='biome' onClick={() => setBiomerieux(true)}>
											<img
												src={standBiomerux}
												alt="stand l"
											/>
										</div>
									</div>

								</div>


								<div className="col-m" onClick={() => window.open('https://www.grupobiotoscana.com/es/paises/chile/', '_blank')}>
									<img
										src={standBiotoscana}
										alt="stand l"
									/>
								</div>
								<div className="col-m" onClick={() => setCelNova(true)}>
									<img
										src={standCelnova}
										alt="stand l"
									/>
								</div>
								<div className="col-m" onClick={() => setEuropharma(true)}>
									<img
										src={standEuro}
										alt="stand l"
									/>
								</div>
								<div className="col-m" onClick={() => setPasteur(true)}>
									<img
										src={standPasteur}
										alt="stand l"
									/>
								</div>

								<div className="col-m" onClick={() => setSavalDrawer(true)}>
									<img
										src={standSaval}
										alt="stand l"
									/>
								</div>
								{/* <div className="col-m" onClick={() => setTeva(true)}>
									<img
										src={standTeva}
										alt="stand l"
									/>
								</div> */}
							</div>
						</div>
						{/* <div className="async">
							<div className="async-container">
								<div className="data">
									<h1 className="async-title">Streaming Asincrónico</h1>
									<p className="async-description">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
										magna aliqua. Ut enim ad minim veniam.
									</p>
									<div className="icons-container">
										<p className="date">
											<EventIcon className="icon" />
											<span>Miér. 14 de Octubre</span>
										</p>
										<p className="date">
											<AccessTimeIcon className="icon" />
											<span>09:00</span>
										</p>
									</div>
									<Link to="/asincrono" className="async-button">
										Ver Aquí
									</Link>
								</div>
							</div>
						</div> */}
						<Agenda agendaTime={agendaTime} state={state} setSaveData={setSaveData} />
					</div>
					<div className="fondoStand" id="fondoStand">
					</div>
					<Footer setSaveData={setSaveData} />
				</>
			)}
			{/* Drawers */}
			{/* Astraceneca */}
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setAstrazeneca(false)} visible={astrazeneca}>
				<AstrazenecaComponent visible={astrazeneca} setVisible={setAstrazeneca} token={token} standName="Aztraceneca" />
			</Drawer>
			{/* Biomarin */}
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setBiomarin(false)} visible={biomarin}>
				<BiomarinComponent visible={biomarin} setVisible={setBiomarin} token={token} standName="Biomarín" />
			</Drawer>
			{/* Biomerieux */}
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setBiomerieux(false)} visible={biomerieux}>
				<BiomerieuxComponent visible={biomerieux} setVisible={setBiomerieux} token={token} standName="Biomarín" />
			</Drawer>
			{/* Biotoscana */}
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setBiotoscana(false)} visible={biotoscana}>
				<BiotoscanaComponent visible={biotoscana} setVisible={setBiotoscana} token={token} standName="Biotoscana" />
			</Drawer>
			{/* CelNova */}
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setCelNova(false)} visible={celNova}>
				<CelNovaComponent visible={celNova} setVisible={setCelNova} token={token} standName="CelNova" />
			</Drawer>
			{/* Europharma */}
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setEuropharma(false)} visible={europharma}>
				<Europharma visible={europharma} setVisible={setEuropharma} token={token} standName="Europharma" />
			</Drawer>
			{/* >Gsk */}
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setGsk(false)} visible={gsk}>
				<Gsk visible={gsk} setVisible={setGsk} token={token} standName="Gsk" />
			</Drawer>
			{/* >Pasteur */}
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setPasteur(false)} visible={pasteur}>
				<Pasteur visible={pasteur} setVisible={setPasteur} token={token} standName="Pasteur" />
			</Drawer>
			{/* >Sanofi */}
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setSanofi(false)} visible={sanofi}>
				<Sanofi visible={sanofi} setVisible={setSanofi} token={token} standName="Sanofi" />
			</Drawer>
			{/* Saval */}
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setSavalDrawer(false)} visible={savalDrawer}>
				<SavalComponent visible={savalDrawer} setVisible={setSavalDrawer} token={token} standName="Saval" />
			</Drawer>
			{/* Teva */}
			<Drawer className="drawer-component" placement="right" closable={false} onClose={() => setTeva(false)} visible={teva}>
				<Teva visible={teva} setVisible={setTeva} token={token} standName="Teva" />
			</Drawer>
		</Spin>
	);
};

export default WaitingRoom;
