"use client"
import React from "react";
import styles from "./nosotros.module.css";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Flotante from "@/app/flotante.jsx/Flotante";
import { useState } from "react";
import JoinTeamModal from "./JoinTeamModal";

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


const equipo = [{memberName: "Dr. Martínez", memberRole: "Director Médico", memberPhoto: "/imagenes/nosotros/equipo/shutterstock_2401258387.webp?height=150&width=150"},
{memberName: "Lic. Rodríguez", memberRole: "Enfermera Jefe", memberPhoto: "/imagenes/nosotros/equipo/shutterstock_2401258387.webp?height=150&width=150"},
{memberName: "Lic. Rodríguez", memberRole: "Enfermera Jefe", memberPhoto: "/imagenes/nosotros/equipo/shutterstock_2401258387.webp?height=150&width=150"},
{memberName: "Lic. Rodríguez", memberRole: "Enfermera Jefe", memberPhoto: "/imagenes/nosotros/equipo/shutterstock_2401258387.webp?height=150&width=150"},
]

const Nosotros = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
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
            {equipo.map((member, index) => {
              return (
                <motion.div key={index} variants={index % 2 === 0 ? variant1 : variant2} initial="initial" transition="transition" whileInView="whileInView" whileHover="whileHover" className={styles.teamMember}>
                  <div className={styles.teamMemberImage}>
                    <Image
                      src={member.memberPhoto}
                      alt={member.memberName}
                      width={150}
                      height={150}
                      className={styles.teamMemberPhoto}
                    />
                  </div>
                  <h4 className={styles.teamMemberName}>{member.memberName}</h4>
                  <p className={styles.teamMemberRole}>{member.memberRole}</p>
                </motion.div>
              )
            })}
            
          </div>
        <JoinTeamModal />   
        </section>
        <Flotante />
      </>
  );
};

export default Nosotros;