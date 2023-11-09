import { AiFillCar } from 'react-icons/ai'
import { PiAirplaneTakeoff } from 'react-icons/pi'
import { GiModernCity } from 'react-icons/gi'
import { MdCarRental } from 'react-icons/md'
import { RiMotorbikeFill } from 'react-icons/ri'
import { CustomNavTabs } from "../../form/form";
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from "../../../store/bookingSlice";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
// import CityAreaGroupInput from "../CityAreaGroupInput";
import { handleBookingNavi } from '../../../store/bookingSlice'
import axiosInstance from '../../../api/axiosInstance'
import { toast } from "react-toastify";
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer
} from "@react-google-maps/api";
import { useRef,useState } from 'react'
import { Input } from '../../form/form'

import { IoNavigate } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";
import { MdTripOrigin } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
function BookingProcess({booking,children}){


  const [directionResponse, setDirectionResponse] = useState(null);


    const dispath = useDispatch()
    const categoryName = useSelector(el => el.bookingSlice.categoryName)
    const category = useSelector(el => el.bookingSlice.bookingRideData.category)
    const bookingObj = useSelector(el => el.bookingSlice.bookingRideData)
    
    const token = useSelector(el => el.app.userloginToken)
    const [map, setMap] = useState(/**@type google.maps.Map */ (null));

    const navigate = useNavigate()
    const originRef = useRef();


    const { isLoaded } = useJsApiLoader({
      googleMapsApiKey: "AIzaSyCzSOQHv63VsWrPjwRI58388Dtui5T7MdI",
      libraries: ["places"]
    });
  
    if (!isLoaded) {
      return <FaSpinner className="text-2xl" />;
    }
  
  
    const handleSubmit = async (e) => {
      const loadingToast = toast.info('Sending OTP...', { autoClose: false });
      console.log(bookingObj)


      try {
        const response = await axiosInstance.post('/booking',{...bookingObj},{
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
          },
        });
        console.log(response)
        toast.success('User data posted successfully');  
        toast.dismiss(loadingToast);
  
        if (!response.status===200) {
          throw new Error('Network request failed');
        }
      } catch (error) {      
        toast.error(`Error: ${error.message}`);
        toast.dismiss(loadingToast);
      }

    };
  
  
    const buttonData = [
      { name: "Outstation", value: categoryName.outstation, icon: AiFillCar },
      { name: "Airport", value: categoryName.airport, icon: PiAirplaneTakeoff },
      { name: "City", value: categoryName.city, icon: GiModernCity },
      { name: "Rentals", value: categoryName.rentals, icon: MdCarRental },
      { name: "Bike Ride", value: categoryName.bike, icon: RiMotorbikeFill },
    ]
  

    const CityAreaGroupInput = ()=>  <div className="flex gap-2">
    <Autocomplete>
      <input
        type="text"
        placeholder="Pickup"
        ref={originRef}
        className="border-2 py-2 px-2  italic rounded-xl w-full"
      />
    </Autocomplete>
  </div>

    const navContainerArr = [
      { tabName: 'Pickup Location', element: CityAreaGroupInput, elementProp: { cityKey: 'pickupCity', areaKey: 'pickupArea',children } },
      { tabName: "Distination", element: CityAreaGroupInput, elementProp: { cityKey: 'destinationCity', areaKey: 'destinationArea' } }
    ]
  
    const center = { lat: 19.601194, lng: 75.552979 };


  
  return <>
  
  <GoogleMap
          center={center}
          zoom={10}
          // without this map would be invisible
          mapContainerStyle={{ width: "100%", height: "100%",display:'none' }}
          options={{
            zoonControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false
          }}
          // when clicked on navigate icon
          onLoad={(map) => setMap(map)}
        >
          {/* marker not visible */}
          <Marker
            // set marker at default position
            position={center}
          />
          {directionResponse && (
            <DirectionsRenderer directions={directionResponse} />
          )}
        </GoogleMap>

  <ToastContainer />

  
        <div className="space-x-2.5 flex text-white p-4  rounded-md  ">
  
          {
            buttonData.map((el,i) =>
              <button
                key={i}
                onClick={() => dispath(changeCategory(el.value))}
                className={` flex items-center flex-col border border-red-500  text-red-500 hover:text-white hover:bg-red-500 px-3 pt-[5px] pb-1.5 rounded duration-200 ${ category === el.value ? "bg-red-500 text-white" : ""
                  }`}
              >
                <el.icon />
                {el.name}
              </button>
            )
          }
  
        </div>
        <div  className="px-5 pb-5 flex flex-col gap-2 ">
  
          <h3 className="text-base mb ">Book ride!</h3>
          <h4 className="text-sm mt-3 ">Select Pickup Location and Destination</h4>
  
  
          <div className="flex-col   h-[15rem]">
  
          <Autocomplete>
      <input
        type="text"
        placeholder="Pickup Location"
        ref={originRef}
        className="border-2 py-2 px-2  italic rounded-md w-full outline-none my-2"
      />
    </Autocomplete>
    <Autocomplete>
      <input
        type="text"
        placeholder="Destination"
        ref={originRef}
        className="border-2 py-2 px-2  italic rounded-md w-full outline-none mb-2"
      />
    </Autocomplete>
          </div>
  
          <div className="p-4 w-full grid grid-cols-1 gap-2">
  
            {booking ?
              <button
                onClick={()=>handleSubmit()}
                className="bg-blue-400   text-center text-md hover:bg-blue-500 pt-[9px] pb-2.5 rounded-md text-white mt-5 duration-200"
              >
                Book
              </button>
  
              : <button
                onClick={()=>dispath(handleBookingNavi(navigate))}
                className="bg-blue-400   text-center hover:bg-blue-500 pt-[9px] pb-2.5 rounded-md text-white mt-5 duration-200"
              >
                Book ride
              </button>
            }
          </div>
  
        </div>
  </>
  
  }

  export default BookingProcess