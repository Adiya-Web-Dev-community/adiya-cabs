import React, { useState, useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useSelector } from 'react-redux';

const MapCotainer = ({ destinationLocation, pickupLocation }) => {
  const bookingRideData = useSelector((el) => el.bookingSlice.bookingRideData);
  const {mapUpdateCount,mapLanLogArr} =bookingRideData 
  const markerGroupRef = useRef(L.layerGroup());


  const [map, setMap] = useState(null);
  const markerRef = useRef(null);
  const [stopReinitial, setStopReinitial] = useState(true);

  useEffect(() => {
    let map = {};
    if (stopReinitial) {
      map = L.map('map');
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 10,
      }).addTo(map);
      setStopReinitial(false);
    }

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setView([latitude, longitude], 13);

          if (markerRef.current) {
            markerRef.current.setLatLng([latitude, longitude]);
          } else {
            const marker = L.marker([latitude, longitude])
              .addTo(map)
              .bindPopup('Your current location')
              .openPopup();
            markerRef.current = marker;
          }
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not available in this browser.');
    }

    setMap(map);
  }, []);

  // useEffect(() => {
  //   if (mapLanLogArr.length && map) {
  //     // Remove existing markers
  //     // map.eachLayer((layer) => {
  //     //   if (layer instanceof L.Marker) {
  //     //     map.removeLayer(layer);
  //     //   }
  //     // });

  //     mapLanLogArr.forEach((el) => {
  //       L.marker([el.latitude, el.longitude])
  //         .addTo(map)
  //         .bindPopup(el.name)
  //         .openPopup();
  //     });

  //     const latlngs = mapLanLogArr.map((el) => [el.latitude, el.longitude]);
  //     const polygon = L.polygon(latlngs, {
  //       color: 'blue',
  //       weight: 4,
  //       opacity: 1,
  //       dashArray: '10, 10',
  //       dashOffset: '0',
  //     }).addTo(map);

  //     map.fitBounds(polygon.getBounds());
  //   }
  // }, []);


  useEffect(()=>{
    if(mapLanLogArr.length&&map){

      markerGroupRef.current.clearLayers();

    
      mapLanLogArr.map((el)=>{
        L.marker([el.latitude, el.longitude])
        .addTo(map)
        .bindPopup(el.name)
        .openPopup();
      })

      const latlngs = mapLanLogArr.map((el)=>[el.latitude,el.longitude])
      var polygon = L.polygon(latlngs, { 
        color: 'blue', // Line color
        weight: 4,     // Line weight (in pixels)
        opacity: 1,    // Line opacity (0 to 1)
        dashArray: '10, 10', // Dash pattern (alternating lengths)
        dashOffset: '0'     // Dash offset   // Dash offset  
     }).addTo(map);

      map.fitBounds(polygon.getBounds());
    }
  },[ map,destinationLocation,pickupLocation,mapUpdateCount])

  return <div id="map" className="absolute w-full h-full z-0"></div>;
};

export default MapCotainer;





// import React, { useState,useEffect } from 'react'
// import 'react-toastify/dist/ReactToastify.css';
// import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS.
// import L from 'leaflet';
// import { useSelector } from 'react-redux';


// const MapCotainer = ({destinationLocation,pickupLocation}) => {


//   const mapLanLogArr  = useSelector((el)=>el.bookingSlice.bookingRideData.mapLanLogArr)

//   console.log(mapLanLogArr)


//     const [position, setPosition] = useState([51.505, -0.09]); // Default position
//     const [locationError, setLocationError] = useState('');
//     const [stopReinitial,setStopReinitial] = useState(true)
//     const [map, setMap] = useState(null);

  
//     useEffect(() => {
//       let map = {}
//      if(stopReinitial){




//        map = L.map('map') // Set initial coordinates and zoom level
//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 10,
//     }).addTo(map);



//     var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// });

//     var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: ''});

//     var baseMaps = {
//       "OpenStreetMap": osm,
//       "OpenStreetMap.HOT": osmHOT
//   };
//   L.control.layers(baseMaps).addTo(map);
  
//     setStopReinitial(false)
//      }


//       if ('geolocation' in navigator) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
  
//             const { latitude, longitude } = position.coords;
//             map.setView([latitude, longitude], 13); // Update the map's view to the current location
//             // L.marker([latitude, longitude])
//             //   .addTo(map)
//             //   .bindPopup('Your current location')
//             //   .openPopup();

//             //  L.marker([latitude, longitude+0.2])
//             //  .addTo(map)
//             //  .bindPopup('Your current location')
//             //  .openPopup();
//             //  L.marker([latitude, longitude+0.2])
//             //   .addTo(map)
//             //   .bindPopup('Your current location')
//             //   .openPopup();

             

//           },
//           (error) => {
//             setLocationError(error.message);
//           }

          
//         );


//       } else {
//         setLocationError('Geolocation is not available in this browser.');
//       }
  
      

//       setMap(map)


//     }, []); // Empty dependency array ensures this effect runs once
  


//     useEffect(() => {
//       if (mapLanLogArr.length && map) {
//         // Remove existing markers
//         map.eachLayer((layer) => {
//           if (layer instanceof L.Marker) {
//             map.removeLayer(layer);
//           }
//         });
  
//         mapLanLogArr.forEach((el) => {
//           L.marker([el.latitude, el.longitude])
//             .addTo(map)
//             .bindPopup(el.name)
//             .openPopup();
//         });
  
//         const latlngs = mapLanLogArr.map((el) => [el.latitude, el.longitude]);

//         const polygon = L.polygon(latlngs, {
//           color: 'blue',
//           weight: 4,
//           opacity: 1,
//           dashArray: '10, 10',
//           dashOffset: '0',
//         }).addTo(map);
  
//         map.fitBounds(polygon.getBounds());
//       }
//     }, [mapLanLogArr.length, map]);
    

    
//     return (
//       <div id="map" className='absolute w-full h-full z-0'  ></div>
      
//     );
//   };
  
//   export default MapCotainer;