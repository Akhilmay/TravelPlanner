import React, { useState } from "react";
import axios from "axios";

const FlightHotelSearch = () => {
  const [hotelResults, setHotelResults] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  // Function to search flights
  const searchHotels = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3001/api/get/Hoteldetails/');
      const data = await response.json();
      setHotelResults(data);
    } catch (err) {
      setError("Error fetching hotel data");
    } finally {
      setLoading(false);
    }
  };

  

  // Handle the search button click
  const handleSearch = () => {
    searchHotels();
  };

  return (
    <div>
      <h1>Hotel Search Results</h1>
      <ul>
          <li>
            <p>Name: Hôtel Regina Louvre</p>
            <p>Address: 2 Place des Pyramides, Paris</p>
            <p>Price: $482</p>
            <p>Rating: 4.5/5</p>
          </li>
          <li> 
            <p>Name: Hôtel Plaza Athénée </p>
            <p>Address: 25 Avenue Montaigne, Paris</p>
            <p>Price: $1950</p>
            <p>Rating: 4.7/5</p>
          </li>
          <li>
            <p>Name: Le Bristol Paris</p>
            <p>Address: 112 Rue du Faubourg Saint-Honoré, Paris</p>
            <p>Price: $1,881</p>
            <p>Rating: 4.2/5</p>
          </li>
          <li>
            <p>Name: Le Roch Hotel & Spa</p>
            <p>Address: 28 Rue Saint-Roch, Paris</p>
            <p>Price: $596</p>
            <p>Rating: 4.3/5</p>
          </li>
      </ul>
      <button onClick={handleSearch} disabled={loading}>Next</button>
    </div>
  );
};

export default FlightHotelSearch;
