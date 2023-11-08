import React, { useEffect,useState } from 'react'
import { handleMapLangLogArr } from '../../../store/bookingSlice'
import { useDispatch } from 'react-redux'
const LocationCart = ({name,latitude,longitude,cityName}) => {
    const [currentAddress,setCurrentAddress] = useState({
     addressObj:{},
     fullAddress:''
    })
    const [viewDetail,setViewDetail] = useState(true)
    const dispatch = useDispatch()

    const getLocation = async (value) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${value}`
    );
    const data = await response.json();

  
    console.log(data)
    if (data.length > 0) {
      const { lat, lon } = data[0];
    return  {lat,lon}
    }
  } catch (error) {
    console.error("Error fetching location data:", error);
  }
};



    const handleMapAddress = (lat,long)=>{
           
        
        // Create the Nominatim API URL
        const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`;
        
        // Make an HTTP GET request
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            if (data.display_name) {
              setCurrentAddress(
                {
                    addressObj:data.address,
                    fullAddress:data.display_name
                   }
              )              
            } else {
              console.log('Address not found');
            }
          })
          .catch(error => {
            console.error(`Error: Unable to retrieve address information - ${error}`);
          });
           }

           useEffect(()=>{

            if(!(cityName)){
              if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                  (position) => {
          
                    const { latitude, longitude } = position.coords;
                    dispatch(handleMapLangLogArr({latitude,longitude,name}))
                    handleMapAddress(latitude,longitude)
                  },
                  (error) => {
                    // setLocationError(error.message);
                  }
                  
                );
        
        
              } else {
                // setLocationError('Geolocation is not available in this browser.');
              }
            }else {
              getLocation(cityName).then(({lat,lon})=>{
                dispatch(handleMapLangLogArr({latitude:lat,longitude:lon,name}))
              handleMapAddress(lat,lon)}
              )
            }
       
           },[])
  return (
    <div className='shadow-xl min-h-full w-full bg-white border rounded relative flex flex-col justify-between '>
      {/* {currentAddress} */}

     
      <h2 className='text-md text-black p-2'>{name} <br/> <span className='text-gray-600'>{currentAddress?.fullAddress}</span></h2>
    <button onClick={()=>setViewDetail(prev=>!prev)} className={`p-2 m-2 w-32 rounded text-sm text-white ${viewDetail?'bg-blue-600':'bg-red-400'}`}>
      {viewDetail?'VIEW DETAIL':'CLOSE'}
      </button>
     <ul className={viewDetail?'hidden':'absolute top-[100%] z-20 bg-white border w-full grid grid-cols-3 p-2 tex-gray-400 text-gray-600 gap-2'}>
        <li><span className='text-md text-blue-900'>COUNTRY</span> <br/>{currentAddress?.addressObj?.country}</li>
        <li><span className='text-md text-blue-900'>STATE</span> <br/>{currentAddress?.addressObj?.state}</li>
        <li><span className='text-md text-blue-900'>POSTCODE</span> <br/>{currentAddress?.addressObj?.postcode}</li>
        <li><span className='text-md text-blue-900'>City District</span><br/>{currentAddress?.addressObj?.city_district}</li>
        <li><span className='text-md text-blue-900'>CITY</span> <br/>{currentAddress?.addressObj?.city}</li>
        <li><span className='text-md text-blue-900'>Neighbourhood</span> <br/>{currentAddress?.addressObj?.neighbourhood}</li>
        <li><span className='text-md text-blue-900'>State Distric</span> <br/>{currentAddress?.addressObj?.state_district}</li>
      </ul>
    </div>
  )
}

export default LocationCart

