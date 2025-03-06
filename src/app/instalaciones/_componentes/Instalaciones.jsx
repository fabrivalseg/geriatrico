"use client"
import styles from './instalaciones.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';


const variant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1
  }
};

export default function Instalaciones (){
    return(
        <section className={styles.instalacionesSection} id="instalaciones">
        <motion.h2 initial={{x: -200, opacity: 0}} transition={{duration: 0.7, type: "spring"}} animate={{x: 0, opacity: 1}} whileInView={{x: 0, opacity: 1}} className={styles.sectionTitle}>Instalaciones</motion.h2>

        <div className={styles.facilitiesDescription}>
         <motion.p initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: "easeOut" }}>
            Nuestras instalaciones están diseñadas pensando en el confort, la seguridad y el bienestar de nuestros
            residentes. Contamos con espacios amplios, luminosos y adaptados a las necesidades específicas de los
            adultos mayores, creando un ambiente acogedor que se siente como un verdadero hogar.
          </motion.p>
        </div>

        <div className={styles.galleryContainer}>
          <motion.div variants={variant} initial="initial" whileInView="animate" transition={{duration: 0.7, delay: 0}} className={styles.galleryItem}>
            <Image
              src="/imagenes/instalaciones/031erraetumasaubaira-pkok3510_pedro_kok.jpg"
              alt="Habitaciones"
              width={400}
              height={300}
              className={styles.galleryImage}
            />
            <h3 className={styles.galleryTitle}>Habitaciones</h3>
          </motion.div>

          <motion.div variants={variant} initial="initial" whileInView="animate" transition={{duration: 0.7, delay: 0.2}} className={styles.galleryItem}>
            <Image
              src="/imagenes/instalaciones/031erraetumasaubaira-pkok3510_pedro_kok.jpg"
              alt="Áreas comunes"
              width={400}
              height={300}
              className={styles.galleryImage}
            />
            <h3 className={styles.galleryTitle}>Áreas comunes</h3>
          </motion.div>

          <motion.div variants={variant} initial="initial" whileInView="animate" transition={{duration: 0.7, delay: 0.4}} className={styles.galleryItem}>
            <Image
              src="/imagenes/instalaciones/031erraetumasaubaira-pkok3510_pedro_kok.jpg"
              alt="Jardines"
              width={400}
              height={300}
              className={styles.galleryImage}
            />
            <h3 className={styles.galleryTitle}>Jardines</h3>
          </motion.div>

          <motion.div variants={variant} initial="initial" whileInView="animate" transition={{duration: 0.7, delay: 0.6}} className={styles.galleryItem}>
            <Image
              src="/imagenes/instalaciones/031erraetumasaubaira-pkok3510_pedro_kok.jpg"
              alt="Comedor"
              width={400}
              height={300}
              className={styles.galleryImage}
            />
            <h3 className={styles.galleryTitle}>Comedor</h3>
          </motion.div>

          <motion.div variants={variant} initial="initial" whileInView="animate" transition={{duration: 0.7, delay: 0.8}} className={styles.galleryItem}>
            <Image
              src="/imagenes/instalaciones/031erraetumasaubaira-pkok3510_pedro_kok.jpg"
              alt="Sala de terapia"
              width={400}
              height={300}
              className={styles.galleryImage}
            />
            <h3 className={styles.galleryTitle}>Sala de terapia</h3>
          </motion.div>

          <motion.div variants={variant} initial="initial" whileInView="animate" transition={{duration: 0.7, delay: 1}} className={styles.galleryItem}>
            <Image
              src="/imagenes/instalaciones/031erraetumasaubaira-pkok3510_pedro_kok.jpg"
              alt="Sala de actividades"
              width={400}
              height={300}
              className={styles.galleryImage}
            />
            <h3 className={styles.galleryTitle}>Sala de actividades</h3>
          </motion.div>
        </div>
      </section>
    )
}