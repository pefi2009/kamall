import React, { useContext, useState } from "react";

import { useLocation } from "react-router-dom";

const Commodities = () => {
  const location = useLocation();
  const kamal = location.state;
  

  return (
    <div>
      <div className="card">
        {kamal.map((k, index) => {
          return (
            <div className="sib" key={index}>
              <div>
                <img className="brad" src={k.image}></img>
                 
                <p className="title">{k.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Commodities;
