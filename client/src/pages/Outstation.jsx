import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { outstations } from "../configs/outstations";
import axiosInstance from "../api/axiosInstance";
import { toast } from "react-toastify";

const Outstation = () => {
  const { route } = useParams();
  const [cityData,setCityData] = useState({
    source:{},
    destination:{},
    sourceval:false,
    destinationVal:false
  })
 
  const routeArr  = route?.split('-to-')

  const  sourceStr =  routeArr[0]
  const  destinationStr = routeArr[1]

  const one = eval(`outstations['${'mumbai-to-pune'}']`);
  console.log(routeArr,one,cityData)

  


  const handleToGetData = async (sourceStr,destinationStr) => {

    console.log()
    try {
      const response = await axiosInstance.get(`/cities/${sourceStr}/${destinationStr}`,{
        headers: {
          'Content-Type': 'application/json',           
        },
      });

      const cityData = (city=> response.data.data.find((el)=>el.cityName===city))

      if(response.status===200){
        setCityData({
          source:cityData(sourceStr),
          destination:cityData(destinationStr)
        })
      }

    } catch (error) {      
      toast.error(`Error: ${error.message}`);
    }
  }

  useEffect(()=>{
    if(sourceStr&&destinationStr){
      handleToGetData(sourceStr,destinationStr)
    }
  },[sourceStr,destinationStr])

  // console.log(cityData)
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${'https://img.freepik.com/free-photo/big-city_1127-3102.jpg'})`,
        }}
        className="bg-slate-900 h-auto sm:h-[calc(100vh)] bg-cover bg-center flex items-center justify-center font-montserrat text-slate-700"
      >
        <h1 className="text-white/75 text-7xl hidden xl:flex flex-col font-extralight text-center">
          <span>
            {cityData.source?.cityName} to {cityData.destination?.cityName}
          </span>
          <span>Outstation Cabs</span>
        </h1>
      </section>
      <main className="mx-5 md:mx-20 my-20 font-montserrat text-slate-700">
        <section className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-32">
          <div
            style={{
              backgroundImage: `url(${'https://burst.shopifycdn.com/photos/chicago-city-lights-at-night.jpg?width=1000&format=pjpg&exif=0&iptc=0'})`,
            }}
            className="w-[350px] h-[175px] md:w-[700px] md:h-[350px] bg-cover bg-center rounded-xl bg-slate-300"
          ></div>
          <div className="w-auto md:w-[700px] mt-2.5 lg:mt-0">
            <h1 className="text-xl md:text-3xl text-red-400">
              {cityData.source?.cityName}
            </h1>
            <p className="text-xs md:text-sm mt-1 lg:mt-2.5 mb-2.5 lg:mb-5">
              {cityData?.source?.cityBrief?.[0]?.substring(0, 170)}...
            </p>
            <a
              onClick={() => setCityData(prev=>({...prev,sourceval:!prev.sourceval}))}
              className="bg-blue-400 hover:bg-blue-500 pt-1.5 pb-2 px-5 rounded-md text-white duration-200 text-sm md:text-base cursor-pointer"
            >
              {origin ? "Hide more" : "Know more"}
            </a>
          </div>
        </section>

        <section
          className={`duration-300 grid mt-5 ${
            cityData.sourceval ? "active opacity-100" : "inactive opacity-0"
          }`}
        >
          <div className="overflow-hidden text-xs md:text-sm">
            <h1 className="text-xl md:text-3xl text-slate-500 mb-1 lg:mb-2.5">
            {cityData?.source?.cityName}
            </h1>
            <p>{cityData?.source?.cityBrief?.[0]}</p>
            <div
              style={{
                backgroundImage: `url(${'https://media.istockphoto.com/id/1174739715/photo/chicago-at-dusk-aerial-cityscape.jpg?s=612x612&w=0&k=20&c=ZLkGQ7alHHeSKL00slswmkaQTrtre_Cdhu1V7dPUiH4='})`,
              }}
              className="bg-cover bg-center w-full h-72 rounded-xl my-3 bg-slate-300"
            ></div>
             {
              cityData?.source?.cityBrief?.slice(1,cityData?.source?.cityBrief?.length)?.map((el)=>(
                <p className="mb-4">{el}</p>
                ))
             }
          </div>
        </section>

        <section className="flex flex-col-reverse lg:flex-row items-center justify-center space-x-0 lg:space-x-32 mt-10">
          <div className="w-auto md:w-[700px] mt-2.5 lg:mt-0">
            <h1 className="text-xl md:text-3xl text-red-400">
              {cityData.destination?.cityName}
            </h1>
            <p className="text-xs md:text-sm mt-1 lg:mt-2.5 mb-2.5 lg:mb-5">
              {cityData?.destination?.cityBrief?.[0]?.substring(0, 170)}
            </p>
            <a
              onClick={() => setCityData(prev=>({...prev,destinationVal:!prev.destinationVal}))}
              className="bg-blue-400 hover:bg-blue-500 pt-1.5 pb-2 px-5 rounded-md text-white duration-200 text-sm md:text-base cursor-pointer"
            >
              {cityData.destinationVal ? "Hide more" : "Know more"}
            </a>
          </div>
          <div
            style={{
              backgroundImage: `url(${'https://media.istockphoto.com/id/1174739706/photo/chicago-cityscape-at-blue-hour.jpg?s=612x612&w=0&k=20&c=wZbsbDsZ0D-m4_Psw9NfgjzQb0BGiZAGqJgfh_beemA='})`,
            }}
            className="w-[350px] h-[175px] md:w-[700px] md:h-[350px] bg-cover bg-center rounded-xl bg-slate-300"
          ></div>
        </section>

        <section
          className={`duration-300 grid ${
            cityData.destinationVal ? "active opacity-100" : "inactive opacity-0"
          }`}
        >
          <div className="overflow-hidden text-xs md:text-sm">
            <h1 className="text-xl md:text-3xl text-slate-500 mb-1 lg:mb-2.5 mt-5 lg:mt-0">
              {cityData.destination?.cityName}
            </h1>
            <p>{cityData.destination?.cityBrief?.[0]}</p>
            <div
              style={{
                backgroundImage: `url(${'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D'})`,
              }}
              className="bg-cover bg-center w-full h-72 rounded-xl my-3 bg-slate-300"
            ></div>

     {
              cityData?.destination?.cityBrief?.slice(1,cityData?.destination?.cityBrief?.length)?.map((el)=>(
                <p className="mb-4">{el}</p>
                ))
             }
            
            {/* <p className="mb-4">{one.destination.para2}</p>
            <p>{one.destination.para3}</p> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default Outstation;
