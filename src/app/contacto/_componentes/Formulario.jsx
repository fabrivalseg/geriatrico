"use client";
import { useState } from "react";
import styles from "./formulario.module.css";


export default function Formulario() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado correctamente!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
      <section className={styles.contactoSection} id="contacto">
        <h2 className={styles.sectionTitle}>Contacto</h2>

        <div className={styles.contactDescription}>
          <p>
            Estamos aquí para responder cualquier pregunta que pueda tener. Complete el
            formulario a continuación y nos pondremos en contacto con usted lo antes posible.
          </p>
        </div>

        <div className={styles.contactContainer}>
          <div className={styles.contactInfo}>
            <div className={styles.contactInfoItem}>
              <h3 className={styles.contactInfoTitle}>Dirección</h3>
              <p className={styles.contactInfoText}>Av. Principal 1234, Ciudad</p>
            </div>

            <div className={styles.contactInfoItem}>
              <h3 className={styles.contactInfoTitle}>Teléfono</h3>
              <p className={styles.contactInfoText}>(123) 456-7890</p>
            </div>

            <div className={styles.contactInfoItem}>
              <h3 className={styles.contactInfoTitle}>Email</h3>
              <p className={styles.contactInfoText}>info@residenciageriatrica.com</p>
            </div>

            <div className={styles.contactInfoItem}>
              <h3 className={styles.contactInfoTitle}>Horario de visitas</h3>
              <p className={styles.contactInfoText}>Lunes a Domingo: 10:00 - 18:00</p>
            </div>
          </div>

          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="nombre" className={styles.formLabel}>Nombre completo *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className={styles.formInput}
                placeholder="Ingrese su nombre completo"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>Correo electrónico *</label>
              <input
                type="email"
                id="email"
                name="email"
                className={styles.formInput}
                placeholder="Ingrese su correo electrónico"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="telefono" className={styles.formLabel}>Teléfono *</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                className={styles.formInput}
                placeholder="Ingrese su número de teléfono"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="asunto" className={styles.formLabel}>Asunto</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                className={styles.formInput}
                placeholder="Asunto de su mensaje"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="mensaje" className={styles.formLabel}>Mensaje *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                className={styles.formTextarea}
                placeholder="Escriba su mensaje aquí..."
                rows={5}
                required
              ></textarea>
            </div>

            <div className={styles.formGroup}>
              <button type="submit" className={styles.formButton}>Enviar mensaje</button>
            </div>
          </form>
        </div>
    </section>
  );
}
