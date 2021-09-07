/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { RowSpeaker } from "./RowSpeaker";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";


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
			/>

		<RowSpeaker
				setSaveData={setSaveData}
				abrirCerrar={abrirCerrar}
				state={state}
				id={31}
				grey="grey"
				inicio="12:00"
				fin=""
				tematica="Cierre curso"
				moderador="Dr. Pablo Bertrand"
				speaker="Todo el comité"
			/>

		</>
	);
};

export default Dia3;
