/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";

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
			/>	
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
				speaker="Dr. Arturo Bortzutzki"
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
				speaker="Dr. J. Castro Rodriguez"
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
			/>		

			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Coffee Break</span>
				</div>
				<div className="duracion">
					<p>10:00 - 10:50 hrs</p>
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
				speaker="Dr. L. Holmgren"
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
				speaker="Dr. JA Erik Forno (USA)"
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
			/>

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={19}
				grey="grey"
				inicio="13:00"
				fin="14:00"
				tematica="SIMPOSIO AZ"
				moderador="Dr. Jury Hernández"
				speaker=""
			/>		

			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Coffee Break</span>
				</div>
				<div className="duracion">
					<p>14:00 - 15:50 hrs</p>
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
				speaker=""
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
			/>	

			<div className="break">
				<div className="tiempo">
					<FreeBreakfastIcon className="caffe" /> <span>Coffee Break</span>
				</div>
				<div className="duracion">
					<p>17:30 - 18:30 hrs</p>
				</div>
			</div>	

			<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={24}
				grey="grey"
				inicio="18:30"
				fin="19:30"
				tematica="Casos clínicos: aplicación y discusión"
				moderador="Dr. Carlos Flores"
				speaker=""
			/>							
		</>
	);
};

export default Dia2;
