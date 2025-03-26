"use client"
import Contacto from "./contacto/_componentes/Formulario";
import styles from "./page.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { redirect } from "next/navigation";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
import { useState } from "react";
import Flotante from "./flotante.jsx/Flotante";




const variant = {
  transition: {
    duration: 0.5
  },
  whileInView: {
    x: 0,
    opacity: 1
  }
}

  
export default function Home() {
  return (
    <>
      <section className={styles.homeSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <motion.h1 initial={{x: -100, opacity: 0}} transition={{duration: 0.7}} whileInView={{x: 0, opacity: 1}} className={styles.heroSlogan}>La vida no se detiene. <br />Se transforma</motion.h1>
            <motion.h2 initial={{x: -100, opacity: 0}} transition={{duration: 0.7}} whileInView={{x: 0, opacity: 1}} className={styles.heroDescription}>Somos un entorno pensado para seguir construyendo historias con cuidado y sentido</motion.h2>
            <motion.button onClick={() => redirect('/blog')} initial={{x: -100, opacity: 0}} transition={{duration: 0.7}} whileInView={{x: 0, opacity: 1}} className={styles.heroButton}>Ver más</motion.button>
          </div>
          <motion.div initial={{x: -100, opacity: 0}} transition={{duration: 0.7}} whileInView={{x: 0, opacity: 1}} className={styles.heroImageContainer}>
            <Image
              src="/imagenes/home/cuidado-de-ancianos.jpg?height=600&width=1200"
              alt="Residencia geriátrica"
              width={1200}
              height={600}
              className={styles.heroImage}
              priority
            />
          </motion.div>
        </div>

        <div className={styles.questionsContainer}>
          <motion.div variants={variant} initial={{x: -50, opacity: 0}} transition="transition" whileInView="whileInView" className={styles.questionBox}>
            <h2 className={styles.questionTitle}>¿Cómo elegir una residencia?</h2>
            <p className={styles.questionAnswer}>
              Elegir la residencia adecuada para un ser querido es una decisión importante. Recomendamos visitar varias
              instalaciones, hablar con el personal y otros residentes, evaluar la calidad de atención, verificar las
              credenciales y certificaciones, y considerar la ubicación y el ambiente. Nuestra residencia ofrece visitas
              guiadas para que pueda conocer nuestras instalaciones y servicios de primera mano.
            </p>
          </motion.div>

          <motion.div variants={variant} initial={{x: 50, opacity: 0}} transition="transition" whileInView="whileInView" className={styles.questionBox}>
            <h2 className={styles.questionTitle}>¿Cómo saber si es el momento?</h2>
            <p className={styles.questionAnswer}>
              Reconocer cuándo es el momento adecuado para considerar una residencia geriátrica puede ser difícil.
              Algunos indicadores incluyen: dificultades con actividades diarias, problemas de salud que requieren
              atención constante, aislamiento social, deterioro cognitivo, o cuando el cuidado en casa ya no es
              suficiente. Nuestro equipo profesional puede ayudarle a evaluar la situación y ofrecer orientación
              personalizada para su familia.
            </p>
          </motion.div>
        </div>
      </section>
      <Contacto />
      <Flotante/>
    </>
  );
}
