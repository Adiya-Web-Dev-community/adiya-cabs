import Banner from "../components/Ui/Banner";
import Info from "../components/Ui/Info";
import AnimatedTestimonial from "../components/utils/AnimatedTestimonial";

const Home = () => {


  return (
    <>
    
      <Banner />
      
      <Info />
      <section className="flex flex-col md:flex-row justify-between items-center bg-gray-100">
  <div className="flex justify-center items-center flex-col bg-gray-100 w-full md:w-2/5 h-fit">
    <h1 className="text-xl md:text-3xl mb-5">What people say about
      <span className="text-red-400">  MERU</span>
    </h1>
    <button className="bg-blue-400 text-white cursor-pointer text-xl p-2 rounded hover:bg-blue-500 transition ease-in duration-300">
      Read more testimonials
    </button>
  </div>
  <div className="bg-gray-200 w-full md:w-2/4 px-2">
    <AnimatedTestimonial />
  </div>
</section>

    </>
  );
};

export default Home;
