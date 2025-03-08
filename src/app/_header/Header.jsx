"use client";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import style from "./header.module.css";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Header() {
    const [menu, setMenu] = useState(false);

    const mostrarMenu = () => {
        setMenu(!menu);
    };

    const variant = {
        initial: {y: -10, opacity: 0},
        transition: {duration: 0.4},
        whileInView: {y: 0, opacity: 1}
    }

    return (
        <header className={style.headerContainer}>
            <motion.div variants={variant} initial="initial" transition="transition" whileInView="whileInView" className={style.topBar}>
                <div className={style.imagenContainer}>
                    <Image
                        className={style.imagenHeader}
                        src="/imagenes/logo/logo.png"
                        alt="Logo"
                        width={0} 
                        height={0}
                        sizes="100vw"
                    />
                </div>
                <GiHamburgerMenu onClick={mostrarMenu} className={style.iconoResponsive} />
            </motion.div>
            <motion.nav variants={variant} initial="initial" transition="transition" whileInView="whileInView" className={style.navContainer}>
                <Link className={style.linksHeader} href="/">Home</Link>
                <Link className={style.linksHeader} href="/nosotros">Nosotros</Link>
                <Link className={style.linksHeader} href="/servicios">Servicios</Link>
                <Link className={style.linksHeader} href="/instalaciones">Instalaciones</Link>
                <Link className={style.linksHeader} href="/blog">Blog</Link>
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
                            <Link className={style.linksHeader} href="/servicios">Servicios</Link>
                            <Link className={style.linksHeader} href="/instalaciones">Instalaciones</Link>
                            <Link className={style.linksHeader} href="/blog">Blog</Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
