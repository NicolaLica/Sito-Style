import React, { useEffect, useState } from "react";
import "./PaginaPersonale.css";
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";

const PaginaPersonale = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [orderIdToDelete, setOrderIdToDelete] = useState(null);
  const [showOrders, setShowOrders] = useState(false); // Stato per mostrare/nascondere gli ordini

  useEffect(() => {
    fetch("http://localhost:4000/user/orders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
    })
      .then((response) => response.json())
      .then(async (data) => {
        const sortedOrders = data.orders.sort((a, b) => {
          return new Date(b.orderDate) - new Date(a.orderDate);
        });
        setOrders(sortedOrders);

        const productIds = sortedOrders.reduce((ids, order) => {
          order.items.forEach((item) => {
            ids.push(item.productId);
          });
          return ids;
        }, []);

        const productsResponse = await fetch(
          `http://localhost:4000/products?ids=${productIds.join(",")}`
        );
        const productsData = await productsResponse.json();
        setProducts(productsData);
      })
      .catch((error) => {
        console.error(
          "Errore durante il recupero degli ordini dell'utente:",
          error
        );
      });
  }, []);

  const cancellaOrdine = async () => {
    if (!orderIdToDelete) return;

    try {
      const response = await fetch(
        `http://localhost:4000/order/${orderIdToDelete}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      const data = await response.json();
      console.log(data);
      setOrders(orders.filter((order) => order._id !== orderIdToDelete));
    } catch (error) {
      console.error("Errore durante la cancellazione dell'ordine:", error);
    } finally {
      setOrderIdToDelete(null);
    }
  };
  const logout = () => {
    localStorage.removeItem("auth-token"); // Rimuovi il token dall'localStorage
    document.cookie =
      "auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Rimuovi il cookie "auth-token"
    window.location.replace("/"); // Reindirizza alla pagina di login o ad un'altra pagina
  };
  const toggleShowOrders = () => {
    setShowOrders(!showOrders); // Inverti lo stato per mostrare/nascondere gli ordini
  };

  const metti = () => {
    document.body.classList.add("classe4");
  };

  const togli = () => {
    document.body.classList.remove("classe4");
  };

  return (
    <div className="pagina_personale">
      <div className="nero"></div>
      <div className="pag_corpo">
        <div className="tit_ord" onClick={toggleShowOrders}>
          <h2 className="point">
            I tuoi ordini <IoMdArrowDropdown className="menu_drop" />
          </h2>
          <h2 onClick={logout}>Esci dal profilo</h2>
        </div>
        {orders.length === 0 && (
          <div className="nessun_ordine">
            <p>NESSUN ORDINE AL MOMENTO</p>
          </div>
        )}
        {showOrders && // Mostra gli ordini solo se showOrders è true
          orders.map((order, index) => (
            <div className="flex" key={index}>
              <div className="cont_ord">
                <h4>Prodotti</h4>
                <div className="cont_prod_ord">
                  {order.items.map((item) => {
                    const product = products.find(
                      (p) => p._id === item.productId
                    );
                    return (
                      <div className="prodotto_ordinato" key={item.productId}>
                        {product ? (
                          <div className="prod_ord">
                            <div className="prod_ord_img">
                              <img src={product.image} alt="" />
                            </div>
                            <div className="dati_prod_ord">
                              <div className="dati_prod_ord_int">
                                <p className="bold">{product.name}</p>
                                <p className="fine">Taglia: {item.dati.size}</p>
                              </div>
                              <div>
                                <p>{product.price}€</p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <p>Prodotto non disponibile</p>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="inf_fin">
                  <div className="inf_fin_intro">
                    <p>
                      <span className="bold">Status:</span> {order.status}
                    </p>
                    <p>
                      <span className="bold">Data:</span>{" "}
                      {new Date(order.orderDate).toLocaleString()}
                    </p>
                  </div>
                  <p className="font_grande ">
                    <span className="bold">Totale ordine:</span>{" "}
                    {order.totalAmount}€
                  </p>
                </div>
              </div>
              <div className="desc_rim">
                <p>
                  <RxCross2
                    onClick={() => {
                      setOrderIdToDelete(order._id);
                      metti();
                    }}
                  />
                </p>
              </div>
              {orderIdToDelete === order._id && (
                <div className="modal">
                  <p>Sicuro di voler eliminare l'ordinazione?</p>
                  <div className="cont_bott">
                    <button
                      onClick={() => {
                        setOrderIdToDelete(null);
                        togli();
                      }}
                    >
                      Indietro
                    </button>
                    <button
                      onClick={() => {
                        cancellaOrdine();
                        togli();
                      }}
                    >
                      Elimina
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default PaginaPersonale;
