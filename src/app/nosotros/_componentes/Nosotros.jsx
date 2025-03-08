"use client"
import React from "react";
import styles from "./nosotros.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

const variant1 = {
  initial: {
    x: -100,
    opacity: 0,
  },
  transition: {
    type: "spring",
    damping: 16,
    stiffness: 200,
    duration: 0.7
  },
  whileInView: {
    x: 0,
    opacity: 1
  },
  whileHover: {
    scale: 1.1
  }
};

const variant2 = {
  initial: {
    x: 100,
    opacity: 0,
  },
  transition: {
    type: "spring",
    damping: 16,
    stiffness: 200,
    duration: 0.7
  },
  whileInView: {
    x: 0,
    opacity: 1
  },
  whileHover: {
    scale: 1.1
  }
};



const Nosotros = () => {
  return (
    <section className={styles.nosotrosSection} id="nosotros">
        <motion.h2 initial={{x: -200, opacity: 0}} transition={{duration: 0.7, type: "spring"}} whileInView={{x: 0, opacity: 1}} className={styles.sectionTitle}>Nosotros</motion.h2>

        <div className={styles.valuesContainer}>
          <motion.div variants={variant1} initial="initial" transition="transition" whileInView="whileInView" className={styles.valueCard}>
            <div className={styles.valueIconContainer}>
              <Image
                src="/imagenes/nosotros/mision-vision-valores/Misión.webp?height=80&width=80"
                alt="Misión"
                width={0}
                height={0}
                sizes="100vw"
                className={styles.valueIcon}
              />
            </div>
            <h3 className={styles.valueTitle}>Misión</h3>
            <p className={styles.valueDescription}>
              Proporcionar atención de calidad y un entorno acogedor para adultos mayores, promoviendo su bienestar
              físico, emocional y social, respetando su dignidad y autonomía en todo momento.
            </p>
          </motion.div>

          <motion.div variants={variant1} initial="initial" transition="transition" whileInView="whileInView" className={styles.valueCard}>
            <div  className={styles.valueIconContainer}>
              <Image
                src="/imagenes/nosotros/mision-vision-valores/vision.png"
                alt="Visión"
                width={0}
                height={0}
                sizes="100vw"
                className={styles.valueIcon}
              />
            </div>
            <h3 className={styles.valueTitle}>Visión</h3>
            <p className={styles.valueDescription}>
              Ser reconocidos como la residencia geriátrica líder en nuestra comunidad, estableciendo nuevos estándares
              de excelencia en el cuidado de adultos mayores, a través de la innovación, la empatía y el compromiso con
              el bienestar integral.
            </p>
          </motion.div>

          <motion.div variants={variant1} initial="initial" transition="transition" whileInView="whileInView" className={styles.valueCard}>
            <div className={styles.valueIconContainer}>
              <Image
                src="/imagenes/nosotros/mision-vision-valores/valores.jpeg?height=80&width=80"
                alt="Valores"
                width={0}
                height={0}
                sizes="100vw"
                className={styles.valueIcon}
              />
            </div>
            <h3 className={styles.valueTitle}>Valores</h3>
            <p className={styles.valueDescription}>
              Nos guiamos por el respeto, la compasión, la integridad, la excelencia y el trabajo en equipo. Estos
              valores fundamentan nuestras acciones diarias y nos permiten ofrecer un servicio humano y profesional a
              nuestros residentes y sus familias.
            </p>
          </motion.div>
        </div>

        <motion.h3 initial={{x: -200, opacity: 0}} transition={{duration: 0.7, type: "spring"}} whileInView={{x: 0, opacity: 1}} className={styles.sectionTitle}>Nuestro Equipo</motion.h3>
        <div className={styles.teamContainer}>
          <motion.div variants={variant1} initial="initial" transition="transition" whileInView="whileInView" whileHover="whileHover" className={styles.teamMember}>
            <div className={styles.teamMemberImage}>
              <Image
                src="/imagenes/nosotros/equipo/shutterstock_2401258387.webp?height=150&width=150"
                alt="Dr. Martínez"
                width={150}
                height={150}
                className={styles.teamMemberPhoto}
              />
            </div>
            <h4 className={styles.teamMemberName}>Dr. Martínez</h4>
            <p className={styles.teamMemberRole}>Director Médico</p>
          </motion.div>

          <motion.div variants={variant1} initial="initial" transition="transition" whileInView="whileInView" whileHover="whileHover" className={styles.teamMember}>
            <div className={styles.teamMemberImage}>
              <Image
                src="/imagenes/nosotros/equipo/shutterstock_2401258387.webp?height=150&width=150"
                alt="Lic. Rodríguez"
                width={150}
                height={150}
                className={styles.teamMemberPhoto}
              />
            </div>
            <h4 className={styles.teamMemberName}>Lic. Rodríguez</h4>
            <p className={styles.teamMemberRole}>Enfermera Jefe</p>
          </motion.div>

          <motion.div variants={variant2} initial="initial" transition="transition" whileInView="whileInView" whileHover="whileHover" className={styles.teamMember}>
            <div className={styles.teamMemberImage}>
              <Image
                src="/imagenes/nosotros/equipo/shutterstock_2401258387.webp?height=150&width=150"
                alt="Lic. Gómez"
                width={150}
                height={150}
                className={styles.teamMemberPhoto}
              />
            </div>
            <h4 className={styles.teamMemberName}>Lic. Gómez</h4>
            <p className={styles.teamMemberRole}>Fisioterapeuta</p>
          </motion.div>

          <motion.div variants={variant2} initial="initial" transition="transition" whileInView="whileInView" whileHover="whileHover" className={styles.teamMember}>
            <div className={styles.teamMemberImage}>
              <Image
                src="/imagenes/nosotros/equipo/shutterstock_2401258387.webp?height=150&width=150"
                alt="Lic. Pérez"
                width={150}
                height={150}
                className={styles.teamMemberPhoto}
              />
            </div>
            <h4 className={styles.teamMemberName}>Lic. Pérez</h4>
            <p className={styles.teamMemberRole}>Nutricionista</p>
          </motion.div>
        </div>
      </section>
  );
};

export default Nosotros;