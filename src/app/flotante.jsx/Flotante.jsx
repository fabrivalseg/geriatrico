"use client"
import styles from "./flotante.module.css";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RiFacebookCircleLine } from "react-icons/ri";

export default function Flotante() {
    const [mostrarFlotantes, setMostrarFlotantes] = useState(false);

    return (
        <div className={styles.flotanteContainer}>
            <motion.div
                className={styles.flotanteBtn}
                onClick={() => setMostrarFlotantes(!mostrarFlotantes)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title="Contactar"
            >
                <MdOutlineContactSupport className={styles.iconoPrincipal} />
            </motion.div>

            <AnimatePresence>
                {mostrarFlotantes && (
                    <motion.div
                        className={styles.iconosContainer}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.a
                            href="https://wa.me/3516017836"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconoLink}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaWhatsapp className={styles.iconoFlotante} />
                        </motion.a>
                        <motion.a
                            href="https://www.facebook.com/profile.php?id=61574210142402"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconoLink}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <RiFacebookCircleLine className={styles.iconoFlotante} />
                        </motion.a>

                        <motion.a
                            href="https://www.instagram.com/somoscalidia/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.iconoLink}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaInstagram className={styles.iconoFlotante} />
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
