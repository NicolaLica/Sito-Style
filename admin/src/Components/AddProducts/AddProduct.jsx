import React, { useState } from "react";
import { BsUpload } from "react-icons/bs";
import "./AddProduct.css";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    image: "",
    material: "",
    description: "",
    category: "Uomo",
    type: "",
  });
  const resetForm = () => {
    setProductDetails({
      name: "",
      price: "",
      image: "",
      material: "",
      description: "",
      category: "uomo",
      type: "",
    });
    setImage(false);
  };
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };
  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };
  const AddProduct = async () => {
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });
    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.success) {
            alert("Product added");
            resetForm(); // Resetta il form dopo aver aggiunto il prodotto con successo
          } else {
            alert("Failed to add product");
          }
        });
    }
  };
  return (
    <div className="aggiungi_prodotti">
      <div className="prod_tit">
        <p>Inserisci prodotto</p>
      </div>
      <div className="dati_prodotti">
        <label>Nome</label>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
        />
        <div className="dati_pre_ma">
          <div>
            <label>Prezzo</label>
            <input
              value={productDetails.price}
              onChange={changeHandler}
              min="1"
              type="number"
              name="price"
            />
          </div>
          <div>
            <label>Materiale</label>
            <input
              value={productDetails.material}
              onChange={changeHandler}
              type="text"
              name="material"
            />
          </div>
        </div>

        <label>Descrizione</label>
        <input
          value={productDetails.description}
          onChange={changeHandler}
          type="text"
          name="description"
        />
        <label>Categoria</label>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
        >
          <option value="uomo">Uomo</option>
          <option value="donna">Donna</option>
          <option value="unisex">Unisex</option>
        </select>
        <label>Tipologia</label>
        <input
          value={productDetails.type}
          onChange={changeHandler}
          type="text"
          name="type"
        />
        <div className="file_input">
          <label htmlFor="file_input">
            {image ? (
              <img
                className="immagine_caricata"
                src={URL.createObjectURL(image)}
                alt=""
              />
            ) : (
              <BsUpload />
            )}
          </label>
          <input
            onChange={imageHandler}
            type="file"
            name="immagine"
            id="file_input"
            hidden
          />
        </div>
        <button
          onClick={() => {
            AddProduct();
          }}
        >
          Aggiungi prodotto
        </button>
      </div>
    </div>
  );
};
export default AddProduct;
