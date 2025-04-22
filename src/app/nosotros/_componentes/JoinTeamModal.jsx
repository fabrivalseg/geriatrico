"use client";
import { useState } from "react";
import { motion, AnimatePresence, spring } from "framer-motion";
import styles from "./joinTeamModal.module.css";

const JoinTeamModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.callToActionContainer}>
        <motion.h3 initial={{opacity: 0}} transition={{duration: 1, type: "spring"}} whileInView={{opacity: 1}} className={styles.joinTitle}>¿Quieres sumarte a nuestro equipo?</motion.h3>
        <motion.p initial={{opacity: 0}} transition={{duration: 1, type: "spring"}} whileInView={{opacity: 1}} className={styles.joinText}>Completa el siguiente formulario y adjunta tu CV.</motion.p>
        <motion.button initial={{opacity: 0}} transition={{duration: 1, type: "spring"}} whileInView={{opacity: 1}} onClick={() => setIsOpen(true)} className={styles.joinButton}>
          Enviar Solicitud
        </motion.button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <h3>Formulario de Postulación</h3>
              <form
                action="https://usebasin.com/f/c66f3e79cb3c"
                method="POST"
                encType="multipart/form-data"
              >
                <input className={styles.input} type="text" name="name" placeholder="Nombre completo" required />
                <input className={styles.input} type="email" name="email" placeholder="Correo electrónico" required />
                <textarea className={styles.textarea} name="message" placeholder="Cuéntanos por qué quieres sumarte" required />
                <input className={styles.input} type="text" name="telefono" placeholder="Teléfono" required />
                <label className={styles.fileLabel}>
                  Adjunta tu CV (opcional):
                  <input className={styles.input} type="file" name="cv" accept=".pdf,.doc,.docx" />
                </label>
                <div className={styles.modalActions}>
                  <button type="submit" className={styles.submitButton}>Enviar</button>
                  <button type="button" className={styles.cancelButton} onClick={() => setIsOpen(false)}>Cancelar</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default JoinTeamModal;