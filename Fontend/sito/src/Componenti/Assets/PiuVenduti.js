import borsa from "./Immagini/Immagini Prodotti/Borsatondatrasparente.webp";
import gonna from "./Immagini/Immagini Prodotti/Gonnacontasche.webp";
import felpa from "./Immagini/Immagini Prodotti/felpagrigiaebiancauomo.webp";
import giacca from "./Immagini/Immagini Prodotti/giacconebiancouomoluci.webp";
import anti from "./Immagini/Immagini Prodotti/antipioggiabianco.jpg";
import zaino from "./Immagini/Immagini Prodotti/zainonero.jpg";

let venduti = [
  {
    id: 6,
    nome: "Borsa rigida Style Transparent",
    prezzo: 34.99,
    materiale: "Plastica",
    descrizione:
      "Borsa trasparente in plastica con design moderno e minimalista, ideale per un look contemporaneo e audace.",
    categoria: "unisex",
    immagine: borsa,
    tipo: "borsa",
  },
  {
    id: 3,
    nome: "Gonna cargo Style White",
    prezzo: 29.99,
    materiale: "Tecnico",
    descrizione:
      "Gonna tecnica bianca con tasche cargo e dettagli funzionali, ideale per un look urbano e dinamico.",
    categoria: "donna",
    immagine: gonna,
    tipo: "gonna",
  },
  {
    id: 13,
    nome: "Felpa Style Grey",
    prezzo: 39.99,
    materiale: "Tecnico",
    descrizione:
      "Felpa grigia in tessuto tecnico, caratterizzata da performance elevate e design minimalista, perfetta per uno stile sportivo.",
    categoria: "uomo",
    immagine: felpa,
    tipo: "felpa",
  },
  {
    id: 18,
    nome: "Giaccone anti-pioggia Style White",
    prezzo: 99.99,
    materiale: "Tecnico",
    descrizione:
      "Giaccone tecnico bianco antipioggia, dotato di membrana impermeabile e dettagli tecnici, perfetto per proteggerti durante le giornate piovose.",
    categoria: "uomo",
    immagine: giacca,
    tipo: "giacca",
  },
  {
    id: 26,
    nome: "Giacca Tech Style White",
    prezzo: 74.99,
    materiale: "Tecnico",
    descrizione:
      "Giacca tecnica bianca in tessuto tecnico, con design aerodinamico e dettagli funzionali, perfetta per attività all'aperto e sportive.",
    categoria: "uomo",
    immagine: anti,
    tipo: "giacca",
  },
  {
    id: 34,
    nome: "Zaino Style Black",
    prezzo: 49.99,
    materiale: "Pelle",
    descrizione:
      "Zaino nero in pelle di alta qualità, con design elegante e dettagli raffinati, perfetto per un look sofisticato e urbano.",
    categoria: "unisex",
    immagine: zaino,
    tipo: "borsa",
  },
];

export default venduti;
