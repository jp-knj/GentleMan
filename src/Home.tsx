import { Link } from 'react-router-dom'
import './list.css';
import { motion } from 'framer-motion'

export const Home = () => {
    const styles = {
        background: "#fee4cb",
        borderRadius: 30,
        width: "100%",
        fontSize: "18px",
        padding: "6px 20px",
        margin: "auto",
        color: "#333",
        outline: "none",
        border: "none",
        cursor: "pointer"
    };
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
        <div>
            <h2>CSS Properties</h2>
        <div className='list-container'>
        <section className='list-section'>
            <h3 className='list-title'>Background</h3>
            <ul className='list'>
                <li className='list-items'>
                    <motion.button
                        style={styles}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                    >
                        Background Color
                    </motion.button>
                </li>
                <li className='list-items'>
                    <motion.button
                        style={styles}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                    >
                        Background Gradient
                    </motion.button>
                </li>
                <li className='list-items'>
                    <motion.button
                        style={styles}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                    >
                        Background Gradient
                    </motion.button>
                </li>
            </ul>
        </section>
            <section className='list-section'>
        <h3 className='list-title'>Background</h3>
        <ul className='list'>
            <li className='list-items'>
                <motion.button
                    style={styles}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                >
                    Background Color
                </motion.button>
            </li>
            <li className='list-items'>
                <motion.button
                    style={styles}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                >
                    Background Gradient
                </motion.button>
            </li>
            <li className='list-items'>
                <motion.button
                    style={styles}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                >
                    Background Gradient
                </motion.button>
            </li>
        </ul>
    </section>
    </div>
        </div>

    )
}