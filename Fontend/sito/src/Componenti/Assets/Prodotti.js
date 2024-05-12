import borsa from "./Immagini/Immagini Prodotti/Borsatondatrasparente.webp";
import gonna from "./Immagini/Immagini Prodotti/Gonnacontasche.webp";
import felpa from "./Immagini/Immagini Prodotti/felpagrigiaebiancauomo.webp";
import giacca from "./Immagini/Immagini Prodotti/giacconebiancouomoluci.webp";
import anti from "./Immagini/Immagini Prodotti/antipioggiabianco.jpg";
import zainonero from "./Immagini/Immagini Prodotti/zainonero.jpg";
import poncho from "./Immagini/Immagini Prodotti/Ponchoverde.jpg";
import pantalone from "./Immagini/Immagini Prodotti/jeansstrappatibianchidonna.webp";
import zainoverde from "./Immagini/Immagini Prodotti/zainoverde.jpg";
import felparossa from "./Immagini/Immagini Prodotti/FelpaRossadonna.webp";
import vestito from "./Immagini/Immagini Prodotti/Vestito Giallo quadretti.webp";
import giaccarossa from "./Immagini/Immagini Prodotti/giacca Rossa tech donna.webp";
import pnatvitaalta from "./Immagini/Immagini Prodotti/jeans a vita alta bianchi donna.jpg";
import felpaspalline from "./Immagini/Immagini Prodotti/felpa moderna spalline donna.webp";
import gonnanera from "./Immagini/Immagini Prodotti/vestito nero a balze donna.jpg";
import felpablu from "./Immagini/Immagini Prodotti/felpa blu moderna uomo.webp";
import flepablu2 from "./Immagini/Immagini Prodotti/felpa blu uomo plastica.jpg";
import felpabeige from "./Immagini/Immagini Prodotti/felpa beige e bianca uomo.webp";
import panttasche from "./Immagini/Immagini Prodotti/pantaloni con tasche uomo.webp";
import pantstrap from "./Immagini/Immagini Prodotti/pantaloni strappati chiari uomo.webp";
import giaccatech from "./Immagini/Immagini Prodotti/giaccone uomo tech.jpg";
import giaccauomo from "./Immagini/Immagini Prodotti/giacconeuomojeans .jpg";
import ocrossi from "./Immagini/Immagini Prodotti/occhiali rossi.jpg";
import ocbianchi from "./Immagini/Immagini Prodotti/occhiali bianchi.jpg";
import capbianco from "./Immagini/Immagini Prodotti/cappello bianco e nero.jpg";
import porta from "./Immagini/Immagini Prodotti/portachiavi.jpg";
import porta2 from "./Immagini/Immagini Prodotti/portachiavi giallo.webp";
import stivali from "./Immagini/Immagini Prodotti/stivali plastica bianchi.jpg";
import capverde from "./Immagini/Immagini Prodotti/cappello verde.webp";
import calzi from "./Immagini/Immagini Prodotti/calzini neri.webp";
import calzi2 from "./Immagini/Immagini Prodotti/calzini rossi.jpg";
import zainoar from "./Immagini/Immagini Prodotti/zaino argentato.webp";
import zainogia from "./Immagini/Immagini Prodotti/zaino giallo.webp";
import zaro from "./Immagini/Immagini Prodotti/zaino rosso.jpg";
import zaba from "./Immagini/Immagini Prodotti/zaino bianco.jpg";
import cap from "./Immagini/Immagini Prodotti/cappotto bianco donna tech.jpg";
import cap2 from "./Immagini/Immagini Prodotti/cappotto argentato donna.webp";

