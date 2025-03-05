import styles from "./servicios.module.css";

export default function Servicios() {
    return(
        <section className={styles.serviciosSection} id="servicios">
        <h2 className={styles.sectionTitle}>Servicios</h2>

        <div className={styles.servicesDescription}>
          <p>
            Ofrecemos una amplia gama de servicios diseñados para satisfacer las necesidades individuales de cada
            residente. Nuestro enfoque integral combina atención médica de calidad, apoyo emocional y actividades
            sociales para promover una vida plena y activa.
          </p>
        </div>

        <div className={styles.servicesContainer}>
          <div className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Atención médica 24/7</h3>
            <p className={styles.serviceDescription}>
              Contamos con personal médico y de enfermería disponible las 24 horas del día, los 7 días de la semana,
              para atender cualquier necesidad de salud que pueda surgir.
            </p>
          </div>

          <div className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Fisioterapia y rehabilitación</h3>
            <p className={styles.serviceDescription}>
              Programas personalizados de fisioterapia y rehabilitación para mantener y mejorar la movilidad, fuerza y
              equilibrio de nuestros residentes.
            </p>
          </div>

          <div className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Nutrición especializada</h3>
            <p className={styles.serviceDescription}>
              Menús elaborados por nutricionistas profesionales, adaptados a las necesidades dietéticas específicas de
              cada residente.
            </p>
          </div>

          <div className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Terapia ocupacional</h3>
            <p className={styles.serviceDescription}>
              Actividades diseñadas para mantener y mejorar las habilidades cognitivas y motoras finas, promoviendo la
              independencia en las actividades diarias.
            </p>
          </div>

          <div className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Actividades recreativas</h3>
            <p className={styles.serviceDescription}>
              Programa variado de actividades sociales, culturales y recreativas para fomentar la interacción social y
              el bienestar emocional.
            </p>
          </div>

          <div className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Apoyo psicológico</h3>
            <p className={styles.serviceDescription}>
              Servicio de apoyo psicológico para residentes y familiares, facilitando la adaptación y el bienestar
              emocional.
            </p>
          </div>

          <div className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Servicios de peluquería</h3>
            <p className={styles.serviceDescription}>
              Servicios de peluquería y cuidado personal para mantener la imagen y autoestima de nuestros residentes.
            </p>
          </div>

          <div className={styles.serviceItem}>
            <h3 className={styles.serviceTitle}>Asistencia en actividades diarias</h3>
            <p className={styles.serviceDescription}>
              Apoyo personalizado en las actividades de la vida diaria, respetando la autonomía y dignidad de cada
              residente.
            </p>
          </div>
        </div>
      </section>
    )
}

