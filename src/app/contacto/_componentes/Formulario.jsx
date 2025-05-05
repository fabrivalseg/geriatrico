"use client";
import { useState } from "react";
import styles from "./formulario.module.css";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

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
    const phoneNumber = "5493518198716";
    const message = `📩 Nuevo mensaje de contacto:\n\n👤 Nombre: ${nombre}\n📧 Email: ${email}\n📞 Teléfono: ${telefono}\n📝 Asunto: ${asunto}\n💬 Mensaje: ${mensaje}`;


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
          Estamos aquí para responder cualquier pregunta que pueda tener. <strong>Este formulario enviará tu mensaje directamente a nuestro WhatsApp y sera respondido lo antes posible.</strong>
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
            <p className={styles.contactInfoText}>Malvinas Argentinas 76, Rio Segundo</p>
            
            <div className={styles.mapaContainer}>
              <iframe
                title="Ubicación en Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13621.260702843831!2d-63.5290505!3d-31.6495035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432829e6f395029%3A0x2f8ec4a8988e85b2!2sMalvinas%20Argentinas%2076%2C%20R%C3%ADo%20Segundo%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1710425059975!5m2!1ses-419!2sar"                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>


          <motion.div
            variants={variant}
            initial="initial"
            whileInView="whileInView"
            transition="transition"
            className={styles.contactInfoItem}
          >
            <h3 className={styles.contactInfoTitle}>Teléfono</h3>
            <p className={styles.contactInfoText}>+54 9 351 819-8716</p>
          </motion.div>

          <motion.div
            variants={variant}
            initial="initial"
            whileInView="whileInView"
            transition="transition"
            className={styles.contactInfoItem}
          >
            <h3 className={styles.contactInfoTitle}>Email</h3>
            <p className={styles.contactInfoText}>calidiaresidenciasenior@gmail.com</p>
          </motion.div>

          <motion.div
            variants={variant}
            initial="initial"
            whileInView="whileInView"
            transition="transition"
            className={styles.contactInfoItem}
          >
            <h3 className={styles.contactInfoTitle}>Horario de visitas</h3>
            <p className={styles.contactInfoText}>Proximamente...</p>
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
            <button type="submit" className={styles.formButton}><FaWhatsapp style={{ marginRight: "8px" }} />Enviar mensaje</button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
