import React, { useContext } from "react";
import { ShopContext } from "../../Contex/ShopContext";
import "./LikeList.css";
import LikeItem from "../LikeItem/Likeitem";
import { RxCross2 } from "react-icons/rx";

const LikeList = (props) => {
  const { prodotti, likeItems, removeFromLike } = useContext(ShopContext);
  const rimuovi = () => {
    document.body.classList.remove("classe2");
  };

  // Filtra i prodotti preferiti
  const likedProducts = prodotti.filter((product) => likeItems[product._id]);

  return (
    <div className="lista_like">
      <div className="tit_like">
        <h2>Preferiti</h2>
        <p>
          <RxCross2 onClick={rimuovi} />
        </p>
      </div>
      {likedProducts.length === 0 ? (
        <div className="empty-list">LISTA VUOTA</div>
      ) : (
        likedProducts.map((product) => (
          <LikeItem
            key={product._id}
            product={product}
            removeFromLike={removeFromLike}
          />
        ))
      )}
    </div>
  );
};

export default LikeList;
