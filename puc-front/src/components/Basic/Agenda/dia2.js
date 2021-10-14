/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import yuryHernandez from '../../../assets/img/speakers/Dr.Yuri.jpg'
import fernandoIniguez from '../../../assets/img/speakers/Dr.Iniguez.jpg'
import arturoBortu from '../../../assets/img/speakers/Dr.ArturoBortzutzkiCHILE.png'
import erikForno from '../../../assets/img/speakers/ErickForno2020.jpeg'
import luisVega from '../../../assets/img/speakers/Dr.LuisVega.jpeg'
import carlosFlores from '../../../assets/img/speakers/Dr.Flores.jpg'
import carolina from '../../../assets/img/speakers/Dr.Carolina.jpeg'
import carlosPeru from  '../../../assets/img/speakers/Dr.CarlosPeru.jfif'
import juanAntonio from  '../../../assets/img/speakers/dr.JuanAntonio.jpg'
import linus from  '../../../assets/img/speakers/Dr.Linus.jpg'
import alvaroTejeiro from  '../../../assets/img/speakers/drAlvaro.jpg'

import { RowSpeaker } from "./RowSpeaker";

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

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={11}
				grey="grey"
				inicio="08:20"
				fin="08:30"
				tematica="Presentación del módulo, introduce a los speaker."
				moderador="Dr. Fernando Iñiguez"
				speaker=""
				cargo1='Pediatra, especialista en enfermedades respiratorias infantiles de la PUC de Chile. Jefe del Servicio de Pediatría del Hospital Puerto Montt,  Docencia de Post Grado en Pediatría en la Universidad San Sebastián, Sede Patagonia.'
				imgSpeaker1={fernandoIniguez}
			/>	

			<div className="row4   border modulo">
				<div className="tiempo">
						<p>Modulo 4 </p>
					</div>
					<div className="plenario">
						<p>El lactante atópico, ¿Cliente frecuente?</p>
					</div>
			</div>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={12}
				grey=""
				inicio="08:30"
				fin="09:00"
				tematica="Manifestaciones clínicas de atopia en el lactante que debemos conocer"
				moderador="Dr. Fernando Iñiguez"
				speaker="Dr. Arturo Borzutzky"
				imgSpeaker1={fernandoIniguez}
				imgSpeaker2={arturoBortu}
				cargo1='Pediatra, especialista en enfermedades respiratorias infantiles de la PUC de Chile. Jefe del Servicio de Pediatría del Hospital Puerto Montt,  Docencia de Post Grado en Pediatría en la Universidad San Sebastián, Sede Patagonia.'
				cargo2='Jefe de Inmunología y Reumatología Pediátrica y Profesor Asociado de la Escuela de Medicina de la Pontificia Universidad Católica de Chile.'
			/>				
 			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={13}
				grey="grey"
				inicio="09:00"
				fin="09:30"
				tematica="Cambio de paradigma del manejo de bronquiolitis, estamos a tiempo?"
				moderador="Dr. Fernando Iñiguez"
				speaker="Dr José Antonio Castro Rodríguez"
				imgSpeaker1={fernandoIniguez}
				imgSpeaker2={juanAntonio}
				cargo1='Pediatra, especialista en enfermedades respiratorias infantiles de la PUC de Chile. Jefe del Servicio de Pediatría del Hospital Puerto Montt,  Docencia de Post Grado en Pediatría en la Universidad San Sebastián, Sede Patagonia.'
				cargo2='Pediatra, Universidad Peruana Cayetano Heredia, Lima, Perú.
				Broncopulmonar, Universidad de Chile y University of Arizona, Tucson, USA.
			   Máster in Public Health, University of Arizona, Tucson, USA.
			   '
			/>	

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={14}
				grey=""
				inicio="09:30"
				fin="10:00"
				tematica="Casos clínicos: aplicación y discusión."
				moderador="Dr. Fernando Iñiguez"
				speaker=""
				imgSpeaker1={fernandoIniguez}
				cargo1='Pediatra, especialista en enfermedades respiratorias infantiles de la PUC de Chile. Jefe del Servicio de Pediatría del Hospital Puerto Montt,  Docencia de Post Grado en Pediatría en la Universidad San Sebastián, Sede Patagonia.'
			/>		

			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Coffee Break</span>
				</div>
				<div className="duracion">
					<p>10:00 - 10:50 hrs</p>
				</div>
			</div>		

			<div className="row4 grey  border modulo">
				<div className="tiempo">
						<p>Modulo 5 </p>
					</div>
					<div className="plenario">
						<p>Asma Bronquial</p>
					</div>
			</div>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={15}
				grey="grey"
				inicio="10:50"
				fin="11:00"
				tematica="Presentación del módulo, introduce a los speaker."
				moderador="Dr. Jury Hernández"
				speaker=""
				imgSpeaker1={yuryHernandez}
				cargo1='Médico Broncopulmonar Infantil, subespecialista en el Complejo Asistencial Dr. Víctor Ríos Ruiz, Los Ángeles y Jefe del centro de responsabilidad infantil. Past President de la Sociedad Chilena de Neumología pediátrica ( SOCHINEP)'
			
			/>	
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={16}
				grey=""
				inicio="11:00"
				fin="11:30"
				tematica="Como la adherencia impacta un mejor control del asma"
				moderador="Dr. Jury Hernández"
				speaker="Dr. Linus Holmgren"
				imgSpeaker1={yuryHernandez}
				imgSpeaker2={linus	}
				cargo1='Médico Broncopulmonar Infantil, subespecialista en el Complejo Asistencial Dr. Víctor Ríos Ruiz, Los Ángeles y Jefe del centro de responsabilidad infantil. Past President de la Sociedad Chilena de Neumología pediátrica ( SOCHINEP)'
				cargo2='Medicina en la Universidad de Chile,  Pediatría en la Universidad Católica, Broncopulmonar del Jackson Memorial Hospital en Miami.'
			/>		
			
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={17}
				grey="grey"
				inicio="11:30"
				fin="12:00"
				tematica="Desafíos en el tratamiento del asma grave"
				moderador="Dr. Jury Hernández"
				speaker="Dr. Erick Forno"
				imgSpeaker1={yuryHernandez}
				imgSpeaker2={erikForno}
				cargo1='Médico Broncopulmonar Infantil, subespecialista en el Complejo Asistencial Dr. Víctor Ríos Ruiz, Los Ángeles y Jefe del centro de responsabilidad infantil. Past President de la Sociedad Chilena de Neumología pediátrica ( SOCHINEP)'
				cargo2='El Dr. Erick Forno es neumólogo pediatra, graduado de la Universidad Peruana Cayetano Heredia. Residencia en el Children’s Hospital de Colorado, la especialidad de Neumología Pediátrica en el Children’s Hospital de Boston, Master en Salud Pública en la Universidad de Harvard.'
			/>	

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={18}
				grey=""
				inicio="12:00"
				fin="12:30"
				tematica="Casos clínicos: aplicación y discusión."
				moderador="Dr. Jury Hernández"
				speaker=""
				imgSpeaker1={yuryHernandez}
				cargo1='Médico Broncopulmonar Infantil, subespecialista en el Complejo Asistencial Dr. Víctor Ríos Ruiz, Los Ángeles y Jefe del centro de responsabilidad infantil. Past President de la Sociedad Chilena de Neumología pediátrica ( SOCHINEP)'
			/>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={18}
				grey="grey"
				inicio="Hora sugerida"
				fin="12:30"
				tematica="Simposio Lab. ASTRAZENECA"
				tematica2="Asma en la adolescencia"
				moderador="Dr. Fernando Iñiguez"
				speaker="Dr. Alvaro Teijeiro"
				imgSpeaker1={fernandoIniguez}
				imgSpeaker2={alvaroTejeiro}
				cargo1="Pediatra, especialista en enfermedades respiratorias infantiles de la PUC de Chile. Jefe del Servicio de Pediatría del Hospital Puerto Montt,  Docencia de Post Grado en Pediatría en la Universidad San Sebastián, Sede Patagonia."
				cargo2="M.D. PhD. Alvaro Teijeiro Jefe del Centro Respiratorio Hospital Pediátrico de Córdoba Argentina.Coordinador del Programa de Asma Grave Hospital Pediátrico de Córdoba Argentina."
			/>


			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Coffee Break</span>
				</div>
				<div className="duracion">
					<p>14:00 - 15:50 hrs</p>
				</div>
			</div>		
			<div className="row4   border modulo">
				<div className="tiempo">
						<p>Modulo 6 </p>
					</div>
					<div className="plenario">
						<p>Infección respiratoria por SARS Cov-2</p>
					</div>
			</div>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={20}
				grey=""
				inicio="15:50"
				fin="16:00"
				tematica="Presentación del módulo, introduce a los speaker."
				moderador="Dr. Carlos Flores."
				imgSpeaker1={carlosFlores}
				cargo1='Pediatra Broncopulmonar con Mención en Cuidados Intensivos, Magister en Epidemiología, Jefe del Servicio de Pediatría y de la Unidad de Tratamiento Intermedio del Hospital de Ovalle'
				
			/>	

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={21}
				grey=""
				inicio="16:00"
				fin="16:30"
				tematica="Enfermedades Respiratorias crónicas en tiempos de Covid 19"
				moderador="Dr. Carlos Flores"
				speaker="Dr. Luis E. Vega"
				imgSpeaker2={luisVega}
				imgSpeaker1={carlosFlores}
				cargo1='Pediatra Broncopulmonar con Mención en Cuidados Intensivos, Magister en Epidemiología, Jefe del Servicio de Pediatría y de la Unidad de Tratamiento Intermedio del Hospital de Ovalle'
				cargo2='Pediatra Broncopulmonar de Clínica Alemana de Santiago, Profesor Asociado de la Facultad de Medicina UDD, Gerente Médico Respiratorio GSK-LSP'
			/>	

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={22}
				grey="grey"
				inicio="16:30"
				fin="17:00"
				tematica="Aspectos radiológicos de la infección por Covid 19"
				moderador="Dr. Carlos Flores"
				speaker="Dr. Carlos Ugas-Charcape (PER)"
				imgSpeaker1={carlosFlores}
				imgSpeaker2={carlosPeru}
				cargo1='Pediatra Broncopulmonar con Mención en Cuidados Intensivos, Magister en Epidemiología, Jefe del Servicio de Pediatría y de la Unidad de Tratamiento Intermedio del Hospital de Ovalle'
				cargo2='Médico Radiólogo en Instituto Nacional de Salud del Niño San Borja, Lima Perú'
			/>	

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={23}
				grey=""
				inicio="17:00"
				fin="17:30"
				tematica="Casos clínicos: aplicación y discusión"
				moderador="Dr. Carlos Flores"
				speaker=""
				imgSpeaker1={carlosFlores}
				cargo1='Pediatra Broncopulmonar con Mención en Cuidados Intensivos, Magister en Epidemiología, Jefe del Servicio de Pediatría y de la Unidad de Tratamiento Intermedio del Hospital de Ovalle'
			/>	

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={24}
				grey="grey"
				inicio="Hora sugerida"
				fin="17:30"
				tematica="Simposio Lab. BIOMERIEUX"
				tematica2="Enfoque Sindrómico de IRA en niños"
				moderador="Dr. Carlos Flores"
				speaker="Dra. Carolina Rivacoba"
				imgSpeaker1={carlosFlores}
				imgSpeaker2={carolina}
				cargo1='Pediatra Broncopulmonar con Mención en Cuidados Intensivos, Magister en Epidemiología, Jefe del Servicio de Pediatría y de la Unidad de Tratamiento Intermedio del Hospital de Ovalle'
				cargo2= 'Pediatra por Universidad de Los Andes Infectóloga Pediatra por Universidad de Chile Trabajo cómo infectóloga en Hospital de niños Exequiel González Cortés, a cargo de programa de optimización de antimicrobianos de dicho centro También trabajo como infectóloga pediatra en Clínica Santa María y como residente de UCI pediátrica de dicho centro'
			/>							
		</>
	);
};

export default Dia2;
