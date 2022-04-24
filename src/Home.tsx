import { Link } from 'react-router-dom'
import './list.css';
import { motion } from 'framer-motion'
import {Button} from "./shared/Button";

export const Home = () => {
    const variant = {
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
        <motion.div className='main'
              variants={variant}
              initial="hidden"
              animate="visible"
              exit="exit"
        >
            <div className='main-container'>
                <h2>CSS Properties</h2>
            <div className='list-container'>
                <section className='list-section'>
                    <h3 className='list-title'>Background</h3>
                    <ul className='list'>
                        <li className='list-items'>
                            <Link to='backgroundcolor'>
                                <Button text='Background Color'/>
                            </Link>
                        </li>
                        <li className='list-items'>
                            <Button text='Background Gradient'/>
                        </li>
                        <li className='list-items'>
                            <Button text='Background Gradient'/>
                        </li>
                    </ul>
                </section>
            </div>
            </div>
        </motion.div>
)

}