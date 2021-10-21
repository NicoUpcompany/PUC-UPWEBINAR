/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Spin, Menu, notification, Popconfirm, Button } from "antd";
import { UnorderedListOutlined, LoadingOutlined, AuditOutlined } from "@ant-design/icons";
import { useHistory, Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import $ from "jquery";
import { isMobile } from "react-device-detect";
import { postTestApi } from "../../../api/test";
import { getTime } from "../../../api/time";
import moment from "moment";
 

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
				setTestStatus(decodedToken.test);
				setTimeFinish(decodedToken.finishTest);
				setActiveTest(decodedToken.startTest);
			}
		}
		setLoading(false);
	}, [timeFinish, testStatus, activeTest]);

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
				</div>
			</div>
			<Footer setSaveData={setSaveData} />
		</Spin>
	);
};

export default Streaming3;
