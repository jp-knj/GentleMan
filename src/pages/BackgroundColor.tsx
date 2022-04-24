import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion'
import { CirclePicker, SliderPicker } from 'react-color';

export const BackgroundColor = () => {
    return (
        <motion.div>
            <span className='titr'>Background-color</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box">
                        <pre>
                        </pre>
                    </div>
                    <button className='copyBtn'>
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>color</label>
                        <input type="color" />
                    </div>
                    <div className="input_box">
                    </div>
                    <div className="input_box">
                    </div>
                </div>
            </div>
        </motion.div>
    )
}