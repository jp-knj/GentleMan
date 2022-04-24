import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { CirclePicker, SliderPicker } from 'react-color';

import './background-color.css';

export const BackgroundColor = () => {
    const [backgroundColor, setBackgroundColor] = useState('#000')
    const mainVariant = {
        hidden: {
            y: "-5rem",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: "5rem",
            opacity: 0
        }
    }
    return (
        <motion.div
            variants={mainVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <main className='wrapper'>
            <div className='container'>
            <span className='title'>Background-color</span>
            <div className="stack">
                <div className="preview">
                    <span>Preview</span>
                    <div className='preview-result' style={{backgroundColor: backgroundColor}}></div>
                </div>
                <div className="code-board">
                    <span>Code</span>
                    <div className="code-contents">
                        <pre>
                            <span className='code-property'>background-color {':'}</span>
                            <span className='code-value'></span>
                        </pre>
                    </div>
                    <button className='copy-button'>
                        Copy
                    </button>
                </div>
            </div>
            <div className="option">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label htmlFor='color'>color</label>
                        <input id='color' type="color" />
                        <span>{backgroundColor}</span>
                    </div>
                    <div className="input_box">
                        <CirclePicker color={backgroundColor}/>
                    </div>
                    <div className="input_box">
                        <SliderPicker color={backgroundColor} />
                    </div>
                </div>
            </div>
            </div>
            </main>
        </motion.div>
    )
}