"use client"
import style from "./footer.module.css";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Image from "next/image";

const variant = {
    initial: {y: 20},
    transition: {duration: 1},
    whileInView: {y: 0}
}

export default function Footer(){
    return(
        <footer className={style.footerContainer}>
            <div className={style.footer}>
                 <motion.div className={style.imagenContainerFooter} variants={variant} initial="initial" transition="transition" whileInView="whileInView">
                    <Image className={style.imagenFooter} width={0} height={0} sizes="100vw"  src="/imagenes/logo/logo.png" alt="Logo" />
                </motion.div>
                <motion.div className={style.linksFooterContainer} variants={variant} initial="initial" transition="transition" whileInView="whileInView">
                    <motion.a className={style.linksFooter} whileHover={{scale: 1.1}} href="/">Home</motion.a>
                    <motion.a className={style.linksFooter} whileHover={{scale: 1.1}} href="/nosotros">Nosotros</motion.a>
                    <motion.a className={style.linksFooter} whileHover={{scale: 1.1}} href="/servicios">Servicios</motion.a>
                    <motion.a className={style.linksFooter} whileHover={{scale: 1.1}} href="/instalaciones">Instalaciones</motion.a>
                    <motion.a className={style.linksFooter} whileHover={{scale: 1.1}} href="/blog">Blog</motion.a>
                </motion.div>
                <motion.div className={style.contactoFooterContainer} variants={variant} initial="initial" transition="transition" whileInView="whileInView">
                    <motion.p className={style.contactoFooter} whileHover={{scale: 1.1}}>Direccion: Sarmiento 1972</motion.p>
                    <motion.p className={style.contactoFooter} whileHover={{scale: 1.1}}>Telefono: 3517169604</motion.p>
                    <motion.p className={style.contactoFooter} whileHover={{scale: 1.1}}>Email: fabri@gmail.com</motion.p>
                </motion.div>
                <motion.div className={style.redesContainer} variants={variant} initial="initial" transition="transition" whileInView="whileInView">
                    <FaWhatsapp className={style.redesFooter}/>
                    <FaInstagram className={style.redesFooter} />
                </motion.div>
            </div>
        </footer>
    )
}