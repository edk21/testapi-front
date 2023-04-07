import React, { useEffect, useState } from 'react'
import axios from "axios"
import Products from '../Products/Products';

const apiUrl = "https://test-api-ckcd.onrender.com"

const Home = () => {
    // const [locations, setLocations] = useState([]);  
    // const [locationsHubs, setLocationsHubs] = useState([]);  
    // const [entrepots, setEntrepots] = useState([]);  
    // const [categories, setCategories] = useState([]);  
    // const [categoriesSlug, setCategoriesSlug] = useState([]);  
    // const [products, setProducts] = useState([]);  
    // const [productSearch, setProductSearch] = useState([]);  
    // console.log("productsPost: ", products)

    // const postProducts = async () => {
    //     await axios
    //       .post('http://localhost:5001/products')
    //       .then((response) => {
    //         setProducts(response.data);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
    // const getProductSearch = async () => {
    //     await axios
    //       .get('http://localhost:5001/products/search?q=pates&page_limit=1')
    //       .then((response) => {
    //         setProductSearch(response.data.results);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
    // const getLocations = async () => {
    //     await axios
    //       .get('http://localhost:5001/locations')
    //       .then((response) => {
    //         setLocations(response.data);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
    // const getLocationsHubs = async () => {
    //     await axios
    //       .get('http://localhost:5001/locations/hubs')
    //       .then((response) => {
    //         setLocationsHubs(response.data);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
    // const getEntrepots = async () => {
    //     await axios
    //       .get('http://localhost:5001/locations/hubs')
    //       .then((response) => {
    //         setEntrepots(response.data);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
    // const getCategories = async () => {
    //     await axios
    //       .get('http://localhost:5001/categories')
    //       .then((response) => {
    //         setCategories(response.data);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
    // const getCategoriesSlug = async () => {
    //     await axios
    //       .get('http://localhost:5001/categories/spiritueux-rhums')
    //       .then((response) => {
    //         setCategoriesSlug(response.data);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    // }
  return (
    <>
    {/*<div>
        {products && <h1>PRODUCTS</h1>}
         {products} 
       {products && products.map(p => (
        <>
        <h5>{p.title}</h5>
        <p>{p.subtitle}</p>
        <h5>Coordinates</h5>
        <span>Latitude: {p.coordinates.latitude} and longitude: {p.coordinates.longitude} </span>
        </>
      ))} 
    </div>*/}
    {/* <div>
        {productSearch && <h1>PRODUCTS SEARCH</h1>}
        {productSearch.map((item, index) => (
            <React.Fragment key={index}>
            <h6>Name: {item.name}</h6>
            <p>Description: {item.description}</p>
            </React.Fragment>
        ))}
    </div>
    <div>
        {locations && <h1>LOCATIONS</h1>}
      {locations && locations.map((p, index) => (
        <React.Fragment key={index}>
        <h5>{p.title}</h5>
        <p>{p.subtitle}</p>
        <h5>Coordinates</h5>
        <span>Latitude: {p.coordinates.latitude} and longitude: {p.coordinates.longitude} </span>
        </React.Fragment>
      ))}
    </div>
    <div>
        {locationsHubs && <h1>LOCATIONS HUBS</h1>}
      {locationsHubs && locationsHubs.map((p, index) => (
        <React.Fragment key={index}>
        <p>{p.subtitle}</p>
        <h5>Coordinates</h5>
        <span>Latitude: {p.coordinates.latitude} and longitude: {p.coordinates.longitude} </span>
        </React.Fragment>
      ))}
    </div>
    <div>
        {entrepots && <h1>ENTREPOTS</h1>}
      {entrepots && entrepots.map((p, index) => (
        <React.Fragment key={index}>
        <p>{p.subtitle}</p>
        <h5>Coordinates</h5>
        <span>Latitude: {p.coordinates.latitude} and longitude: {p.coordinates.longitude} </span>
        </React.Fragment>
      ))}
    </div>
    <div>
        {categories && <h1>CATEGORIES</h1>}
      {categories && categories.map((p, index) => (
        <React.Fragment key={index}>
        <p>Name: {p.name}</p>
        <h5>subTitle: {p.slug}</h5>
        <p>Products: {p.product_skus.map((item, index) => (
            <>
            <br />
            <span>{index}: {item}</span>
            </>
        ))}</p>
        </React.Fragment>
      ))}
    </div>
    <div>
        {categoriesSlug && <h1>CATEGORIES SLUG</h1>}
      {categoriesSlug &&
        <>
        <p>Name: {categoriesSlug.name}</p>
        <h5>subTitle: {categoriesSlug.slug}</h5>
        <p>Products: {categoriesSlug.product_skus}</p>
        </>
      }
    </div> */}
    </>
  )
}

export default Home
