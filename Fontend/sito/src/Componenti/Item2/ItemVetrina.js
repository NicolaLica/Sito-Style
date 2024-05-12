import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io"; // Importa anche l'icona del cuore pieno
import { ShopContext } from "../../Contex/ShopContext"; // Assicurati di importare il percorso corretto
import "./ItemVetrina.css";

const ItemVetrina = (props) => {
  const { likeItems, addToLike, removeFromLike } = useContext(ShopContext);
  const [showMessage, setShowMessage] = useState(false);
  console.log("32" + props._id);
  const toggleLike = () => {
    if (likeItems[props._id]) {
      removeFromLike(props._id);
    } else {
      addToLike(props.id);
      setShowMessage(true); // Mostra il messaggio quando il prodotto viene aggiunto ai piaciuti
      setTimeout(() => {
        setShowMessage(false); // Nasconde il messaggio dopo 3 secondi
      }, 2000);
    }
  };

  return (
    <div className="item2">
      <div className="cuoreLike" onClick={toggleLike}>
        {likeItems[props.id] ? (
          <IoMdHeart className="c2" />
        ) : (
          <IoMdHeartEmpty className="c" />
        )}
      </div>
      <Link
        className="lik"
        to={`/prodotto/${props.id}`}
        onClick={() => window.scrollTo(0, 0)}
      >
        <div className="immagine">
          <img src={props.immagine} alt="" />
          {showMessage && (
            <div className="like-message">
              {props.nome} Aggiunto ai Preferiti!
            </div>
          )}{" "}
          {/* Mostra il messaggio se showMessage è true */}
        </div>
        <div className="nome2">
          <p>{props.nome}</p>
        </div>
        <div className="prezzo2">
          <p>{props.prezzo}€</p>
        </div>
      </Link>
    </div>
  );
};

export default ItemVetrina;
