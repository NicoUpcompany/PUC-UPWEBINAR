import React, { useState, useEffect } from "react";
import { Carousel, Spin, notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import jwtDecode from "jwt-decode";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// meeting
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Slide from "@material-ui/core/Slide";
import Button from "@material-ui/core/Button";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ScheduleIcon from "@material-ui/icons/Schedule";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import AlarmOnIcon from "@material-ui/icons/AlarmOn";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import TextField from "@material-ui/core/TextField";
import CancelIcon from "@material-ui/icons/Cancel";

// assets
import close from "../../../assets/img/close.png";
import header from "../../../assets/images/stands/celNova/header.jpg";
// import logoInterno from "../../../assets/images/stands/puc/logo-interno.png";
import carrusel1 from "../../../assets/images/stands/saval/carrusel1.jpg";
import carrusel2 from "../../../assets/images/stands/saval/carrusel2.jpg";
import carrusel3 from "../../../assets/images/stands/saval/carrusel3.jpg";
import carrusel4 from "../../../assets/images/stands/saval/carrusel4.jpg";
import carrusel5 from "../../../assets/images/stands/saval/carrusel5.jpg";

// apis
import { agendaGet, Agendar } from "../../../api/agenda";
import { eventApi } from "../../../api/events";

import "./Stand.scss";


let settings = {
	slidesToShow: 2,
	slidesToScroll: 2,
};

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
	button: {
		margin: "0px",
	},
}));

