import React from 'react'
import { Speaker } from './Speaker'
import flecha from "../../../assets/img/flecha.png";

export const RowSpeaker = ({id, grey, inicio, fin, tematica, nombre, moderador, speaker,cargo, empresa, setSaveData, abrirCerrar, state }) => {
    return (
        <div className={`row2 ${grey}`} id={`row${id}`}  style={{ transitionDuration: "1s" }}>
				<div className="fondoRow">
					<div className="tiempo">
						<p>
							{inicio} <span>-</span> {fin} hrs
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
					</div>
				</div>
				<div className="imagenes" id={`imagen${id}`}>
					<div className="espacio"></div>
					<div className="imagen">
						<Speaker
                            nombre={moderador}
							moderador={moderador}
                            cargo={cargo}
                            empresa={empresa}
						/>
                        {
                            speaker &&
                            <Speaker
                                nombre={speaker}
                                cargo={cargo}
                                empresa={empresa}
                            />
                        }
						
					</div>
				</div>
		</div>
    )
}
