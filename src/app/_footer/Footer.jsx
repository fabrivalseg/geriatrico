"use client"
import style from "./footer.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowRoundUp } from "react-icons/io";

const variant = {
    initial: { y: 20, opacity: 0 },
    transition: { duration: 0.8 },
    whileInView: { y: 0, opacity: 1 }
};

export default function Footer() {
    return (
        <footer className={style.footerContainer}>
            <div className={style.footer}>
                
                {/* Logo */}
                <motion.div
                    className={style.imagenContainerFooter}
                    variants={variant}
                    initial="initial"
                    transition="transition"
                    whileInView="whileInView"
                >
                    <img
                        className={style.imagenFooter}
                        width={0}
                        height={0}
                        sizes="100vw"
                        src="/imagenes/logo/calidia_logo_bajada.png"
                        alt="Logo de Calidia Residencia Senior"
                        loading="lazy"
                    />
                </motion.div>

                {/* Enlaces */}
                <motion.nav
                    className={style.linksFooterContainer}
                    aria-label="Enlaces útiles"
                    variants={variant}
                    initial="initial"
                    transition="transition"
                    whileInView="whileInView"
                >
                    <h4 className={style.sectionTitle}>Enlaces útiles</h4>
                    <Link href="/" legacyBehavior><a className={style.linksFooter}>Home</a></Link>
                    <Link href="/nosotros" legacyBehavior><a className={style.linksFooter}>Nosotros</a></Link>
                    <Link href="/servicios" legacyBehavior><a className={style.linksFooter}>Servicios</a></Link>
                    <Link href="/instalaciones" legacyBehavior><a className={style.linksFooter}>Instalaciones</a></Link>
                    <Link href="/blog" legacyBehavior><a className={style.linksFooter}>Blog</a></Link>
                </motion.nav>

                {/* Contacto */}
                <motion.address
                    className={style.contactoFooterContainer}
                    variants={variant}
                    initial="initial"
                    transition="transition"
                    whileInView="whileInView"
                >
                    <h4 className={style.sectionTitle}>Contacto</h4>
                    <p className={style.contactoFooter}>Dirección: Sarmiento 1972</p>
                    <p className={style.contactoFooter}>Teléfono: 3517169604</p>
                    <p className={style.contactoFooter}>Email: <a href="mailto:calidiaresidenciasenior@gmail.com" className={style.linksFooter}>calidiaresidenciasenior@gmail.com</a></p>
                </motion.address>
            </div>
            <div className={style.scrollContainer}>
                <button
                    className={style.scrollTop}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    aria-label="Volver al inicio"
                >
                    <IoIosArrowRoundUp style={{marginLeft: "-5px"}}/> Volver al inicio
                </button>
            </div>
        </footer>
    );
}
