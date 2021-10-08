/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { RowSpeaker } from "./RowSpeaker";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import bertrand from '../../../assets/img/speakers/Dr.-Bertrand.jpg'
import luisVega from '../../../assets/img/speakers/Dr.LuisVega.jpeg'
import idaConcha from '../../../assets/img/speakers/Dra.IdaConchaCHILEjpg.jpg'
import Zamorano from '../../../assets/img/speakers/Dra.Zamorano.jpg'
import ceciliaPerret from '../../../assets/img/speakers/Dra.CeciliaPerret.jpg'
import juanAndres from '../../../assets/img/speakers/Dr.Navarro.jpeg'



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
				inicio=""
				fin=""
				tematica="Simnposio Lab. SANOFI"
				tematica2="Asma grave en al adolesencia: Desafíos diagnósticos y terapéuticos en la era biológica. De la inmunilogía Básica a la práctica clínica A proposito de un caso: Guía para la toma de decisiones terapéuticas e implicancias prácticas"
				moderador="Dr. Juan Andrés Navarro"
				speaker="Dra. Valeria Palma y Dr. Mario Calvo"
				imgSpeaker1={juanAndres}
				cargo1='Profesor Asociado de la Pontificia Universidad Católica de Chile,  Jefe Unidad Enfermedades Respiratorias Pediátricas, Director del X Curso Internacional de Enfermedades Respiratorias Pediátricas'
			/>		

			<RowSpeaker
					setSaveData={setSaveData}
					abrirCerrar={abrirCerrar}
					state={state}
					id={31}
					grey="grey"
					inicio=""
					fin=""
					tematica="Cierre curso"
					moderador="Dr. Pablo Bertrand"
					speaker="Todo el comité"
					imgSpeaker1={bertrand}
				/>

		</>
	);
};

export default Dia3;
