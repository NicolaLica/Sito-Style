import React, { useContext, useState, useEffect } from "react";
import "./Categorie.css";
import { ShopContext } from "../Contex/ShopContext";
import Item from "../Componenti/Item2/ItemVetrina";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { BiCategoryAlt } from "react-icons/bi";
import Bestseller from "../Componenti/Bestseller/Bestseller";
const Categorie = (props) => {
  const { prodotti } = useContext(ShopContext);

  const [prezzo, setPrezzo] = useState(0);
  const [prezzoMinimo, setPrezzoMinimo] = useState(0);
  const [prezzoMassimo, setPrezzoMassimo] = useState(0);
  const [materialiSelezionati, setMaterialiSelezionati] = useState([]);
  const [numeroProdottiFiltrati, setNumeroProdottiFiltrati] = useState(0);
  const [ordinamento, setOrdinamento] = useState("opzione1"); // Predefinito
  const [prodottiDisponibili, setprodottiDisponibili] = useState(false);

  useEffect(() => {
    const prodottiCategoriaCorrente = prodotti.filter(
      (item) => props.category === item.category
    );
    const prezziCategoriaCorrente = prodottiCategoriaCorrente.map((item) =>
      parseInt(item.price)
    );
    const min = Math.min(...prezziCategoriaCorrente);
    const max = Math.max(...prezziCategoriaCorrente);
    setPrezzoMinimo(min);
    setPrezzoMassimo(max);
    setPrezzo(max); // Imposta il prezzo al massimo quando cambia la categoria

    // Reimposta lo stato dei materiali selezionati quando cambia la categoria
    setMaterialiSelezionati([]);

    // Reimposta l'ordinamento predefinito quando cambia la categoria
    setOrdinamento("opzione1");
  }, [prodotti, props.category]);

  useEffect(() => {
    const numProdottiFiltrati = prodotti
      .filter((item) => props.category === item.category)
      .filter(filtraProdotti).length;
    setNumeroProdottiFiltrati(numProdottiFiltrati);
    setprodottiDisponibili(numProdottiFiltrati === 0);
  }, [prodotti, prezzo, props.category, materialiSelezionati, ordinamento]);

  const handlePrezzoChange = (event) => {
    const nuovoPrezzo = parseInt(event.target.value);
    setPrezzo(nuovoPrezzo);
  };

  const handleCheckboxChange = (event) => {
    const materialeSelezionato = event.target.value;
    if (event.target.checked) {
      setMaterialiSelezionati([...materialiSelezionati, materialeSelezionato]);
    } else {
      setMaterialiSelezionati(
        materialiSelezionati.filter((m) => m !== materialeSelezionato)
      );
    }
  };

  const handleOrdinamentoChange = (event) => {
    const nuovoOrdinamento = event.target.value;
    setOrdinamento(nuovoOrdinamento);
  };

  const filtraProdotti = (item) => {
    if (materialiSelezionati.length === 0) {
      return parseInt(item.price) <= prezzo;
    } else {
      return (
        parseInt(item.price) <= prezzo &&
        materialiSelezionati.includes(item.material)
      );
    }
  };

  const ordinaProdotti = (prodottiFiltrati) => {
    switch (ordinamento) {
      case "opzione2":
        return prodottiFiltrati.slice().sort((a, b) => a.price - b.price);
      case "opzione3":
        return prodottiFiltrati.slice().sort((a, b) => b.price - a.price);
      case "opzione4":
        return prodottiFiltrati
          .slice()
          .sort((a, b) => a.name.localeCompare(b.name));
      case "opzione5":
        return prodottiFiltrati
          .slice()
          .sort((a, b) => b.name.localeCompare(a.name));
      default:
        return prodottiFiltrati;
    }
  };
  const [visibility, setVisibility] = useState({
    isVisible1: false,
    isVisible2: false,
  });

  useEffect(() => {
    const handleResize = () => {
      const isWideScreen = window.innerWidth > 860;
      setVisibility({ isVisible1: isWideScreen, isVisible2: isWideScreen });
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleVisibility = (key) => {
    if (window.innerWidth <= 860) {
      setVisibility((prevVisibility) => ({
        ...prevVisibility,
        [key]: !prevVisibility[key],
      }));
    }
  };

  return (
    <div>
      <div className="sfondo">
        <img src={props.sfondo} alt="" />
      </div>
      <div className="banner_cat">
        <img src={props.banner} alt="" />
        <div className="titolo_cat">
          <h2>{props.titolo}</h2>
          <p></p>
          <p></p>
        </div>
      </div>
      <div className="links">
        <p>Home</p>
        <LiaLongArrowAltRightSolid className="l" />
        <p className="prop">{props.cat}</p>
      </div>
      <div className="prodotti_cont">
        <div className="prodotti">
          <div className="filtri">
            <div className="disfil">
              <BiCategoryAlt /> <p>Filtri</p>
            </div>
            <div className="prezzo_max">
              <label
                onClick={() => toggleVisibility("isVisible1")}
                className="labpre"
              >
                Prezzo
              </label>
              {visibility.isVisible1 && (
                <div className="lab2">
                  <div className="pre">
                    <p className="w">Prezzo massimo</p>
                    <span>{prezzo} €</span>
                  </div>

                  <input
                    onChange={handlePrezzoChange}
                    type="range"
                    id="prezzo"
                    min={prezzoMinimo}
                    max={prezzoMassimo}
                    value={prezzo}
                  />
                </div>
              )}
            </div>
            <div className="materiale">
              <p onClick={() => toggleVisibility("isVisible2")} className="mat">
                Materiale
              </p>
              {visibility.isVisible2 && (
                <div className="cont_cec">
                  <div>
                    <input
                      id="check"
                      type="checkbox"
                      value="Poliestere"
                      onChange={handleCheckboxChange}
                      checked={materialiSelezionati.includes("Poliestere")}
                    />
                    <label>Poliestere</label>
                  </div>
                  <div>
                    <input
                      id="check"
                      type="checkbox"
                      value="Seta"
                      onChange={handleCheckboxChange}
                      checked={materialiSelezionati.includes("Seta")}
                    />
                    <label>Seta</label>
                  </div>
                  <div>
                    <input
                      id="check"
                      type="checkbox"
                      value="Cotone"
                      onChange={handleCheckboxChange}
                      checked={materialiSelezionati.includes("Cotone")}
                    />
                    <label>Cotone</label>
                  </div>
                  <div>
                    <input
                      id="check"
                      type="checkbox"
                      value="Tecnico"
                      onChange={handleCheckboxChange}
                      checked={materialiSelezionati.includes("Tecnico")}
                    />
                    <label>Tecnico</label>
                  </div>
                  <div>
                    <input
                      id="check"
                      type="checkbox"
                      value="Plastica"
                      onChange={handleCheckboxChange}
                      checked={materialiSelezionati.includes("Plastica")}
                    />
                    <label>Plastica</label>
                  </div>
                  <div>
                    <input
                      id="check"
                      type="checkbox"
                      value="Denim"
                      onChange={handleCheckboxChange}
                      checked={materialiSelezionati.includes("Denim")}
                    />
                    <label>Denim</label>
                  </div>
                </div>
              )}
            </div>
            <div className="scelta">
              <label className="lab3">Ordina per</label>
              <select
                id="scelta"
                onChange={handleOrdinamentoChange}
                value={ordinamento}
              >
                <option value="opzione1">Predefinito</option>
                <option value="opzione2">Prezzo crescente</option>
                <option value="opzione3">Prezzo decrescente</option>
                <option value="opzione4">A-Z</option>
                <option value="opzione5">Z-A</option>
              </select>
            </div>
            {(materialiSelezionati.length > 0 || prezzo !== prezzoMassimo) && (
              <div className="conteggio">
                <p>Trovati {numeroProdottiFiltrati} prodotti</p>
              </div>
            )}
          </div>
          <div className="lista">
            {prodottiDisponibili && (
              <div className="alert">
                <p>NESSUN PRODOTTO TROVATO</p>
              </div>
            )}
            {ordinaProdotti(
              prodotti
                .filter((item) => props.category === item.category)
                .filter(filtraProdotti)
            ).map((item, i) => (
              <Item
                key={i}
                id={item._id}
                nome={item.name}
                prezzo={item.price}
                immagine={item.image}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="finestra"></div>
      <div className="spb"></div>
      <div className="cont_best">
        <Bestseller />
      </div>
    </div>
  );
};

export default Categorie;
