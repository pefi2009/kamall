import React, { useContext, useState } from "react";
import ProductContext from "./ProductContext";
import { useNavigate } from "react-router-dom";
import Test3 from "./Test3";

const Admin = () => {
 
  const [product, setProduct] = useState([]);
  
  const [image, setImage] = useState();
  const [title, setTitle] = useState();

  const navigate = useNavigate();
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
   }

  const choose = () => {
    const sib = [...product];
    const form = { title, image };
    sib.push(form);
    setTitle("");
    setProduct(sib);
  };
 
  console.log(product)
 const redirectToProduct = () => {
    navigate("/", { state: product });
  };
 
 return (
    <div>
      <button onClick={redirectToProduct}>basket{product.length}</button>

      <div className="card">
         
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
         <div>
      <input type="file" onChange={onImageChange} className="filetype" />
      <img width='300 px' alt="preview image" src={image}/>
    </div>
        <button onClick={choose}>Add</button>
      </div>
    </div>
  );
};

export default Admin;