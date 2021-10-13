import React from 'react'
import { Speaker } from './Speaker'
import flecha from "../../../assets/img/flecha.png";

export const RowSpeaker = ({id, grey, inicio, fin, tematica, nombre, moderador, speaker,cargo1, cargo2, empresa, setSaveData, abrirCerrar, state, imgSpeaker1, imgSpeaker2, tematica2, speaker2, cargo3, empresa2, imgSpeaker3 }) => {
    return (
        <div className={`row2 ${grey}`} id={`row${id}`}  style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							{inicio} <span>{inicio && "-"}</span> {fin} {fin && "hrs"} 
						</p>
					</div>

					<div className="plenario">
						<p className="texto2">
							<img src={flecha} alt="" id={`flecha${id}`} onClick={() => abrirCerrar(`imagen${id}` , `flecha${id}`)} />
							{state ? null : (
								<a onClick={() => setSaveData(3)} className="conFondo">
									ENTRAR AL SALÓN{" "}
								</a>
							)}
						</p>
						<p className="texto1">
							<strong>{tematica}</strong>
						</p>
						<p className="texto1">
							{
								tematica2 &&
								<strong>{`"${tematica2}"`}</strong>
							}

						</p>
					</div>
				</div>
				<div className="imagenes" id={`imagen${id}`}>
					<div className="espacio"></div>
					<div className="imagen">
						<Speaker
                            nombre={moderador}
							moderador={moderador}
                            cargo={cargo1}
                            empresa={empresa}
							speaker={imgSpeaker1}
						/>
                        {
                            speaker &&
                            <Speaker
                                nombre={speaker}
                                cargo={cargo2}
                                empresa={empresa}
								speaker={imgSpeaker2}
                            />
                        }

						{
							speaker2 &&
							<Speaker
								nombre={speaker2}
								cargo={cargo3}
								empresa={empresa2}
								speaker={imgSpeaker3}
							/>
						}
						
					</div>
				</div>
		</div>
    )
}
