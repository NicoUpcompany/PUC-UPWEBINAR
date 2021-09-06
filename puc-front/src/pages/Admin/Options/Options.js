/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { notification, Spin, Table, Input, Space, Button, ConfigProvider, Popconfirm } from "antd";
import es_ES from "antd/es/locale/es_ES";
import { SearchOutlined, ExportOutlined, AuditOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import jwtDecode from "jwt-decode";
import XLSX from "xlsx";
import { ExportSheet } from "react-xlsx-sheet";
import { useHistory } from "react-router-dom";
import moment from "moment";
import "moment/locale/es";

import Socket from "../../../utils/socket";
import { getAccessTokenApi } from "../../../api/auth";
import { getVoteApi } from "../../../api/vote";
import { getTestApi } from "../../../api/test";
import { getTestStatusApi, postTestStatusApi } from "../../../api/testStatus";

import "./Options.scss";

const votesHeaders = [
	{ title: "ID", dataIndex: "_id" },
	{ title: "Correo", dataIndex: "email" },
	{ title: "Pregunta 1", dataIndex: "vote1" },
	{ title: "Pregunta 2", dataIndex: "vote2" },
	{ title: "Día y hora de registro", dataIndex: "time" },
];

const testsHeaders = [
	{ title: "ID", dataIndex: "_id" },
	{ title: "Correo", dataIndex: "email" },
	{ title: "Pregunta 1", dataIndex: "question1" },
	{ title: "Pregunta 2", dataIndex: "question2" },
	{ title: "Pregunta 3", dataIndex: "question3" },
	{ title: "Pregunta 4", dataIndex: "question4" },
	{ title: "Pregunta 5", dataIndex: "question5" },
	{ title: "Pregunta 6", dataIndex: "question6" },
	{ title: "Día y hora de registro", dataIndex: "time" },
];

let searchInput = "";

export default function Events() {
	const history = useHistory();

	const [loading, setLoading] = useState(false);
	const [token, setToken] = useState(null);
	const [searchText, setSearchText] = useState("");
	const [searchedColumn, setSearchedColumn] = useState("");
	const [votesData, setvotesData] = useState([]);
	const [testData, setTestData] = useState([]);
	const [testStatus, setTestStatus] = useState(false);
	const [voto1Status, setVoto1Status] = useState(false);
	const [voto2Status, setVoto2Status] = useState(false);

	useEffect(() => {
		try {
			setLoading(true);
			let interval;
			const tokenAux = getAccessTokenApi();
			if (tokenAux === null) {
				history.push("/dashboard/iniciarsesion");
			} else {
				const decodedToken = jwtDecode(tokenAux);
				if (decodedToken.role !== "Admin") {
					history.push("/dashboard/iniciarsesion");
				} else {
					setToken(tokenAux);
					const user = {
						id: decodedToken.id,
						route: window.location.pathname,
					};
					Socket.emit("UPDATE_ROUTE", user);
					interval = setInterval(() => {
						getVotes(tokenAux);
						getTests(tokenAux);
						getTestsStatus(tokenAux);
					}, 5000);
				}
			}
			return () => clearInterval(interval);
		} catch (error) {
			history.push("/dashboard/iniciarsesion");
		}
	}, []);

	const getVotes = async (tokenAux) => {
		await getVoteApi(tokenAux).then((resp) => {
			const arrayVotes = [];
			if (!resp.ok) {
				notification["error"]({
					message: resp.message,
				});
			} else {
				console.log(resp.tests);
				resp.tests.forEach((item) => {
					console.log(item);
					const element = {
						...item,
						email: item.user.email,
						time: moment(item.time).format("LLL"),
						key: item._id,
					};
					arrayVotes.push(element);
				});
			}
			setvotesData(arrayVotes);
			setLoading(false);
		});
	};

	const getTests = async (tokenAux) => {
		await getTestApi(tokenAux).then((resp) => {
			const arrayTests = [];
			if (!resp.ok) {
				notification["error"]({
					message: resp.message,
				});
			} else {
				resp.tests.forEach((item) => {
					const element = {
						...item,
						email: item.user.email,
						time: moment(item.time).format("LLL"),
						key: item._id,
					};
					arrayTests.push(element);
				});
			}
			setTestData(arrayTests);
			setLoading(false);
		});
	};

	const getTestsStatus = async (tokenAux) => {
		await getTestStatusApi(tokenAux).then((resp) => {
			if (!resp.ok) {
				notification["error"]({
					message: resp.message,
				});
			} else {
                try {
                    const arr = resp.testStatus;
					setTestStatus(arr[arr.length - 1].active);
					setVoto1Status(arr[arr.length - 1].vote1);
					setVoto2Status(arr[arr.length - 1].vote2);
                } catch (error) {
					setTestStatus(false);
					setVoto1Status(false);
					setVoto2Status(false);
                }
			}
			setLoading(false);
		});
	};

	const getColumnSearchProps = (dataIndex) => ({
		filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
			<div style={{ padding: 8 }}>
				<Input
					ref={(node) => {
						searchInput = node;
					}}
					placeholder={"Buscar"}
					value={selectedKeys[0]}
					onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
					onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
					style={{ width: 188, marginBottom: 8, display: "block" }}
				/>
				<Space>
					<Button
						type="primary"
						onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
						icon={<SearchOutlined />}
						size="small"
						style={{ width: 90 }}
					>
						Buscar
					</Button>
					<Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
						Limpiar
					</Button>
				</Space>
			</div>
		),
		filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />,
		onFilter: (value, record) => (record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : ""),
		onFilterDropdownVisibleChange: (visible) => {
			if (visible) {
				setTimeout(() => searchInput.select(), 100);
			}
		},
		render: (text) =>
			searchedColumn === dataIndex ? (
				<Highlighter
					highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
					searchWords={[searchText]}
					autoEscape
					textToHighlight={text ? text.toString() : ""}
				/>
			) : (
				text
			),
	});

	const handleSearch = (selectedKeys, confirm, dataIndex) => {
		confirm();
		setSearchText(selectedKeys[0]);
		setSearchedColumn(dataIndex);
	};

	const handleReset = (clearFilters) => {
		clearFilters();
		setSearchText("");
	};

	const columns1 = [
		{
			title: "Correo",
			dataIndex: "email",
			key: "email",
			fixed: "left",
			width: 150,
			...getColumnSearchProps("email"),
		},
		{
			title: "ID",
			dataIndex: "_id",
			key: "_id",
			width: 150,
			...getColumnSearchProps("_id"),
		},
		{
			title: "Votos pregunta 1",
			dataIndex: "question1",
			key:"question1",
			width: 150,
			filters: [
				{
					text: 1,
					value: 1,
				},
				{
					text: 2,
					value: 2,
				},
				{
					text: 3,
					value: 3,
				},
				{
					text: 4,
					value: 4,
				}
			],
			onFilter: (value, record) => record.option.indexOf(value) === 0,
		},
		{
			title: "Votos pregunta 2",
			dataIndex: "question2",
			key: "question2",
			width: 150,
			filters: [
				{
					text: 1,
					value: 1,
				},
				{
					text: 2,
					value: 2,
				},
				{
					text: 3,
					value: 3,
				},
				{
					text: 4,
					value: 4,
				}
			],
			onFilter: (value, record) => record.option.indexOf(value) === 0,
		},
		{
			title: "Día y hora de registro",
			dataIndex: "time",
			key: "time",
			width: 150,
			sorter: (a, b) => a.time.length - b.time.length,
		},
	];

	const columns2 = [
		{
			title: "Correo",
			dataIndex: "email",
			key: "email",
			fixed: "left",
			width: 150,
			...getColumnSearchProps("email"),
		},
		{
			title: "ID",
			dataIndex: "_id",
			key: "_id",
			width: 150,
			...getColumnSearchProps("_id"),
		},
		{
			title: "Pregunta 1",
			dataIndex: "question1",
			key: "question1",
			width: 150,
			filters: [
				{
					text: 1,
					value: 1,
				},
				{
					text: 2,
					value: 2,
				},
				{
					text: 3,
					value: 3,
				},
			],
			onFilter: (value, record) => record.question1.indexOf(value) === 0,
		},
		{
			title: "Pregunta 2",
			dataIndex: "question2",
			key: "question2",
			width: 150,
			filters: [
				{
					text: 1,
					value: 1,
				},
				{
					text: 2,
					value: 2,
				},
				{
					text: 3,
					value: 3,
				},
			],
			onFilter: (value, record) => record.question2.indexOf(value) === 0,
		},
		{
			title: "Pregunta 3",
			dataIndex: "question3",
			key: "question3",
			width: 150,
			filters: [
				{
					text: 1,
					value: 1,
				},
				{
					text: 2,
					value: 2,
				},
				{
					text: 3,
					value: 3,
				},
			],
			onFilter: (value, record) => record.question3.indexOf(value) === 0,
		},
		{
			title: "Pregunta 4",
			dataIndex: "question4",
			key: "question4",
			width: 150,
			filters: [
				{
					text: 1,
					value: 1,
				},
				{
					text: 2,
					value: 2,
				},
				{
					text: 3,
					value: 3,
				},
			],
			onFilter: (value, record) => record.question4.indexOf(value) === 0,
		},
		{
			title: "Pregunta 5",
			dataIndex: "question5",
			key: "question5",
			width: 150,
			filters: [
				{
					text: 1,
					value: 1,
				},
				{
					text: 2,
					value: 2,
				},
				{
					text: 3,
					value: 3,
				},
			],
			onFilter: (value, record) => record.question5.indexOf(value) === 0,
		},
		{
			title: "Pregunta 6",
			dataIndex: "question6",
			key: "question6",
			width: 150,
			filters: [
				{
					text: 1,
					value: 1,
				},
				{
					text: 2,
					value: 2,
				},
				{
					text: 3,
					value: 3,
				},
			],
			onFilter: (value, record) => record.question6.indexOf(value) === 0,
		},
		{
			title: "Día y hora de registro",
			dataIndex: "time",
			key: "time",
			width: 150,
			sorter: (a, b) => a.time.length - b.time.length,
		},
	];

	const handleOk = async (estado) => {
		setLoading(true);
		let data = {};
		switch (estado) {
			case "voto1":
				data = {
					vote1: !voto1Status,
					vote2: voto2Status,
					active: testStatus
				}
				break;
			case "voto2":
				data = {
					vote1: voto1Status,
					vote2: !voto2Status,
					active: testStatus
				}
				break;
			case "cuestionario":
				data = {
					vote1: voto1Status,
					vote2: voto2Status,
					active:!testStatus
				};
				break;
			default:
				break;
		}

		const resp = await postTestStatusApi(token, data);
		if (resp.ok) {
			console.log(resp.message);
			notification["success"]({
				message: resp.message,
			});
			setLoading(false);
			setTestStatus(data.active);
			setVoto1Status(data.vote1);
			setVoto2Status(data.vote2);
		} else {
			notification["error"]({
				message: resp.message,
			});
			setLoading(false);
		}
	};

	const handleCancel = () => {};

	return (
		<ConfigProvider locale={es_ES}>
			<Spin spinning={loading} size="large" tip="Cargando...">
				<div className="options-admin">
					<h1 className="title">Listado de votaciones</h1>
					<Table columns={columns1} dataSource={votesData} bordered pagination={true} scroll={{ x: 1500, y: 300 }} sticky />
					<ExportSheet header={votesHeaders} fileName={`votaciones`} dataSource={votesData} xlsx={XLSX}>
						<Button className="_btn" style={{ position: "absolute", bottom: "20px" }} icon={<ExportOutlined />} type="danger">
							Exportar votaciones
						</Button>
					</ExportSheet>
				</div>
				<hr />
				{/* Votación 1 */}
				<div className="btn-votos"> 
					<Popconfirm
						title={
							voto1Status ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("voto1")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
					>
							<Button type="primary" className="btn" block icon={<AuditOutlined />}>
								{voto1Status ? "Desactivar votación 1" : "Activar votación 1"}
							</Button>
					</Popconfirm>
					{/* Votación 2 */}
					<Popconfirm
						title={
							voto2Status ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("voto2")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{voto2Status ? "Desactivar votación 2" : "Activar votación 2"}
						</Button>
			 
					</Popconfirm>
				</div>
				{/* Cuestionario */}
				<Popconfirm
					title={
						testStatus ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
					}
					onConfirm={()=>handleOk("cuestionario")}
					onCancel={handleCancel}
					okText="Si"
					cancelText="No"
				>
					<Button type="primary" style={{ marginTop: "10px" }} block icon={<AuditOutlined />}>
						{testStatus ? "Desactivar evaluación" : "Activar evaluación"}
					</Button>
				</Popconfirm>
				<hr />
				<div className="options-admin">
					<h1 className="title">Listado de Evaluaciones</h1>
					<Table columns={columns2} dataSource={testData} bordered pagination={true} scroll={{ x: 1500, y: 300 }} sticky />
					<ExportSheet header={testsHeaders} fileName={`evaluaciones`} dataSource={testData} xlsx={XLSX}>
						<Button className="_btn" style={{ position: "absolute", bottom: "20px" }} icon={<ExportOutlined />} type="danger">
							Exportar evaluaciones
						</Button>
					</ExportSheet>
				</div>
			</Spin>
		</ConfigProvider>
	);
}
