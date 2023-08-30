import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const FlightSearchComponent = () => {
  const [username, setUsername] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/flight/search/${username}`);
      
      // Assuming the response.data contains an array of flight search results
      setSearchResults(response.data);
      setSearched(true);

      if (response.status === 200 && response.data.length > 0) {
        // Flight(s) found, alert with flight details
        const flightDetails = response.data.map(flight => (
          `Flight Found:\nUsername: ${flight.username}\nFrom: ${flight.departureCountry}\nTo: ${flight.arrivalCountry}\nDeparture Date: ${flight.departureDate}`
        )).join('\n\n'); // Join multiple flight details with double line breaks

        alert(flightDetails);
      } else {
        alert(`No flights found for: ${username}`);
      }
    } catch (error) {
      console.error("Error while searching flights:", error);
    }
  
    }
  return (
    <div className="d-flex  justify-content-center  mt-3 ">
      <div className="d-flex ">
    
        <div class="search-box">
          <button onClick={handleSearch} class="btn-search">
            <i class="fas fa fa-search" style={{ fontSize: "24px" }}></i>
          </button>
          <input
            type="text"
            class="input-search"
            placeholder="Search Flights..."
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default FlightSearchComponent;
