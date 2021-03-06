/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Spin, Menu, Radio, Space, Progress, notification } from "antd";
import { UnorderedListOutlined, LoadingOutlined } from "@ant-design/icons";
import { useHistory, Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import $ from "jquery";
import { isMobile } from "react-device-detect";

import { getAccessTokenApi } from "../../../api/auth";
import { updateStreamTimeApi } from "../../../api/user";
import { makeQuestionApi } from "../../../api/question";
import { eventApi } from "../../../api/events";
import { postVoteApi, getVoteClientApi, getVoteApi } from "../../../api/vote";
import { getTestStatusApi } from "../../../api/testStatus";
import Socket from "../../../utils/socket";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../utils/constants";

import Footer from "../../../components/Basic/Footer/Footer";

import logo from "../../../assets/images/logo.png";

import "./Streaming2.scss";
import { postTestVoteApi } from "../../../api/testVote";
import { Votes } from "../Votes/Votes";
import { Results } from "../Votes/Results";
import { dataVotes } from "./dataVotes";
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
	const [voteStatus, setVoteStatus] = useState(false);
	const [option1, setOption1] = useState(0);
	const [option2, setOption2] = useState(0);
	const [option3, setOption3] = useState(0);
	const [option4, setOption4] = useState(0);
	const [option5, setOption5] = useState(0);
	const [option6, setOption6] = useState(0);
	const [option7, setOption7] = useState(0);
	const [option8, setOption8] = useState(0);
	const [opt9, setOpt9] = useState(0);
	const [opt10, setOpt10] = useState(0);
	const [opt11, setOpt11] = useState(0);
	const [opt12, setOpt12] = useState(0);
	const [opt13, setOpt13] = useState(0);
	const [opt14, setOpt14] = useState(0);
	const [opt15, setOpt15] = useState(0);
	const [opt16, setOpt16] = useState(0);
	const [opt17, setOpt17] = useState(0);
	const [opt18, setOpt18] = useState(0);
	const [opt19, setOpt19] = useState(0);
	const [opt20, setOpt20] = useState(0);
	const [opt21, setOpt21] = useState(0);
	const [opt22, setOpt22] = useState(0);
	const [opt23, setOpt23] = useState(0);
	const [opt24, setOpt24] = useState(0);
	const [opt25, setOpt25] = useState(0);
	const [opt26, setOpt26] = useState(0);
	const [opt27, setOpt27] = useState(0);
	const [opt28, setOpt28] = useState(0);
	const [opt29, setOpt29] = useState(0);
	const [opt30, setOpt30] = useState(0);
	const [opt31, setOpt31] = useState(0);
	const [opt32, setOpt32] = useState(0);
	const [opt33, setOpt33] = useState(0);
	const [opt34, setOpt34] = useState(0);
	const [opt35, setOpt35] = useState(0);
	const [opt36, setOpt36] = useState(0);
	const [opt37, setOpt37] = useState(0);
	const [opt38, setOpt38] = useState(0);
	const [opt39, setOpt39] = useState(0);
	const [opt40, setOpt40] = useState(0);
	const [opt41, setOpt41] = useState(0);
	const [opt42, setOpt42] = useState(0);
	const [opt43, setOpt43] = useState(0);
	const [opt44, setOpt44] = useState(0);
	const [opt45, setOpt45] = useState(0);
	const [opt46, setOpt46] = useState(0);
	const [opt47, setOpt47] = useState(0);
	const [opt48, setOpt48] = useState(0);
	const [opt49, setOpt49] = useState(0);
	const [opt50, setOpt50] = useState(0);
	const [opt51, setOpt51] = useState(0);
	const [opt52, setOpt52] = useState(0);
	const [opt53, setOpt53] = useState(0);
	const [opt54, setOpt54] = useState(0);
	const [opt55, setOpt55] = useState(0);
	const [opt56, setOpt56] = useState(0);
	const [opt57, setOpt57] = useState(0);
	const [opt58, setOpt58] = useState(0);
	const [opt59, setOpt59] = useState(0);
	const [opt60, setOpt60] = useState(0);
	const [opt61, setOpt61] = useState(0);
	const [opt62, setOpt62] = useState(0);
	const [opt63, setOpt63] = useState(0);
	const [opt64, setOpt64] = useState(0);
	const [opt65, setOpt65] = useState(0);
	const [opt66, setOpt66] = useState(0);
	const [opt67, setOpt67] = useState(0);
	const [opt68, setOpt68] = useState(0);
	const [opt69, setOpt69] = useState(0);
	const [opt70, setOpt70] = useState(0);
	const [opt71, setOpt71] = useState(0);
	const [opt72, setOpt72] = useState(0);
	const [opt73, setOpt73] = useState(0);
	const [opt74, setOpt74] = useState(0);
	const [opt75, setOpt75] = useState(0);
	const [opt76, setOpt76] = useState(0);
	const [opt77, setOpt77] = useState(0);
	const [opt78, setOpt78] = useState(0);
	const [opt79, setOpt79] = useState(0);
	const [opt80, setOpt80] = useState(0);
	const [opt81, setOpt81] = useState(0);
	const [opt82, setOpt82] = useState(0);
	const [opt83, setOpt83] = useState(0);
	const [opt84, setOpt84] = useState(0);
	const [opt85, setOpt85] = useState(0);
	const [opt86, setOpt86] = useState(0);
	const [opt87, setOpt87] = useState(0);
	const [opt88, setOpt88] = useState(0);
	const [opt89, setOpt89] = useState(0);
	const [opt90, setOpt90] = useState(0);
	const [opt91, setOpt91] = useState(0);
	const [opt92, setOpt92] = useState(0);
	const [opt93, setOpt93] = useState(0);
	const [opt94, setOpt94] = useState(0);
	const [opt95, setOpt95] = useState(0);
	const [opt96, setOpt96] = useState(0);
	const [opt97, setOpt97] = useState(0);
	const [opt98, setOpt98] = useState(0);
	const [opt99, setOpt99] = useState(0);
	const [opt100, setOpt100] = useState(0);
	const [opt101, setOpt101] = useState(0);
	const [opt102, setOpt102] = useState(0);
	const [opt103, setOpt103] = useState(0);
	const [opt104, setOpt104] = useState(0);
	const [opt105, setOpt105] = useState(0);
	const [opt106, setOpt106] = useState(0);
	const [opt107, setOpt107] = useState(0);
	const [opt108, setOpt108] = useState(0);
	const [opt109, setOpt109] = useState(0);
	const [opt110, setOpt110] = useState(0);
	const [opt111, setOpt111] = useState(0);
	const [opt112, setOpt112] = useState(0);
	const [opt113, setOpt113] = useState(0);
	const [opt114, setOpt114] = useState(0);
	const [opt115, setOpt115] = useState(0);
	const [opt116, setOpt116] = useState(0);
	const [opt117, setOpt117] = useState(0);
	const [opt118, setOpt118] = useState(0);
	const [opt119, setOpt119] = useState(0);
	const [opt120, setOpt120] = useState(0);
	const [opt121, setOpt121] = useState(0);
	const [opt122, setOpt122] = useState(0);
	const [opt123, setOpt123] = useState(0);
	const [opt124, setOpt124] = useState(0);
	const [opt125, setOpt125] = useState(0);
	const [opt126, setOpt126] = useState(0);
	const [opt127, setOpt127] = useState(0);
	const [opt128, setOpt128] = useState(0);

	const [votes, setVotes] = useState(0);
	const [vote1, setVote1] = useState(0);
	const [vote2, setVote2] = useState(0);

	const [activeTest, setActiveTest] = useState(false);
	const [testStatus, setTestStatus] = useState(false);
	const [activeVote1, setActiveVote1] = useState(false);
	const [activeVote2, setActiveVote2] = useState(false);
	const [activeVote3, setActiveVote3] = useState(false);
	const [activeVote4, setActiveVote4] = useState(false);
	const [activeVote5, setActiveVote5] = useState(false);
	const [activeVote6, setActiveVote6] = useState(false);
	const [activeVote7, setActiveVote7] = useState(false);
	const [activeVote8, setActiveVote8] = useState(false);
	const [activeVote9, setActiveVote9] = useState(false);
	const [activeVote10, setActiveVote10] = useState(false);
	const [activeVote11, setActiveVote11] = useState(false);
	const [activeVote12, setActiveVote12] = useState(false);
	const [activeVote13, setActiveVote13] = useState(false);
	const [activeVote14, setActiveVote14] = useState(false);
	const [activeVote15, setActiveVote15] = useState(false);
	const [activeVote16, setActiveVote16] = useState(false);
	const [activeVote17, setActiveVote17] = useState(false);
	const [activeVote18, setActiveVote18] = useState(false);
	const [activeVote19, setActiveVote19] = useState(false);
	const [activeVote20, setActiveVote20] = useState(false);
	const [activeVote21, setActiveVote21] = useState(false);
	const [activeVote22, setActiveVote22] = useState(false);
	const [activeVote23, setActiveVote23] = useState(false);
	const [activeVote24, setActiveVote24] = useState(false);
	const [activeVote25, setActiveVote25] = useState(false);
	const [activeVote26, setActiveVote26] = useState(false);
	const [activeVote27, setActiveVote27] = useState(false);
	const [activeVote28, setActiveVote28] = useState(false);
	const [activeVote29, setActiveVote29] = useState(false);
	const [activeVote30, setActiveVote30] = useState(false);
	const [activeVote31, setActiveVote31] = useState(false);
	//Desactiva las preguntas
	const [activeVote32, setActiveVote32] = useState(false);

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
				console.log(user);
				console.log(decodedToken)
				setVoteStatus(decodedToken.vote);
				setTestStatus(decodedToken.test);
				const usuario = {
					id: decodedToken.id,
					route: window.location.pathname,
				};
				Socket.emit("UPDATE_ROUTE", usuario);
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
					setActiveVote3(arr[arr.length - 1].vote3);
					setActiveVote4(arr[arr.length - 1].vote4);
					setActiveVote5(arr[arr.length - 1].vote5);
					setActiveVote6(arr[arr.length - 1].vote6);
					setActiveVote7(arr[arr.length - 1].vote7);
					setActiveVote8(arr[arr.length - 1].vote8);
					setActiveVote9(arr[arr.length - 1].vote9);
					setActiveVote10(arr[arr.length - 1].vote10);
					setActiveVote11(arr[arr.length - 1].vote11);
					setActiveVote12(arr[arr.length - 1].vote12);
					setActiveVote13(arr[arr.length - 1].vote13);
					setActiveVote14(arr[arr.length - 1].vote14);
					setActiveVote15(arr[arr.length - 1].vote15);
					setActiveVote16(arr[arr.length - 1].vote16);
					setActiveVote17(arr[arr.length - 1].vote17);
					setActiveVote18(arr[arr.length - 1].vote18);
					setActiveVote19(arr[arr.length - 1].vote19);
					setActiveVote20(arr[arr.length - 1].vote20);
					setActiveVote21(arr[arr.length - 1].vote21);
					setActiveVote22(arr[arr.length - 1].vote22);
					setActiveVote23(arr[arr.length - 1].vote23);
					setActiveVote24(arr[arr.length - 1].vote24);
					setActiveVote25(arr[arr.length - 1].vote25);
					setActiveVote26(arr[arr.length - 1].vote26);
					setActiveVote27(arr[arr.length - 1].vote27);
					setActiveVote28(arr[arr.length - 1].vote28);
					setActiveVote29(arr[arr.length - 1].vote29);
					setActiveVote30(arr[arr.length - 1].vote30);
					setActiveVote31(arr[arr.length - 1].vote31);
					setActiveVote32(arr[arr.length - 1].vote32);

				} catch (error) {
					setActiveTest(false);
					setActiveVote1(false);
					setActiveVote2(false);
					setActiveVote3(false);
					setActiveVote4(false);
					setActiveVote5(false);
					setActiveVote6(false);
					setActiveVote7(false);
					setActiveVote8(false);
					setActiveVote9(false);
					setActiveVote10(false);
					setActiveVote11(false);
					setActiveVote12(false);
					setActiveVote13(false);
					setActiveVote14(false);
					setActiveVote15(false);
					setActiveVote16(false);
					setActiveVote17(false);
					setActiveVote18(false);
					setActiveVote19(false);
					setActiveVote20(false);
					setActiveVote21(false);
					setActiveVote22(false);
					setActiveVote23(false);
					setActiveVote24(false);
					setActiveVote25(false);
					setActiveVote26(false);
					setActiveVote27(false);
					setActiveVote28(false);
					setActiveVote29(false);
					setActiveVote30(false);
					setActiveVote31(false);
					setActiveVote32(false);
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
			setOpt9(response.opt1q3);
			setOpt10(response.opt2q3);
			setOpt11(response.opt3q3);
			setOpt12(response.opt4q3);
			setOpt13(response.opt1q4);
			setOpt14(response.opt2q4);
			setOpt15(response.opt3q4);
			setOpt16(response.opt4q4);
			setOpt17(response.opt1q5);
			setOpt18(response.opt2q5);
			setOpt19(response.opt3q5);
			setOpt20(response.opt4q5);
			setOpt21(response.opt1q6);
			setOpt22(response.opt2q6);
			setOpt23(response.opt3q6);
			setOpt24(response.opt4q6);
			setOpt25(response.opt1q7);
			setOpt26(response.opt2q7);
			setOpt27(response.opt3q7);
			setOpt28(response.opt4q7);
			setOpt29(response.opt1q8);
			setOpt30(response.opt2q8);
			setOpt31(response.opt3q8);
			setOpt32(response.opt4q8);
			setOpt33(response.opt1q9);
			setOpt34(response.opt2q9);
			setOpt35(response.opt3q9);
			setOpt36(response.opt4q9);
			setOpt37(response.opt1q10);
			setOpt38(response.opt2q10);
			setOpt39(response.opt3q10);
			setOpt40(response.opt4q10);
			setOpt41(response.opt1q11);
			setOpt42(response.opt2q11);
			setOpt43(response.opt3q11);
			setOpt44(response.opt4q11);
			setOpt45(response.opt1q12);
			setOpt46(response.opt2q12);
			setOpt47(response.opt3q12);
			setOpt48(response.opt4q12);
			setOpt49(response.opt1q13);
			setOpt50(response.opt2q13);
			setOpt51(response.opt3q13);
			setOpt52(response.opt4q13);
			setOpt53(response.opt1q14);
			setOpt54(response.opt2q14);
			setOpt55(response.opt3q14);
			setOpt56(response.opt4q14);
			setOpt57(response.opt1q15);
			setOpt58(response.opt2q15);
			setOpt59(response.opt3q15);
			setOpt60(response.opt4q15);
			setOpt61(response.opt1q16);
			setOpt62(response.opt2q16);
			setOpt63(response.opt3q16);
			setOpt64(response.opt4q16);
			setOpt65(response.opt1q17);
			setOpt66(response.opt2q17);
			setOpt67(response.opt3q17);
			setOpt68(response.opt4q17);
			setOpt69(response.opt1q18);
			setOpt70(response.opt2q18);
			setOpt71(response.opt3q18);
			setOpt72(response.opt4q18);
			setOpt73(response.opt1q19);
			setOpt74(response.opt2q19);
			setOpt75(response.opt3q19);
			setOpt76(response.opt4q19);
			setOpt77(response.opt1q20);
			setOpt78(response.opt2q20);
			setOpt79(response.opt3q20);
			setOpt80(response.opt4q20);
			setOpt81(response.opt1q21);
			setOpt82(response.opt2q21);
			setOpt83(response.opt3q21);
			setOpt84(response.opt4q21);
			setOpt85(response.opt1q22);
			setOpt86(response.opt2q22);
			setOpt87(response.opt3q22);
			setOpt88(response.opt4q22);
			setOpt89(response.opt1q23);
			setOpt90(response.opt2q23);
			setOpt91(response.opt3q23);
			setOpt92(response.opt4q23);
			setOpt93(response.opt1q24);
			setOpt94(response.opt2q24);
			setOpt95(response.opt3q24);
			setOpt96(response.opt4q24);
			setOpt97(response.opt1q25);
			setOpt98(response.opt2q25);
			setOpt99(response.opt3q25);
			setOpt100(response.opt4q25);
			setOpt101(response.opt1q26);
			setOpt102(response.opt2q26);
			setOpt103(response.opt3q26);
			setOpt104(response.opt4q26);
			setOpt105(response.opt1q27);
			setOpt106(response.opt2q27);
			setOpt107(response.opt3q27);
			setOpt108(response.opt4q27);
			setOpt109(response.opt1q28);
			setOpt110(response.opt2q28);
			setOpt111(response.opt3q28);
			setOpt112(response.opt4q28);
			setOpt113(response.opt1q29);
			setOpt114(response.opt2q29);
			setOpt115(response.opt3q29);
			setOpt116(response.opt4q29);
			setOpt117(response.opt1q30);
			setOpt118(response.opt2q30);
			setOpt119(response.opt3q30);
			setOpt120(response.opt4q30);
			setOpt121(response.opt1q31);
			setOpt122(response.opt2q31);
			setOpt123(response.opt3q31);
			setOpt124(response.opt4q31);
			setOpt125(response.opt5q20);
			setOpt126(response.opt5q23);
			setOpt127(response.opt5q25);
			setOpt128(response.opt5q26);


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
				message: "Ingrese una pregunta v??lida",
			});
		}
	};

	const onChange = (e) => {
		setQuestionInput(e.target.value);
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
				<div className="col">
					<div className="col-1">
						<div className="streaming">
							<div className="streaming">
								<iframe
									title="streaming"
									width="560"
									height="315"
									className="transmission2"
									src="https://vimeo.com/event/1371950/embed"
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								></iframe>
							</div>
						</div>
					</div> 
					<div className="col-2">
						<div className="header">
							<h1>Votaci??n</h1>
						</div>
						<div className="content">
							<div className="votes">
								{
									dataVotes.map(vot => {
										let show = false
										let alt1 = 0;
										let alt2 = 0;
										let alt3 = 0;
										let alt4 = 0;
										let alt5 = 0;

										switch (vot.id) {
											case 1:
												show = activeVote1
												alt1 = option1;
												alt2 = option2;
												alt3 = option3;
												alt4 = option4;
												alt5 = 0;
												break;
											case 2:
												show = activeVote2
												alt1 = option5;
												alt2 = option6;
												alt3 = option7;
												alt4 = option8;
												alt5 = 0;
												break;
											case 3:
												show = activeVote3
												alt1 = opt9;
												alt2 = opt10;
												alt3 = opt11;
												alt4 = opt12;
												alt5 = 0;
												break;
											case 4:
												show = activeVote4
												alt1 = opt13;
												alt2 = opt14;
												alt3 = opt15;
												alt4 = opt16;
												alt5 = 0;
												break;
											case 5:
												show = activeVote5
												alt1 = opt17;
												alt2 = opt18;
												alt3 = opt19;
												alt4 = opt20;
												alt5 = 0;
												break;
											case 6:
												show = activeVote6
												alt1 = opt21;
												alt2 = opt22;
												alt3 = opt23;
												alt4 = opt24;
												alt5 = 0;
												break;
											case 7:
												show = activeVote7
												alt1 = opt25;
												alt2 = opt26;
												alt3 = opt27;
												alt4 = opt28;
												alt5 = 0;
												break;
											case 8:
												show = activeVote8
												alt1 = opt29;
												alt2 = opt30;
												alt3 = opt31;
												alt4 = opt32;
												alt5 = 0;
												break;
											case 9:
												show = activeVote9
												alt1 = opt33;
												alt2 = opt34;
												alt3 = opt35;
												alt4 = opt36;
												alt5 = 0;
												break;
											case 10:
												show = activeVote10
												alt1 = opt37;
												alt2 = opt38;
												alt3 = opt39;
												alt4 = opt40;
												alt5 = 0;
												break;
											case 11:
												show = activeVote11
												alt1 = opt41;
												alt2 = opt42;
												alt3 = opt43;
												alt4 = opt44;
												alt5 = 0;
												break;
											case 12:
												show = activeVote12
												alt1 = opt45;
												alt2 = opt46;
												alt3 = opt47;
												alt4 = opt48;
												alt5 = 0;
												break;
											case 13:
												show = activeVote13
												alt1 = opt49;
												alt2 = opt50;
												alt3 = opt51;
												alt4 = opt52;
												alt5 = 0;
												break;
											case 14:
												show = activeVote14
												alt1 = opt53;
												alt2 = opt54;
												alt3 = opt55;
												alt4 = opt56;
												alt5 = 0;
												break;
											case 15:
												show = activeVote15
												alt1 = opt57;
												alt2 = opt58;
												alt3 = opt59;
												alt4 = opt60;
												alt5 = 0;
												break;
											case 16:
												show = activeVote16
												alt1 = opt61;
												alt2 = opt62;
												alt3 = opt63;
												alt4 = opt64;
												alt5 = 0;
												break;
											case 17:
												show = activeVote17
												alt1 = opt65;
												alt2 = opt66;
												alt3 = opt67;
												alt4 = opt68;
												alt5 = 0;
												break;
											case 18:
												show = activeVote18
												alt1 = opt69;
												alt2 = opt70;
												alt3 = opt71;
												alt4 = opt72;
												alt5 = 0;
												break;
											case 19:
												show = activeVote19
												alt1 = opt73;
												alt2 = opt74;
												alt3 = opt75;
												alt4 = opt76;
												alt5 = 0;
												break;
											case 20:
												show = activeVote20
												alt1 = opt77;
												alt2 = opt78;
												alt3 = opt79;
												alt4 = opt80;
												alt5 = opt125;
												break;
											case 21:
												show = activeVote21
												alt1 = opt81;
												alt2 = opt82;
												alt3 = opt83;
												alt4 = opt84;
												alt5 = 0;
												break;
											case 22:
												show = activeVote22
												alt1 = opt85;
												alt2 = opt86;
												alt3 = opt87;
												alt4 = opt88;
												alt5 = 0;
												break;
											case 23:
												show = activeVote23
												alt1 = opt89;
												alt2 = opt90;
												alt3 = opt91;
												alt4 = opt92;
												alt5 = opt126;
												break;
											case 24:
												show = activeVote24
												alt1 = opt93;
												alt2 = opt94;
												alt3 = opt95;
												alt4 = opt96;
												alt5 = 0;
												break;
											case 25:
												show = activeVote25
												alt1 = opt97;
												alt2 = opt98;
												alt3 = opt99;
												alt4 = opt100;
												alt5 = opt127;
												break;
											case 26:
												show = activeVote26
												alt1 = opt101;
												alt2 = opt102;
												alt3 = opt103;
												alt4 = opt104;
												alt5 = opt128;
												break;
											case 27:
												show = activeVote27
												alt1 = opt105;
												alt2 = opt106;
												alt3 = opt107;
												alt4 = opt108;
												alt5 = 0;
												break;
											case 28:
												show = activeVote28
												alt1 = opt109;
												alt2 = opt110;
												alt3 = opt111;
												alt4 = opt112;
												alt5 = 0;
												break;
											case 29:
												show = activeVote29
												alt1 = opt113;
												alt2 = opt114;
												alt3 = opt115;
												alt4 = opt116;
												alt5 = 0;
												break;
											case 30:
												show = activeVote30
												alt1 = opt117;
												alt2 = opt118;
												alt3 = opt119;
												alt4 = opt120;
												alt5 = 0;
												break;
											case 31:
												show = activeVote31
												alt1 = opt121;
												alt2 = opt122;
												alt3 = opt123;
												alt4 = opt124;
												alt5 = 0;
												break;
											default:
												show = false;
												break;
										}
										return (
											(show) ?
												<>
													<Votes
														key={`votes-${vot.id}`}
														ask={vot.ask}
														alt1={vot.alt1}
														alt2={vot.alt2}
														alt3={vot.alt3}
														alt4={vot.alt4}
														alt5={vot.alt5}
														user={user}
														setUser={setUser}
														token={token}
														setToken={setToken}
														num={vot.num}
														voto1={vot.id === 1 && true}
													/>
													<Results
														key={`result-${vot.id}`}
														alt1={vot.alt1}
														alt2={vot.alt2}
														alt3={vot.alt3}
														alt4={vot.alt4}
														alt5={vot.alt5}
														opt1={alt1}
														opt2={alt2}
														opt3={alt3}
														opt4={alt4}
														opt5={alt5}
													/>
												</> : null
										)
									})
								}

							</div>
						</div>
					</div> 
				</div> 
				<div className="container">
					<div className="question-container">
						<h1>Env??a aqu?? tus preguntas o saludos</h1>
						<input type="text" placeholder="Escribe aqu??..." name="question" id="question" value={questionInput} onChange={onChange} />
						<button onClick={sendQuestion}>Enviar</button>
					</div>
				</div>
			</div>
			<Footer setSaveData={setSaveData} />
		</Spin>
	);
};

export default Streaming2;
