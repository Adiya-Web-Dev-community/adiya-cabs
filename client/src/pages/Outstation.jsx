import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { outstations } from "../configs/outstations";
console.log(outstations);

const Outstation = () => {
  const { route } = useParams();
  const [origin, setOrigin] = useState(false);
  const [destination, setDestination] = useState(false);

  const one = eval(`outstations['${route}']`);

  useEffect(() => {
    setOrigin(false);
    setDestination(false);
  }, [route]);

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${one.bannerImg})`,
        }}
        className="bg-slate-900 h-auto sm:h-[calc(100vh)] bg-cover bg-center flex items-center justify-center font-montserrat text-slate-700"
      >
        <h1 className="text-white/75 text-7xl hidden xl:flex flex-col font-extralight text-center">
          <span>
            {one.origin.name} to {one.destination.name}
          </span>
          <span>Outstation Cabs</span>
        </h1>
      </section>
      <main className="mx-5 md:mx-20 my-20 font-montserrat text-slate-700">
        <section className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-32">
          <div
            style={{
              backgroundImage: `url(${one.origin.img})`,
            }}
            className="w-[350px] h-[175px] md:w-[700px] md:h-[350px] bg-cover bg-center rounded-xl bg-slate-300"
          ></div>
          <div className="w-auto md:w-[700px] mt-2.5 lg:mt-0">
            <h1 className="text-xl md:text-3xl text-red-400">
              {one.origin.name}
            </h1>
            <p className="text-xs md:text-sm mt-1 lg:mt-2.5 mb-2.5 lg:mb-5">
              {one.origin.para1.substring(0, 170)}...
            </p>
            <a
              onClick={() => setOrigin(!origin)}
              className="bg-blue-400 hover:bg-blue-500 pt-1.5 pb-2 px-5 rounded-md text-white duration-200 text-sm md:text-base cursor-pointer"
            >
              {origin ? "Hide more" : "Know more"}
            </a>
          </div>
        </section>

        <section
          className={`duration-300 grid mt-5 ${
            origin ? "active opacity-100" : "inactive opacity-0"
          }`}
        >
          <div className="overflow-hidden text-xs md:text-sm">
            <h1 className="text-xl md:text-3xl text-slate-500 mb-1 lg:mb-2.5">
              {one.origin.name}
            </h1>
            <p>{one.origin.para1}</p>
            <div
              style={{
                backgroundImage: `url(${one.origin.subimg})`,
              }}
              className="bg-cover bg-center w-full h-72 rounded-xl my-3 bg-slate-300"
            ></div>
            <p className="mb-4">{one.origin.para2}</p>
            <p>{one.origin.para3}</p>
          </div>
        </section>

        <section className="flex flex-col-reverse lg:flex-row items-center justify-center space-x-0 lg:space-x-32 mt-10">
          <div className="w-auto md:w-[700px] mt-2.5 lg:mt-0">
            <h1 className="text-xl md:text-3xl text-red-400">
              {one.destination.name}
            </h1>
            <p className="text-xs md:text-sm mt-1 lg:mt-2.5 mb-2.5 lg:mb-5">
              {one.destination.para1.substring(0, 170)}...
            </p>
            <a
              onClick={() => setDestination(!destination)}
              className="bg-blue-400 hover:bg-blue-500 pt-1.5 pb-2 px-5 rounded-md text-white duration-200 text-sm md:text-base cursor-pointer"
            >
              {destination ? "Hide more" : "Know more"}
            </a>
          </div>
          <div
            style={{
              backgroundImage: `url(${one.destination.img})`,
            }}
            className="w-[350px] h-[175px] md:w-[700px] md:h-[350px] bg-cover bg-center rounded-xl bg-slate-300"
          ></div>
        </section>

        <section
          className={`duration-300 grid ${
            destination ? "active opacity-100" : "inactive opacity-0"
          }`}
        >
          <div className="overflow-hidden text-xs md:text-sm">
            <h1 className="text-xl md:text-3xl text-slate-500 mb-1 lg:mb-2.5 mt-5 lg:mt-0">
              {one.destination.name}
            </h1>
            <p>{one.destination.para1}</p>
            <div
              style={{
                backgroundImage: `url(${one.destination.subimg})`,
              }}
              className="bg-cover bg-center w-full h-72 rounded-xl my-3 bg-slate-300"
            ></div>
            <p className="mb-4">{one.destination.para2}</p>
            <p>{one.destination.para3}</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Outstation;
