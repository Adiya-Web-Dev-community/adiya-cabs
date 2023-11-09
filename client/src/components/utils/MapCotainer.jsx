
import React, { useState,useEffect } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';
import { useSelector } from 'react-redux';


const MapCotainer = (latitude,longitude) => {


  const cordInfo  = useSelector((el)=>el.bookingSlice.bookingRideData.mapLanLogArr)

  console.log(cordInfo)


    const [position, setPosition] = useState([51.505, -0.09]); // Default position
    const [locationError, setLocationError] = useState('');
    const [stopReinitial,setStopReinitial] = useState(true)
    const [map, setMap] = useState(null);

  
    useEffect(() => {
      let map = {}
     if(stopReinitial){
       map = L.map('map') // Set initial coordinates and zoom level
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 10,
    }).addTo(map);


    setStopReinitial(false)
     }


      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
  
            const { latitude, longitude } = position.coords;
            map.setView([latitude, longitude], 13); // Update the map's view to the current location
            // L.marker([latitude, longitude])
            //   .addTo(map)
            //   .bindPopup('Your current location')
            //   .openPopup();

            //  L.marker([latitude, longitude+0.2])
            //  .addTo(map)
            //  .bindPopup('Your current location')
            //  .openPopup();
            //  L.marker([latitude, longitude+0.2])
            //   .addTo(map)
            //   .bindPopup('Your current location')
            //   .openPopup();

             

          },
          (error) => {
            setLocationError(error.message);
          }

          
        );


      } else {
        setLocationError('Geolocation is not available in this browser.');
      }
  
      

      setMap(map)


    }, []); // Empty dependency array ensures this effect runs once
  

    
    useEffect(()=>{
      if(cordInfo.length&&map){
        cordInfo.map((el)=>{
          L.marker([el.latitude, el.longitude])
          .addTo(map)
          .bindPopup(el.name)
          .openPopup();
        })

        const latlngs = cordInfo.map((el)=>[el.latitude,el.longitude])
        var polygon = L.polygon(latlngs, { 
          color: 'blue', // Line color
          weight: 4,     // Line weight (in pixels)
          opacity: 1,    // Line opacity (0 to 1)
          dashArray: '10, 10', // Dash pattern (alternating lengths)
          dashOffset: '0'     // Dash offset   // Dash offset  
       }).addTo(map);
  
        map.fitBounds(polygon.getBounds());
      }
    },[cordInfo.length,map])
    
    return (
      <div id="map" className='absolute w-full h-full z-0'  ></div>
      
    );
  };
  
  export default MapCotainer;