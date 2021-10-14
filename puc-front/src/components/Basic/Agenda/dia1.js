/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";

import flecha from "../../../assets/img/flecha.png";
import { Speaker } from "./Speaker";
import bertrand from '../../../assets/img/speakers/Dr.-Bertrand.jpg'
import fernandoMartinez from '../../../assets/img/speakers/Dr.FdoMartinez.jpg'
import lauraGoicochea from '../../../assets/img/speakers/LauraGochicoa.png'
import mariaEster from '../../../assets/img/speakers/M.EsterPizarro.jpeg'
import hectorGui from '../../../assets/img/speakers/Dr.HectorGutierrez.jpg'
import yuryHernandez from '../../../assets/img/speakers/Dr.Yuri.jpg'
import juanAndres from '../../../assets/img/speakers/Dr.Navarro.jpg'
import davidGozal from '../../../assets/img/speakers/DavidGozal.jpg'
import fernandoIniguez from '../../../assets/img/speakers/Dr.Iniguez.jpg'
import illse from '../../../assets/img/speakers/Dra.Lise.jpg'
import luisVega from '../../../assets/img/speakers/Dr.LuisVega.jpeg'
import katalina from '../../../assets/img/speakers/katalinaBertran.png'
import tatiana from '../../../assets/img/speakers/DraTatiana.jpeg'



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
							speaker={bertrand}
							cargo= 'Profesor Asociado de la Pontificia Universidad Católica de Chile,  Jefe Unidad Enfermedades Respiratorias Pediátricas, Director del X Curso Internacional de Enfermedades Respiratorias Pediátricas.'
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
			<div className="row4 border modulo">
				<div className="tiempo">
						<p>Modulo 1 </p>
					</div>
					<div className="plenario">
						<p>Sibilancias en el prescolar</p>
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
							speaker={bertrand}
							cargo="Profesor Asociado de la Pontificia Universidad Católica de Chile,  Jefe Unidad Enfermedades Respiratorias Pediátricas, Director del X Curso Internacional de Enfermedades Respiratorias Pediátricas."
						/>
						<Speaker
							nombre="Dr. Fernando Martínez (USA)"
							speaker={fernandoMartinez}
							cargo='Regents Professor de Pediatría, la máxima distinción académica que concede la Universidad de Arizona. Es Director del Asthma and Airway Disease Research Center.'
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
							<strong>El preescolar se merece que usted piense en su función pulmonar.</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen3">
					<div className="espacio"></div>
					<div className="imagen">
						<Speaker
							nombre="Dr. Pablo Bertrand "
							moderador={true}	
							speaker={bertrand}	
							cargo='Profesor Asociado de la Pontificia Universidad Católica de Chile,  Jefe Unidad Enfermedades Respiratorias Pediátricas, Director del X Curso Internacional de Enfermedades Respiratorias Pediátricas.'
											
						/>
						<Speaker
							nombre="Dra. Laura Gochicoa (Mex)"
							moderador={false}			
							speaker={lauraGoicochea}	
							cargo='Especialista en Neumología Pediátrica del Instituto Mexicano del Seguro Social y Universidad Nacional Autónoma de México, Maestría y Doctorado en Ciencias Médicas, UNAM'		
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
								speaker={bertrand}		
								cargo='Profesor Asociado de la Pontificia Universidad Católica de Chile,  Jefe Unidad Enfermedades Respiratorias Pediátricas, Director del X Curso Internacional de Enfermedades Respiratorias Pediátricas.'			
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
			<div className="row4  grey border modulo">
				<div className="tiempo">
						<p>Modulo 2 </p>
					</div>
					<div className="plenario">
						<p>Fibrosis Quística y su terapia actualizada</p>
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
							<strong>Presentación del módulo y Expositores.</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen5">
					<div className="espacio"></div>
					<div className="imagen">
							<Speaker
									nombre="Dra. María Ester Pizarro"
									moderador={true}
									speaker={mariaEster}	
									cargo='Neumóloga Pediátrica de la PUC de Chile. Fellow Research Pediatric Respiratory Medicine en la Universidad de Toronto. Profesor clínico asistente en la división de Pediatría de la PUC Chile'					
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
							speaker={mariaEster}		
							cargo='Neumóloga Pediátrica de la PUC de Chile. Fellow Research Pediatric Respiratory Medicine en la Universidad de Toronto. Profesor clínico asistente en la división de Pediatría de la PUC Chile'			
						/>
						<Speaker
							nombre="Dr. Héctor Gutiérrez (USA)"
							moderador={false}	
							speaker={hectorGui}			
							cargo='Médico, Subespecialidad en Broncopulmonar Infantil en la Universidad de Alabama Birmingham. Profesor Titular, Jefe de División y titular de la cátedra Raymond K. Lyrene, MD en Pediatric Pulmonary Medicine de la Universidad de Alabama Birmingham. '		
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
							speaker={mariaEster}	
							cargo='Neumóloga Pediátrica de la PUC de Chile. Fellow Research Pediatric Respiratory Medicine en la Universidad de Toronto. Profesor clínico asistente en la división de Pediatría de la PUC Chile'					
						/>
						<Speaker
							nombre="Dra. Ilse Contreras"
							moderador={false}
							speaker={illse}		
							cargo='Pediatra Broncopulmonar en Clínica UC San Carlos de Apoquindo, Broncopulmonar Hospital Padre Hurtado'				
						/>
					</div>
				</div>
			</div>
			<div className="row2 " id="row8" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow ">
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
							speaker={mariaEster}
							cargo='Neumóloga Pediátrica de la PUC de Chile. Fellow Research Pediatric Respiratory Medicine en la Universidad de Toronto. Profesor clínico asistente en la división de Pediatría de la PUC Chile'					
						/>
					</div>
				</div>
			</div>
			
			<div className="row2 grey" id="row9" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							<span>Hora sugerida</span> 12:30 hrs
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
							<strong>Simposio GLAXO SMITH KLINE -GSK </strong>
						</p>
						<p className="texto1">
							"Control del asma en niños, ¿estamos frente a un nuevo paradigma?"
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen9">
					<div className="espacio"></div>
					<div className="imagen">
						<Speaker
							nombre="Dr. Pablo Bertrand"
							moderador={true}	
							speaker={bertrand}	
							cargo='Profesor Asociado de la Pontificia Universidad Católica de Chile,  Jefe Unidad Enfermedades Respiratorias Pediátricas, Director del X Curso Internacional de Enfermedades Respiratorias Pediátricas.'				
						/>
						<Speaker
							nombre="Dr. Luís Enrique Vega"
							moderador={false}
							speaker={luisVega}
							cargo='Pediatra Broncopulmonar de Clínica Alemana de Santiago, Profesor Asociado de la Facultad de Medicina UDD, Gerente Médico Respiratorio GSK-LSP'						
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
			<div className="row4 border modulo">
				<div className="tiempo">
						<p>Modulo 3 </p>
					</div>
					<div className="plenario">
						<p>Trastornos Respiratorios del Sueño (TRS)</p>
					</div>
			</div>
			<div className="row2" id="row10" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow ">
					<div className="tiempo">
						<p>
							15:50 <span>-</span> 16:00 hrs
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
							<strong>Presentación del módulo y Expositores </strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen10">
					<div className="espacio"></div>
					<div className="imagen">
						<Speaker
							nombre="Dr. Juan Andrés Navarro"
							moderador={true}
							speaker={juanAndres}
							cargo='Médico,  Pediatra, Subespecialidad en Enfermedades Respiratorias del Niño en la PUC de Chile, Complejo Asistencial Padre Las Casas y Hospital Dr. Hernán Henríquez Aravena, Temuco, Docente UFRO'						
						/>	
					</div>
				</div>
			</div>
			<div className="row2 grey" id="row11" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey ">
					<div className="tiempo">
						<p>
							16:00 <span>-</span> 16:30 hrs
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
							<strong>TRS en niños con síndromes específicos </strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen11">
					<div className="espacio"></div>
					<div className="imagen">
				
						<Speaker
							nombre="Dr. Juan Andrés Navarro"
							moderador={true}
							speaker={juanAndres}
							cargo='Médico,  Pediatra, Subespecialidad en Enfermedades Respiratorias del Niño en la PUC de Chile, Complejo Asistencial Padre Las Casas y Hospital Dr. Hernán Henríquez Aravena, Temuco, Docente UFRO'						
						/>	
						<Speaker
							nombre="Dra. Katalina Bertran"
							moderador={false}	
							speaker={katalina}
							cargo='Médico Cirujano Universidad del Desarrollo, . Especialidad en Enfermedades Respiratorias Pediátricas. Médico especialista en Clínica Alemana de Santiago'
						/>	
					 
					</div>
				</div>
			</div>
			<div className="row2" id="row12" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							16:30 <span>-</span> 17:00 hrs
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
							<strong>TRS y obesidad, una sola epidemia</strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen12">
					<div className="espacio"></div>
					<div className="imagen">
					<Speaker
							nombre="Dr. Juan Andrés Navarro"
							moderador={true}
							speaker={juanAndres}
							cargo='Médico,  Pediatra, Subespecialidad en Enfermedades Respiratorias del Niño en la PUC de Chile, Complejo Asistencial Padre Las Casas y Hospital Dr. Hernán Henríquez Aravena, Temuco, Docente UFRO'						
						/>	
					<Speaker
							nombre="Dr. David Gozal (USA)"
							moderador={false}
							speaker={davidGozal}	
							cargo='Presidente investido de Marie M. y Harry L. Smith y del Departamento de Salud Infantil de la Universidad de Missouri, Médico en Jefe del Hospital de Salud Infantil de la Universidad de Missouri.'					
						/>							
					</div>
				</div>
			</div>		
			<div className="row2 grey" id="row13" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow grey">
					<div className="tiempo">
						<p>
							17:00 <span>-</span> 17:30 hrs
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
							<strong>Casos clínicos: aplicación y discución </strong>
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen13">
					<div className="espacio"></div>
					<div className="imagen">
					<Speaker
							nombre="Dr. Juan Andrés Navarro"
							moderador={true}
							speaker={juanAndres}
							cargo='Médico,  Pediatra, Subespecialidad en Enfermedades Respiratorias del Niño en la PUC de Chile, Complejo Asistencial Padre Las Casas y Hospital Dr. Hernán Henríquez Aravena, Temuco, Docente UFRO'						
						/>									
					</div>
				</div>
			</div>				
			<div className="row2" id="row16" style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							<span>Hora sugerida</span> 17:30 hrs
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
							<strong>Simposio Lab. Biomarín</strong>
						</p>
						<p className="texto1">
							"MPS: Rol del Neumólogo Pedíatrico en el Diagnóstico Precoz y Seguimiento"
						</p>
					</div>
				</div>
				<div className="imagenes" id="imagen16">
					<div className="espacio"></div>
					<div className="imagen">
					<Speaker
							nombre="Jury Hernández"
							moderador={true}	
							speaker={yuryHernandez}
							cargo='Médico Broncopulmonar Infantil, subespecialista en el Complejo Asistencial Dr. Víctor Ríos Ruiz, Los Ángeles y Jefe del centro de responsabilidad infantil. Past President de la Sociedad Chilena de Neumología pediátrica ( SOCHINEP)
							'					
						/>
					<Speaker
						nombre='Dra. Tatiana Muñoz'
						moderador={false}								
						speaker={tatiana}
						cargo='Neuróloga Infantil
						Especialista en Enfermedades Metabólicas ( University of Toronto)
						Clinica Alemana De Santiago  -  Unidad de Desafíos Diagnósticos'						
					/>									
					</div>
				</div>
			</div>
		</>
	);
};

export default Dia1;
