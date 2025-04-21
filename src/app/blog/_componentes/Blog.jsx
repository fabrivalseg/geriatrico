"use client"
import styles from "./blog.module.css"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Flotante from "@/app/flotante.jsx/Flotante"


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}


const blogPosts = [
  {
    image: "/imagenes/blog/como_elegir.jpeg?height=200&width=400",
    alt: "Cómo elegir la mejor residencia",
    date: "15 de Junio, 2023",
    title: "Cómo elegir la mejor residencia para un ser querido",
    excerpt: "Elegir una residencia senior no es solo una elección logística, es un acto de amor, cuidado y responsabilidad...",
    content: `
      <h3>¿Por qué es tan difícil tomar esta decisión?</h3>
      <p>Elegir una residencia senior no es solo una elección logística, es un acto de amor, cuidado y responsabilidad. Como hijos o nietos, queremos lo mejor para quienes nos dieron tanto. Pero también enfrentamos miedos: ¿Estarán bien? ¿Se sentirán solos? ¿Estaremos tomando la decisión correcta?</p>
      
      <p>En Calidia entendemos ese peso. Por eso, esta guía está pensada para ayudarte a elegir con claridad y corazón.</p>
      
      <h3>4 claves para elegir con confianza</h3>
      
      <p><strong>1. Evaluá la calidad del cuidado</strong><br>
      Buscá residencias con personal capacitado, atención médica permanente y un enfoque en el bienestar integral.</p>
      
      <p><strong>2. Observá el ambiente</strong><br>
      ¿Se siente como un hogar? ¿Es un lugar donde podrías imaginar a tu ser querido sonriendo, compartiendo, creando nuevas historias?</p>
      
      <p><strong>3. Consultá por las actividades</strong><br>
      Las personas mayores necesitan más que cuidados: necesitan estímulo, compañía y momentos con sentido.</p>
      
      <p><strong>4. Confiá en tu intuición</strong><br>
      Cuando un lugar transmite calidez y seguridad, lo sentís. Escuchá ese instinto.</p>
      
      <h3>En Calidia, ayudamos a escribir un nuevo capítulo</h3>
      
      <p>No se trata solo de un espacio físico. Se trata de crear un entorno donde la vida siga teniendo sentido, con autonomía, respeto y mucha calidez.</p>
    `,
  },
  {
    image: "/imagenes/blog/laborterapia.jpeg?height=200&width=400",
    alt: "Laborterapia y manualidades",
    date: "20 de Julio, 2023",
    title: "Laborterapia: el arte de sanar haciendo",
    excerpt: "La laborterapia es una forma de terapia ocupacional que utiliza actividades manuales y creativas como herramienta de bienestar...",
    content: `
      <h3>¿Qué es la laborterapia y por qué importa?</h3>
      
      <p>La laborterapia es una forma de terapia ocupacional que utiliza actividades manuales y creativas como herramienta de bienestar físico, mental y emocional.</p>
      
      <p>Pero para nosotros en Calidia, es mucho más: es una forma de expresión, una vía para seguir creando, compartiendo y sintiéndose útil.</p>
      
      <h3>Beneficios reales en personas mayores</h3>
      
      <ul>
        <li>Estimula la motricidad fina y la coordinación</li>
        <li>Mejora la autoestima y la autovaloración</li>
        <li>Disminuye el estrés y la ansiedad</li>
        <li>Favorece la concentración y la memoria</li>
        <li>Potencia el vínculo social con otros residentes</li>
      </ul>
      
      <h3>¿Qué tipo de actividades incluye?</h3>
      
      <ul>
        <li>Talleres de cerámica o modelado</li>
        <li>Cine y debate</li>
        <li>Salidas y paseos</li>
        <li>Lectura</li>
        <li>Costura, bordado, tejido</li>
        <li>Pintura, mandalas y collage</li>
        <li>Jardinería y cuidado de plantas</li>
        <li>Cocina simple o colaborativa</li>
        <li>Creación de objetos decorativos</li>
      </ul>
      
      <p>Cada propuesta se adapta a los intereses, capacidades y deseos de nuestros residentes.</p>
      
      <h3>Más que terapia, es una forma de seguir construyendo</h3>
      
      <p>Porque cuando alguien crea algo con sus manos, también está dejando una huella. En Calidia, creemos en la importancia de <strong>darle sentido a cada día</strong>, y la laborterapia es una herramienta clave para eso.</p>
      
      <h3>Un espacio donde hacer también es sanar</h3>
      
      <p>Desde una pequeña manualidad hasta un proyecto colectivo, todo lo que se crea en Calidia tiene valor. Porque lo importante no es el resultado, sino el proceso, la emoción compartida, la historia que se sigue escribiendo.</p>
    `,
  },
]

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <>
      <section className={styles.blogSection} id="blog">
        <motion.h2
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          viewport={{ once: true }}
          className={styles.sectionTitle}
        >
          Blog
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={styles.blogDescription}
        >
          <p>
            Mantente informado sobre nuestras actividades, consejos de salud para adultos mayores, y noticias relevantes
            del sector. Compartimos regularmente contenido de interés para residentes, familiares y cuidadores.
          </p>
        </motion.div>

        <div className={styles.blogContainer}>
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={styles.blogPost}
            >
              <div className={styles.blogImageContainer}>
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.alt}
                  width={400}
                  height={200}
                  className={styles.blogImage}
                />
              </div>
              <div className={styles.blogContent}>
                <span className={styles.blogDate}>{post.date}</span>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={styles.blogExcerpt}>{post.excerpt}</p>
                <button onClick={() => setSelectedPost(post)} className={styles.blogButton}>
                  Leer más
                </button>
              </div>
            </motion.div>
          ))}
        </div>


        <AnimatePresence>
          {selectedPost && (
            <motion.div
              className={styles.modalOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPost(null)}
            >
              <motion.div
                className={styles.modalContent}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className={styles.modalClose}
                  onClick={() => setSelectedPost(null)}
                  aria-label="Cerrar artículo"
                >
                  ×
                </button>

                <div className={styles.modalImageContainer}>
                  <Image
                    src={selectedPost.image || "/placeholder.svg"}
                    alt={selectedPost.alt}
                    width={600}
                    height={300}
                    className={styles.modalImage}
                  />
                </div>

                <div className={styles.modalContentText}>
                  <span className={styles.blogDate}>{selectedPost.date}</span>
                  <h2 className={styles.modalTitle}>{selectedPost.title}</h2>
                  <div className={styles.blogFullContent} dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <Flotante />
    </>
  )
}
