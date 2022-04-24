import {motion} from "framer-motion";

type Button = {
    text: string
}

export const Button = ({text}: Button):JSX.Element => {
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
    return(
        <motion.button
            style={styles}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
        >
            {text}
        </motion.button>
    )
}