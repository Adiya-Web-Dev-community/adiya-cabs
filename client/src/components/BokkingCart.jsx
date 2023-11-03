import { useState } from "react";
import {AiFillCar,AiOutlineAreaChart} from 'react-icons/ai'
import {PiAirplaneTakeoff} from 'react-icons/pi'
import {GiModernCity} from 'react-icons/gi'
import {MdCarRental} from 'react-icons/md'
import {RiMotorbikeFill}  from 'react-icons/ri'
import {CustomNavTabs} from "./form";
import {useDispatch,useSelector} from 'react-redux'
import { addDestinationArea,addDestinationCity,addPickupLocationCity,
        addPickupLocationArea } from "../store/bookingSlice";
import axiosInstance from "../api/axiosInstance";
import CustomSelectinput from "./CustomSelectInput/CutomSelectInput"
import { Link } from "react-router-dom";
import {toast,ToastContainer} from 'react-toastify'

const BokkingCart = ({option, setOption,booking}) => {


       const handleSubmit = (e) => {
         e.preventDefault();
       };
     

       const buttonData = [
        {name:"Outstation",value:"outstation",icon:AiFillCar},
        {name:"Airport",value:"airport",icon:PiAirplaneTakeoff},
        {name:"City",value:"city",icon:GiModernCity},
        {name:"Rentals",value:"rentals",icon:MdCarRental},
        {name:"Bike Ride",value:"rentals",icon:RiMotorbikeFill},
       ]
      
       const navContainerArr = [
        {tabName:'Pickup Location',element:CityAreaInput,elementProp:{cityKey:'pickupCity'}},
        {tabName:"Distination",element:CityAreaInput,elementProp:{cityKey:'destinationCity'}}
       ]
      
      
  return (
    <section className={`bg-white  rounded-none sm:rounded text-sm w-full sm:w-auto  mx-3  ${booking?'z-10':''}`}>

        <ToastContainer   />
      
        <div className="space-x-2.5 flex text-white p-4  ">

        {
          buttonData.map((el)=>
          <button
          onClick={() => setOption(el.value)}
          className={` flex items-center flex-col border border-red-500  text-red-500 hover:text-white hover:bg-red-500 px-3 pt-[5px] pb-1.5 rounded duration-200 ${
            option ===el.value ? "bg-red-500 text-white" : ""
          }`}
        >
         <el.icon/> 
         {el.name}
        </button>
          )
        }

        </div>
        <form onSubmit={handleSubmit} className="px-5 pb-5 flex flex-col gap-2 ">

          <h3 className="text-base mb ">Book ride!</h3>
          <h4 className="text-sm mt-3 ">Select Pickup Location and Destination</h4>


          <div className="flex-col   h-[15rem] ">

                   <CustomNavTabs
                    navContainerArr={navContainerArr}
                   />
          </div>
        
          <div className="p-4 w-full grid grid-cols-2 gap-2">

          {booking?
          <>
          <button 
            type="submit"
            className="bg-blue-400 text-center text-md hover:bg-blue-500 pt-[9px] pb-2.5 rounded-md text-white mt-5 duration-200"
          >
            Ride Later
          </button>

          <button 
            type="submit"
            className="bg-blue-400 text-center text-md hover:bg-blue-500 pt-[9px] pb-2.5 rounded-md text-white mt-5 duration-200"
          >
            Ride Now
          </button>
          </>
          :<Link
          to='/book-ride'
          type="submit"
          className="bg-blue-400 col-span-3  text-center hover:bg-blue-500 pt-[9px] pb-2.5 rounded-md text-white mt-5 duration-200"
        >
          Book ride
        </Link>
  }
        </div>
        
        </form>
      </section>
  )
}

export default BokkingCart

function CityAreaInput({props:{cityKey}}){

    const [areaData,steAreaData] = useState([])
    const dispatch = useDispatch()
    const bookingInfo = useSelector((el)=>el.bookingSlice)

    console.log(bookingInfo)


    const hndleCityData = async (obj) => {

        if(cityKey==='pickupCity'){
        dispatch(addPickupLocationCity({city:obj.value}))
        }else{
        dispatch(addDestinationCity({city:obj.value}))
        }
      try {
        const response = await axiosInstance.post(`/search-data?city=${obj.value}`);
        if(response.status===200){
          steAreaData(response.data.areas.map((el)=>(
            { value: el, label: el,icon:AiOutlineAreaChart }
          )))
        }
      } catch (error) {      
         console.log(error)
      }
    }
  
    const handleAreaData = async (obj)=>{
        console.log(obj)
        if(cityKey==='pickupCity'){
            dispatch(addPickupLocationArea({area:obj.value}))
            }else{
            dispatch(addDestinationArea({area:obj.value}))
          }
    }

    const handleActiveInput = (callBackFun=()=>{})=>{
       if(!bookingInfo?.bookingRideData[cityKey]?.trim()){
        toast.warning(`Select the initial city.`);
       }else{
        callBackFun()
       }
    }
  
  
    const options = [
      { value: 'Pune', label: 'Pune',icon:GiModernCity },
      { value: 'Delhi', label: 'Delhi',icon:GiModernCity },
      { value: 'Mumbai', label: 'Mumbai',icon:GiModernCity },
      { value: 'Bangalore', label: 'Bangalore',icon:GiModernCity },
      { value: 'Chennai', label: 'Chennai',icon:GiModernCity },
      { value: 'Pune', label: 'Pune',icon:GiModernCity },
      { value: 'Lucknow', label: 'Lucknow',icon:GiModernCity },
      { value: 'Patna', label: 'Patna',icon:GiModernCity },
      { value: 'Purnia', label: 'Purnia',icon:GiModernCity },
      { value: 'Prayagraj', label: 'Prayagraj',icon:GiModernCity },
      { value: 'Kanpur', label: 'Kanpur',icon:GiModernCity },
    ];   
  
  
    return                          <div>
                                         <CustomSelectinput data={options} disbalDropFun  label={'City'} getData={hndleCityData}/>
                                        <CustomSelectinput data={areaData} disbalDropFun onClick={handleActiveInput} label={'Area'} getData={handleAreaData}/>
                                   </div>
   }