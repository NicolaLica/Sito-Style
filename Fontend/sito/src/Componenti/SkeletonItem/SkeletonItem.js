import React from "react";

import "./SkeletonItem.css";

const Skeletonitem = () => {
  return (
    <div className="skel_cont">
      {" "}
      <div className="skeletro">
        <div className="skel_cerchio"></div>
        <div className="skeletro_foto"></div>
        <div className="skeletro_nome"></div>
        <div className="skeletro_prezzo"></div>
      </div>
      <div className="skeletro">
        <div className="skel_cerchio"></div>
        <div className="skeletro_foto"></div>
        <div className="skeletro_nome"></div>
        <div className="skeletro_prezzo"></div>
      </div>
      <div className="skeletro">
        <div className="skel_cerchio"></div>
        <div className="skeletro_foto"></div>
        <div className="skeletro_nome"></div>
        <div className="skeletro_prezzo"></div>
      </div>
    </div>
  );
};

export default Skeletonitem;
