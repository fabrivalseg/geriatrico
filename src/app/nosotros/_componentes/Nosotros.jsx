import React from "react";
import { MapPin, Heart, Users, ShieldCheck, Smile } from "lucide-react";
import style from "./nosotros.module.css";

const Nosotros = () => {
  return (
    <div className={style.nosotrosContainer}>
      <div className={style.nosotrosHeader}>
        <h1>Sobre Nosotros</h1>
        <p>
          En nuestro geriátrico, nos comprometemos a proporcionar un ambiente cálido, seguro y confortable para nuestros residentes. Nuestra misión es garantizar bienestar, compañía y cuidados de calidad con un enfoque personalizado.
        </p>
      </div>

      <div className={style.nosotrosGrid}>
        <div className={style.nosotrosCard}>
          <Heart className={`${style.icon} ${style.red}`} />
          <h2>Atención Personalizada</h2>
          <p>
            Contamos con un equipo de profesionales altamente capacitados y comprometidos con la felicidad y el cuidado de nuestros residentes.
          </p>
        </div>

        <div className={style.nosotrosCard}>
          <Users className={`${style.icon} ${style.green}`} />
          <h2>Comunidad y Actividades</h2>
          <p>
            Promovemos la integración social mediante una amplia variedad de actividades recreativas, terapéuticas y culturales.
          </p>
        </div>

        <div className={style.nosotrosCard}>
          <MapPin className={`${style.icon} ${style.blue}`} />
          <h2>Ubicación Privilegiada</h2>
          <p>
            Nos encontramos en un entorno tranquilo y accesible, rodeado de naturaleza y con excelentes servicios cercanos.
          </p>
          <button className={style.mapButton}>Ver en el mapa</button>
        </div>

        <div className={style.nosotrosCard}>
          <ShieldCheck className={`${style.icon} ${style.purple}`} />
          <h2>Seguridad y Cuidado</h2>
          <p>
            Implementamos protocolos de seguridad y atención médica continua para garantizar el bienestar de todos nuestros residentes.
          </p>
        </div>

        <div className={style.nosotrosCard}>
          <Smile className={`${style.icon} ${style.yellow}`} />
          <h2>Ambiente Familiar</h2>
          <p>
            Fomentamos un entorno acogedor y familiar donde cada residente se sienta respetado, valorado y en casa.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;