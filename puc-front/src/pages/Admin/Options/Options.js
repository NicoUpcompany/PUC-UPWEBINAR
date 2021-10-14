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
	{ title: "Pregunta 1", dataIndex: "question1" },
	{ title: "Pregunta 2", dataIndex: "question2" },
	{ title: "Pregunta 3", dataIndex: "question3" },
	{ title: "Pregunta 4", dataIndex: "question4" },
	{ title: "Pregunta 5", dataIndex: "question5" },
	{ title: "Pregunta 6", dataIndex: "question6" },
	{ title: "Pregunta 7", dataIndex: "question7" },
	{ title: "Pregunta 8", dataIndex: "question8" },
	{ title: "Pregunta 9", dataIndex: "question9" },
	{ title: "Pregunta 10", dataIndex: "question10" },
	{ title: "Pregunta 11", dataIndex: "question11" },
	{ title: "Pregunta 12", dataIndex: "question12" },
	{ title: "Pregunta 13", dataIndex: "question13" },
	{ title: "Pregunta 14", dataIndex: "question14" },
	{ title: "Pregunta 15", dataIndex: "question15" },
	{ title: "Pregunta 16", dataIndex: "question16" },
	{ title: "Pregunta 17", dataIndex: "question17" },
	{ title: "Pregunta 18", dataIndex: "question18" },
	{ title: "Pregunta 19", dataIndex: "question19" },
	{ title: "Pregunta 20", dataIndex: "question20" },
	{ title: "Pregunta 21", dataIndex: "question21" },
	{ title: "Pregunta 22", dataIndex: "question22" },
	{ title: "Pregunta 23", dataIndex: "question23" },
	{ title: "Pregunta 24", dataIndex: "question24" },
	{ title: "Pregunta 25", dataIndex: "question25" },
	{ title: "Pregunta 26", dataIndex: "question26" },
	{ title: "Pregunta 27", dataIndex: "question27" },
	{ title: "Pregunta 28", dataIndex: "question28" },
	{ title: "Pregunta 29", dataIndex: "question29" },
	{ title: "Pregunta 30", dataIndex: "question30" },
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

	//Manejar el estado de las votaciones en un puro arreglo 
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
	// const [voto1Status, setVoto1Status] = useState(false);
	// const [voto2Status, setVoto2Status] = useState(false);
	// const [voto3Status, setVoto3Status] = useState(false);
	// const [voto4Status, setVoto4Status] = useState(false);
	// const [voto5Status, setVoto5Status] = useState(false);
	// const [voto6Status, setVoto6Status] = useState(false);
	// const [voto7Status, setVoto7Status] = useState(false);
	// const [voto8Status, setVoto8Status] = useState(false);
	// const [voto9Status, setVoto9Status] = useState(false);
	// const [voto10Status, setVoto10Status] = useState(false);
	// const [voto11Status, setVoto11Status] = useState(false);
	// const [voto12Status, setVoto12Status] = useState(false);
	// const [voto13Status, setVoto13Status] = useState(false);
	// const [voto14Status, setVoto14Status] = useState(false);
	// const [voto15Status, setVoto15Status] = useState(false);
	// const [voto16Status, setVoto16Status] = useState(false);
	// const [voto17Status, setVoto17Status] = useState(false);
	// const [voto18Status, setVoto18Status] = useState(false);
	// const [voto19Status, setVoto19Status] = useState(false);
	// const [voto20Status, setVoto20Status] = useState(false);
	// const [voto21Status, setVoto21Status] = useState(false);
	// const [voto22Status, setVoto22Status] = useState(false);
	// const [voto23Status, setVoto23Status] = useState(false);
	// const [voto24Status, setVoto24Status] = useState(false);
	// const [voto25Status, setVoto25Status] = useState(false);
	// const [voto26Status, setVoto26Status] = useState(false);
	// const [voto27Status, setVoto27Status] = useState(false);
	// const [voto28Status, setVoto28Status] = useState(false);
	// const [voto29Status, setVoto29Status] = useState(false);


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
			console.log(resp)
			if (!resp.ok) {
				notification["error"]({
					message: resp.message,
				});
			} else {
				resp.tests.forEach((item) => {
					const element = {
						...item,
						email: !item.user.email,
						time: moment(item.time).format("LLL"),
						key: item._id,
					};
					arrayVotes.push(element);
				});
			}
			console.log(arrayVotes);
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
					// console.log('estatus '+arr[arr.length -1].vote1);
					// console.log('estatus '+arr[arr.length -1].vote2);
					setVotesStatus({
						...votesStatus,
						vote1: arr[arr.length -1].vote1,
						vote2: arr[arr.length -1].vote2,
						vote3: arr[arr.length -1].vote3,
						vote4: arr[arr.length -1].vote4,
						vote5: arr[arr.length -1].vote5,
						vote6: arr[arr.length -1].vote6,
						vote7: arr[arr.length -1].vote7,
						vote8: arr[arr.length -1].vote8,
						vote9: arr[arr.length -1].vote9,
						vote10: arr[arr.length -1].vote10,
						vote11: arr[arr.length -1].vote11,
						vote12: arr[arr.length -1].vote12,
						vote13: arr[arr.length -1].vote13,
						vote14: arr[arr.length -1].vote14,
						vote15: arr[arr.length -1].vote15,
						vote16: arr[arr.length -1].vote16,
						vote17: arr[arr.length -1].vote17,
						vote18: arr[arr.length -1].vote18,
						vote19: arr[arr.length -1].vote19,
						vote20: arr[arr.length -1].vote20,
						vote21: arr[arr.length -1].vote21,
						vote22: arr[arr.length -1].vote22,
						vote23: arr[arr.length -1].vote23,
						vote24: arr[arr.length -1].vote24,
						vote25: arr[arr.length -1].vote25,
						vote26: arr[arr.length -1].vote26,
						vote27: arr[arr.length -1].vote27,
						vote28: arr[arr.length -1].vote28,
						vote29: arr[arr.length -1].vote29,
						vote30: arr[arr.length -1].vote30,
						vote31: arr[arr.length -1].vote31,
						vote32: arr[arr.length -1].vote32,
						
					})
					// setTestStatus(arr[arr.length - 1].active);
					// setVoto1Status(arr[arr.length - 1].vote1);
					// setVoto2Status(arr[arr.length - 1].vote2);
					// setVoto3Status(arr[arr.length - 1].vote3);
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
					// setTestStatus(false);
					// setVoto1Status(false);
					// setVoto2Status(false);
					// setVoto3Status(false);
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
		let data = votesStatus;
		const numData = (Object.keys(data).length);
		for (let index = 1; index <= numData; index++) {
			data[`vote${index}`]=false
		}
		data = {
			...data,
			// id: '6168541be5715b14fc52652b',
			id: '61689dbc59aa58c631b18a20',
			[estado]:true
		}

		const resp = await postTestStatusApi(token, data);
		if (resp.ok) {
			notification["success"]({
				message: `Active ${estado}`,
			});
			setVotesStatus(data);
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
				<h3 className='title-module'>Modulo 1</h3>
				{/* Votación 1 */}
				<div className="btn-votos"> 
					<Popconfirm
						title={
							votesStatus.vote32 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote32")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
					>
							<Button type="primary" className="btn" block icon={<AuditOutlined />}>
								{votesStatus.vote32 ? "Preguntas desactivadas" : "Desactivar preguntas "}
							</Button>
					</Popconfirm>
					<Popconfirm
						title={
							votesStatus.vote1 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote1")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
					>
							<Button type="primary" className="btn" block icon={<AuditOutlined />}>
								{votesStatus.vote1 ? "Desactivar pregunta 1" : "Activar pregunta 1"}
							</Button>
					</Popconfirm>
					{/* Votación 2 */}
					<Popconfirm
						title={
							votesStatus.vote2 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote2")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote2 ? "Desactivar pregunta 2" : "Activar pregunta 2"}
						</Button>
			 
					</Popconfirm>

					{/* Pregunta 3 */}
					<Popconfirm
						title={
							votesStatus.vote3 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote3")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
					>
							<Button type="primary" className="btn" block icon={<AuditOutlined />}>
								{votesStatus.vote3 ? "Desactivar pregunta 3" : "Activar pregunta 3"}
							</Button>
					</Popconfirm>
					{/* pregunta 4*/}
					<Popconfirm
						title={
							votesStatus.vote4 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote4")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote4 ? "Desactivar pregunta 4" : "Activar pregunta 4"}
						</Button>
			 
					</Popconfirm>
				</div>
				<hr/>
				<h3 className='title-module'>Modulo 2</h3>
				<div className="btn-votos"> 
					{/* pregunta 1 */}
					<Popconfirm
						title={
							votesStatus.vote5 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote5")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote5 ? "Desactivar pregunta 1" : "Activar pregunta 1"}
						</Button>
			 
					</Popconfirm>
					{/* Pregunta 2 */}
					<Popconfirm
						title={
							votesStatus.vote6 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote6")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
					>
							<Button type="primary" className="btn" block icon={<AuditOutlined />}>
								{votesStatus.vote6 ? "Desactivar pregunta 2" : "Activar pregunta 2"}
							</Button>
					</Popconfirm>
					{/* pregunta 3*/}
					<Popconfirm
						title={
							votesStatus.vote7 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote7")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote7 ? "Desactivar pregunta 3" : "Activar pregunta 3"}
						</Button>
			 
					</Popconfirm>
					{/* pregunta 4 / tiene el estado 31*/}
					<Popconfirm
						title={
							votesStatus.vote31 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote31")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote31 ? "Desactivar pregunta 4" : "Activar pregunta 4"}
						</Button>
			 
					</Popconfirm>
				</div>
				<h3 className='title-module'>Modulo 3</h3>
				<div className="btn-votos"> 				
					{/* pregunta 1 */}
					<Popconfirm
						title={
							votesStatus.vote8 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote8")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote8 ? "Desactivar pregunta 1" : "Activar pregunta 1"}
						</Button>
			 
					</Popconfirm>

					<Popconfirm
						title={
							votesStatus.vote9 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote9")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
					>
							<Button type="primary" className="btn" block icon={<AuditOutlined />}>
								{votesStatus.vote9 ? "Desactivar pregunta 2" : "Activar pregunta 2"}
							</Button>
					</Popconfirm>
					{/* pregunta 3 */}
					<Popconfirm
						title={
							votesStatus.vote10 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote10")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote10 ? "Desactivar pregunta 3" : "Activar pregunta 3"}
						</Button>
			 
					</Popconfirm>
					{/* pregunta 4 */}
					<Popconfirm
						title={
							votesStatus.vote11 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote11")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote11 ? "Desactivar pregunta 4" : "Activar pregunta 4"}
						</Button>
			 
					</Popconfirm>
				</div>
				<hr/>
				<h3 className='title-module'>Modulo 4</h3>
				<div className="btn-votos"> 
				{/* Pregunta 1 */}
					<Popconfirm
						title={
							votesStatus.vote12 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote12")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
					>
							<Button type="primary" className="btn" block icon={<AuditOutlined />}>
								{votesStatus.vote12 ? "Desactivar pregunta 1" : "Activar pregunta 1"}
							</Button>
					</Popconfirm>
					{/* pregunta 2 */}
					<Popconfirm
						title={
							votesStatus.vote13 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote13")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote13 ? "Desactivar pregunta 2" : "Activar pregunta 2"}
						</Button>
			 
					</Popconfirm>
					{/* pregunta 3 */}
					<Popconfirm
						title={
							votesStatus.vote14 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote14")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote14 ? "Desactivar pregunta 3" : "Activar pregunta 3"}
						</Button>
			 
					</Popconfirm>
				</div>
				<hr/>
				<h3 className='title-module'>Modulo 5</h3>
				<div className="btn-votos"> 
					{/* Pregunta 1 */}
					<Popconfirm
						title={
							votesStatus.vote15 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote15")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
					>
							<Button type="primary" className="btn" block icon={<AuditOutlined />}>
								{votesStatus.vote15 ? "Desactivar pregunta 1" : "Activar pregunta 1"}
							</Button>
					</Popconfirm>
					{/* pregunta 2 */}
					<Popconfirm
						title={
							votesStatus.vote16 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote16")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote16 ? "Desactivar pregunta 2" : "Activar pregunta 2"}
						</Button>
			 
					</Popconfirm>
				</div>
				<hr/>
				<h3 className='title-module'>Modulo 6</h3>
				<div className="btn-votos"> 
					{/* Pregunta 1 */}
					<Popconfirm
						title={
							votesStatus.vote17 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote17")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
					>
							<Button type="primary" className="btn" block icon={<AuditOutlined />}>
								{votesStatus.vote17 ? "Desactivar pregunta 1" : "Activar pregunta 1"}
							</Button>
					</Popconfirm>
					{/* pregunta 2 */}
					<Popconfirm
						title={
							votesStatus.vote18 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote18")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote18 ? "Desactivar pregunta 2" : "Activar pregunta 2"}
						</Button>
			 
					</Popconfirm>
					{/* pregunta 3 */}
					<Popconfirm
						title={
							votesStatus.vote19 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote19")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote19 ? "Desactivar pregunta 3" : "Activar pregunta 3"}
						</Button>
			 
					</Popconfirm>
				</div>
				<hr/>
				<h3 className='title-module'>Modulo 7</h3>
				<div className="btn-votos"> 
					{/* Pregunta 1 */}
					<Popconfirm
						title={
							votesStatus.vote20 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote20")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
					>
							<Button type="primary" className="btn" block icon={<AuditOutlined />}>
								{votesStatus.vote20 ? "Desactivar pregunta 1" : "Activar pregunta 1"}
							</Button>
					</Popconfirm>
					{/* pregunta 2 */}
					<Popconfirm
						title={
							votesStatus.vote21 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote21")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote21 ? "Desactivar pregunta 2" : "Activar pregunta 2"}
						</Button>
			 
					</Popconfirm>
					{/* pregunta 3 */}
					<Popconfirm
						title={
							votesStatus.vote22 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote22")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote22 ? "Desactivar pregunta 3" : "Activar pregunta 3"}
						</Button>
			 
					</Popconfirm>
					{/* Pregunta 5 */}
					<Popconfirm
						title={
							votesStatus.vote23 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote23")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
					>
							<Button type="primary" className="btn" block icon={<AuditOutlined />}>
								{votesStatus.vote23 ? "Desactivar pregunta 4" : "Activar pregunta 4"}
							</Button>
					</Popconfirm>
					{/* pregunta 5 */}
					<Popconfirm
						title={
							votesStatus.vote24 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote24")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote24 ? "Desactivar pregunta 5" : "Activar pregunta 5"}
						</Button>
			 
					</Popconfirm>
					{/* pregunta 6 */}
					<Popconfirm
						title={
							votesStatus.vote25 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote25")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote25 ? "Desactivar pregunta 6" : "Activar pregunta 6"}
						</Button>
			 
					</Popconfirm>
					{/* pregunta 7 */}
					<Popconfirm
						title={
							votesStatus.vote26 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote26")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote26 ? "Desactivar pregunta 7" : "Activar pregunta 7"}
						</Button>
			 
					</Popconfirm>
				</div>
				<hr/>
				<h3 className='title-module'>Modulo 8</h3>
				<div className="btn-votos"> 
					{/* Pregunta 1 */}
					<Popconfirm
						title={
							votesStatus.vote27 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote27")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
					>
							<Button type="primary" className="btn" block icon={<AuditOutlined />}>
								{votesStatus.vote27 ? "Desactivar pregunta 1" : "Activar pregunta 1"}
							</Button>
					</Popconfirm>
					{/* pregunta 2 */}
					<Popconfirm
						title={
							votesStatus.vote28 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote28")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote28 ? "Desactivar pregunta 2" : "Activar pregunta 2"}
						</Button>
			 
					</Popconfirm>
					{/* pregunta 3 */}
					<Popconfirm
						title={
							votesStatus.vote29 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote29")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote29 ? "Desactivar pregunta 3" : "Activar pregunta 3"}
						</Button>
			 
					</Popconfirm>
					{/* pregunta 4 */}
					<Popconfirm
						title={
							votesStatus.vote30 ? "Esta opción deshabilitará la evaluación a los usuarios" : "Esta opción habilitará la evaluación a los usuarios"
						}
						onConfirm={()=>handleOk("vote30")}
						onCancel={handleCancel}
						okText="Si"
						cancelText="No"
						>
						<Button type="primary" className="btn" block icon={<AuditOutlined />}>
							{votesStatus.vote30 ? "Desactivar pregunta 4" : "Activar pregunta 4"}
						</Button>
			 
					</Popconfirm>
				</div>
				<hr/>

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
