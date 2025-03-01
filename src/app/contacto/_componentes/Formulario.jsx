"use client";
import { useState } from "react";
import styles from "./formulario.module.css";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";
import { motion } from "framer-motion";

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
    <motion.div className={styles.container} initial={{ opacity: 0 }} transition={{duration: 1}} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h2 className={styles.title}>Contáctanos</h2>
      <p className={styles.subtitle}>Déjanos tu mensaje y te responderemos pronto.</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <FaUser className={styles.icon} />
          <input className={styles.input} type="text" name="name" placeholder="Nombre" value={formData.name} onChange={handleChange} required />
        </div>
        <div className={styles.inputGroup}>
          <FaEnvelope className={styles.icon} />
          <input className={styles.input} type="email" name="email" placeholder="Correo electrónico" value={formData.email} onChange={handleChange} required />
        </div>
        <div className={styles.inputGroup}>
          <FaPhone className={styles.icon} />
          <input className={styles.input} type="tel" name="phone" placeholder="Teléfono" value={formData.phone} onChange={handleChange} />
        </div>
        <div className={styles.inputGroup}>
          <FaCommentDots className={styles.icon} />
          <textarea className={styles.textarea} name="message" placeholder="Escribe tu mensaje..." value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit" className={styles.button}>Enviar</button>
      </form>
    </motion.div>
  );
}
