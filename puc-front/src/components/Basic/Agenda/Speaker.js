import React from 'react'

export const Speaker = ({nombre, cargo, empresa, moderador}) => {
    return (
        <div className="mita1">
            <div className="icon speaker"></div>
            <div className="nombrecolaborador">
                <span>{moderador ? "Moderador" : "Speaker"}</span>
                <br />
                <span>
                    <strong>{nombre}</strong>
                </span>
                <br />
                {
                    cargo ?
                    <div>
                        <span className="ultimo">{cargo}</span>
                        <br />
                        <span className="ultimo">
                            {" "}
                            <strong>{empresa}</strong>{" "}
                        </span>
                    </div>:null
                }
            </div>
    </div>
    )
}
