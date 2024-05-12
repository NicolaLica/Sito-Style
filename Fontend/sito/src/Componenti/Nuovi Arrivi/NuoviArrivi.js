import React, { useContext, useState, useEffect } from "react";
import "./NuoviArrivi.css";
import Item from "../Item/Item";
import { ShopContext } from "../../Contex/ShopContext";
import Skeletonitem from "../SkeletonItem/SkeletonItem";
const NuoviArrivi = () => {
  const { prodotti } = useContext(ShopContext);
  const [caricamento, setCaricamento] = useState(true);

  useEffect(() => {
    if (prodotti.length > 0) {
      setCaricamento(false);
    }
  }, [prodotti]);
  const productIndicesToShow = [0, 2, 5];
  const specificProducts = productIndicesToShow
    .map((index) => prodotti[index])
    .filter((item) => item !== undefined);

  return (
    <div className="cont_pop">
      <h2 className="nuovi">Nuovi Arrivi</h2>
      {caricamento ? (
        <Skeletonitem />
      ) : (
        <div className="popolare">
          {specificProducts.map((item, i) => {
            return (
              <Item
                key={i}
                id={item._id}
                nome={item.name}
                prezzo={item.price}
                descrizione={item.description}
                immagine={item.image}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default NuoviArrivi;
