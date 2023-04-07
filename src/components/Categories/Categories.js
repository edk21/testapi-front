import React, { useEffect, useState } from 'react'
import axios from "axios"

const Categories = ({ apiUrl }) => {
    const [categories, setCategories] = useState([]);  

    const getCategories = async () => {
        await axios
          .get(`${apiUrl}/categories`)
          .then((response) => {
            setCategories(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    useEffect(() => {
        getCategories()
      }, []);

  return (
    <div className='center'>
        {categories && <h1>CATEGORIES</h1>}
      {categories && categories.map((p, index) => (
        <React.Fragment key={index}>
        <p>Name: {p.name}</p>
        <h5>subTitle: {p.slug}</h5>
        <p>Products: {p.product_skus.map((item, idx) => (
            <React.Fragment key={idx}>
            <br />
            <span>{idx}: {item}</span>
            </React.Fragment>
        ))}</p>
        </React.Fragment>
      ))}
    </div>
  )
}

export default Categories
