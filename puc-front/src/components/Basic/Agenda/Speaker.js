import React from 'react'
import defaultIcon from '../../../assets/images/default-user-img.jpg'

export const Speaker = ({nombre, cargo, empresa, moderador,speaker}) => {
    return (
        <div className="mita1">
            <div className="icon speaker">
                {speaker 
                    ?<img
                        className="icon"
                        src={speaker}
                    />
                    :<img
                    className="icon"
                    src={defaultIcon}
                />

                }
                
            </div>
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
