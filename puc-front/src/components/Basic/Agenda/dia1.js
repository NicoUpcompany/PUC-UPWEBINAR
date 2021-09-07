/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";

import flecha from "../../../assets/img/flecha.png";
import { Speaker } from "./Speaker";

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
						{/* <div className="mita1">
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
						</div> */}
						<Speaker
							nombre="Dr. Pablo Bertrand"
							moderador={true}
						/>
						{/* <div className="mita1">
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
							</div> */}
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
							<strong>Fenotipos en el prescolar que sibila. ¿Dónde estamos?</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen2">
					<div className="espacio"></div>
					<div className="imagen">
						<Speaker
							nombre="Dr. Pablo Bertrand"
							moderador={true}
						/>
						<Speaker
							nombre="Dr. Fernando Martínez (USA)"
						/>
						
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
							<strong>El prescolar se merece que usted piense en su función pulmonar.</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen3">
					<div className="espacio"></div>
					<div className="imagen">
						<Speaker
							nombre="Dr. Pablo Bertrand "
							moderador={true}						
						/>
						<Speaker
							nombre="Dra. Laura Gochicoa (Mex)"
							moderador={false}						
						/>
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
							<strong>Casos clínicos: aplicación y discusión. </strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen4">
					<div className="espacio"></div>
					<div className="imagen">
						<Speaker
								nombre="Dr. Pablo Bertrand "
								moderador={true}						
							/>
					</div>
				</div>
			</div>
			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Coffee Break</span>
				</div>
				<div className="duracion">
					<p>10:00 - 10:50 hrs</p>
				</div>
			</div>
			<div className="row2 grey" id="row5" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							10:50 <span>-</span> 11:00 hrs
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
							<strong>Presentación del módulo, introduce a los speaker.</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen5">
					<div className="espacio"></div>
					<div className="imagen">
							<Speaker
									nombre="Dra. María Ester Pizarro"
									moderador={true}						
							/>
					</div>
				</div>
			</div>
			<div className="row2" id="row6" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							11:00 <span>-</span> 11:30 hrs
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
							<strong>¿Hacia donde va la terapia de mantención en FQ?</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen6">
					<div className="espacio"></div>
					<div className="imagen">
						<Speaker
							nombre="Dra. María Ester Pizarro"
							moderador={true}						
						/>
						<Speaker
							nombre="Dr. Héctor Gutiérrez (USA)"
							moderador={false}						
						/>
					</div>
				</div>
			</div>
			<div className="row2 grey" id="row7" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							11:30 <span>-</span> 12:00 hrs
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
							<strong>Terapia en la exacerbación: ¿cuándo, donde, cómo....??</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen7">
					<div className="espacio"></div>
					<div className="imagen">
					<Speaker
							nombre="Dra. María Ester Pizarro"
							moderador={true}						
						/>
						<Speaker
							nombre="Dra. Ilse Contreras"
							moderador={false}						
						/>
					</div>
				</div>
			</div>
			<div className="row2 grey" id="row8" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							12:00 <span>-</span> 12:30 hrs
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
							<strong>Casos clínicos: aplicación y discusión.</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen8">
					<div className="espacio"></div>
					<div className="imagen">
					<Speaker
							nombre="Dra. María Ester Pizarro"
							moderador={true}						
						/>
					</div>
				</div>
			</div>
			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Coffee Break</span>
				</div>
				<div className="duracion">
					<p>12:30 - 13:00 hrs</p>
				</div>
			</div>
			<div className="row2" id="row9" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							13:00 <span>-</span> 14:00 hrs
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
							<strong>SIMPOSIO GSK</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen9">
					<div className="espacio"></div>
					<div className="imagen">
						<Speaker
							nombre="Dr. Pablo Bertrand"
							moderador={true}						
						/>
					</div>
				</div>
			</div>
			<div className="row2 grey" id="row10" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							14:00 <span>-</span> 15:00 hrs
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
							<strong>REUNION EXPERTO </strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen10">
					<div className="espacio"></div>
					<div className="imagen">
					<Speaker
							nombre="Dr. Jury Hernandez"
							moderador={true}						
						/>
						<Speaker
							nombre="Dr. Mario Calvo"
							moderador={false}						
						/>						 
					</div>
				</div>
			</div>
			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Coffee Break</span>
				</div>
				<div className="duracion">
					<p>15:00 - 15:50 hrs</p>
				</div>
			</div>
			<div className="row2" id="row11" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							15:50 <span>-</span> 16:00 hrs
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
							<strong>Presentación del módulo, introduce a los speaker.</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen11">
					<div className="espacio"></div>
					<div className="imagen">
					<Speaker
							nombre="Dr. Juan Andrés Navarro"
							moderador={true}						
						/>							
					</div>
				</div>
			</div>
			<div className="row2" id="row12" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							16:00 <span>-</span> 16:30 hrs
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
							<strong>TRS en niños con síndromes específicos</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen12">
					<div className="espacio"></div>
					<div className="imagen">
					<Speaker
							nombre="Dr. Juan Andrés Navarro"
							moderador={true}						
						/>
						<Speaker
							nombre="Dra. Katalina Bertran"
							moderador={false}						
						/>									
					</div>
				</div>
			</div>		
			<div className="row2" id="row13" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							16:30 <span>-</span> 17:00 hrs
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
							<strong>TRS y obesidad, una sola epidemia</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen13">
					<div className="espacio"></div>
					<div className="imagen">
					<Speaker
							nombre="Dr. Juan Andrés Navarro"
							moderador={true}						
						/>
						<Speaker
							nombre="Dr. David Gozal (USA)"
							moderador={false}						
						/>									
					</div>
				</div>
			</div>				
			<div className="row2" id="row14" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							16:30 <span>-</span> 17:00 hrs
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
							<strong>TRS en niños con síndromes específicos</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen14">
					<div className="espacio"></div>
					<div className="imagen">
					<Speaker
							nombre="Dr. Juan Andrés Navarro"
							moderador={true}						
						/>
						<Speaker
							nombre="Dra. Katalina Bertran"
							moderador={false}						
						/>									
					</div>
				</div>
			</div>		
			<div className="row2" id="row15" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							17:00 <span>-</span> 17:30 hrs
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
							<strong>Casos clínicos: aplicación y discusión.</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen15">
					<div className="espacio"></div>
					<div className="imagen">
					<Speaker
							nombre="Dr. Juan Andrés Navarro"
							moderador={true}						
						/>								
					</div>
				</div>
			</div>
			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Coffee Break</span>
				</div>
				<div className="duracion">
					<p>17:30 - 18:30 hrs</p>
				</div>
			</div>
			<div className="row2" id="row16" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							18:30 <span>-</span> 19:30 hrs
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
							<strong>SIMPOSIO BIOMARIN</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen16">
					<div className="espacio"></div>
					<div className="imagen">
					<Speaker
							nombre="Dr. Fernado Iñiguez"
							moderador={true}						
						/>								
					</div>
				</div>
			</div>
		</>
	);
};

export default Dia1;
