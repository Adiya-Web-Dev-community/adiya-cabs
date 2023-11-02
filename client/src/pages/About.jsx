import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { aboutQuerys } from "../configs/aboutQuerys";
console.log(aboutQuerys);

const About = () => {
  const navigate = useNavigate();
  const { query } = useParams();
  const one = eval(`aboutQuerys['${query}']`);

  return (
    <>
      <section
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1532931899774-fbd4de0008fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)`,
        }}
        className="bg-slate-900 h-auto sm:h-[calc(100vh)] bg-cover bg-center flex items-center justify-center font-montserrat text-slate-700"
      >
        <h1 className="text-white/75 text-7xl hidden xl:flex flex-col font-extralight text-center">
          <span>About meru</span>
          <span className="text-6xl">Trust, comfort & reliability</span>
        </h1>
      </section>

      <nav className="my-5 ml-5 md:ml-20 space-x-2.5 font-montserrat">
        <button
          onClick={() => navigate("/about/our-journey")}
          className={`border border-red-500 text-red-500 hover:text-white hover:bg-red-500 px-3 pt-[5px] pb-1.5 rounded-md duration-200 ${
            query === "our-journey" ? "bg-red-500 text-white" : ""
          }`}
        >
          Our journey
        </button>
        <button
          onClick={() => navigate("/about/our-services")}
          className={`border border-red-500 text-red-500 hover:text-white hover:bg-red-500 px-3 pt-[5px] pb-1.5 rounded-md duration-200 ${
            query === "our-services" ? "bg-red-500 text-white" : ""
          }`}
        >
          Our services
        </button>
        <button
          onClick={() => navigate("/about/our-investors")}
          className={`border border-red-500 text-red-500 hover:text-white hover:bg-red-500 px-3 pt-[5px] pb-1.5 rounded-md duration-200 ${
            query === "our-investors" ? "bg-red-500 text-white" : ""
          }`}
        >
          Our investors
        </button>
      </nav>

      <section className="mx-5 md:mx-20 mb-10">
        <div
          style={{
            backgroundImage: `url(${one.img})`,
          }}
          className="bg-cover bg-center w-full h-72 rounded-xl bg-slate-300"
        ></div>
        {one.matter}
      </section>
    </>
  );
};

export default About;
