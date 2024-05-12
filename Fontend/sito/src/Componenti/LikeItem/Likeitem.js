import React from "react";
import "./LikeItem.css";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
const LikeItem = ({ product, removeFromLike }) => {
  return (
    <div className="like_item">
      <Link
        to={`/prodotto/${product._id}`}
        onClick={() => {
          document.body.classList.remove("classe2");
          window.scrollTo(0, 0);
        }}
      >
        <div className="itemlike_img">
          <img src={product.image} alt="" />
        </div>
      </Link>
      <div className="itemlike" key={product._id}>
        <div className="itemlike_desc">
          <p>{product.name}</p>
          {/* Mostra solo la prima taglia se disponibile */}
        </div>
        <div className="itemlike_prezzo">
          <p>{product.price}€</p>
        </div>
        <div>
          <button className="rimu" onClick={() => removeFromLike(product._id)}>
            <RxCross2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LikeItem;