let prodotti = [
  {
    id: 1,
    nome: "Poncho Style Green",
    prezzo: 49.99,
    materiale: "Poliestere",
    descrizione:
      "Poncho in poliestere verde con design elegante e funzionale, ideale per proteggerti dalle intemperie durante le tue avventure all'aperto.",
    categoria: "donna",
    immagine: poncho,
    tipo: "felpa",
    taglie: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    nome: "Felpa Style Red",
    prezzo: 34.99,
    materiale: "Cotone",
    descrizione:
      "Felpa rossa in morbido cotone, caratterizzata da un taglio moderno e dettagli accattivanti, perfetta per un look casual ma curato.",
    categoria: "donna",
    immagine: felparossa,
    tipo: "felpa",
    taglie: ["S", "M", "L", "XL"],
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
    taglie: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    nome: "Vestito a quadretti Style Yellow",
    prezzo: 89.99,
    materiale: "Seta",
    descrizione:
      "Vestito in seta dal design a quadretti, con taglio classico e dettagli raffinati, perfetto per un'eleganza retrò.",
    categoria: "donna",
    immagine: vestito,
    tipo: "gonna",
    taglie: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    nome: "Giacca tech Style Red",
    prezzo: 59.99,
    materiale: "Poliestere",
    descrizione:
      "Giacca tecnica rossa in poliestere, dotata di tecnologie innovative per garantire protezione e comfort in qualsiasi condizione climatica.",
    categoria: "donna",
    immagine: giaccarossa,
    tipo: "giacca",

    taglie: ["S", "M", "L", "XL"],
  },
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
    taglie: ["Taglia unica"],
  },
  {
    id: 7,
    nome: "Jeans Ripped Style White",
    prezzo: 29.99,
    materiale: "Denim",
    descrizione:
      "Jeans bianchi in denim strappati, caratterizzati da un taglio trendy e dettagli grintosi, perfetti per un look urban chic.",
    categoria: "donna",
    immagine: pantalone,
    tipo: "pantalone",
    taglie: ["38", "40", "42", "44", "46"],
  },
  {
    id: 8,
    nome: "Jeans vita alta Style White",
    prezzo: 29.99,
    materiale: "Denim",
    descrizione:
      "Jeans bianchi a vita alta in denim di alta qualità, con vestibilità confortevole e dettagli di tendenza, ideali per un look versatile.",
    categoria: "donna",
    immagine: pnatvitaalta,
    tipo: "pantalone",
    taglie: ["38", "40", "42", "44", "46"],
  },
  {
    id: 9,
    nome: "Felpa soldato Style White",
    prezzo: 59.99,
    materiale: "Poliestere",
    descrizione:
      "Felpa bianca in poliestere ispirata al mondo militare, con dettagli tecnici e stile aggressivo, perfetta per un look streetwear.",
    categoria: "donna",
    immagine: felpaspalline,
    tipo: "felpa",
    taglie: ["S", "M", "L", "XL"],
  },
  {
    id: 10,
    nome: "Gonna con balze Style Black",
    prezzo: 69.99,
    materiale: "Seta",
    descrizione:
      "Gonna nera in seta con balze, dal design sofisticato e femminile, ideale per un look elegante e glamour.",
    categoria: "donna",
    immagine: gonnanera,
    tipo: "gonna",
    taglie: ["S", "M", "L", "XL"],
  },
  {
    id: 11,
    nome: "Felpa Style Blue",
    prezzo: 44.99,
    materiale: "Cotone",
    descrizione:
      "Felpa blu in morbido cotone, con design versatile e confortevole, perfetta per un look casual.",
    categoria: "uomo",
    immagine: felpablu,
    tipo: "felpa",
    taglie: ["S", "M", "L", "XL"],
  },
  {
    id: 12,
    nome: "Felpa moderna Style Blue",
    prezzo: 49.99,
    materiale: "Poliestere",
    descrizione:
      "Felpa blu in poliestere con taglio moderno e dettagli di tendenza, ideale per un look urbano e dinamico.",
    categoria: "uomo",
    immagine: flepablu2,
    tipo: "felpa",
    taglie: ["S", "M", "L", "XL"],
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
    taglie: ["S", "M", "L", "XL"],
  },
  {
    id: 14,
    nome: "Felpa con cappuccio Style Grey",
    prezzo: 29.99,
    materiale: "Cotone",
    descrizione:
      "Felpa grigia con cappuccio in morbido cotone, perfetta per un look casual e confortevole.",
    categoria: "uomo",
    immagine: felpabeige,
    tipo: "felpa",
    taglie: ["S", "M", "L", "XL"],
  },
  {
    id: 15,
    nome: "Cargo jeans Style Blue",
    prezzo: 19.99,
    materiale: "Denim",
    descrizione:
      "Jeans blu in denim con tasche cargo, caratterizzati da un design funzionale e dettagli urban chic, ideali per un look casual e dinamico.",
    categoria: "uomo",
    immagine: panttasche,
    tipo: "pantalone",
    taglie: ["38", "40", "42", "44", "46"],
  },
  {
    id: 16,
    nome: "Jeans Tear Style Blue",
    prezzo: 19.99,
    materiale: "Denim",
    descrizione:
      "Jeans blu in denim dal look vintage con strappi e abrasioni, perfetti per un look grintoso e di tendenza.",
    categoria: "uomo",
    immagine: pantstrap,
    tipo: "pantalone",
    taglie: ["38", "40", "42", "44", "46"],
  },
  {
    id: 17,
    nome: "Giaccone cargo Style Acquamarine",
    prezzo: 99.99,
    materiale: "Tecnico",
    descrizione:
      "Giaccone tecnico color acquamarina con tasche cargo e dettagli funzionali, ideale per affrontare le avversità climatiche con stile.",
    categoria: "uomo",
    immagine: giaccatech,
    tipo: "giacca",
    taglie: ["S", "M", "L", "XL"],
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
    taglie: ["S", "M", "L", "XL"],
  },
  {
    id: 19,
    nome: "Giaccone jeans Style blue",
    prezzo: 89.99,
    materiale: "Denim",
    descrizione:
      "Giaccone in denim blu con taglio moderno e dettagli di tendenza, perfetto per un look casual e contemporaneo.",
    categoria: "uomo",
    immagine: giaccauomo,
    tipo: "giacca",
    taglie: ["S", "M", "L", "XL"],
  },
  {
    id: 20,
    nome: "Occhiali Style Red",
    prezzo: 29.99,
    materiale: "Plastica",
    descrizione:
      "Occhiali da sole rossi in plastica, con design moderno e lenti polarizzate, perfetti per proteggere gli occhi con stile.",
    categoria: "unisex",
    immagine: ocrossi,
    tipo: "occhiali",
    taglie: ["Taglia unica"],
  },
  {
    id: 21,
    nome: "Occhiali Style White",
    prezzo: 29.99,
    materiale: "Plastica",
    descrizione:
      "Occhiali da sole bianchi in plastica, con montatura leggera e lenti di alta qualità, perfetti per un look estivo e alla moda.",
    categoria: "unisex",
    immagine: ocbianchi,
    tipo: "occhiali",
    taglie: ["Taglia unica"],
  },
  {
    id: 22,
    nome: "Cappello Style White&Black",
    prezzo: 9.99,
    materiale: "Poliestere",
    descrizione:
      "Cappello bianco e nero in poliestere, con design sportivo e visiera curva, perfetto per completare il tuo look streetwear.",
    categoria: "unisex",
    immagine: capbianco,
    tipo: "cappello",
    taglie: ["Taglia unica"],
  },
  {
    id: 23,
    nome: "Portachiavi cubo Style Transparent",
    prezzo: 4.99,
    materiale: "Plastica",
    descrizione:
      "Portachiavi trasparente a forma di cubo in plastica, con design minimalista e resistente, perfetto per tenere al sicuro le tue chiavi con stile.",
    categoria: "unisex",
    immagine: porta,
    tipo: "portachiavi",
    taglie: ["Taglia unica"],
  },
  {
    id: 24,
    nome: "Portachiavi Style Yellow",
    prezzo: 4.99,
    materiale: "Plastica",
    descrizione:
      "Portachiavi giallo in plastica, con design moderno e resistente, perfetto per aggiungere un tocco di colore ai tuoi accessori.",
    categoria: "unisex",
    immagine: porta2,
    tipo: "portachiavi",
    taglie: ["Taglia unica"],
  },
  {
    id: 25,
    nome: "Stivali Style White",
    prezzo: 44.99,
    materiale: "Plastica",
    descrizione:
      "Stivali bianchi in plastica, con design minimalista e suola antiscivolo, perfetti per un look urbano e contemporaneo.",
    categoria: "donna",
    immagine: stivali,
    tipo: "calzature",
    taglie: ["38", "40", "42", "44", "46"],
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
    taglie: ["S", "M", "L", "XL"],
  },
  {
    id: 27,
    nome: "Cappello Style Green",
    prezzo: 14.99,
    materiale: "Poliestere",
    descrizione:
      "Cappello verde in poliestere, con design classico e visiera curva, perfetto per proteggerti dal sole con stile.",
    categoria: "unisex",
    immagine: capverde,
    tipo: "cappello",
    taglie: ["Taglia unica"],
  },
  {
    id: 28,
    nome: "Calzini Style Black",
    prezzo: 4.99,
    materiale: "Cotone",
    descrizione:
      "Calzini neri in morbido cotone, con design confortevole e resistente, perfetti per un comfort quotidiano.",
    categoria: "unisex",
    immagine: calzi,
    tipo: "calzature",
    taglie: ["38", "40", "42", "44", "46"],
  },
  {
    id: 29,
    nome: "Calzini Style Red",
    prezzo: 4.99,
    materiale: "Cotone",
    descrizione:
      "Calzini rossi in cotone elasticizzato, con dettagli moderni e vestibilità confortevole, perfetti per un look sportivo e alla moda.",
    categoria: "unisex",
    immagine: calzi2,
    tipo: "calzature",
    taglie: ["38", "40", "42", "44", "46"],
  },
  {
    id: 30,
    nome: "Zaino Style Silver",
    prezzo: 39.99,
    materiale: "Plastica",
    descrizione:
      "Zaino argento in plastica, con design ergonomico e tasche multiple, perfetto per un utilizzo quotidiano e per viaggiare con stile.",
    categoria: "unisex",
    immagine: zainoar,
    tipo: "borsa",
    taglie: ["Taglia unica"],
  },
  {
    id: 31,
    nome: "Zaino Style Yellow",
    prezzo: 49.99,
    materiale: "Plastica",
    descrizione:
      "Zaino giallo in plastica resistente, con ampia capacità di carico e dettagli funzionali, perfetto per lo studio e l'avventura.",
    categoria: "unisex",
    immagine: zainogia,
    tipo: "borsa",
    taglie: ["Taglia unica"],
  },
  {
    id: 32,
    nome: "Zaino Style Red",
    prezzo: 49.99,
    materiale: "Plastica",
    descrizione:
      "Zaino rosso in plastica leggera e resistente, con design moderno e compartimenti organizzati, perfetto per un look dinamico e funzionale.",
    categoria: "unisex",
    immagine: zaro,
    tipo: "borsa",
    taglie: ["Taglia unica"],
  },
  {
    id: 33,
    nome: "Zaino Style Green",
    prezzo: 49.99,
    materiale: "Plastica",
    descrizione:
      "Zaino verde in plastica riciclata, con design ecologico e confortevole, perfetto per un'impronta sostenibile nel tuo stile di vita attivo.",
    categoria: "unisex",
    immagine: zainoverde,
    tipo: "borsa",
    taglie: ["Taglia unica"],
  },
  {
    id: 34,
    nome: "Zaino Style Black",
    prezzo: 49.99,
    materiale: "Pelle",
    descrizione:
      "Zaino nero in pelle di alta qualità, con design elegante e dettagli raffinati, perfetto per un look sofisticato e urbano.",
    categoria: "unisex",
    immagine: zainonero,
    tipo: "borsa",
    taglie: ["Taglia unica"],
  },
  {
    id: 35,
    nome: "Zaino Style White",
    prezzo: 39.99,
    materiale: "Plastica",
    descrizione:
      "Zaino bianco in plastica resistente e leggera, con design minimalista e spazioso, perfetto per l'utilizzo quotidiano e per viaggiare.",
    categoria: "unisex",
    immagine: zaba,
    tipo: "borsa",
    taglie: ["Taglia unica"],
  },
  {
    id: 36,
    nome: "Cappotto Tesch Style White",
    prezzo: 89.99,
    materiale: "Tecnico",
    descrizione:
      "Cappotto tecnico bianco con design minimalista e dettagli funzionali, perfetto per affrontare le giornate fredde con stile e comfort.",
    categoria: "donna",
    immagine: cap,
    tipo: "giacca",
    taglie: ["S", "M", "L", "XL"],
  },
  {
    id: 37,
    nome: "Cappotto Style Silver",
    prezzo: 99.99,
    materiale: "Tecnico",
    descrizione:
      "Cappotto tecnico argento con imbottitura termica e dettagli tecnici, ideale per proteggerti dal freddo senza rinunciare allo stile.",
    categoria: "donna",
    immagine: cap2,
    tipo: "giacca",
    taglie: ["S", "M", "L", "XL"],
  },
];

export default prodotti;
