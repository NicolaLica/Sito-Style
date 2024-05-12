import React, { useEffect, useState } from "react";
import "./ListProduct.css";

const ListProduct = () => {
  const [allProduct, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:4000/allproducts");
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const removeProduct = async (id) => {
    try {
      await fetch("http://localhost:4000/removeproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      });
      await fetchInfo(); // Aggiorna la lista dei prodotti dopo la rimozione
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  return (
    <div className="list_product">
      <div className="list_prod_tit">
        <p>Lista Prodotti</p>
      </div>
      <div className="display_prodotti">
        {allProduct.map((product, index) => {
          return (
            <div key={index} className="prodotto_lista">
              <div className="prodotto_lista_img">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="prodotto_descrizione">
                <p className="bold">{product.name}</p>
                <p>Tessuto: {product.material}</p>
                <p>Tipo: {product.type}</p>
              </div>
              <div className="prodotto_descrizione2">
                <p> {product.price}€</p>
              </div>
              <p
                onClick={() => {
                  removeProduct(product._id); // Usa product._id invece di product.id
                }}
                className="rimuovi_bott"
              >
                Rimuovi
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
