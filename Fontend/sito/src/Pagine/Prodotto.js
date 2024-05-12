import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Contex/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Componenti/ProductDisplay/ProductDisplay";
import Consigliati from "../Componenti/Consigliati/Consigliati";

const Prodotto = () => {
  const { prodotti, productsLoaded } = useContext(ShopContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  // Converte productId in un tipo compatibile con _id
  const convertedProductId =
    typeof prodotti[0]?._id === "string"
      ? String(productId)
      : Number(productId);

  useEffect(() => {
    if (productsLoaded) {
      // Trova il prodotto corrispondente all'ID dalla lista dei prodotti
      const foundProduct = prodotti.find((e) => e._id === convertedProductId);
      setProduct(foundProduct);
    }
  }, [productsLoaded, prodotti, convertedProductId]);

  // Se i prodotti non sono ancora stati caricati o il prodotto non esiste, mostra un messaggio di caricamento
  if (!productsLoaded || !product) {
    return (
      <div>
        <div className="nero"></div>
        <div className="caricamento">CARICAMENTO...</div>
      </div>
    );
  }

  return (
    <div>
      <ProductDisplay product={product} />
      <Consigliati currentProductId={convertedProductId} />
    </div>
  );
};

export default Prodotto;
