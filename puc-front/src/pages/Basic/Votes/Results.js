import React from 'react'
import { Progress } from "antd";


export const Results = ({
    alt1,
    alt2,
    alt3,
    alt4,
    alt5,
    opt1,
    opt2,
    opt3,
    opt4,
    opt5
}) => {
    return (
        <div className="result">
            <h1>Resultado votación</h1>
            <div className="option">
                <p>{alt1}</p>
                <Progress percent={opt1} status="active" />
            </div>
            <div className="option">
                <p>{alt2}</p>
                <Progress percent={opt2} status="active" />
            </div>
            <div className="option">
                <p>{alt3}</p>
                <Progress percent={opt3} status="active" />
            </div>
            <div className="option">
                <p>{alt4}</p>
                <Progress percent={opt4} status="active" />
            </div>
            {
                alt5 &&
                <div className="option">
                    <p>{alt5}</p>
                    <Progress percent={opt5} status="active" />
                </div>

            }
        </div>
    )
}
