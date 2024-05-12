import React, { useContext, useEffect, useState } from "react";
import "./Bestseller.css";
import ItemVetrina from "../Item2/ItemVetrina";
import { ShopContext } from "../../Contex/ShopContext";
import SkeletonVetrina from "../SkeletonVetrina/SkeletonVetrina";

const Bestseller = () => {
  const { prodotti } = useContext(ShopContext);
  const [caricamento, setCaricamento] = useState(true);

  useEffect(() => {
    if (prodotti.length > 0) {
      setCaricamento(false);
    }
  }, [prodotti]);

  const productIndicesToShow = [5, 2, 12, 17, 25, 33];
  const specificProducts = productIndicesToShow
    .map((index) => prodotti[index])
    .filter((item) => item !== undefined);

  return (
    <div className="cont_pop">
      <h2 className="nuovi">Bestseller</h2>
      {caricamento ? (
        <SkeletonVetrina />
      ) : (
        <div className="popolare">
          {specificProducts.map((item, i) => (
            <ItemVetrina
              key={i}
              id={item._id}
              nome={item.name}
              prezzo={item.price}
              descrizione={item.description}
              immagine={item.image}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bestseller;
