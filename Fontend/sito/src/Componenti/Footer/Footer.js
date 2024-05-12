import React, { useState } from "react";
import "./Footer.css";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Footer = ({ currentPage, setCurrentPage }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:4000/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const responseData = await response.text();
    alert(responseData);
  };

  return (
    <div>
      <div className="cont_news">
        <div className="news">
          <h2>Iscriviti alla nostra News-letter</h2>
          <form className="forme" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-mail"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="check">
              <div>
                <input type="checkbox" id="ce" />
              </div>
              <p>
                Accetto{" "}
                <span className="sott">l'Informativa sulla privacy</span>e i
                termini del
                <span className="sott">Contratto di offerta</span>
              </p>
            </div>
            <button type="submit" className="pulsante">
              Invia <LiaLongArrowAltRightSolid className="c" />
            </button>
          </form>
        </div>
      </div>
      <div style={{ height: "40px", backgroundColor: "black" }}></div>
      <footer className="footer">
        <div className="footer_inner">
          <div className="footer_sx">
            <ul>
              <li className="t">Links</li>
              <Link to="/uomo" onClick={() => window.scrollTo(0, 0)}>
                <li
                  onClick={() => {
                    setCurrentPage("/uomo");
                  }}
                >
                  Uomo
                </li>
              </Link>
              <Link to="/donna" onClick={() => window.scrollTo(0, 0)}>
                <li
                  onClick={() => {
                    setCurrentPage("/donna");
                  }}
                >
                  Donna
                </li>
              </Link>
              <Link to="/unisex" onClick={() => window.scrollTo(0, 0)}>
                <li
                  onClick={() => {
                    setCurrentPage("/unisex");
                  }}
                >
                  Unisex
                </li>
              </Link>
            </ul>
            <ul>
              <li className="t">Contatti</li>

              <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
                <li
                  onClick={() => {
                    setCurrentPage("/about");
                  }}
                >
                  About
                </li>
              </Link>
              <Link to="/lookbook" onClick={() => window.scrollTo(0, 0)}>
                <li
                  onClick={() => {
                    setCurrentPage("/lookbook");
                  }}
                >
                  Look Book
                </li>
              </Link>
            </ul>
            <ul>
              <li className="t">Note</li>
              <Link
                to="/pagamenti-e-spedizioni"
                onClick={() => window.scrollTo(0, 0)}
              >
                <li
                  onClick={() => {
                    setCurrentPage("/pagamenti-e-spedizioni");
                  }}
                >
                  Pagamenti&spedizioni
                </li>
              </Link>
              <Link to="/resi" onClick={() => window.scrollTo(0, 0)}>
                <li
                  onClick={() => {
                    setCurrentPage("/resi");
                  }}
                >
                  Resi
                </li>
              </Link>
            </ul>
          </div>
          <div className="footer_dx">
            <div className="footer_dx_inner">
              <h2>STYLE</h2>
              <div className="a">
                <p>3315649740</p>
                <p>lica.neculai98@gmail.com</p>
              </div>
              <div className="a">
                <p>Via della Dottrina 5</p>
                <p>Tutti i giorni dalle 9:00 alle 20:00</p>
              </div>
            </div>
          </div>
        </div>
        <p className="sotto">© 2024 Style concept store</p>
      </footer>
    </div>
  );
};

export default Footer;
