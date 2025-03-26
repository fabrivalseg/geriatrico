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
          <motion.div initial={{x: -200, opacity: 0}} transition={{duration: 0.7, type: "spring"}} whileInView={{x: 0, opacity: 1}} className={styles.aboutUsContainer}>
            <h3 className={styles.aboutUsTitle}>¿QUIÉNES SOMOS?</h3>
            <p className={styles.aboutUsText}>
              Somos una residencia para personas mayores ubicada en Río Segundo, Córdoba. Diseñamos un espacio pensado para quienes desean vivir esta etapa con libertad, seguridad y compañía. Nos enfocamos en personas autónomas o semi-dependientes que no necesitan atención intensiva, pero sí valoran un entorno cuidado, profesional y humano. Por eso nos definimos como constructores de historias: acompañamos con dedicación, para que cada día tenga valor, continuidad y propósito.
            </p>
          </motion.div>
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
                En Calidia acompañamos a las personas mayores a seguir construyendo su historia.
                Creemos que esta etapa no es un cierre, sino una nueva oportunidad para crecer, conectar y vivir con sentido..
              </p>
              <p className={styles.valueDescription}>
                Creamos un espacio donde el cuidado no solo es profesional, sino también humano.
                Donde se puede hacer nuevos amigos, descubrir intereses, compartir rutinas, aprender algo nuevo.
              </p>
              <p className={styles.valueDescription}>
                No somos un lugar para quedarse quieto.
                Somos un lugar para seguir siendo.
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
                Redefinir lo que significa envejecer. Queremos ser una residencia que inspire una nueva manera de vivir la madurez. Un lugar donde la vida no se pausa, sino que evoluciona. Nos proyectamos como referente en el país por nuestra forma de acompañar, por la sensibilidad con la que cuidamos y por entender que cada persona sigue teniendo mucho por vivir.
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
                <strong>Calidad: </strong> cada detalle importa, desde la atención hasta los espacios.
              </p>
              <p className={styles.valueDescription}>
                <strong>Innovación: </strong> creemos en una nueva forma de vivir esta etapa de la vida.
              </p>
              <p className={styles.valueDescription}>
                <strong>Mirada Humana: </strong> tratamos a cada persona como alguien único, con una historia que merece ser valorada.
              </p>
              <p className={styles.valueDescription}>
                <strong>Confianza:</strong> construimos vínculos genuinos con cada familia y residente, desde la transparencia y el compromiso.
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