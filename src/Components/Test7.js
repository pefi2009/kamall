/* import React from 'react'
import { useState } from 'react'

const Test7 = () => {
  const [image, setImage] = useState(null)

const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImage(URL.createObjectURL(event.target.files[0]));
 }
}
  return (
    <div>
      <input type="file" onChange={onImageChange} className="filetype" />
      <img width='300 px' alt="preview image" src={image}/>
    </div>
  )
}

export default Test7 */