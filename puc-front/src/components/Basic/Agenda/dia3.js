/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import flecha from "../../../assets/img/flecha.png";

const Dia3 = ({ setSaveData, abrirCerrar, state }) => {
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
			<div className="row2 grey" id="row20" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							10:00 <span>-</span> 12:00 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha20" onClick={() => abrirCerrar("imagen20", "flecha20")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>CONTROVERSIAS EN NEUMOLOGIA PEDIATRICA</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen20">
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
								<span>Modera</span>
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
			<div className="row2" id="row21" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							12:00 <span>-</span> 12:30 hrs
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id="flecha21" onClick={() => abrirCerrar("imagen21", "flecha21")} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>CLAUSURA DEL CURSO - EVALUACION</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen21">
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
								<span>Modera</span>
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

export default Dia3;
