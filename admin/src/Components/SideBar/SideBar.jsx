import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const SideBar = () => {
  const togli = () => {
    document.body.classList.remove("apri");
  };
  return (
    <div className="sidebar">
      <div className="side_tit">Menu amministratore</div>
      <div className="side_menu">
        <Link to={"/addproduct"}>
          <div className="side_cont" onClick={togli}>
            <p>Aggiungi Prodotti</p>
          </div>
        </Link>
        <Link to={"/listproduct"}>
          <div className="side_cont" onClick={togli}>
            <p>Lista Prodotti</p>
          </div>
        </Link>
        <Link to={"/order"}>
          <div className="side_cont" onClick={togli}>
            <p>Ordini</p>
          </div>
        </Link>
      </div>
      <RxCross2 onClick={togli} className="chiudi_am" />
    </div>
  );
};

export default SideBar;
