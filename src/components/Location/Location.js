import React, { useEffect, useState } from 'react'
import axios from "axios"

const Location = ({ apiUrl }) => {  
    const [locations, setLocations] = useState([]); 

    const getLocations = async () => {
        await axios
          .get(`${apiUrl}/locations`)
          .then((response) => {
            setLocations(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    useEffect(() => {
        getLocations()
      }, []);
  return (
    <div className='center'>
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
  )
}

export default Location
