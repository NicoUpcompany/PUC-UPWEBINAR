/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {Link} from 'react-router-dom'
import { RowSpeaker } from "./RowSpeaker";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import bertrand from '../../../assets/img/speakers/Dr.-Bertrand.jpg'
import luisVega from '../../../assets/img/speakers/Dr.LuisVega.jpeg'
import idaConcha from '../../../assets/img/speakers/Dra.IdaConchaCHILEjpg.jpg'
import Zamorano from '../../../assets/img/speakers/Dra.Zamorano.jpg'
import ceciliaPerret from '../../../assets/img/speakers/Dra.CeciliaPerret.jpg'
import juanAndres from '../../../assets/img/speakers/Dr.Navarro.jpg'
import valeria from '../../../assets/img/speakers/draValeriaPalma.jpg'
import calvo from '../../../assets/img/speakers/dr.calvo.jpg'
import carlosFlores from '../../../assets/img/speakers/Dr.Flores.jpg'
import fernandoIniguez from '../../../assets/img/speakers/Dr.Iniguez.jpg'
import yuryHernandez from '../../../assets/img/speakers/Dr.Yuri.jpg'
import mariaEster from '../../../assets/img/speakers/M.EsterPizarro.jpeg'



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
				<Link
					className='btn2'
					to='/sala3'
				>VER CURSO AQUÍ</Link>
			</div>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={25}
				grey="grey"
				inicio="08:50"
				fin="09:00"
				tematica="Presentación del módulo, introduce a los speaker."
				moderador="Dr. Luis E. Vega"
				speaker=""
				imgSpeaker1={luisVega}
				cargo1='Pediatra Broncopulmonar de Clínica Alemana de Santiago, Profesor Asociado de la Facultad de Medicina UDD, Gerente Médico Respiratorio GSK-LSP'
			/>	

			<div className="row4   border modulo">
				<div className="tiempo">
						<p>Modulo 7 </p>
					</div>
					<div className="plenario">
						<p>Infecciones Respiratorias Agudas</p>
					</div>
			</div>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={26}
				grey=""
				inicio="09:00"
				fin="09:30"
				tematica="Diagnóstico etiológico de Infecciones respiratorias altas y bajas ¿qué ganamos?"
				moderador="Dr. Luis E. Vega"
				speaker="Dra. Ida Concha"
				imgSpeaker1={luisVega}
				imgSpeaker2={idaConcha}
				cargo1='Pediatra Broncopulmonar de Clínica Alemana de Santiago, Profesor Asociado de la Facultad de Medicina UDD, Gerente Médico Respiratorio GSK-LSP'
				cargo2="Broncopulmonar infantil de Red Salud UC,  Jefe Unidad Urgencia Pediátrica
				Profesor Asistente Adjunto
				"
			/>


			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={27}
				grey="grey"
				inicio="09:30"
				fin="10:00"
				tematica="Neumonía complicada. ¿Como realizar un diagnóstico y tratamiento precoz?"
				moderador="Dr. Luis E. Vega"
				speaker="Dra. Alejandra Zamorano"
				imgSpeaker1={luisVega}
				imgSpeaker2={Zamorano}
				cargo1='Pediatra Broncopulmonar de Clínica Alemana de Santiago, Profesor Asociado de la Facultad de Medicina UDD, Gerente Médico Respiratorio GSK-LSP'
				cargo2="Pediatra Broncopulmonar Complejo Asistencial Dr. Sotero del Rio Profesor Clínico Asistente"
			/>


			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={28}
				grey=""
				inicio="10:00"
				fin="10:30"
				tematica="Casos clínicos: aplicación y discusión"
				moderador="Dr. Luis E. Vega"
				speaker=""
				imgSpeaker1={luisVega}
				cargo1='Pediatra Broncopulmonar de Clínica Alemana de Santiago, Profesor Asociado de la Facultad de Medicina UDD, Gerente Médico Respiratorio GSK-LSP'
			/>

			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Coffee Break</span>
				</div>
				<div className="duracion">
					<p>10:30 - 11:00 hrs</p>
				</div>
			</div>	

			<div className="row4 grey   border modulo">
				<div className="tiempo">
						<p>Modulo 8 </p>
					</div>
					<div className="plenario">
						<p>Clase Magistral</p>
					</div>
			</div>
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={29}
				grey="grey"
				inicio="11:00"
				fin="11:30"
				tematica="Infecciones respiratorias por agentes emergentes. ¿serán sólo pandemias de ahora en adelante?"
				moderador="Dr. Pablo Bertrand"
				speaker="Dra. Cecilia Perret"
				imgSpeaker1={bertrand}
				imgSpeaker2={ceciliaPerret}
				cargo1='Profesor Asociado de la Pontificia Universidad Católica de Chile,  Jefe Unidad Enfermedades Respiratorias Pediátricas, Director del X Curso Internacional de Enfermedades Respiratorias Pediátricas'
				cargo2="Profesor Asociado
				Departamento de Enfermedades Infecciosas e Inmunología Pediátricas Escuela de Medicina Pontificia Universidad Católica de Chile”
				"
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={30}
				grey=""
				inicio="11:30"
				fin="12:00"
				tematica="Votación LUDICA  epidémica "
				moderador="Dr. Pablo Bertrand"
				speaker=""
				imgSpeaker1={bertrand}
				cargo1='Profesor Asociado de la Pontificia Universidad Católica de Chile,  Jefe Unidad Enfermedades Respiratorias Pediátricas, Director del X Curso Internacional de Enfermedades Respiratorias Pediátricas'
			/>
			
			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={24}
				grey="grey"
				inicio="Hora sugerida"
				fin="12:00"
				tematica="Simposio Lab SANOFI"
				tematica2="Asma grave en la adolescencia: Desafíos diagnósticos y terapéuticos en la era biológica. De la inmunología Básica a la práctica clínica A propósito de un caso: Guía para la toma de decisiones terapéuticas e implicancias prácticas"
				moderador="Dr. Juan Andrés Navarro"
				speaker="Dra. Valeria Palma"
				speaker2="Dr. Mario Calvo"
				imgSpeaker1={juanAndres}
				imgSpeaker2={valeria}
				imgSpeaker3={calvo}
				cargo1='Médico,  Pediatra, Subespecialidad en Enfermedades Respiratorias del Niño en la PUC de Chile, Complejo Asistencial Padre Las Casas y Hospital Dr. Hernán Henríquez Aravena, Temuco, Docente UFRO'
				cargo2='Dra. Valeria Palma
				Médico Cirujano Especialista en Inmunología Clínica
				Miembro activo del staff médico de Inmunología y Alergias de la Clínica Alemana de Santiago
				Coordinadora del Programa de Formación de Especialistas en Inmunología del Hospital Clínico de la Universidad de Chile'
				cargo3='Médico Pediatra, Neumólogo Infantil y Alergólogo Pediatra Investigador y profesor emérito Facultad de Medicina
				Universidad Austral de Chile'
			/>		

			<RowSpeaker
					setSaveData={setSaveData}
					abrirCerrar={abrirCerrar}
					state={state}
					id={31}
					grey="grey"
					inicio=""
					fin="13:00"
					tematica="Cierre curso"
					moderador="Dr. Pablo Bertrand"
					speaker="Dr. Carlos Flores"
					speaker2="Dr. Fernando Iñiguez"
					speaker3="Dr. Luís Vega"
					speaker4="Dr. Jury Hernández"
					speaker5="Dr. Juan Andrés Navarro"
					speaker6="Dra. María Ester Pizarro"
					imgSpeaker1={bertrand}
					imgSpeaker2={carlosFlores}
					imgSpeaker3={fernandoIniguez}
					imgSpeaker4={luisVega}
					imgSpeaker5={yuryHernandez}
					imgSpeaker6={juanAndres}
					imgSpeaker7={mariaEster}

				/>

		</>
	);
};

export default Dia3;
