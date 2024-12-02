import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import 'leaflet-defaulticon-compatibility'; // Ensure icons display correctly
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

const UserHome = () => {
  const [location, setLocation] = useState('');
  const [lat, setLat] = useState(48.8566); // Default latitude (Paris)
  const [lng, setLng] = useState(2.3522); // Default longitude (Paris)

  const handleNext = () => {

    window.location.href ="./routeHome"
  };

  const handleSearch = () => {
    // Example: Static locations (You can integrate APIs like OpenCageData for dynamic geocoding)
    const locationMap = {
      Paris: { lat: 48.8566, lng: 2.3522 },
      London: { lat: 51.5074, lng: -0.1278 },
      NewYork: { lat: 40.7128, lng: -74.006 },
      Tokyo: { lat: 35.6895, lng: 139.6917 },
      Sydney: { lat: -33.8688, lng: 151.2093 },
    };

    if (location in locationMap) {
      setLat(locationMap[location].lat);
      setLng(locationMap[location].lng);
    } else {
      alert('Location not found. Try entering Paris, London, NewYork, Tokyo, or Sydney.');
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Interactive Map</h2>
      
      <input
        type="text"
        placeholder="Enter Destination Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        style={{ padding: '8px', fontSize: '16px', width: '200px' }}
      />
      <button
        onClick={handleSearch}
        style={{ padding: '10px 20px', marginLeft: '10px', fontSize: '16px', cursor: 'pointer' }}
      >
        Search Location
      </button>
      
      <div style={{ marginTop: '20px', height: '400px', width: '100%' }}>
        <MapContainer center={[lat, lng]} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[lat, lng]}>
            <Popup>{location || 'Your Destination'}</Popup>
          </Marker>
        </MapContainer>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default UserHome;
