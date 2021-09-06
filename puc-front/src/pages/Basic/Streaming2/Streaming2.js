/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Spin, Menu, Radio, Space, Progress, notification } from "antd";
import { UnorderedListOutlined, LoadingOutlined } from "@ant-design/icons";
import { useHistory, Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import $ from "jquery";
import { isMobile } from "react-device-detect";

import { getAccessTokenApi } from "../../../api/auth";
import { updateStreamTimeApi } from "../../../api/user";
import { makeQuestionApi } from "../../../api/question";
import { eventApi } from "../../../api/events";
import { postVoteApi, getVoteClientApi } from "../../../api/vote";
import { postTestApi } from "../../../api/test";
import { getTestStatusApi } from "../../../api/testStatus";
import Socket from "../../../utils/socket";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";

import Footer from "../../../components/Basic/Footer/Footer";

import logo from "../../../assets/images/logo.png";

import "./Streaming2.scss";
import { postTestVoteApi } from "../../../api/testVote";

const { SubMenu } = Menu;

const Streaming2 = () => {
	const history = useHistory();

	const [loading, setLoading] = useState(false);
	const [token, setToken] = useState(null);
	const [user, setUser] = useState();
	const [current, setCurrent] = useState("mail");
	const [questionInput, setQuestionInput] = useState("");
	const [saveData, setSaveData] = useState(0);

	// vote
	const [radioValue, setRadioValue] = useState(0);
	const [voteStatus, setVoteStatus] = useState(false);
	const [option1, setOption1] = useState(0);
	const [option2, setOption2] = useState(0);
	const [option3, setOption3] = useState(0);
	const [option4, setOption4] = useState(0);
	const [option5, setOption5] = useState(0);
	const [option6, setOption6] = useState(0);
	const [option7, setOption7] = useState(0);
	const [option8, setOption8] = useState(0);

	const [votes, setVotes] = useState(0);
	const [vote1, setVote1] = useState(0);
	const [vote2, setVote2] = useState(0);

	// test
	const [pages, setPages] = useState(1);
	const [activeTest, setActiveTest] = useState(false);
	const [testStatus, setTestStatus] = useState(false);
	const [activeVote1, setActiveVote1] = useState(false);
	const [activeVote2, setActiveVote2] = useState(false);
	const [question1, setQuestion1] = useState(0);
	const [question2, setQuestion2] = useState(0);
	const [question3, setQuestion3] = useState(0);
	const [question4, setQuestion4] = useState(0);
	const [question5, setQuestion5] = useState(0);
	const [question6, setQuestion6] = useState(0);

	useEffect(() => {
		setLoading(true);
		if (!isMobile) {
			$(window).scroll(function () {
				const distanceY = window.pageYOffset || document.documentElement.scrollTop;
				const shrinkOn = 550;
				if (distanceY > shrinkOn) {
					$(".transmission2").addClass("scroll");
				} else {
					$(".transmission2").removeClass("scroll");
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
				setVoteStatus(decodedToken.vote);
				setTestStatus(decodedToken.test);
				const user = {
					id: decodedToken.id,
					route: window.location.pathname,
				};
				Socket.emit("UPDATE_ROUTE", user);
				const data = {
					email: decodedToken.email,
				};
				updateStreamTimeApi(auxToken, data);
				setInterval(function () {
					getVotes(auxToken);
					getTestStatus(auxToken);
				}, 5000);
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
			default:
				break;
		}
		const data = {
			conectionType: window.conectionType,
			page: "/streaming2",
			action,
			description,
			userId: localStorage.getItem("userID"),
		};
		eventApi(data);
		if (saveData === 2) {
			window.open("https://www.upwebinar.cl/", "_blank");
		}

	}, [saveData]);




	const getTestStatus = async (auxToken) => {
		await getTestStatusApi(auxToken).then((resp) => {
			if (!resp.ok) {
				notification["error"]({
					message: resp.message,
				});
			} else {
                try {
					const arr = resp.testStatus;
					setActiveTest(arr[arr.length - 1].active);
					setActiveVote1(arr[arr.length - 1].vote1);
					setActiveVote2(arr[arr.length - 1].vote2);
                } catch (error) {
                    setActiveTest(false);
					setActiveVote1(false);
					setActiveVote2(false);
                }
			}
			setLoading(false);
		});
	}

	const getVotes = async (auxToken) => {
		const response = await getVoteClientApi(auxToken);
		if (response.ok) {
			setOption1(response.opt1q1);
			setOption2(response.opt2q1);
			setOption3(response.opt3q1);
			setOption4(response.opt4q1);
			setOption5(response.opt1q2);
			setOption6(response.opt2q2);
			setOption7(response.opt3q2);
			setOption8(response.opt4q2);
			setLoading(false);
		} else {
			setLoading(false);
		}
	};

	const handleClick = (e) => {
		setCurrent({ current: e.key });
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

	const onChange = (e) => {
		setQuestionInput(e.target.value);
	};

	//Votes 
	const addVotes = () => {
		if (votes < 2) {
			if (votes === 0 && vote1 === 0) {
				notification["error"]({
					message: "Debes seleccionar una opción",
				});
			} else if(votes === 1 && vote2 === 0){
				notification["error"]({
					message:"Debes seleccionar una opción"
				})
			}else {
				setVotes(votes + 1);
			}
		}
	}

	const addPages = () => {
		if (pages < 6) {
			if (pages === 1 && question1 === 0) {
				notification["error"]({
					message: "Debes seleccionar una opción",
				});
			} else if (pages === 2 && question2 === 0) {
				notification["error"]({
					message: "Debes seleccionar una opción",
				});
			} else if (pages === 3 && question3 === 0) {
				notification["error"]({
					message: "Debes seleccionar una opción",
				});
			} else if (pages === 4 && question4 === 0) {
				notification["error"]({
					message: "Debes seleccionar una opción",
				});
			} else if (pages === 5 && question5 === 0) {
				notification["error"]({
					message: "Debes seleccionar una opción",
				});
			} else {
				setPages(pages + 1);
			}
		}
	};

	const sendTest = async () => {
		if (pages === 6 && question6 === 0) {
			notification["error"]({
				message: "Debes seleccionar una opción",
			});
		} else {
			if (testStatus) {
				notification["error"]({
					message: "Solo puedes realizar la evaluación una vez",
				});
			} else {
				const data = {
					userID: user.id,
					question1,
					question2,
					question3,
					question4,
					question5,
					question6,
				};
				const response = await postTestApi(token, data);
				if (response.ok) {
					const { accessToken, refreshToken, message } = response;
					localStorage.setItem(ACCESS_TOKEN, accessToken);
					localStorage.setItem(REFRESH_TOKEN, refreshToken);
					setToken(accessToken);
					setUser(jwtDecode(accessToken));
					setTestStatus(true);
					notification["success"]({
						message: message,
					});
				} else {
					notification["error"]({
						message: response.message,
					});
				}
			}
		}
	};

	const sendTestVote = async () => {
		if (votes === 1 && vote2 === 0) {
			notification["error"]({
				message: "Debes seleccionar una opción",
			});
		} else {
			//Revisar el status de las votaciones
			if (voteStatus) {
				notification["error"]({
					message: "Solo puedes realizar la votación una vez",
				});
			} else {
				const data = {
					userID: user.id,
					question1: vote1,
					question2: vote2
				};
				const response = await postTestVoteApi(token, data);
				if (response.ok) {
					const { accessToken, refreshToken, message } = response;
					localStorage.setItem(ACCESS_TOKEN, accessToken);
					localStorage.setItem(REFRESH_TOKEN, refreshToken);
					setToken(accessToken);
					setUser(jwtDecode(accessToken));
					setVoteStatus(true);
					notification["success"]({
						message: message,
					});
					addVotes();
				} else {
					notification["error"]({
						message: response.message,
					});
				}
			}
		}
	};

	const antIcon = <LoadingOutlined spin />;

	return (
		<Spin spinning={loading} size="large" tip="Cargando..." indicator={antIcon}>
			<div className="streaming2-container">
				<div className="header">
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
				<div className="col">
					<div className="col-1">
						<div className="streaming">
							<div className="streaming">
								<iframe
									title="streaming"
									width="560"
									height="315"
									className="transmission2"
									src="https://player.vimeo.com/video/496943592"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div>
					<div className="col-2">
						<div className="header">
							<h1>Votación</h1>
						</div>
						<div className="content">
							{voteStatus ? <h1 style={{padding:"20px"}}>¡Gracias por votar!</h1> :
								<div className="votes">
								{
									(activeVote1 & activeVote2 & votes ===2) ?
										<h1>¡Gracias por votar!</h1>:null
								}
								{
									(votes === 0 & activeVote1) ?
										<>
										<h3>¿Qué hipótesis clínica se plantea con este paciente?</h3>
										<Radio.Group onChange={(e) => setVote1(e.target.value)} value={vote1} className="radioButton">
											<Space direction="vertical">
												<Radio value={1}>Presenta IRA altas atribuibles a un prescolar SANO</Radio>
												<Radio value={2}>Presenta una probable inmunodeficiencia humoral</Radio>
												<Radio value={3}>Presenta una alta sospecha de Fibrosis Quística</Radio>
												<Radio value={4}>Presenta una alta sospecha de Asma</Radio>
											</Space>
											</Radio.Group>
										</>:null
								}
								{
									(votes === 1 & activeVote2) ?
									<>
									<h5>¿Qué estudio plantearía para avanzar en esta situación?</h5>
									<Radio.Group onChange={(e) => setVote2(e.target.value)} value={vote2}>
										<Space direction="vertical">
											<Radio value={1}>Verificar que Radiografía de tórax  es normal</Radio>
											<Radio value={2}>Realizar Hgma, Inmunog totales, TS y AC neumo</Radio>
											<Radio value={3}>Realizar nueva radiografía y  TAC de tórax.</Radio>
											<Radio value={4}>Realizar espirometría prescolar, IOS y Test del sudor</Radio>
										</Space>
									</Radio.Group>
									</>:null	
								}
								{
									(votes!==1 & activeVote1)?
									<button className={votes>1 ? "btn-disabled" : "btn"} onClick={addVotes}>
										Votar
									</button>:null
								}
								{(votes === 1 & activeVote2 )? 
									<button className="btn" onClick={sendTestVote}>Votar</button> : null}

																{
								(votes === 0 & activeVote1) ?
								<div className="result">
									<h1>Resultado votación</h1>
									<div className="option">
										<p>Presenta IRA altas atribuibles a un prescolar SANO</p>
										<Progress percent={20} status="active" />
									</div>
									<div className="option">
										<p>Presenta una probable inmunodeficiencia humoral</p>
										<Progress percent={30} status="active" />
									</div>
									<div className="option">
										<p>Presenta una alta sospecha de Fibrosis Quística</p>
										<Progress percent={40} status="active" />
									</div>
									<div className="option">
										<p>Presenta una alta sospecha de Asma</p>
										<Progress percent={10} status="active" />
									</div>
								</div>: null
							}
							{
								(votes === 1 & activeVote2) ?
								<div className="result">
									<h1>Resultado votación</h1>
									<div className="option">
										<p>Verificar que Radiografía de tórax  es normal</p>
										<Progress percent={40} status="active" />
									</div>
									<div className="option">
										<p>Realizar Hgma, Inmunog totales, TS y AC neumo</p>
										<Progress percent={20} status="active" />
									</div>
									<div className="option">
										<p>Realizar nueva radiografía y  TAC de tórax. </p>
										<Progress percent={10} status="active" />
									</div>
									<div className="option">
										<p>Realizar espirometría prescolar, IOS y Test del sudor</p>
										<Progress percent={30} status="active" />
									</div>
								</div>: null
							}

							</div>								
							}


						</div>
					</div>
				</div>
				<div className="container">
					<div className="question-container">
						<h1>Envía aquí tus preguntas o saludos</h1>
						<input type="text" placeholder="Escribe aquí..." name="question" id="question" value={questionInput} onChange={onChange} />
						<button onClick={sendQuestion}>Enviar</button>
					</div>
					{!activeTest ? <h1 className="title-test">Una vez finalizado el streaming podrás realizar la evaluación</h1> : null}
					<div className="test-container">
						{!activeTest ? <div className="block-card" /> : null}
						{testStatus ? <div className="block-card" /> : null}
						<div className="card-container">
							<h1 className="card-title">Realizar evaluación</h1>
							<hr />
							<div className="question">
								{pages === 1 ? (
									<>
										<h1 className="question-title">¿Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo?</h1>
										<Radio.Group onChange={(e) => setQuestion1(e.target.value)} value={question1}>
											<Space direction="vertical">
												<Radio value={1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
												<Radio value={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
												<Radio value={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
											</Space>
										</Radio.Group>
									</>
								) : null}
								{pages === 2 ? (
									<>
										<h1 className="question-title">¿Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo?</h1>
										<Radio.Group onChange={(e) => setQuestion2(e.target.value)} value={question2}>
											<Space direction="vertical">
												<Radio value={1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
												<Radio value={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
												<Radio value={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
											</Space>
										</Radio.Group>
									</>
								) : null}
								{pages === 3 ? (
									<>
										<h1 className="question-title">¿Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo?</h1>
										<Radio.Group onChange={(e) => setQuestion3(e.target.value)} value={question3}>
											<Space direction="vertical">
												<Radio value={1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
												<Radio value={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
												<Radio value={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
											</Space>
										</Radio.Group>
									</>
								) : null}
								{pages === 4 ? (
									<>
										<h1 className="question-title">¿Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo?</h1>
										<Radio.Group onChange={(e) => setQuestion4(e.target.value)} value={question4}>
											<Space direction="vertical">
												<Radio value={1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
												<Radio value={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
												<Radio value={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
											</Space>
										</Radio.Group>
									</>
								) : null}
								{pages === 5 ? (
									<>
										<h1 className="question-title">¿Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo?</h1>
										<Radio.Group onChange={(e) => setQuestion5(e.target.value)} value={question5}>
											<Space direction="vertical">
												<Radio value={1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
												<Radio value={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
												<Radio value={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
											</Space>
										</Radio.Group>
									</>
								) : null}
								{pages === 6 ? (
									<>
										<h1 className="question-title">¿Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo?</h1>
										<Radio.Group onChange={(e) => setQuestion6(e.target.value)} value={question6}>
											<Space direction="vertical">
												<Radio value={1}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
												<Radio value={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
												<Radio value={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Radio>
											</Space>
										</Radio.Group>
									</>
								) : null}
							</div>
							<hr />
							<div className="buttons-container">
								<button
									className={pages === 1 ? "disabled" : ""}
									onClick={() => {
										pages !== 1 ? setPages(pages - 1) : setPages(pages);
									}}
								>
									<ArrowRightAltIcon className="rotate" /> Anterior
								</button>
								<div className="numbers">{pages} de 6</div>
								{pages < 6 ? (
									<button onClick={addPages}>
										Siguiente <ArrowRightAltIcon />
									</button>
								) : null}
								{pages === 6 ? <button onClick={sendTest}>Enviar</button> : null}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer setSaveData={setSaveData} />
		</Spin>
	);
};

export default Streaming2;
