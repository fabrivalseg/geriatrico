"use client";
import { useState } from "react";
import styles from "./formulario.module.css";
import { motion } from "framer-motion";

const variant = {
  initial: {
    x: -200,
    opacity: 0,
  },
  transition: {
    duration: 0.7,
    type: "spring",
  },
  whileInView: {
    x: 0,
    opacity: 1,
  }
}

export default function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { nombre, email, telefono, asunto, mensaje } = formData;
    const phoneNumber = "5493517169604";
    const message = `📩 Nuevo mensaje de contacto:\n\n👤 Nombre: ${nombre}\n📧 Email: ${email}\n📞 Teléfono: ${telefono}\n📝 Asunto: ${asunto}\n💬 Mensaje: ${mensaje}`;

    // Detectar si el usuario está en un móvil o en PC
    const isMobile = /iPhone|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section className={styles.contactoSection} id="contacto">
      <motion.h2
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        whileInView={{ x: 0, opacity: 1 }}
        className={styles.sectionTitle}
      >
        Contacto
      </motion.h2>

      <div className={styles.contactDescription}>
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{fontFamily: "var(--font-montserrat)"}}
        >
          Estamos aquí para responder cualquier pregunta que pueda tener. Complete el
          formulario a continuación y nos pondremos en contacto con usted lo antes posible.
        </motion.p>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <motion.div
            variants={variant}
            initial="initial"
            whileInView="whileInView"
            transition="transition"
            className={styles.contactInfoItem}
          >
            <h3 className={styles.contactInfoTitle}>Dirección</h3>
            <p className={styles.contactInfoText}>Av. Principal 1234, Ciudad</p>
          </motion.div>

          <motion.div
            variants={variant}
            initial="initial"
            whileInView="whileInView"
            transition="transition"
            className={styles.contactInfoItem}
          >
            <h3 className={styles.contactInfoTitle}>Teléfono</h3>
            <p className={styles.contactInfoText}>(123) 456-7890</p>
          </motion.div>

          <motion.div
            variants={variant}
            initial="initial"
            whileInView="whileInView"
            transition="transition"
            className={styles.contactInfoItem}
          >
            <h3 className={styles.contactInfoTitle}>Email</h3>
            <p className={styles.contactInfoText}>info@residenciageriatrica.com</p>
          </motion.div>

          <motion.div
            variants={variant}
            initial="initial"
            whileInView="whileInView"
            transition="transition"
            className={styles.contactInfoItem}
          >
            <h3 className={styles.contactInfoTitle}>Horario de visitas</h3>
            <p className={styles.contactInfoText}>Lunes a Domingo: 10:00 - 18:00</p>
          </motion.div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          whileInView={{ x: 0, opacity: 1 }}
          className={styles.contactForm}
        >
          <div className={styles.formGroup}>
            <label htmlFor="nombre" className={styles.formLabel}>Nombre completo *</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className={styles.formInput}
              placeholder="Ingrese su nombre completo"
              value={formData.nombre}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
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
              value={formData.telefono}
              onChange={handleChange}
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
              value={formData.asunto}
              onChange={handleChange}
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
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className={styles.formGroup}>
            <button type="submit" className={styles.formButton}>Enviar mensaje</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
