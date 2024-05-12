import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdArrowDownward } from "react-icons/md";
import { ShopContext } from "../../Contex/ShopContext";
import LikeList from "../LikeList/LikeList";
import Login from "../Login/Login";
import { useLocation } from "react-router-dom";
import { CiUser } from "react-icons/ci";

const Navbar = () => {
  const { getTotalCartItems, getTotalLikeItems, admin } =
    useContext(ShopContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const token = localStorage.getItem("auth-token");

        // Verifica se il token di autenticazione esiste
        if (token) {
          const response = await fetch(
            "https://style-concept-7f84.onrender.com/username",
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                "auth-token": token,
              },
            }
          );
          const data = await response.json();
          setUsername(data.username);
        } else {
          // Se il token non esiste, l'utente non è autenticato
          console.log("L'utente non è autenticato");
        }
      } catch (error) {
        console.error(
          "Errore durante il recupero del nome dell'utente:",
          error
        );
      }
    };

    fetchUsername();
  }, []);

  useEffect(() => {
    setCurrentPage(location.pathname); // Aggiorna currentPage quando l'URL cambia
  }, [location]);

  const toggle = () => {
    document.body.classList.toggle("classe");
  };
  const metti = () => {
    document.body.classList.add("classe2");
  };
  const metti2 = () => {
    document.body.classList.add("classe3");
  };
  const login = () => {
    rimuovi();
    metti2();
  };
  const rimuovi2 = () => {
    document.body.classList.remove("classe3");
  };
  const rimuovi = () => {
    document.body.classList.remove("classe");
    document.body.classList.remove("classe2");
  };
  const login2 = () => {
    rimuovi();
    rimuovi2();
  };
  // Impostiamo l'event listener allo scroll
  useEffect(() => {
    const handleScroll = () => {
      // Aggiorna lo stato basato sulla posizione dello scroll
      setIsScrolled(window.scrollY > 0);
    };

    // Aggiungi l'event listener quando il componente viene montato
    window.addEventListener("scroll", handleScroll);

    // Rimuovi l'event listener quando il componente viene smontato
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const letteraNome = username.charAt(0).toUpperCase();

  // Verifica se l'email memorizzata corrisponde all'email dell'amministratore

  const headerClass = `navbar_cont ${isScrolled ? "header-scroll" : ""}`;
  return (
    <div className={headerClass}>
      <MdArrowDownward className="freccia_menu" onClick={toggle} />
      <div onClick={login2} className="coperto"></div>
      <div className="navi">
        <div className="navbar">
          <div
            className={`logo ${currentPage === "shop" ? "" : "logo"}`}
            onClick={() => {
              setCurrentPage("shop");
              rimuovi();
            }}
          >
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <p>STYLE</p>
            </Link>
          </div>
          <div className="menu">
            <ul className="ul">
              <Link to="/uomo" onClick={() => window.scrollTo(0, 0)}>
                <div
                  className="cont_li"
                  onClick={() => {
                    setCurrentPage("/uomo");
                    rimuovi();
                  }}
                >
                  <li className={` ${currentPage === "/uomo" ? "fondo" : ""}`}>
                    Uomo
                  </li>
                </div>
              </Link>
              <Link to="/donna" onClick={() => window.scrollTo(0, 0)}>
                <div
                  className="cont_li"
                  onClick={() => {
                    setCurrentPage("/donna");
                    rimuovi();
                  }}
                >
                  <li className={` ${currentPage === "/donna" ? "fondo" : ""}`}>
                    Donna
                  </li>
                </div>
              </Link>
              <Link to="/unisex" onClick={() => window.scrollTo(0, 0)}>
                <div
                  className="cont_li"
                  onClick={() => {
                    setCurrentPage("/unisex");
                    rimuovi();
                  }}
                >
                  <li
                    className={` ${currentPage === "/unisex" ? "fondo" : ""}`}
                  >
                    Unisex
                  </li>
                </div>
              </Link>
              <Link to="/contatti" onClick={() => window.scrollTo(0, 0)}>
                <div
                  className="cont_li"
                  onClick={() => {
                    setCurrentPage("/contatti");
                    rimuovi();
                  }}
                >
                  <li
                    className={` ${currentPage === "/contatti" ? "fondo" : ""}`}
                  >
                    Contatti
                  </li>
                </div>
              </Link>
              {admin === "true" && (
                <a href="http://localhost:5174/">
                  <div
                    className="cont_li"
                    onClick={() => {
                      rimuovi();
                    }}
                  >
                    <li>Admin</li>
                  </div>
                </a>
              )}

              <Link
                className="menu_tel"
                to="/about"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div
                  className="cont_li"
                  onClick={() => {
                    setCurrentPage("/about");
                    rimuovi();
                  }}
                >
                  <li className={` ${currentPage === "/about" ? "fondo" : ""}`}>
                    About
                  </li>
                </div>
              </Link>
              <Link
                className="menu_tel"
                to="/lookbook"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div
                  className="cont_li"
                  onClick={() => {
                    setCurrentPage("/lookbook");
                    rimuovi();
                  }}
                >
                  <li
                    className={` ${currentPage === "/lookbook" ? "fondo" : ""}`}
                  >
                    LookBook
                  </li>
                </div>
              </Link>
              <Link
                className="menu_tel"
                to="/pagamenti-e-spedizioni"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div
                  className="cont_li"
                  onClick={() => {
                    setCurrentPage("/pagamenti-e-spedizioni");
                    rimuovi();
                  }}
                >
                  <li
                    className={` ${
                      currentPage === "/pagamenti-e-spedizioni" ? "fondo" : ""
                    }`}
                  >
                    Pagamento&Spedizioni
                  </li>
                </div>
              </Link>
            </ul>
          </div>

          <div className="cart_like">
            {localStorage.getItem("auth-token") ? (
              <Link to="/paginapersonale">
                <div
                  onClick={() => {
                    setCurrentPage("/paginapersonale");
                    rimuovi();
                    window.scrollTo(0, 0);
                  }}
                  className="lettera"
                >
                  <p>{letteraNome}</p>
                </div>
              </Link>
            ) : (
              <p onClick={login} className="user">
                <CiUser />
              </p>
            )}
            <div className="count_like">{getTotalLikeItems()}</div>
            <IoMdHeartEmpty
              onClick={metti}
              className={`cuore ${currentPage === "cuore" ? "" : ""}`}
            />
            <div className="count_cart">{getTotalCartItems()}</div>
            <Link to="/cart" onClick={() => window.scrollTo(0, 0)}>
              <HiOutlineShoppingBag
                onClick={() => setCurrentPage("carrello")}
                className={`carrello ${currentPage === "carrello" ? "" : ""}`}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="cart_like cd">
        {localStorage.getItem("auth-token") ? (
          <Link to="/paginapersonale">
            <div
              onClick={() => {
                setCurrentPage("/paginapersonale");
                rimuovi();
                window.scrollTo(0, 0);
              }}
              className="lettera"
            >
              <p>{letteraNome}</p>
            </div>
          </Link>
        ) : (
          <p onClick={login} className="user">
            <CiUser />
          </p>
        )}
        <div className="count_like">{getTotalLikeItems()}</div>

        <IoMdHeartEmpty
          onClick={metti}
          className={`cuore ${currentPage === "cuore" ? "" : ""}`}
        />

        <div className="count_cart">{getTotalCartItems()}</div>
        <Link to="/cart">
          <HiOutlineShoppingBag
            onClick={() => setCurrentPage("carrello")}
            className={`carrello ${currentPage === "carrello" ? "" : ""}`}
          />
        </Link>
      </div>
      <LikeList />
      <Login gira={login2} />
    </div>
  );
};

export default Navbar;
