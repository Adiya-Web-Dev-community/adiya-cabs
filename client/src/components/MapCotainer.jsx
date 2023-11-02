
import React, { useState,useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';


const MapCotainer = () => {
    const [position, setPosition] = useState([51.505, -0.09]); // Default position
    const [locationError, setLocationError] = useState('');
  
    useEffect(() => {
      // Create a map instance and set its view
      const map = L.map('map').setView([51.505, -0.09], 13); // Set initial coordinates and zoom level
      var marker = L.marker(position).addTo(map);
      marker.bindPopup("Your current location.").openPopup();
      // Add a tile layer from a tile server (e.g., OpenStreetMap)
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);
  
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
  
            const { latitude, longitude } = position.coords;
            map.setView([latitude, longitude], 13); // Update the map's view to the current location
            L.marker([latitude, longitude])
              .addTo(map)
              .bindPopup('Your current location')
              .openPopup();
          },
          (error) => {
            setLocationError(error.message);
          }
        );
      } else {
        setLocationError('Geolocation is not available in this browser.');
      }
  
    }, []); // Empty dependency array ensures this effect runs once
  
    
    return (
      <div id="map" className='absolute w-full h-full z-5'  ></div>
      
    );
  };
  
  export default MapCotainer;