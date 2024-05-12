import React from "react";

import "./Pagamento.css";

const Pagamento = () => {
  return (
    <div className="cont_pag">
      <div className="fisso_pag"></div>
      <div className="hero_pag">
        <div className="cont_tit_pag">
          <h1>Pagamenti & spedizioni</h1>
          <p></p>
          <p></p>
        </div>
      </div>
      <div className="spazio2"></div>
      <div className="cont_pag_cont">
        <div className="pag_cont">
          <div className="pag_cont_sx">
            <h2>Consegna rapida</h2>
            <p>Consegna a Roma (RM), gratuita per ordini superiori a 500€.</p>
            <p>
              Garantiamo la pianificazione di un intervallo di consegna entro un
              giorno dall'ordine e assicuriamo la consegna entro 1-2 giorni
              lavorativi o in una data specifica richiesta.
            </p>
            <p>
              Il servizio di consegna è attivo dal lunedì al sabato, dalle 10:00
              alle 20:00.
            </p>
            <p>
              Il nostro corriere può trasportare fino a 2 giacche/paia di scarpe
              o fino a 4 impermeabili/zaini/paia di jeans/paia di pantaloni per
              la prova. Eventuali consegne al di là di questi limiti saranno
              soggette a costi aggiuntivi. Il montaggio richiede circa 15
              minuti. Nel caso in cui il montaggio non sia soddisfacente, verrà
              addebitato solo il costo della consegna.
            </p>
          </div>
          <div className="pag_cont_dx">
            <h2>Ritiro in negozio</h2>
            <p>
              La consegna è gratuita e prepagata. Gli ordini vengono completati
              entro le 18:00 del giorno in cui vengono registrati o entro le
              12:00 del giorno successivo.
            </p>
            <p>
              Ti preghiamo di attendere la notifica tramite SMS che conferma la
              prontezza del tuo ordine prima di recarti in negozio.
            </p>
          </div>
        </div>
      </div>
      <div className="spazio2"></div>
      <div className="finestra"></div>
      <div className="spazio2"></div>
    </div>
  );
};

export default Pagamento;
