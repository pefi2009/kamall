/* import React, { useContext, useState } from "react";
import ProductContext from "./ProductContext";
import { useNavigate } from "react-router-dom";

const Test5 = () => {
  const orange = useContext(ProductContext);
  const [product, setProduct] = useState(orange);
 
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState();
  const [text, setText] = useState();

  const navigate = useNavigate();

  const buy = () => {
    const sib = [...product];
    const form = { name, selectedImage };
    sib.push(form);
    setName("");
    setProduct(sib);
  };

  const redirectToProduct = () => {
    navigate("/test8", { state: product });
  };

  return (
    <div>
      <button onClick={redirectToProduct}>baseket{product.length}</button>

      <div className="card">
        {selectedImage && (
          <div>
            <img
              alt="not found"
              width="250px"
              src={URL.createObjectURL(selectedImage)}
            />
            <br />
            <button onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="file"
          name="myImage"
          onChange={(event) => {
            setSelectedImage(event.target.files[0]);
          }}
        />
        <button onClick={buy}>Buy</button>
      </div>
    </div>
  );
};

export default Test5;
 */