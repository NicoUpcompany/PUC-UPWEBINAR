/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";

import flecha from "../../../assets/img/flecha.png";

const Dia1 = ({ setSaveData, abrirCerrar, state }) => {
	return (
		<>
			<div className="row4 border">
				<div className="tiempo">
					<p>Tiempo</p>
				</div>
				<div className="plenario">
					<p>Plenario</p>
				</div>
			</div>
			<div className="row2 grey" id="row1" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							08:20 <span>-</span> 08:30 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha1" onClick={() => abrirCerrar("imagen1", "flecha1")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>INAUGURACIÓN</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen1">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Pablo Bertrand</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Flores</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2" id="row2" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							08:30 <span>-</span> 09:00 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha2" onClick={() => abrirCerrar("imagen2", "flecha2")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Fenotipos de sibilancias del prescolar</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen2">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Pablo Bertrand</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Nombre</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2 grey" id="row3" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							09:00 <span>-</span> 09:30 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha3" onClick={() => abrirCerrar("imagen3", "flecha3")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Estudios de Función Pulmonar del prescolar</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen3">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Pablo Bertrand</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Dra. Laura Gochicoa</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2" id="row4" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							09:30 <span>-</span> 10:00 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha4" onClick={() => abrirCerrar("imagen4", "flecha4")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Casos clínicos: APLICACIÓN y DISCUSIÓN </strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen4">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Pablo Bertrand</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Coffee Break</span>
				</div>
				<div className="duracion">
					<p>10:00 - 11:00 hrs</p>
				</div>
			</div>
			<div className="row2 grey" id="row5" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							11:00 <span>-</span> 11:30 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha5" onClick={() => abrirCerrar("imagen5", "flecha5")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Tratamiento de mantención FQ</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen5">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Maria Ester Pizarro</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Dr. Hector Gutierrez</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2" id="row6" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							11:30 <span>-</span> 12:00 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha6" onClick={() => abrirCerrar("imagen6", "flecha6")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Tratamiento EXA FQ</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen6">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Maria Ester Pizarro</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Nombre</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2 grey" id="row7" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							12:00 <span>-</span> 12:30 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha7" onClick={() => abrirCerrar("imagen7", "flecha7")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Casos clínicos: APLICACIÓN y DISCUSIÓN</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen7">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Maria Ester Pizarro</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Coffee Break</span>
				</div>
				<div className="duracion">
					<p>12:30 - 15:00 hrs</p>
				</div>
			</div>
			<div className="row2" id="row8" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							15:00 <span>-</span> 15:30 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha8" onClick={() => abrirCerrar("imagen8", "flecha8")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Trastornos respiratorios del sueño en la Obesidad</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen8">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Jose Luis Perez</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Dr. Pablo Brockmann</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2 grey" id="row9" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							15:30 <span>-</span> 16:00 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha9" onClick={() => abrirCerrar("imagen9", "flecha9")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Trastornos respiratorios del sueño en Síndromes</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen9">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Jose Luis Perez</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Speaker</span>
								<br />
								<span>
									<strong>Dr. Katalina Bertran</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row2" id="row10" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							16:00 <span>-</span> 16:30 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha10" onClick={() => abrirCerrar("imagen10", "flecha10")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Casos clínicos: APLICACIÓN y DISCUSIÓN</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen10">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Modera</span>
								<br />
								<span>
									<strong>Dr. Jose Luis Perez</strong>
								</span>
								<br />
								<span className="ultimo">Cargo</span>
								<br />
								<span className="ultimo">
									{" "}
									<strong>Empresa</strong>{" "}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Dia1;
