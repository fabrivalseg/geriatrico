"use client"
import styles from './blog.module.css';
import Image from 'next/image';
import {  motion } from 'framer-motion';

const variant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    }
}

export default function Blog() {
    return(
        <section className={styles.blogSection} id="blog">
        <motion.h2 initial={{x: -200, opacity: 0}} transition={{duration: 0.7, type: "spring"}} animate={{x: 0, opacity: 1}} whileInView={{x: 0, opacity: 1}} className={styles.sectionTitle}>Blog</motion.h2>

        <div className={styles.blogDescription}>
          <motion.p initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: "easeOut" }}>
            Mantente informado sobre nuestras actividades, consejos de salud para adultos mayores, y noticias relevantes
            del sector. Compartimos regularmente contenido de interés para residentes, familiares y cuidadores.
          </motion.p>
        </div>

        <div className={styles.blogContainer}>
          <motion.div variants={variant} initial="initial" animate="animate" transition={{duration: 0.7, type: "spring"}} className={styles.blogPost}>
            <div className={styles.blogImageContainer}>
              <Image
                src="/imagenes/blog/actividades-verano.webp?height=200&width=400"
                alt="Actividades de verano"
                width={400}
                height={200}
                className={styles.blogImage}
              />
            </div>
            <div className={styles.blogContent}>
              <span className={styles.blogDate}>15 de Junio, 2023</span>
              <h3 className={styles.blogTitle}>Actividades de verano para nuestros residentes</h3>
              <p className={styles.blogExcerpt}>
                Este verano hemos preparado un programa especial de actividades al aire libre para aprovechar el buen
                tiempo y fomentar el bienestar de nuestros residentes...
              </p>
              <button className={styles.blogButton}>Leer más</button>
            </div>
          </motion.div>

          <motion.div variants={variant} initial="initial" animate="animate" transition={{duration: 0.7, type: "spring", delay: 0.2}} className={styles.blogPost}>
            <div className={styles.blogImageContainer}>
              <Image
                src="/imagenes/blog/actividades-verano.webp?height=200&width=400"
                alt="Nutrición para adultos mayores"
                width={400}
                height={200}
                className={styles.blogImage}
              />
            </div>
            <div className={styles.blogContent}>
              <span className={styles.blogDate}>28 de Mayo, 2023</span>
              <h3 className={styles.blogTitle}>Nutrición adecuada para adultos mayores</h3>
              <p className={styles.blogExcerpt}>
                La alimentación juega un papel fundamental en la salud de las personas mayores. En este artículo,
                nuestra nutricionista comparte consejos importantes...
              </p>
              <button className={styles.blogButton}>Leer más</button>
            </div>
          </motion.div>

          <motion.div variants={variant} initial="initial" animate="animate" transition={{duration: 0.7, type: "spring", delay: 0.4}} className={styles.blogPost}>
            <div className={styles.blogImageContainer}>
              <Image
                src="/imagenes/blog/actividades-verano.webp?height=200&width=400"
                alt="Celebración del Día del Abuelo"
                width={400}
                height={200}
                className={styles.blogImage}
              />
            </div>
            <div className={styles.blogContent}>
              <span className={styles.blogDate}>10 de Mayo, 2023</span>
              <h3 className={styles.blogTitle}>Celebración del Día del Abuelo</h3>
              <p className={styles.blogExcerpt}>
                El pasado fin de semana celebramos el Día del Abuelo con una fiesta especial que contó con música en
                vivo, baile y la visita de familiares...
              </p>
              <button className={styles.blogButton}>Leer más</button>
            </div>
          </motion.div>
        </div>

        <div className={styles.blogMoreContainer}>
          <button className={styles.blogMoreButton}>Ver más artículos</button>
        </div>
      </section>
    )
}