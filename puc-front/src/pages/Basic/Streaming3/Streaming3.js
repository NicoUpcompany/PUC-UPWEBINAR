/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Spin, Menu, notification, Popconfirm, Button } from "antd";
import { UnorderedListOutlined, LoadingOutlined, AuditOutlined } from "@ant-design/icons";
import { useHistory, Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import $ from "jquery";
import { isMobile } from "react-device-detect";
import { getTestStatusApi} from "../../../api/testStatus";

import { getAccessTokenApi } from "../../../api/auth";
import { eventApi } from "../../../api/events";

import Footer from "../../../components/Basic/Footer/Footer";

import logo from "../../../assets/images/logo.png";

import "./Streaming2.scss";
 
import { Test } from "./Test";
const { SubMenu } = Menu;

const Streaming3 = () => {
	const history = useHistory();


	const [testStatus, setTestStatus] = useState(false);
	const [activeTest, setActiveTest] = useState(false);
	const [timeFinish, setTimeFinish] = useState ();
	const [loading, setLoading] = useState(false);
	const [token, setToken] = useState(null);
	const [user, setUser] = useState();
	const [current, setCurrent] = useState("mail");
	const [saveData, setSaveData] = useState(0);
	const [votesStatus, setVotesStatus] = useState({
		vote32: false
	})

	useEffect(() => {
		setLoading(true);
		let interval;
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
				setTestStatus(decodedToken.test);
				setTimeFinish(decodedToken.finishTest);
				setActiveTest(decodedToken.startTest);
				interval = setInterval(() => {
					getTestsStatus(auxToken);
				}, 5000);
			}
		}
		setLoading(false);
		return () => clearInterval(interval);
	}, [timeFinish, testStatus, activeTest]);

	const getTestsStatus = async (tokenAux) => {
		await getTestStatusApi(tokenAux).then((resp) => {
			if (!resp.ok) {
				notification["error"]({
					message: resp.message,
				});
			} else {
                try {
                    const arr = resp.testStatus;
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

	const handleClick = (e) => {
		setCurrent({ current: e.key });
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
				<div className='col'>

				</div>
				<div className="container">
					{
						votesStatus.vote32 ?
						<Test
							testStatus={testStatus}
							setTestStatus={setTestStatus}
							user={user}
							setUser={setUser}
							token={token}
							setToken={setToken}
							setActiveTest={setActiveTest}
							activeTest={activeTest}
							timeFinish={timeFinish}
							setTimeFinish = {setTimeFinish}
						/>
						: <h1 style={{textAlign:'center', paddingTop:'200px'}}>La prueba se encuentra deshabilitada</h1>
					}
				</div>
			</div>
			<Footer setSaveData={setSaveData} />
		</Spin>
	);
};

export default Streaming3;
