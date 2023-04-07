import React, { useEffect, useState } from 'react'
import axios from "axios"

const Products = ( { apiUrl }) => {  
    const [productsGet, setProductsGet] = useState([]);  

    const getProducts = async () => {
        await axios
          .post(`${apiUrl}/products`)
          .then((response) => {
            setProductsGet(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    useEffect(() => {
        getProducts()
      }, []);
  return (
    <div className='center'>
        {productsGet && <h1>PRODUCTS GET</h1>}
       {productsGet && productsGet.map((p, index) => (
        <React.Fragment key={index}>
        <h5>Name: {p.name}</h5>
        <p>Description: {p.description}</p>
        <h5>Coordinates</h5>
        <img src={p.thumbnail} alt='' style={{width: "100px"}} />
        </React.Fragment>
      ))}
    </div>
  )
}

export default Products
