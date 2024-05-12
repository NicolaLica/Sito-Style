import React from "react";
import "./Contatti.css";
import cont from "../Componenti/Assets/Immagini/contatti.jpg";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
const Contatti = () => {
  return (
    <div>
      <div className="banner_cat">
        <img src={cont} alt="" />
        <div className="titolo_cat">
          <h2>Contatti</h2>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
      <div className="links2">
        <p>Home</p>
        <LiaLongArrowAltRightSolid className="l" />
        <p className="prop">Contatti</p>
      </div>
      <div className="sedi">
        <div className="sedi_tit">
          <h1>Sedi</h1>
        </div>
        <div className="sedi_sedi">
          <div className="sedi__1">
            <h2 className="bol">Roma</h2>
            <p>Via Condotti n5</p>
            <p></p>
            <p>Tutti i giorni dalle 10 alle 20</p>
          </div>
          <div className="sedi__1">
            <p className="bol">Napoli</p>
            <p> Via Toledo</p>
            <p className="bol">Milano</p>
            <p>Via Montenapoleone</p>
          </div>
          <div className="sedi__1">
            <p className="bol">Pisa</p>
            <p>Via Santa Maria</p>
            <p className="bol">Firenze</p>
            <p>Via dei Calzaiuoli</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contatti;
