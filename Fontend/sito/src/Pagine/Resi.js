import React from "react";

import "./Resi.css";

const Resi = () => {
  return (
    <div className="cont_pag">
      <div className="resi_pag">
        <div className="cont_tit_pag">
          <h1>Restituzioni</h1>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
      <div className="spazio"></div>
      <div className="pag_cont">
        <div className="pag_cont_sx">
          <h2>Politica di reso</h2>
          <p>Invieremo un nuovo prodotto o procederemo con il rimborso se:</p>
          <ul className="elenco">
            <li> - il prodotto è inutilizzato</li>
            <li>- è stato acquistato dal sito ufficiale</li>
            <li>- sono trascorsi fino a 30 giorni dalla ricezione</li>
          </ul>
          <p>
            Le spese di spedizione fino al magazzino saranno a carico
            dell'acquirente.
          </p>
          <div>
            <p className="bordo_sotto">
              Puoi restituire il tuo ordine presso i nostri negozi.
            </p>
            <p>
              Per la registrazione, è necessaria una ricevuta elettronica
              insieme ai tag.
            </p>
            <p>
              Per effettuare la sostituzione, è richiesta la restituzione
              dell'ordine e il pagamento del nuovo prodotto direttamente in
              negozio.
            </p>
          </div>
        </div>
        <div className="pag_cont_dx">
          <h2>Restituzione dei fondi</h2>
          <p>
            Se il pagamento è stato completato online o al momento della
            consegna, il rimborso sarà accreditato sulla carta utilizzata per il
            pagamento entro due settimane dalla ricezione e dalla verifica della
            merce. Qualsiasi modifica dei dettagli dovrà essere comunicata
            separatamente.
          </p>
          <p>
            Nel caso di pagamenti in contanti, il rimborso sarà effettuato
            esclusivamente presso il nostro negozio fisico, previa presentazione
            della ricevuta d'acquisto.
          </p>
        </div>
      </div>
      <div className="spazio"></div>
    </div>
  );
};

export default Resi;
