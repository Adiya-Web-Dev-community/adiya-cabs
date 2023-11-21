import React, { useEffect,useState } from 'react'
import { handleMapLangLogArr } from '../../../store/bookingSlice'
import { useDispatch } from 'react-redux'
import Spinner from '../../Ui/Spinner'
const LocationCart = ({latitude,longitude,name,current}) => {
    const [currentAddress,setCurrentAddress] = useState({
     addressObj:{},
     fullAddress:''
    })
    const [viewDetail,setViewDetail] = useState(true)
    const [loading,setLoading] = useState(true)
    const dispatch = useDispatch()

    const handleMapAddress = (lat,long)=>{
        // Create the Nominatim API URL
        setLoading(true)
        const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`;
        
        // Make an HTTP GET request
        fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
            setLoading(false)
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
            setLoading(false)
          });
           }

           useEffect(()=>{

            if(current){
              if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                  (position) => {
                    const { latitude, longitude } = position.coords;
                    dispatch(handleMapLangLogArr({latitude,longitude,name}))
                    handleMapAddress(latitude,longitude)
                    setLoading(false)
                  },
                  (error) => {
                    // setLocationError(error.message);
                  }
                );
              } 
            }else if(latitude&&longitude) {
              dispatch(handleMapLangLogArr({latitude,longitude,name}))
              handleMapAddress(latitude,longitude)
            }
            
            // else {
            //   getLocation(cityName).then(({lat,lon})=>{
            //     // dispatch(handleMapLangLogArr({latitude:lat,longitude:lon,name}))
            //   // handleMapAddress(lat,lon)
            // }
            //   )
            // }
       
           },[latitude,longitude])
  return (
    <div className={`shadow-xl min-h-full w-full bg-white border rounded relative flex ${loading?'justify-center items-center':'flex-col justify-between '}  `  }>
      {/* {currentAddress} */}

       
     {loading?<Spinner/>:<>
      <h2 className='text-md text-black p-2'>{name} <br/> <span className='text-gray-600'>
        {currentAddress?.fullAddress
      }</span></h2>


    <button onClick={()=>setViewDetail(prev=>!prev)} className={`p-2 m-2 w-32 rounded text-sm text-white ${viewDetail?'bg-blue-600':'bg-red-400'}`}>
      {viewDetail?'VIEW DETAIL':'CLOSE'}
      </button>
     </>}


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

