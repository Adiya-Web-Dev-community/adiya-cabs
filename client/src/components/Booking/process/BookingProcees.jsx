import { useState, useRef, useEffect, forwardRef, memo, useCallback } from 'react'
import { AiFillCar } from 'react-icons/ai'
import { PiAirplaneTakeoff } from 'react-icons/pi'
import { GiModernCity } from 'react-icons/gi'
import { MdCarRental } from 'react-icons/md'
import { RiMotorbikeFill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from "../../../store/bookingSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import { handleBookingNavi,addPickupLocation,addDestination,addDistanceDuration } from '../../../store/bookingSlice'
import axiosInstance from '../../../api/axiosInstance'
import { toast } from "react-toastify";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";

import { FaSpinner } from "react-icons/fa";
import DistanceCart from '../cart/DistanceCart'
import Spinner from '../../Ui/Spinner'
import axios from 'axios'



function BookingProcess({ booking, children }) {

  const disPatch = useDispatch()
  const categoryName = useSelector(el => el.bookingSlice.categoryName)
  const category = useSelector(el => el.bookingSlice.bookingRideData.category)
  const bookingObj = useSelector(el => el.bookingSlice.bookingRideData)
  const  {  pickupLocationInputVal,
  destinationLocationInputVal} =  useSelector(el => el.bookingSlice)

  const token = useSelector(el => el.app.userloginToken)
  const [map, setMap] = useState(null);
  const [directionResponse, setDirectionResponse] = useState(null);
  const [isActive,setActive] = useState(false)
  const [isDisabled,setDisabeld] = useState(true)
  const [isPickupActive,setPickupActive] = useState(false)



  const [placeObj,stePlaceObj] = useState({
    pickupLocation:{},
    destination:{}
  })
  const [inputLoader ,setInputLoader] = useState({
   pickupLocation:false,
   destination:false
  })

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    setPickupActive(true)
  };



  const buttonData = [
    { name: "Outstation", value: categoryName.outstation, icon: AiFillCar,quots:'We can arrange a comfortable trip for your outstation journey. ' },
    { name: "Airport", value: categoryName.airport, icon: PiAirplaneTakeoff,quots:'Rely on us for a prompt and reliable ride to the airport' },
    { name: "City", value: categoryName.city, icon: GiModernCity,quots:'We ensure a smooth ride for your city travels.' },
    { name: "Rentals", value: categoryName.rentals, icon: MdCarRental,quots:'We provide you with convenient rental options for your journey.' },
    { name: "Bike Ride", value: categoryName.bike, icon: RiMotorbikeFill },
  ]

  const center = { lat: 19.601194, lng: 75.552979 };



  const destinationRef = useRef('');
  const originRef = useRef('');
  const [distance, steDistance] = useState({
    distance: '',
    duration: '',
    showDistance: false,
    destinationRefVal: '',
    originRefVal: '',
  })



  async function calculateDirectionRoute() {
    if (originRef.current.value === "" || destinationRef.current.value === "") {

    } else {
      setActive(true)
      const directionService = new google.maps.DirectionsService();
      const directionResult = await directionService.route({
        origin: originRef.current.value,
        destination: destinationRef.current.value,
        travelMode: google.maps.TravelMode.DRIVING
      });

      disPatch(addDistanceDuration({
        distance: directionResult?.routes[0]?.legs[0]?.distance?.text,
        duration: directionResult?.routes[0]?.legs[0]?.duration?.text, 
      }))

      setActive(false)
    }
  }

  const hadleDistanceAndKm = useCallback(() => {
    console.log(originRef.current?.value)

    if (originRef.current?.value && destinationRef.current?.value) {
      calculateDirectionRoute()
    }
  }, [])



  async function onPlaceChanged() {
    if ( placeObj.pickupLocation!= null) {
      setInputLoader(prev=>({...prev,pickupLocation:true}))
      const place = placeObj.pickupLocation.getPlace();
      const { lat, lng } = place.geometry.location

      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat()}&lon=${lng()}&format=json`
        );

        if(response.status===200){
          setInputLoader(prev=>({...prev,pickupLocation:false}))
          const { display_name,address } = response.data;
          const {city,country,state,postcode} = address
          disPatch(addPickupLocation({
            city,country,state1:state,postcode,address:display_name,
            lat:lat(),lng:lng(),inputVal:originRef.current?.value
          }))
          hadleDistanceAndKm()
        }
      } catch (error) {
        console.error("Error getting coordinates:", error);
        throw error;
      }



    } else {
      alert("Please enter text");
    }
  }

  function onLoad(autocomplete) {
    stePlaceObj(prev=>({...prev,pickupLocation:autocomplete}))
  }

  async function onPlaceChanged2() {
    if (placeObj.destination != null) {
      setInputLoader(prev=>({...prev,destination:true}))
      const place = placeObj.destination.getPlace();
      const { lat, lng } = place.geometry.location
      try {
        const response = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?lat=${lat()}&lon=${lng()}&format=json`
        );

        if(response.status===200){
          setInputLoader(prev=>({...prev,destination:false}))
          const { display_name,address } = response.data;
          const {city,country,state,postcode } = address
          disPatch(addDestination(
            {city,country,state1:state,postcode,address:display_name,
             lat:lat(),lng:lng(),inputVal:destinationRef.current?.value
          }))
          hadleDistanceAndKm()
        }
              } catch (error) {
        console.error("Error getting coordinates:", error);
        throw error;
      }



    } else {
      alert("Please enter text");
    }
  }

  function onLoad2(autocomplete) {
    stePlaceObj(prev=>({...prev,destination:autocomplete}))
  }




  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGALE_MAP_TOKEN,
    libraries: ["places"]
  });


