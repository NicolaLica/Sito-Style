import React, { useContext, useState, useEffect } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Contex/ShopContext";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const CartItems = () => {
  const { prodotti, cartItems, removeFromCart, addToCart, getTotalCartAmount } =
    useContext(ShopContext);
  const [removedProduct, setRemovedProduct] = useState(null);
  const [loggati, setLoggati] = useState(false);
  const [order, setOrder] = useState({
    totalAmount: getTotalCartAmount(),
    items: [],
    deliveryAddress: {
      street: "",
      city: "",
      cap: "",
      number: "",
    },
  });
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [showOrderInfo, setShowOrderInfo] = useState(false);
  const handlePrivacyCheckboxChange = (e) => {
    setPrivacyChecked(e.target.checked);
  };
  useEffect(() => {
    // Aggiorna il totale dell'ordine quando cambia il carrello
    setOrder((prevOrder) => ({
      ...prevOrder,
      totalAmount: getTotalCartAmount(),
    }));

    // Aggiorna gli oggetti del carrello quando cambia il carrello
    const updatedItems = Object.keys(cartItems).map((itemId) => ({
      productId: itemId,
      dati: cartItems[itemId].quantity,
    }));

    setOrder((prevOrder) => ({
      ...prevOrder,
      items: updatedItems,
    }));
  }, [cartItems, getTotalCartAmount]);
  const [errorMessage, setErrorMessage] = useState(""); // Aggiungi uno stato per il messaggio di errore

  const createOrder = async () => {
    // Verifica se i campi obbligatori sono vuoti
    if (
      !order.deliveryAddress.street ||
      !order.deliveryAddress.city ||
      !order.deliveryAddress.cap ||
      !order.deliveryAddress.number
    ) {
      setErrorMessage("Si prega di compilare tutti i campi obbligatori."); // Imposta il messaggio di errore
      return;
    }

    setErrorMessage(""); // Se non ci sono errori, azzera il messaggio di errore

    console.log("Tentativo di creazione dell'ordine...");
    console.log("Dati dell'ordine:", order);
    try {
      const response = await fetch("http://localhost:4000/createorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${localStorage.getItem(`auth-token`)}`,
        },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        throw new Error("Errore durante la creazione dell'ordine");
      }
      window.location.reload();
    } catch (error) {
      console.error("Errore durante la creazione dell'ordine:", error.message);
    }
  };

  // Nella parte del rendering
  // Mostra il m

  const changeHandler = (e) => {
    setOrder({
      ...order,
      deliveryAddress: {
        ...order.deliveryAddress,
        [e.target.name]: e.target.value,
      },
    });
  };

  const isCartEmpty = Object.values(cartItems).every(
    (item) => item.quantity === 0
  );

  const handleRemoveFromCart = (productId) => {
    const productName = prodotti.find(
      (product) => product._id === productId
    )?.name;
    setRemovedProduct(productName);
    removeFromCart(productId);
    setTimeout(() => {
      setRemovedProduct(null);
    }, 2000);
  };
  const handleOkButtonClick = () => {
    setErrorMessage(""); // Azzera il messaggio di errore
  };
  return (
    <div className="items">
      {isCartEmpty ? (
        <div className="vuoto">
          <h1>CARRELLO VUOTO</h1>
        </div>
      ) : (
        <>
          {!showOrderInfo &&
            prodotti.map((product) => {
              const item = cartItems[product._id];
              if (item && item.quantity > 0) {
                return (
                  <div className="cart" key={product._id}>
                    <div className="immagine_cart">
                      <Link
                        to={`/prodotto/${product._id}`}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        <img src={product.image} alt="" />
                      </Link>
                    </div>

                    <div className="desc_cart">
                      <div className="desc_nome">
                        <p>{product.name}</p>
                        <p>Taglia: {item.size}</p>
                      </div>
                      <div className="c1">
                        <div className="desc_quant">
                          <span onClick={() => removeFromCart(product._id)}>
                            <AiOutlineMinus />
                          </span>
                          <p>{item.quantity}</p>
                          <span onClick={() => addToCart(product._id, 1)}>
                            <AiOutlinePlus />
                          </span>
                        </div>
                        <div>
                          <p>{product.price}€</p>
                        </div>
                        <div className="desc_rim">
                          <p onClick={() => handleRemoveFromCart(product._id)}>
                            <RxCross2 />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          {removedProduct && (
            <div className="rimosso">
              <p>{`${removedProduct} rimosso dal carrello`}</p>
            </div>
          )}
          {!showOrderInfo && (
            <div className="totale">
              Totale parziale: {getTotalCartAmount()} €
              {localStorage.getItem("auth-token") ? (
                <div
                  className="bottone_carrello"
                  onClick={() => {
                    setShowOrderInfo(true);
                    window.scrollTo(0, 0);
                  }}
                >
                  <p>Procedi all'ordine</p>
                </div>
              ) : (
                <div className="bottone_carrello">
                  <p onClick={() => setLoggati(true)}>Procedi all'ordine</p>
                </div>
              )}
            </div>
          )}
        </>
      )}
      {showOrderInfo && (
        <div className="informazioni_ordine">
          <div className="tit_inf_cont">
            <h2 className="titolo_info">Dati per l'ordinazione</h2>
          </div>

          <div className="info_ord">
            <p>Indirizzo</p>
            <input
              name="street"
              value={order.deliveryAddress.street}
              onChange={changeHandler}
              type="text"
            />
          </div>
          <div className="info_ord">
            <p>Città</p>
            <input
              name="city"
              value={order.deliveryAddress.city}
              onChange={changeHandler}
              type="text"
            />
          </div>
          <div className="info_ord">
            <p>Cap</p>
            <input
              name="cap"
              value={order.deliveryAddress.cap}
              onChange={changeHandler}
              type="number"
            />
          </div>
          <div className="info_ord">
            <p>Numero di telefono</p>
            <input
              name="number"
              value={order.deliveryAddress.number}
              onChange={changeHandler}
              type="number"
            />
          </div>
          <div className="privacy">
            <input
              type="checkbox"
              checked={privacyChecked}
              onChange={handlePrivacyCheckboxChange}
            />
            <p>
              Accetto <span className="sott">l'Informativa sulla privacy</span>{" "}
              e il <span className="sott">Contratto di offerta</span>{" "}
            </p>
          </div>
          <div className="tot">Totale parziale: {getTotalCartAmount()} €</div>
          <div className="ordbt">
            <button
              onClick={() => setShowOrderInfo(false)}
              className="bott_ord"
            >
              Torna al carrello
            </button>
            <button
              className="bott_ord"
              onClick={createOrder}
              disabled={!privacyChecked}
            >
              Procedi all'acquisto
            </button>
          </div>
          {errorMessage && (
            <div className="fle">
              <div className="sfondo_scuro2"></div>
              <div className="error-message">
                {errorMessage} <button onClick={handleOkButtonClick}>OK</button>
              </div>
            </div>
          )}
        </div>
      )}
      {loggati && (
        <div className="flex2">
          <div className="sfondo_scuro2"></div>
          <div className="messaggio_log">
            <p>
              E' necessario effettuare l'accesso per proseguire con
              l'ordinazione.
            </p>
            <button onClick={() => setLoggati(false)}>Indietro</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
