"use client"
import styles from './blog.module.css';
import Image from 'next/image';
import {  motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Flotante from '@/app/flotante.jsx/Flotante';

const variant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1
    }
}

const blogPosts = [{image: "/imagenes/blog/actividades-verano.webp?height=200&width=400", alt: "Actividades de verano", date: "15 de Junio, 2023", title: "Actividades de verano para nuestros residentes 1", excerpt: "Este verano hemos preparado un programa especial de actividades al aire libre para aprovechar el buen tiempo y fomentar el bienestar de nuestros residentes", content: "Contenido completo del artículo 3, con todos los datos ampliados..."},
  {image: "/imagenes/blog/actividades-verano.webp?height=200&width=400", alt: "Actividades de verano", date: "15 de Junio, 2023", title: "Actividades de verano para nuestros residentes 2", excerpt: "Este verano hemos preparado un programa especial de actividades al aire libre para aprovechar el buen tiempo y fomentar el bienestar de nuestros residentes", content: "Contenido completo del artículo 3, con todos los datos ampliados..."},
  {image: "/imagenes/blog/actividades-verano.webp?height=200&width=400", alt: "Actividades de verano", date: "15 de Junio, 2023", title: "Actividades de verano para nuestros residentes 3", excerpt: "Este verano hemos preparado un programa especial de actividades al aire libre para aprovechar el buen tiempo y fomentar el bienestar de nuestros residentes", content: "Contenido completo del artículo 3, con todos los datos ampliados..."}
];
const moreBlogPosts = [{image: "/imagenes/blog/actividades-verano.webp?height=200&width=400", alt: "Actividades de verano", date: "15 de Junio, 2023", title: "Actividades de verano para nuestros residentes 4", excerpt: "Este verano hemos preparado un programa especial de actividades al aire libre para aprovechar el buen tiempo y fomentar el bienestar de nuestros residentes", content: "Contenido completo del artículo 3, con todos los datos ampliados..."}];

export default function Blog() {
    const [mas, setMas] = useState(false);
    const [expandedIndexes, setExpandedIndexes] = useState({});

    const toggleExpand = (index) => {
      setExpandedIndexes((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    };

    return(
        <>
          <section className={styles.blogSection} id="blog">
          <motion.h2 initial={{x: -200, opacity: 0}} transition={{duration: 0.7, type: "spring"}} animate={{x: 0, opacity: 1}} whileInView={{x: 0, opacity: 1}} className={styles.sectionTitle}>Blog</motion.h2>

          <div className={styles.blogDescription}>
            <motion.p initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, ease: "easeOut" }}>
              Mantente informado sobre nuestras actividades, consejos de salud para adultos mayores, y noticias relevantes
              del sector. Compartimos regularmente contenido de interés para residentes, familiares y cuidadores.
            </motion.p>
          </div>

          <div className={styles.blogContainer}>
            {
              blogPosts && blogPosts.map((post, index) => (
                <motion.div key={post.title} variants={variant} initial="initial" animate="animate" transition={{duration: 0.7, type: "spring"}} className={styles.blogPost}>
                  <div className={styles.blogImageContainer}>
                  <Image
                    src={post.image}
                    alt={post.alt}
                    width={400}
                    height={200}
                    className={styles.blogImage}
                  />
                  </div>
                  <div className={styles.blogContent}>
                    <span className={styles.blogDate}>{post.date}</span>
                    <h3 className={styles.blogTitle}>{post.title}</h3>
                    <p className={styles.blogExcerpt}>
                      {post.excerpt}
                    </p>
                      <AnimatePresence>
                        {expandedIndexes[index] && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className={styles.blogFullContent}
                          >
                            {post.content}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    <button onClick={() => toggleExpand(index)} className={styles.blogButton}>{expandedIndexes[index] ? "Ver menos" : "Leer más"}</button>
                  </div>
                </motion.div>
              ))
            }
            <AnimatePresence>
            {
              mas && moreBlogPosts.map((post, index) => (
                <motion.div key={post.title} variants={variant} initial="initial" animate="animate" transition={{duration: 0.7, type: "spring"}} exit={{opacity: 0}} className={styles.blogPost}>
                  <div className={styles.blogImageContainer}>
                    <Image
                      src={post.image}
                      alt={post.alt}
                      width={400}
                      height={200}
                      className={styles.blogImage}
                    />
                  </div>
                  <div className={styles.blogContent}>
                    <span className={styles.blogDate}>{post.date}</span>
                    <h3 className={styles.blogTitle}>{post.title}</h3>
                    <p className={styles.blogExcerpt}>
                      {post.excerpt}
                    </p>
                      <AnimatePresence>
                        {expandedIndexes[index] && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.5 }}
                            className={styles.blogFullContent}
                          >
                            {post.content}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    <button onClick={() => toggleExpand(index)} className={styles.blogButton}>{expandedIndexes[index] ? "Ver menos" : "Leer más"}</button>
                  </div>
                </motion.div>
              ))
            }
            </AnimatePresence>
          </div>

          <div className={styles.blogMoreContainer}>
            <button onClick={() => setMas(!mas)} className={styles.blogMoreButton}>{mas ? "Ver menos artículos" : "Ver más artículos"}</button>
          </div>
        </section>
        <Flotante />
      </>
    )
}