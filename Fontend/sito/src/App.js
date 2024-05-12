import "./App.css";
import Navbar from "./Componenti/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pagine/Home";
import Categorie from "./Pagine/Categorie";
import Prodotto from "./Pagine/Prodotto";
import Contatti from "./Pagine/Contatti";
import Cart from "./Pagine/Cart";
import Like from "./Pagine/Like";
import Login from "./Pagine/Login";
import PaginaPersonale from "./Pagine/PaginaPersonale";
import banner_donna from "./Componenti/Assets/Immagini/banner_donna.webp";
import sfondo_donna from "./Componenti/Assets/Immagini/banner_donna_completo.webp";
import banner_uomo from "./Componenti/Assets/Immagini/banner_uomo.jpg";
import sfondo_uomo from "./Componenti/Assets/Immagini/banner_uomo_completo.webp";
import banner_unisex from "./Componenti/Assets/Immagini/banner_unisex.webp";
import sfondo_unisex from "./Componenti/Assets/Immagini/banner_unisex_completo.webp";
import { useState } from "react";
import Footer from "./Componenti/Footer/Footer";
import BannerCookies from "./Componenti/BannerCookies/BannerCookies";
import LookBook from "./Pagine/LookBook";
import About from "./Pagine/About";
import Pagamento from "./Pagine/Pagamento";
import Resi from "./Pagine/Resi";
function App() {
  const [currentPage, setCurrentPage] = useState("shop");

  return (
    <div>
      <BannerCookies />
      <BrowserRouter>
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <Routes>
          <Route
            path="/"
            element={
              <Home currentPage={currentPage} setCurrentPage={setCurrentPage} />
            }
          />
          <Route
            path="/uomo"
            element={
              <Categorie
                banner={banner_uomo}
                sfondo={sfondo_uomo}
                cat="Uomo"
                titolo="Prodotti maschili"
                category="uomo"
              />
            }
          />
          <Route
            path="/donna"
            element={
              <Categorie
                banner={banner_donna}
                sfondo={sfondo_donna}
                cat="Donna"
                titolo="Prodotti femminili"
                category="donna"
              />
            }
          />

          <Route
            path="/unisex"
            element={
              <Categorie
                banner={banner_unisex}
                sfondo={sfondo_unisex}
                cat="Unisex"
                titolo="Prodotti unisex"
                category="unisex"
              />
            }
          />

          <Route path="/contatti" element={<Contatti />} />
          <Route path="/prodotto" element={<Prodotto />}>
            <Route path=":productId" element={<Prodotto />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/like" element={<Like />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/paginapersonale" element={<PaginaPersonale />}></Route>
          <Route path="/lookbook" element={<LookBook />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/pagamenti-e-spedizioni" element={<Pagamento />}></Route>
          <Route path="/resi" element={<Resi />}></Route>
        </Routes>
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
