import React from "react";
import "./Home.css";
import { MdArrowDownward } from "react-icons/md";
import NuoviArrivi from "../Componenti/Nuovi Arrivi/NuoviArrivi";
import { Link } from "react-router-dom";
import Bestseller from "../Componenti/Bestseller/Bestseller";

const Home = ({ currentPage, setCurrentPage }) => {
  return (
    <div>
      <div className="hero">
        <div className="link">
          <p></p>
          <p>
            <MdArrowDownward className="freccia" />
            <br />
            concept <br /> store
          </p>
        </div>
        <div className="titolo">
          <p>STYLE</p>
          <p></p>
        </div>
      </div>
      <div className="spazio"></div>
      <NuoviArrivi />
      <div className="spazio"></div>
      <div className="cat">
        <Link
          className="donna"
          to="/donna"
          onClick={() => {
            setCurrentPage("donna");
            window.scrollTo(0, 0);
          }}
        >
          <div>
            <div className="porta">
              <p>Donna</p> <MdArrowDownward className="freccetta" />
            </div>
          </div>
        </Link>
        <Link
          className="uomo"
          to="/uomo"
          onClick={() => {
            setCurrentPage("uomo");
            window.scrollTo(0, 0);
          }}
        >
          <div>
            <div className="porta">
              <p>Uomo</p> <MdArrowDownward className="freccetta" />
            </div>
          </div>
        </Link>
      </div>
      <Link
        className="cat2"
        to="/unisex"
        onClick={() => {
          setCurrentPage("unisex");
          window.scrollTo(0, 0);
        }}
      >
        <div>
          <div className="porta">
            <p>Unisex</p> <MdArrowDownward className="freccetta" />
          </div>
        </div>
      </Link>
      <div className="cont_ban">
        <div className="banner">
          <div className="cont_c">
            <div className="cerchio">
              <MdArrowDownward />
            </div>
          </div>
          <div className="cont_tes">
            <div className="tit">
              <p>
                I nostri abiti rappresentano l'epitome dell'innovazione, fondono
                sapientemente l'estetica della moda con le più avanzate
                tecnologie.
              </p>
            </div>
            <div>
              <h2 style={{ fontSize: "1.8rem" }}>Principio</h2>
            </div>
            <div className="test">
              <p>
                Siamo impegnati nella creazione di capi d'abbigliamento che
                esprimono individualità e stile attraverso l'uso di tecnologie
                all'avanguardia e materiali innovativi.
              </p>
              <p>
                Ideiamo e combiniamo audaci e unici modelli che mettono in
                risalto l'individualità e consentono alle persone di esprimere
                la propria personalità.
              </p>
              <p>
                Utilizziamo esclusivamente le tecnologie più avanzate e i
                materiali più innovativi per garantire che i nostri prodotti non
                solo abbiano un aspetto sorprendente, ma siano altrettanto belli
                quanto sembrano.
              </p>
              <p>
                Prestiamo grande attenzione ai dettagli e alla qualità per
                assicurare che i nostri clienti ricevano solo il meglio."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="publicità">
        <div className="p1">
          <p>-30%</p>
          <p>
            Visita la sezione unisex <br />
            ed usa il codice BAGS
          </p>
        </div>
        <div className="p2">
          <Link
            to="/unisex"
            onClick={() => {
              setCurrentPage("/unisex");
              window.scrollTo(0, 0);
            }}
          >
            <div className="p22">
              <MdArrowDownward className="freccetta_pub" />
              <p>Vai alla sezione</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="spazio"></div>
      <Bestseller />
      <div className="spazio"></div>
      <div className="banner2">
        <div>
          <p>//</p>
        </div>
        <div>
          <p>
            Cerchiamo di ideare e combinare design audaci e unici che esaltano
            l'individualità di una persona e l'aiutano ad esprimere la propria
            unicità.
          </p>
        </div>
        <div>
          <p>STYLE STORE</p>
        </div>
      </div>

      <div className="grid1">
        <div className="g1"></div>
        <div>
          <h2>Chi siamo</h2>
          <p>
            Siamo un team appassionato impegnato nella creazione di
            abbigliamento futuristico concettuale di alta qualità. La nostra
            missione è aiutare le persone a esprimere la propria individualità e
            stile attraverso design unici e audaci.
          </p>
          <p>
            Utilizziamo esclusivamente tecnologie avanzate e materiali
            innovativi per produrre articoli che non solo stupiscono
            esteticamente, ma sono altrettanto belli nella realtà. La nostra
            attenzione ai dettagli e alla qualità ci consente di garantire ai
            nostri clienti solo il meglio. Grazie per averci scelto!
          </p>
        </div>
      </div>
      <div className="grid2">
        <div className="g2">
          <div className="g22"></div>
          <div>
            <h2>Ispirazione</h2>
            <p>
              Siamo stati ispirati da una vasta gamma di traguardi tecnologici e
              scientifici, oltre che dall'arte e dalla cultura. Attraverso lo
              studio delle tendenze e delle proiezioni future in molteplici
              settori della vita, abbiamo plasmato capi di abbigliamento che
              riflettono la nostra visione del futuro.
            </p>
            <p>
              Analizzando anche le questioni ambientali e sociali, abbiamo
              sviluppato prodotti che non solo esibiscono un aspetto
              sorprendente, ma che contribuiscono anche positivamente alla
              società e all'ambiente.
            </p>
          </div>
        </div>
        <div className="g23">
          <Link to="/lookbook" onClick={() => window.scrollTo(0, 0)}>
            <div
              onClick={() => {
                setCurrentPage("/lookbook");
              }}
              className="g23_l"
            >
              <MdArrowDownward className="freccetta_pub2" />
              <p>Look Book</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
