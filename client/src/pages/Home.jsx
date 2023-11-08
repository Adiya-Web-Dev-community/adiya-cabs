import Banner from "../components/Ui/Banner";
import Info from "../components/Ui/Info";
import AnimatedTestimonial from "../components/utils/AnimatedTestimonial";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Home = () => {


  return (
    <>
      <Banner />
      
      <Info />
      
      <section className="flex justify-between items-center bg-gray-100">
             <div className="flex justify-center items-center flex-col bg-gray-100 w-2/5 h-full  min-w-[fit-contnet]">
                <h1 className="text-xl md:text-3xl mb-5">What people say about
            <span className="text-red-400">  MERU</span>
          </h1>
                <button className="bg-blue-400 text-white cursor-pointer text-xl p-2 rounded hover:bg-blue-500
                transition ease-in duration-300
                ">
                  Read more testimonial
                </button>
             </div>
             <div className="bg-gray-200 w-3/5 min-w-[fit-contnet]" >
                <AnimatedTestimonial />
             </div>
      </section>
    </>
  );
};

export default Home;
