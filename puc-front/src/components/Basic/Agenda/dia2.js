/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";

import flecha from "../../../assets/img/flecha.png";

const Dia2 = ({ setSaveData, abrirCerrar, state }) => {
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
			<div className="row2 grey" id="row11" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							08:30 <span>-</span> 09:00 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha11" onClick={() => abrirCerrar("imagen11", "flecha11")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Alergia en el lactante</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen11">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Fernando Iñiguez</strong>
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
									<strong>Dr. A. Bortzutzki</strong>
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
			<div className="row2" id="row12" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							09:00 <span>-</span> 09:30 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha12" onClick={() => abrirCerrar("imagen12", "flecha12")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Sibilancias como manifestación de alergia lactante</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen12">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Fernando Iñiguez</strong>
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
									<strong>Dr. Jose Antonio Castro</strong>
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
			<div className="row2 grey" id="row13" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							09:30 <span>-</span> 10:00 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha13" onClick={() => abrirCerrar("imagen13", "flecha13")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Casos clínicos: APLICACIÓN y DISCUSIÓNr</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen13">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Fernando Iñiguez</strong>
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
			<div className="row2" id="row14" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							11:00 <span>-</span> 11:30 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha14" onClick={() => abrirCerrar("imagen14", "flecha14")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Nueva estrategia tratamiento de ASMA en ESCOLARES</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen14">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Carlos Flores</strong>
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
			<div className="row2 grey" id="row15" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							11:30 <span>-</span> 12:00 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha15" onClick={() => abrirCerrar("imagen15", "flecha15")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Nueva estrategia tratamiento de ASMA EN prescolares</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen15">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Carlos Flores</strong>
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
									<strong>Dr. Linus Holmgren</strong>
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
			<div className="row2" id="row16" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							12:00 <span>-</span> 12:30 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha16" onClick={() => abrirCerrar("imagen16", "flecha16")} />
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
				<div className="imagenes" id="imagen16">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Carlos Flores</strong>
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
			<div className="row2 grey" id="row17" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							15:00 <span>-</span> 15:30 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha17" onClick={() => abrirCerrar("imagen17", "flecha17")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Infección por COVID prevención y tratamiento</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen17">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Luis E. Vega</strong>
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
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dra. Ida Concha</strong>
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
			<div className="row2" id="row18" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							15:30 <span>-</span> 16:00 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha18" onClick={() => abrirCerrar("imagen18", "flecha18")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>Infección por VRS prevención y tratamiento</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen18">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Luis E. Vega</strong>
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
			<div className="row2 grey" id="row19" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							16:00 <span>-</span> 16:30 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha19" onClick={() => abrirCerrar("imagen19", "flecha19")} />
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
				<div className="imagenes" id="imagen19">
					<div className="espacio"></div>
					<div className="imagen">
						<div className="mita1">
							<div className="icon speaker"></div>
							<div className="nombrecolaborador">
								<span>Moderador</span>
								<br />
								<span>
									<strong>Dr. Luis E. Vega</strong>
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

export default Dia2;
