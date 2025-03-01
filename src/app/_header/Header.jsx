"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import style from "./header.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
    const [menu, setMenu] = useState(false);

    const mostrarMenu = () => {
        setMenu(!menu);
    };

    return (
        <header className={style.headerContainer}>
            <motion.div initial={{y: -50}} transition={{duration: 0.4, type: "spring"}} animate={{y: 0}} className={style.topBar}>
                <div className={style.imagenContainer}>
                    <img
                        className={style.imagenHeader}
                        src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Wikimedia_Brand_Guidelines_Update_2022_Wikimedia_Logo_Brandmark.png"
                        alt="Logo"
                    />
                </div>
                <GiHamburgerMenu onClick={mostrarMenu} className={style.iconoResponsive} />
            </motion.div>
            <motion.nav initial={{y: -50}} transition={{duration: 1, type: "spring"}} animate={{y: 0}} className={style.navContainer}>
                <Link className={style.linksHeader} href="/">Home</Link>
                <Link className={style.linksHeader} href="/nosotros">Nosotros</Link>
                <Link className={style.linksHeader} href="/blog">Blog</Link>
                <Link className={style.linksHeader} href="/contacto">Contacto</Link>
            </motion.nav>

            <AnimatePresence>
                {menu && (
                    <motion.div
                        className={style.menuResponsive}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.4, type: "spring" }}
                    >
                        <nav className={style.navContainerResponsive}>
                            <Link className={style.linksHeader} href="/">Home</Link>
                            <Link className={style.linksHeader} href="/nosotros">Nosotros</Link>
                            <Link className={style.linksHeader} href="/blog">Blog</Link>
                            <Link className={style.linksHeader} href="/contacto">Contacto</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
