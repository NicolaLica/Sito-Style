import React from "react";
import "./LookBook.css";
import { MdArrowDownward } from "react-icons/md";
import look from "../Componenti/Assets/Immagini/look_finale.jpg";
const LookBook = () => {
  return (
    <div>
      <div className="look_fisso"></div>
      <div className="hero_look">
        <div className="cont_tit_look">
          <h1>Lookbook</h1>
          <MdArrowDownward className="freccia_look" />
        </div>
      </div>
      <div className="bianco"></div>

      <div className="cont_immagini">
        {" "}
        <div className="gif_cont">
          {" "}
          <div className="gif"></div>
          <div className="separo2"></div>
          <div className="look3"></div>
        </div>
        <div className="look_cont">
          <div className="separo"></div>
          <div className="look2"></div>
        </div>
      </div>
      <div className="bianco"></div>
      <div className="finestra"></div>
      <div className="bianco"></div>
      <div className="cont_look2">
        <div className="look4"></div>
        <div className="look5"></div>
      </div>
      <div className="bianco"></div>
      <div className="banner_finale">
        <img alt="" src={look} />{" "}
      </div>
    </div>
  );
};

export default LookBook;
