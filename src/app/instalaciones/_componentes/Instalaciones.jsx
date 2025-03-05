import styles from './instalaciones.module.css';
import Image from 'next/image';

export default function Instalaciones (){
    return(
        <section className={styles.instalacionesSection} id="instalaciones">
        <h2 className={styles.sectionTitle}>Instalaciones</h2>

        <div className={styles.facilitiesDescription}>
          <p>
            Nuestras instalaciones están diseñadas pensando en el confort, la seguridad y el bienestar de nuestros
            residentes. Contamos con espacios amplios, luminosos y adaptados a las necesidades específicas de los
            adultos mayores, creando un ambiente acogedor que se siente como un verdadero hogar.
          </p>
        </div>

        <div className={styles.galleryContainer}>
          <div className={styles.galleryItem}>
            <Image
              src="/imagenes/instalaciones/031erraetumasaubaira-pkok3510_pedro_kok.jpg"
              alt="Habitaciones"
              width={400}
              height={300}
              className={styles.galleryImage}
            />
            <h3 className={styles.galleryTitle}>Habitaciones</h3>
          </div>

          <div className={styles.galleryItem}>
            <Image
              src="/imagenes/instalaciones/031erraetumasaubaira-pkok3510_pedro_kok.jpg"
              alt="Áreas comunes"
              width={400}
              height={300}
              className={styles.galleryImage}
            />
            <h3 className={styles.galleryTitle}>Áreas comunes</h3>
          </div>

          <div className={styles.galleryItem}>
            <Image
              src="/imagenes/instalaciones/031erraetumasaubaira-pkok3510_pedro_kok.jpg"
              alt="Jardines"
              width={400}
              height={300}
              className={styles.galleryImage}
            />
            <h3 className={styles.galleryTitle}>Jardines</h3>
          </div>

          <div className={styles.galleryItem}>
            <Image
              src="/imagenes/instalaciones/031erraetumasaubaira-pkok3510_pedro_kok.jpg"
              alt="Comedor"
              width={400}
              height={300}
              className={styles.galleryImage}
            />
            <h3 className={styles.galleryTitle}>Comedor</h3>
          </div>

          <div className={styles.galleryItem}>
            <Image
              src="/imagenes/instalaciones/031erraetumasaubaira-pkok3510_pedro_kok.jpg"
              alt="Sala de terapia"
              width={400}
              height={300}
              className={styles.galleryImage}
            />
            <h3 className={styles.galleryTitle}>Sala de terapia</h3>
          </div>

          <div className={styles.galleryItem}>
            <Image
              src="/imagenes/instalaciones/031erraetumasaubaira-pkok3510_pedro_kok.jpg"
              alt="Sala de actividades"
              width={400}
              height={300}
              className={styles.galleryImage}
            />
            <h3 className={styles.galleryTitle}>Sala de actividades</h3>
          </div>
        </div>
      </section>
    )
}