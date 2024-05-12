import React from "react";
import "./Navbar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
const Navbar = () => {
  const apri = () => {
    document.body.classList.add("apri");
  };
  return (
    <div className="navbar">
      <div className="logo">
        <p>STYLE</p>
      </div>
      <div className="user" onClick={apri}>
        <p>T</p>
        <span>
          <RiArrowDropDownLine />
        </span>
      </div>
    </div>
  );
};
export default Navbar;
