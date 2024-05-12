import React from "react";
import CartItems from "../Componenti/CartItems/CartItems";
import "./Cart.css";
const Cart = () => {
  return (
    <div className="carrello_cart">
      <div className="nero"></div>
      <div className="cart_titolo">
        <h2>Carrello</h2>
      </div>
      <CartItems />
    </div>
  );
};

export default Cart;
