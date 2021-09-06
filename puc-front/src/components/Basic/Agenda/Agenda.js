import React, { useState } from "react";

import Dia1 from "./dia1";
import Dia2 from "./dia2";
import Dia3 from "./dia3";

import "./Agenda.scss";

const Agenda = (props) => {
	const [dia, setDia] = useState(14);
	const { agendaTime, state, setSaveData } = props;

	const abrirCerrar = (raw, flecha) => {
		try {
			const doc = document.getElementById(raw);
			const doc2 = document.getElementById(flecha);
			if (doc.style.display === "none") {
				doc2.style.transform = "rotate(360deg)";
				doc2.style.transitionDuration = "1s";
				doc.style.display = "block";
				doc.style.transitionDuration = "2s";
			} else {
				doc2.style.transform = "rotate(180deg)";
				doc.style.display = "none";
				doc2.style.transitionDuration = "1s";
				doc.style.transitionDuration = "1s";
			}
		} catch (error) {
			console.log("error");
		}
	};

	return (
		<>
			<div className="contenedorAgenda" id="agenda">
				<div className="days">
					<button id="14" className={dia === 14 ? "clase" : ""} onClick={() => setDia(14)}>
						<span>14 de octubre</span>
					</button>
					<button id="15" className={dia === 15 ? "clase" : ""} onClick={() => setDia(15)}>
						<span>15 de octubre</span>
					</button>
					<button id="16" className={dia === 16 ? "clase" : ""} onClick={() => setDia(16)}>
						<span>16 de octubre</span>
					</button>
				</div>
				{dia === 14 ? <Dia1 setSaveData={setSaveData} abrirCerrar={abrirCerrar} state={state} /> : null}
				{dia === 15 ? <Dia2 setSaveData={setSaveData} abrirCerrar={abrirCerrar} state={state} /> : null}
				{dia === 16 ? <Dia3 setSaveData={setSaveData} abrirCerrar={abrirCerrar} state={state} /> : null}
			</div>
		</>
	);
};

export default Agenda;
