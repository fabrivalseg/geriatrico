"use client"
import styles from "./servicios.module.css";
import {  motion } from "framer-motion";

const variant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1
  }
};

export default function Servicios() {
    return(
        <section className={styles.serviciosSection} id="servicios">
        <motion.h2 initial={{x: -200, opacity: 0}} transition={{duration: 0.7, type: "spring"}} whileInView={{x: 0, opacity: 1}} animate={{x: 0, opacity: 1}} className={styles.sectionTitle}>Servicios</motion.h2>

        <div className={styles.servicesDescription}>
          <p>
            Ofrecemos una amplia gama de servicios diseñados para satisfacer las necesidades individuales de cada
            residente. Nuestro enfoque integral combina atención médica de calidad, apoyo emocional y actividades
            sociales para promover una vida plena y activa.
          </p>
        </div>

        <div className={styles.servicesContainer}>
          <motion.div variants={variant} initial="initial" transition={{duration: 0.7}} animate="animate" className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Atención médica 24/7</h3>
            <p className={styles.serviceDescription}>
              Contamos con personal médico y de enfermería disponible las 24 horas del día, los 7 días de la semana,
              para atender cualquier necesidad de salud que pueda surgir.
            </p>
          </motion.div>

          <motion.div variants={variant} initial="initial" transition={{duration: 0.7, delay: 0.2}} animate="animate" className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Fisioterapia y rehabilitación</h3>
            <p className={styles.serviceDescription}>
              Programas personalizados de fisioterapia y rehabilitación para mantener y mejorar la movilidad, fuerza y
              equilibrio de nuestros residentes.
            </p>
          </motion.div>

          <motion.div variants={variant} initial="initial" transition={{duration: 0.7, delay: 0.4}} animate="animate" className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Nutrición especializada</h3>
            <p className={styles.serviceDescription}>
              Menús elaborados por nutricionistas profesionales, adaptados a las necesidades dietéticas específicas de
              cada residente.
            </p>
          </motion.div>

          <motion.div variants={variant} initial="initial" transition={{duration: 0.7, delay: 0.6}} animate="animate" className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Terapia ocupacional</h3>
            <p className={styles.serviceDescription}>
              Actividades diseñadas para mantener y mejorar las habilidades cognitivas y motoras finas, promoviendo la
              independencia en las actividades diarias.
            </p>
          </motion.div>

          <motion.div variants={variant} initial="initial" transition={{duration: 0.7, delay: 0.8}} animate="animate" className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Actividades recreativas</h3>
            <p className={styles.serviceDescription}>
              Programa variado de actividades sociales, culturales y recreativas para fomentar la interacción social y
              el bienestar emocional.
            </p>
          </motion.div>

          <motion.div variants={variant} initial="initial" transition={{duration: 0.7, delay: 1}} animate="animate" className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Apoyo psicológico</h3>
            <p className={styles.serviceDescription}>
              Servicio de apoyo psicológico para residentes y familiares, facilitando la adaptación y el bienestar
              emocional.
            </p>
          </motion.div>

          <motion.div variants={variant} initial="initial" transition={{duration: 0.7, delay: 1.2}} animate="animate" className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Servicios de peluquería</h3>
            <p className={styles.serviceDescription}>
              Servicios de peluquería y cuidado personal para mantener la imagen y autoestima de nuestros residentes.
            </p>
          </motion.div>

          <motion.div variants={variant} initial="initial" transition={{duration: 0.7, delay: 1.4}} animate="animate" className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Asistencia en actividades diarias</h3>
            <p className={styles.serviceDescription}>
              Apoyo personalizado en las actividades de la vida diaria, respetando la autonomía y dignidad de cada
              residente.
            </p>
          </motion.div>
        </div>
      </section>
    )
}

