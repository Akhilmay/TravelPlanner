import React, { useState } from 'react';

// Import local images from the src/images folder
import EiffelTower from '../images/EiffelTower.jpeg';
import LouvreMuseum from '../images/LouvreMuseum.jpeg';
import NotreDame from '../images/Notre.jpg';
import BuckinghamPalace from '../images/buckingham-palace.jpg';
import TowerOfLondon from '../images/tower-of-london.jpg';
import BritishMuseum from '../images/british-museum.jpg';
import StatueOfLiberty from '../images/statue-of-liberty.jpg';
import CentralPark from '../images/central-park.jpg';
import TimesSquare from '../images/times-square.jpg';
import ShibuyaCrossing from '../images/shibuya-crossing.jpg';
import TokyoTower from '../images/tokyo-tower.jpg';
import SensojiTemple from '../images/sensoji-temple.jpg';
import SydneyOperaHouse from '../images/sydney-opera-house.jpg';
import BondiBeach from '../images/bondi-beach.jpg';
import HarbourBridge from '../images/harbour-bridge.jpg';

const UserHome = () => {
  const [itineraries, setItineraries] = useState([]);
  const [fromdate, setfromDate] = useState('');
  const [todate, settoDate] = useState('');
  const [location, setLocation] = useState('');
  const [Startlocation, setStartlocation] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  // Function to provide recommended places with local images based on location
  const getRecommendations = (location) => {
    const recommendationsMap = {
      Paris: [
        { name: 'Eiffel Tower', image: EiffelTower },
        { name: 'Louvre Museum', image: LouvreMuseum },
        { name: 'Notre-Dame Cathedral', image: NotreDame }
      ],
      London: [
        { name: 'Buckingham Palace', image: BuckinghamPalace },
        { name: 'Tower of London', image: TowerOfLondon },
        { name: 'British Museum', image: BritishMuseum }
      ],
      NewYork: [
        { name: 'Statue of Liberty', image: StatueOfLiberty },
        { name: 'Central Park', image: CentralPark },
        { name: 'Times Square', image: TimesSquare }
      ],
      Tokyo: [
        { name: 'Shibuya Crossing', image: ShibuyaCrossing },
        { name: 'Tokyo Tower', image: TokyoTower },
        { name: 'Senso-ji Temple', image: SensojiTemple }
      ],
      Sydney: [
        { name: 'Sydney Opera House', image: SydneyOperaHouse },
        { name: 'Bondi Beach', image: BondiBeach },
        { name: 'Harbour Bridge', image: HarbourBridge }
      ]
    };
    return recommendationsMap[location] || [{ name: 'Explore the local attractions!', image: '' }];
  };

  const addItinerary = () => {
    if (fromdate && location) {
      setItineraries([...itineraries, { todate, fromdate, location }]);
      setRecommendations(getRecommendations(location)); // Set recommendations with images
    } else {
      alert('Please fill in both date and location.');
    }
  };

  const handlenext = () => {
    window.location.href = "./routeHome";
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Trip Management</h2>
      
      {/* Form container with top-centered styling */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
        <h4>Trip Start Date</h4><input 
          type="date" 
          value={fromdate} 
          onChange={(e) => setfromDate(e.target.value)} 
          placeholder="Select From Date" 
          style={{ padding: '8px', fontSize: '16px', width: '200px' }}
        />
        <h4>Current Location</h4><input 
          type="text" 
          value={Startlocation} 
          onChange={(e) => setStartlocation(e.target.value)} 
          placeholder="Enter Current Location" 
          style={{ padding: '8px', fontSize: '16px', width: '200px' }}
        />
        <h4>Enter Destination Location</h4><input 
          type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} 
          placeholder="Enter Destination Location" 
          style={{ padding: '8px', fontSize: '16px', width: '200px' }}
        />
        
        <button onClick={addItinerary} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Add Itinerary</button>
      </div>
      
      {/* Itinerary list */}
      <ul style={{ listStyleType: 'none', padding: '0', marginTop: '20px', textAlign: 'center' }}>
        {itineraries.map((trip, index) => (
          <li key={index}>
            <strong>From Date:</strong> {trip.fromdate},<strong>To Date:</strong> {trip.todate}, <strong>Location:</strong> {trip.location}
          </li>
        ))}
      </ul>
      
      {/* Recommendations with horizontal images */}
      {recommendations.length > 0 && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h3>Recommended Places to Visit in {location}</h3>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {recommendations.map((place, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                {place.image && (
                  <img src={place.image} alt={place.name} style={{ width: '150px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} />
                )}
                <p><strong>{place.name}</strong></p>
              </div>
            ))}
          </div>
          <button onClick={handlenext} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>Next</button>
        </div>
      )}
    </div>
  );
};

export default UserHome;
