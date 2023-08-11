/* 


import React, { useContext, useState } from "react";

import { useLocation } from "react-router-dom";

const AdminProduct = () => {
 const [selectedImage, setSelectedImage] = useState(null);
  const location = useLocation();
  const data = location.state;
 

  return (
    <div>
      <div className="card">
        {data.map((k, index) => {
          
          return (
            <div className="sib" key={index}>
              <div>
                <img className="brad" src={URL.createObjectURL(k.selectedImage)}></img>
                <p className="title">{k.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminProduct;
 */