import React, { useState } from 'react'
import { dataTest } from './dataTest'
import {  Radio, Space } from "antd";

export const Question = ({pages, questions, saveAnswers}) => {
    return (
        <>
            {
                dataTest.map(({num, alt1, alt2, alt3, alt4,alt5, ask, id, img1, img2}) =>{
                    return(
                            (pages === id) ?
                            <div
                                key = {`question-${id}`}
                            >
                                <h1 className="question-title">{ask}</h1>
                                <Radio.Group onChange={e => saveAnswers(num,e.target.value)} value={questions[`${num}`]}>
                                    <Space direction="vertical">
                                        <Radio value={1}>{alt1}</Radio>
                                        <Radio value={2}>{alt2}</Radio>
                                        <Radio value={3}>{alt3}</Radio>
                                        <Radio value={4}>{alt4}</Radio>
                                        {
                                            alt5 && <Radio value={5}>{alt5}</Radio>
                                        }
                                    </Space>
                                    {img1 && <img src={img1} style={{margin:'0px 10px', height:'15%'}}/>}
                                    {img2 && <img src={img2} style={{margin:'0px 10px', height:'15%'}}  />}
                                </Radio.Group>
                            </div>: null
                    )
                })
            }               
        </>  
    
    )      
}
