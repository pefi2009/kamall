/* import React, { useState } from "react";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

   if (selectedImage){
    
  <div>
  <h1>Upload and Display Image usign React Hook's</h1>

  { 
    <div>
      <img
        alt="not found"
        width={"250px"}
        src={URL.createObjectURL(selectedImage)}
      />
      <br />
      <button onClick={() => setSelectedImage(null)}>Remove</button>
    </div>
   }
  <input
    type="file"
    name="myImage"
    onChange={(event) => {
      setSelectedImage(event.target.files[0]);
    }}
  />
</div>

}

  
  return (
      {selectedImage}
  )
};

export default UploadAndDisplayImage;
 */