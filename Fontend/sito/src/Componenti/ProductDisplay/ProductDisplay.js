import React, { useContext, useState, useEffect } from "react";
import "./ProductDisplay.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { ShopContext } from "../../Contex/ShopContext";
import { RxCross2 } from "react-icons/rx";

const ProductDisplay = ({ product }) => {
  const { addToCart, likeItems, addToLike, removeFromLike } =
    useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(
    product.type === "felpa" ||
      product.type === "gonna" ||
      product.type === "vestito" ||
      product.type === "giacca"
      ? "S"
      : product.type === "pantalone" || product.type === "calzature"
      ? "38"
      : "taglia unica"
  );
  const [isLiked, setIsLiked] = useState(likeItems[product._id]);

  useEffect(() => {
    setIsLiked(!!likeItems[product._id]);
  }, [product, likeItems]);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));
  const handleAddToCart = () => {
    addToCart(product._id, quantity, size);
    document.body.classList.add("show");
    setTimeout(() => {
      document.body.classList.remove("show");
    }, 3000);
  };

  const selezionaTaglia = (event) => {
    const selectedSize = event.target.value;
    setSize(selectedSize);
  };
  const toggleLike = () => {
    if (isLiked) {
      removeFromLike(product._id);
      setIsLiked(false);
    } else {
      addToLike(product._id);
      setIsLiked(true);
      document.body.classList.add("show2");
      setTimeout(() => {
        document.body.classList.remove("show2");
      }, 3000);
    }
  };

  return (
    <div>
      <div className="nero"></div>
      <div className="product_display">
        <div className="disp_img">
          <img src={product.image} alt="" />
        </div>
        <div className="disp_info">
          <div className="disp_nome">
            <p>{product.name}</p>
          </div>
          <div className="disp_prezzo">
            <p>{product.price}€</p>
          </div>
          <div className="disp_taglie">
            <p>Taglie</p>
            <select onChange={selezionaTaglia}>
              {product.type === "felpa" ||
              product.type === "gonna" ||
              product.type === "vestito" ||
              product.type === "giacca" ? (
                <>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </>
              ) : product.type === "pantalone" ||
                product.type === "calzature" ? (
                <>
                  <option value="38">38</option>
                  <option value="40">40</option>
                  <option value="42">42</option>
                  <option value="44">44</option>
                  <option value="46">46</option>
                </>
              ) : (
                <option value="taglia unica">Taglia unica</option>
              )}
            </select>
          </div>
          <div className="disp_ordina">
            <div className="quantità">
              <span onClick={decreaseQuantity}>
                <AiOutlineMinus />
              </span>
              <input
                style={{
                  "-moz-appearance": "textfield",
                  appearance: "textfield",
                }}
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              />
              <span onClick={increaseQuantity}>
                <AiOutlinePlus />
              </span>
            </div>

            <button onClick={handleAddToCart} className="ordina">
              Aggiungi al carrello
            </button>
            <span className="cuoricino" onClick={toggleLike}>
              {isLiked ? <IoMdHeart className="c3" /> : <IoMdHeartEmpty />}
            </span>
          </div>
          <div className="disp_desc">
            <p>{product.description}</p>
          </div>

          <div className="disp_materiale">
            <p>Materiale:</p>
            <p>{product.material}</p>
          </div>
        </div>
      </div>

      <div className="like-notification">
        {product.name} Aggiunto ai Preferiti!
        <RxCross2
          className="cross"
          onClick={() => document.body.classList.remove("show2")}
        />
      </div>

      <div className="cart-notification">
        {product.name} aggiunto al carrello
        <RxCross2
          className="cross"
          onClick={() => document.body.classList.remove("show")}
        />
      </div>
    </div>
  );
};

export default ProductDisplay;
