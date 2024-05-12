import React, { useContext, useMemo } from "react";
import "./Consigliati.css";
import Item from "../Item/Item";
import { ShopContext } from "../../Contex/ShopContext";

const Consigliati = ({ currentProductId }) => {
  const { prodotti } = useContext(ShopContext);

  const prodottiCasuali = useMemo(() => {
    // Trova il prodotto corrente
    const currentProduct = prodotti.find(
      (item) => item._id === currentProductId
    );

    // Filtra i prodotti per la stessa categoria del prodotto corrente
    const prodottiStessaCategoria = prodotti.filter(
      (item) =>
        item.category === currentProduct?.category &&
        item._id !== currentProduct._id
    );

    // Prendi 3 prodotti casuali dalla stessa categoria
    const selezionati = [];
    while (selezionati.length < 3 && prodottiStessaCategoria.length > 0) {
      const randomIndex = Math.floor(
        Math.random() * prodottiStessaCategoria.length
      );
      const randomProduct = prodottiStessaCategoria.splice(randomIndex, 1)[0];
      selezionati.push(randomProduct);
    }

    return selezionati;
  }, [prodotti, currentProductId]);

  return (
    <div className="cont_cons">
      <h2 className="nuovi">Potrebbe piacerti</h2>
      <div className="cons">
        {prodottiCasuali.map((item, i) => {
          return (
            <Item
              key={item._id} // Changed from index to item.id for more stability in re-renders
              id={item._id}
              nome={item.name}
              prezzo={item.price}
              descrizione={item.description}
              immagine={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Consigliati;
