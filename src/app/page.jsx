"use client"
import style from "./page.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <div className={style.containerVideo}>
          <iframe className={style.video}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BpDA6BAUaZo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
          </iframe>
        </div>
        <motion.h1 animate={{y: 0}} initial={{y: 120}} transition={{duration: 0.4, type: "spring"}} className={style.tituloPrincipal}>Geriatrico Rio Segundo</motion.h1>
        <motion.p whileInView={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 2, type: "spring"}} className={style.parrafo}>Es un honor para nosotros recibirlos en [Nombre del Geriátrico], un lugar diseñado con amor, respeto y dedicación para brindar bienestar y calidad de vida a nuestros residentes.

            Aquí, cada persona es única y especial, y nuestro compromiso es ofrecer un ambiente cálido, seguro y familiar donde puedan sentirse en casa. Contamos con un equipo de profesionales capacitados para atender sus necesidades con cariño y vocación, promoviendo siempre el respeto, la compañía y la alegría en el día a día.

            En [Nombre del Geriátrico], fomentamos la participación en actividades recreativas, terapias ocupacionales y momentos de convivencia que enriquecen la vida y fortalecen los lazos de amistad.

            Agradecemos la confianza que depositan en nosotros y les damos una cordial bienvenida a esta gran familia.

            ¡Bienvenidos a su nuevo hogar!
        </motion.p>
        <motion.h2 initial={{y: 25}} whileInView={{y: 0}} transition={{type: "spring", duration: 2}} className={style.tituloServicios}>Servicios Prestados</motion.h2>
        <div className={style.containerServicios}>
          <motion.div initial={{y: 25, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{type: "spring", duration: 1.2}} className={style.tarjetaServicio}>
              <img  className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9onCWOacL-qYszntjOR6cGhjrND00g8R8rA&s" alt="Servicio medico" />
              <h2 className={style.tarjetaTitulo}>Atencion personalizada</h2>
              <p>Proporcionamos la mejor atencion!</p>
          </motion.div>
          <motion.div initial={{y: 25, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{type: "spring", duration: 1.2, delay: 0.3}} className={style.tarjetaServicio}>
              <img  className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9onCWOacL-qYszntjOR6cGhjrND00g8R8rA&s" alt="Servicio medico" />
              <h2 className={style.tarjetaTitulo}>Atencion personalizada</h2>
              <p>Proporcionamos la mejor atencion!</p>
          </motion.div>
          <motion.div initial={{y: 25, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{type: "spring", duration: 1.2, delay: 0.6}} className={style.tarjetaServicio}>
              <img  className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9onCWOacL-qYszntjOR6cGhjrND00g8R8rA&s" alt="Servicio medico" />
              <h2 className={style.tarjetaTitulo}>Atencion personalizada</h2>
              <p>Proporcionamos la mejor atencion!</p>
          </motion.div>
          <motion.div initial={{y: 25, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{type: "spring", duration: 1.2, delay: 0.9}} className={style.tarjetaServicio}>
              <img  className={style.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9onCWOacL-qYszntjOR6cGhjrND00g8R8rA&s" alt="Servicio medico" />
              <h2 className={style.tarjetaTitulo}>Atencion personalizada</h2>
              <p>Proporcionamos la mejor atencion!</p>
          </motion.div>
        </div>
      </div>
      
    </>
  );
}
