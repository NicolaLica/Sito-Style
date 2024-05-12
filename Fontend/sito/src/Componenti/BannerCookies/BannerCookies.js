import React, { useState, useEffect } from "react";
import "./BannerCookies.css";
import Cookies from "js-cookie";

const BannerCookies = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const cookiesAccepted = Cookies.get("cookiesAccepted");
    if (cookiesAccepted === "true") {
      setShowBanner(false);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set("cookiesAccepted", true, { expires: 365 });
    setShowBanner(false);
  };

  const rejectCookies = () => {
    setShowBanner(false);
  };

  return (
    <div>
      {showBanner && (
        <div>
          <div className="sfondo_scuro"> </div>
          <div className="cont_banner_cookies">
            <div className="cookie-banner">
              <p>
                Questo sito web utilizza i cookie per ottimizzare la tua
                esperienza di navigazione e garantire il corretto funzionamento
                delle sue funzionalità. Per continuare a utilizzare il sito, ti
                invitiamo gentilmente ad accettare l'utilizzo dei cookie.
              </p>
              <div className="cont_bott_banner">
                <button onClick={acceptCookies}>Accetta</button>
                <button onClick={rejectCookies}>Rifiuta</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerCookies;
