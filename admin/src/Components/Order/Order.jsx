import React, { useState, useEffect } from "react";
import "./Order.css";
import { RiArrowDropDownLine } from "react-icons/ri";
const Order = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [showDetails, setShowDetails] = useState({});

  const toggleDetails = (orderId) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [orderId]: !prevState[orderId],
    }));
  };

  useEffect(() => {
    // Effettua una richiesta GET agli ordini dell'amministratore
    fetch("http://localhost:4000/admin/orders", {})
      .then((response) => response.json())
      .then((data) => {
        // Imposta gli ordini nella state
        setOrders(data.orders);
        console.log(data);

        // Estrai tutti gli _id dei prodotti dagli ordini
        const productIds = data.orders.reduce((ids, order) => {
          order.items.forEach((item) => {
            ids.push(item.productId);
          });
          return ids;
        }, []);

        // Effettua una seconda richiesta GET per ottenere i dettagli completi dei prodotti utilizzando gli _id estratti
        fetch(`http://localhost:4000/products?ids=${productIds.join(",")}`)
          .then((response) => response.json())
          .then((productsData) => {
            // Imposta i dettagli completi dei prodotti nella state
            setProducts(productsData);
            console.log(productsData);
          })
          .catch((error) => {
            console.error(
              "Errore durante il recupero dei dettagli dei prodotti:",
              error
            );
          });
      })
      .catch((error) => {
        console.error("Errore durante il recupero degli ordini:", error);
      });
  }, []);

  // Funzione per formattare la data nel formato desiderato (DD/MM/YYYY)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Gennaio è 0, quindi aggiungi 1
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="list_order">
      <h2 className="tit_ord">Ordini</h2>
      <div className="cont_order">
        {orders.map((order, index) => {
          return (
            <div key={index} className="ordine_lista">
              <p className="id">
                {" "}
                <span className="bold">Id ordine:</span> {order._id}
              </p>
              <div className="dett_ord_prod">
                <p className="tit_sez">Prodotti ordinati</p>
                {order.items.map((item, idx) => {
                  const product = products.find(
                    (p) => p._id === item.productId
                  );
                  if (!product) {
                    return null; // Ignora gli elementi senza un prodotto corrispondente
                  }
                  return (
                    <div className="ord_prod" key={idx}>
                      <div className="immagine_ordine">
                        <img src={product.image} alt="" />
                      </div>
                      <div className="disp">
                        <div className="dett_prod_ord">
                          <p>{product.name}</p>
                          <p>Taglia: {item.dati.size}</p>
                        </div>
                        <div className="quant">
                          Quantità: {item.dati.quantity}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="dett_ord_test">
                <p className="tit_sez">Dettagli ordine</p>
                <div className="det_">
                  <div className="det_1">
                    <p>
                      <span className="bold">Status:</span> {order.status}
                    </p>
                    <p>
                      <span className="bold">Data:</span>{" "}
                      {formatDate(order.orderDate)}
                    </p>
                  </div>
                  <div>
                    <p
                      className="Bottone"
                      onClick={() => toggleDetails(order._id)}
                    >
                      Indirizzo di consegna{" "}
                      <RiArrowDropDownLine className="dropdown" />
                    </p>

                    {showDetails[order._id] && (
                      <div className="indirizzi">
                        <p>Via: {order.deliveryAddress.street}</p>
                        <p>Città: {order.deliveryAddress.city}</p>
                        <p>Cap: {order.deliveryAddress.cap}</p>
                      </div>
                    )}
                  </div>

                  <p className="totale_ord">
                    <span className="bold2">Totale:</span> {order.totalAmount}€
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Order;
