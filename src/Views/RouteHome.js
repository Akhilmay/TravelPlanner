import React, { useState } from "react";
import axios from "axios";

const FlightHotelSearch = () => {
  const [flightResults, setFlightResults] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);




  // Function to search flights
  const searchFlights = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:3001/api/get/filghtdetails/');
      const data = await response.json();
      setFlightResults(data);
    } catch (err) {
      setError("");
    } finally {
      setLoading(false);
    }
  };


  // Handle the search button click
  const handleSearch = () => {
    searchFlights();
    window.location.href ="./HotelHome"
  };

  return (
    <div>
      <h1>Flight Search Results</h1>
      
      {error && <p style={{ color: "red" }}>{error}</p>}
      
      <ul>
          <li>
            <p>Price: $200</p>
            <p>Airline: American Airlines</p>
            <p>Departure Date: 2024-12-01</p>
          </li>
          <li>
            <p>Price: $220</p>
            <p>Airline: United Airlines</p>
            <p>Departure Date: 2024-12-01</p>
          </li>
          <li>
            <p>Price: $180</p>
            <p>Airline: Delta Airlines</p>
            <p>Departure Date: 2024-12-01</p>
          </li>
          <li>
            <p>Price: $210</p>
            <p>Airline: Spirit Airlines</p>
            <p>Departure Date: 2024-12-01</p>
          </li>
      </ul>

      
      <button onClick={handleSearch} disabled={loading}>Next</button>
      {selectedFlight && (
        <div>
          <h3>Selected Flight:</h3>
          <p>Price: {selectedFlight.price}</p>
          <p>Airline: {selectedFlight.airline}</p>
        </div>
      )}
    </div>
  );
};

export default FlightHotelSearch;