useEffect(()=>{
if (isLoaded) {
  setDisabeld(false)
  }
if(originRef.current?.placeholder&&destinationRef.current?.placeholder){
  originRef.current.value = pickupLocationInputVal
  destinationRef.current.value = destinationLocationInputVal
}
},[isLoaded,originRef.current,destinationRef.current])



  return <>
  {isDisabled|| <GoogleMap center={center} zoom={10}
    mapContainerStyle={{ width: "100%", height: "100%", display: 'none' }}
    options={{
      zoonControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false
    }}
    onLoad={(map) => setMap(map)}
  >          <Marker
      position={center}
    />
    {directionResponse && (
      <DirectionsRenderer directions={directionResponse} />
    )}
  </GoogleMap>}

    <ToastContainer />

     

     
    <div className="space-x-2.5 flex text-white p-4  rounded-md">
      {
        buttonData.filter((el)=>isPickupActive?category===el.value:true).map((el, i) =>
          <button
            key={i}
            onClick={() => disPatch(changeCategory(el.value))}
            className={` flex border 
               px-1 md:px-3 pt-[5px] py-2
              pb-1.5 rounded duration-200 ${ (!isPickupActive?category===el.value:false) ? "bg-red-500 text-white" : ""}
              ${(isPickupActive?true:false)?'w-full bg-white text-black  justify-between items-center text-lg '
              :'border-red-500  text-red-500  hover:bg-red-500 hover:text-white items-center flex-col'}
              
              `}
          >
            <el.icon size={(isPickupActive?'50px':'')}  className={isPickupActive?'w-18 mx-2':''} />
            {isPickupActive?`${el.quots}`:(el.name)}
          </button>
        )
      }

    </div>


    <div className="px-5 pb-5 flex flex-col gap-2 ">

      <h3 className="text-base mb ">Book ride!</h3>
      <h4 className="text-sm mt-3 ">Select Pickup Location and Destination</h4>


      <div className="flex-col   h-[15rem]  flex justify-center items-center ">


        {isDisabled?<Spinner/>:<div className='w-full'>

        <div className='relative'>
          <Autocomplete
            onPlaceChanged={onPlaceChanged} onLoad={onLoad}
          >
          <input ref={originRef} type="text" placeholder={'Pickup Location'} className='w-full outline-none my-2  text-md  rounded border-gray-400 p-2 border' />
          </Autocomplete>
          { inputLoader.pickupLocation&&<div className='absolute px-1 top-0 left-0 h-full w-full bg-white/20 flex justify-end items-center'>
             <Spinner  small/>
          </div>}
        </div>
        <div className='relative'>

          <Autocomplete
            onPlaceChanged={onPlaceChanged2} onLoad={onLoad2}
          >
            <input ref={destinationRef} type="text" placeholder={'Distination'} className='w-full outline-none my-2  text-md  rounded border-gray-400 p-2 border' />
          </Autocomplete>
          {inputLoader.destination&&<div className='absolute px-1 top-0 left-0 h-full w-full bg-white/20 flex justify-end items-center'>
             <Spinner small/>
          </div>}
          </div>
        </div>}




        <div className='h-32 w-full flex justify-center items-center'>
          {isActive?<Spinner  />: <DistanceCart/>}
        </div>
        
      </div>

      <div className="p-4 w-full grid grid-cols-1 gap-2">

        {booking ?
          <button
            onClick={() => handleSubmit()}
            className="bg-blue-400   text-center text-md hover:bg-blue-500 pt-[9px] pb-2.5 rounded-md text-white mt-5 duration-200"
          >
            Pickup Now
          </button>

          : <button
            className={"bg-blue-400  cursor-pointer text-center hover:bg-blue-500 pt-[9px] pb-2.5 rounded-md text-white mt-5 duration-200"}
            onClick={()=>disPatch(handleBookingNavi(navigate))} 
          >
           Go To Booking Page
          </button>
        }
      </div>

    </div>
    

  </>

}

export default memo(BookingProcess)