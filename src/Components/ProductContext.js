import { createContext } from "react";

import { useState,useEffect } from "react";
const ProductContext = createContext();

export const  ProductProvider =({children})=>{
    const [orange, setOrange] = useState([]);
    
    useEffect(() => {
      fetchdata();
    }, []);
    const fetchdata = async () => {
      const response = await fetch(" https://fakestoreapi.com/products");
      const data = await response.json();
      setOrange(data);
       
    };

       return(
        <ProductContext.Provider value={orange}>
            {children}
        </ProductContext.Provider>
       ) 
}
export default ProductContext