const Biotoscana = (props) => {
    const { visible, setVisible, token, standName } = props;

	const userID = "";

	// dialogs
	const [dia, setDia] = useState(0);
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);
	const [loading, setLoading] = useState(false);
	const classes = useStyles();
	const [array, setArray] = useState([]);
	const [idAgenda, setIdAgenda] = useState("");
	const [hora, setHora] = useState("");
	const [link, setLink] = useState("");
	const [inputs, setInputs] = useState({
		description: "",
	});

	useEffect(() => {
		if (visible) {
			const data = {
				conectionType: window.conectionType,
				page: "/salaespera",
				action: "Stand",
				description: `${standName} - Abrir Stand`,
				country: window.country,
				userId: localStorage.getItem("userID"),
			};
			eventApi(data);
		} else {
			const data = {
				conectionType: window.conectionType,
				page: "/salaespera",
				action: "Stand",
				description: `${standName} - Cerrar Stand`,
				country: window.country,
				userId: localStorage.getItem("userID"),
			};
			eventApi(data);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [visible]);

	const consultar = async (dia) => {
		setLoading(true);
		const data = {
			userId: userID,
			day: dia,
		};
		const respuesta = await agendaGet(data, token);
		console.log(respuesta);
		if (!respuesta.ok) {
		} else {
			setLoading(false);
			const arreglo = respuesta.agenda;
			setDia(dia);
			setArray(arreglo);
		}
	};

	const agendar = async () => {
		setLoading(true);
		const decodedToken = jwtDecode(token);
		if (!decodedToken) {
			window.location.href = "/iniciarsesion";
		}
		const data2 = {
			conectionType: window.conectionType,
			page: "/salaespera",
			action: "Stand",
			description: `${standName} - Agendar`,
			country: window.country,
			userId: localStorage.getItem("userID"),
		};
		eventApi(data2);
		const data = {
			user: decodedToken.id,
			description: inputs.description,
		};
		if (idAgenda.trim().length > 1) {
			if (inputs.description.trim() !== "") {
				const respuesta = await Agendar(data, token, idAgenda);
				console.log(respuesta);

				if (!respuesta.ok) {
					notification["error"]({
						message: respuesta.message,
					});
					setLoading(false);
				} else {
					notification["success"]({
						message: "Hora agendada",
					});
					setLink(respuesta.link);
					setOpen2(true);
					setOpen3(false);
					setLoading(false);
				}
			} else {
				notification["error"]({
					message: "Ingrese una descripción",
				});
			}
		} else {
			notification["error"]({
				message: "Seleccione un horario",
			});
		}
	};

	const cambioDeEstados = (id, hora) => {
		setIdAgenda(id);
		setHora(hora);
	};

	const cancelar = () => {
		setDia(0);
		const arreglo = [];
		setArray(arreglo);
		setOpen(false);
		setIdAgenda("");
	};

	const finalizar = () => {
		setLink("");
		setHora("");
		setDia(0);
		setIdAgenda("");
		const arreglo = [];
		setArray(arreglo);
		setOpen(false);
		setOpen2(false);
	};

	const changeForm = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
	};

	const openWsp = (numero) => {
		const url =
			"https://api.whatsapp.com/send/?phone=" +
			numero +
			"&text=Hola,%20vi%20el%20stand%20en%20el%20evento%20Gov%20Days.%20Me%20gustaría%20saber%20más%20sobre%20ustedes&app_absent=0&lang=es";
		window.open(url, "_blank");
		const data = {
			conectionType: window.conectionType,
			page: "/salaespera",
			action: "Stand",
			description: `${standName} - WhatsApp`,
			country: window.country,
			userId: localStorage.getItem("userID"),
		};
		eventApi(data);
	};

	const antIcon = <LoadingOutlined spin />;

	return (
		<div className="stand-xl-container">
			<div className="header">
				<img src={close} alt="Close" className="close" onClick={() => setVisible(false)} />
				<img src={header} alt="Header" />
				{/* <img src={logoInterno} alt="Logo" className="logo" /> */}
			</div>
			<div className="description-container">
				<h1 className="title">Biotoscana</h1>
				<p className="description">
                Celnova Pharma es una compañía farmacéutica regional enfocada en áreas terapéuticas complejas con 30 drogas en el mercado. Tenemos con presencia en oncología, sistema nervioso central, diabetes, cuidados críticos y enfermedades poco frecuentes. Actualmente contamos con operaciones a través de subsidiarias propias en Argentina, Chile, Perú y Colombia y con presencia remota a través de equipo médico en Uruguay, Ecuador y Bolivia.
				</p>
			</div>
			{visible ? (
				<div className="video-container">
					<iframe
						title="video"
						width="640"
						height="360"
						className="video"
						src="https://player.vimeo.com/video/604772138?h=a3e831172c&autoplay=1&loop=1&autopause=0"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>
			) : null}
			{/* <div className="carousel-container">
				<Carousel dotPosition="bottom" autoplay {...settings}>
					<div className="image">
						<LazyLoadImage alt="Carousel 1" src={carrusel1} width="100%" effect="blur" onClick={() => window.open("https://biomedica.saval.cl/", "_blank")}/>
					</div>
					<div className="image">
						<LazyLoadImage alt="Carousel 2" src={carrusel2} width="100%" effect="blur" onClick={() => window.open("https://www.bienestarsaval.cl/programa-descuentos", "_blank")}/>
					</div>
					<div className="image">
						<LazyLoadImage alt="Carousel 3" src={carrusel3} width="100%" effect="blur" onClick={() => window.open("https://emc-saval.cl/", "_blank")}/>
					</div>
					<div className="image">
						<LazyLoadImage alt="Carousel 4" src={carrusel4} width="100%" effect="blur" onClick={() => window.open("https://forms.office.com/pages/responsepage.aspx?id=mlIfnAUrlkC0F_pzI4WgUgDPPNSUD3VAmpvGAXyAns5UNldTSElJUjBTUjRMN1BRUlZTMzEyMEo0VC4u", "_blank")}/>
					</div>
					<div className="image">
						<LazyLoadImage alt="Carousel 5" src={carrusel5} width="100%" effect="blur" onClick={() => window.open("https://forms.office.com/pages/responsepage.aspx?id=mlIfnAUrlkC0F_pzI4WgUgDPPNSUD3VAmpvGAXyAns5UMEcxR0JJOTVDNjVGQk9QTzBXMFhUTzBOWi4u", "_blank")}/>
					</div>
				</Carousel>
			</div> */}
			<div className="buttons-container">
				<button className="wsp" onClick={() => openWsp("56932383615")}>
					WhatsApp
				</button>
				<button className="meeting" onClick={() => setOpen(true)}>
					Agendar reunión
				</button>
			</div>
			<div className="footer-container">
				<a href="https://educacionprofesional.ing.uc.cl/" target="_blank" rel="noreferrer">
					educacionprofesional.ing.uc.cl
				</a>
				<a href="mailtotsantander@celnova.com">tsantander@celnova.com </a>
				<a href="tel:++56932383615">+56 9 3238 3615</a>
			</div>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={() => setOpen(false)}
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
				className="dialog-aux"
			>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						{dia === 0 ? (
							<>
								<div className="tituloDialog">
									<CancelIcon className="icono2" onClick={() => setOpen(false)} />
									<h1>SELECCIONA DÍA</h1>
								</div>
								<div className="dias">
									<div>
										<Button
											variant="contained"
											color="primary"
											className={classes.button}
											onClick={() => consultar(4)}
											startIcon={<DateRangeIcon className="icon" />}
										>
											Día 4 de Agosto
										</Button>
									</div>
									<div>
										<Button
											variant="contained"
											color="primary"
											className={classes.button}
											onClick={() => consultar(5)}
											startIcon={<DateRangeIcon className="icon" />}
										>
											Día 5 de Agosto
										</Button>
									</div>
								</div>
							</>
						) : (
							<>
								<div className="tituloDialog">
									<CancelIcon className="icono" onClick={() => setDia(0)} />
									<h1 className="titulin">ELIGE UN HORARIO</h1>
								</div>
								<div className="horas">
									{array.length > 1 ? (
										array.map((item, i) => {
											return (
												<div>
													<Button
														variant="contained"
														color="primary"
														className="button"
														startIcon={<ScheduleIcon />}
														onClick={() => cambioDeEstados(item._id, item.hour)}
													>
														{item.hour}
													</Button>
												</div>
											);
										})
									) : (
										<p>No hay horarios disponibles</p>
									)}
								</div>
								<div className="botones2">
									<div>
										<Button
											variant="contained"
											color="primary"
											className="btn1"
											startIcon={<HighlightOffIcon />}
											onClick={cancelar}
										>
											Cancelar
										</Button>
									</div>
									<div>
										<Button
											variant="contained"
											color="primary"
											className="btn2"
											startIcon={<AlarmOnIcon />}
											onClick={() => setOpen3(true)}
										>
											Agendar
										</Button>
									</div>
								</div>
							</>
						)}
					</DialogContentText>
				</DialogContent>
				<DialogActions></DialogActions>
			</Dialog>
			<Dialog
				open={open2}
				TransitionComponent={Transition}
				keepMounted
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
				className="dialog-aux-2"
			>
				<DialogContent>
					<div className="confirmacionAgenda">
						<div className="done">
							<CheckCircleIcon className="icon" />
						</div>
						<div className="titulo">
							<h1>Tu reunión está agendada</h1>
							<div>
								<span>
									<DateRangeIcon className="icono" /> {dia}
									-08-2021
								</span>
								<span>
									<ScheduleIcon className="icono" /> {hora} hrs
								</span>
							</div>
						</div>
						<div className="link">
							<span>
								Link de ingreso:{" "}
								<a href={link} target="_blank" rel="noopener noreferrer">
									{" "}
									{link}{" "}
								</a>{" "}
							</span>
						</div>
						<div className="divi">
							<Button variant="contained" color="primary" className="btn2" startIcon={<CheckCircleOutlineIcon />} onClick={finalizar}>
								Aceptar
							</Button>
						</div>
					</div>
				</DialogContent>
			</Dialog>
			<Dialog
				open={open3}
				TransitionComponent={Transition}
				keepMounted
				aria-labelledby="alert-dialog-slide-title"
				aria-describedby="alert-dialog-slide-description"
				className="dialog-aux-3"
			>
				<DialogContent>
					<Spin spinning={loading} size="large" tip="Cargando..." indicator={antIcon}>
						<div className="description" id="description" style={{ zIndex: "999px" }}>
							<div className="titulo">
								<h1>Ingrese una descripción</h1>
							</div>
							<div className="des">
								<TextField
									id="outlined-basic"
									label="Descripción"
									variant="outlined"
									className="input"
									type="text"
									name="description"
									onChange={changeForm}
									value={inputs.description}
								/>
							</div>
							<div className="botones2">
								<div>
									<Button
										variant="contained"
										color="primary"
										className="btn1"
										startIcon={<HighlightOffIcon />}
										onClick={() => setOpen3(false)}
									>
										Cancelar
									</Button>
								</div>
								<div>
									<Button
										variant="contained"
										color="primary"
										className="btn2"
										startIcon={<AlarmOnIcon />}
										onClick={() => agendar()}
									>
										Agendar
									</Button>
								</div>
							</div>
						</div>
					</Spin>
				</DialogContent>
			</Dialog>
		</div>
	);
}

export default Biotoscana