import { useEffect, useState } from "react";
import {AiOutlineAreaChart} from 'react-icons/ai'
import {GiModernCity} from 'react-icons/gi'
import {useDispatch,useSelector} from 'react-redux'
import { addDestinationArea,addDestinationCity,addPickupLocationCity, addPickupLocationArea } from "../../store/bookingSlice";
import axiosInstance from "../../api/axiosInstance";
import CustomSelectinput from "../form/CutomSelectInput"
import {toast} from 'react-toastify'

function CityAreaGroupInput({props:{cityKey,areaKey,children}}){

    const [areaData,steAreaData] = useState([])
    const dispatch = useDispatch()
    const bookingInfo = useSelector((el)=>el.bookingSlice)
    const [dropDownId,setDropDownId] = useState('')


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


    useEffect(()=>{
        if(bookingInfo?.bookingRideData[cityKey]?.trim()){
            hndleCityData({value:bookingInfo?.bookingRideData[cityKey]})
        }
    },[])
  

    let address = bookingInfo?.bookingRideData[cityKey]

  

    return                          <div>
                                         <CustomSelectinput 
                                          data={options}
                                          setDropDownId={setDropDownId} 
                                           label={'City'} 
                                           getData={hndleCityData}
                                           dropDownId={dropDownId}
                                           initialValue={bookingInfo?.bookingRideData[cityKey]}
                                           />
                                        <CustomSelectinput data={areaData}
                                         setDropDownId={setDropDownId}
                                          onClick={handleActiveInput} 
                                          label={'Area'} 
                                          getData={handleAreaData}
                                          dropDownId={dropDownId}
                                          initialValue={bookingInfo?.bookingRideData[areaKey]}
                                          />
                                         {children}

                                   </div>
}

export default CityAreaGroupInput




