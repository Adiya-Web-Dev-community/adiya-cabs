const Info = () => {
  return (
    <main className="mx-5 md:mx-20 my-20 font-montserrat text-slate-700 space-y-10 ">
      <section className="flex flex-col-reverse lg:flex-row items-center justify-center space-x-0 lg:space-x-32">
        <div className="w-auto md:w-[700px] mt-2.5 lg:mt-0">
          <h1 className="text-xl md:text-3xl">
            <span className="text-red-400">Outstation</span> rides
          </h1>
          <p className="text-xs md:text-sm mt-1 lg:mt-2.5 mb-2.5 lg:mb-5">
            With a choice of cars from economy hatchbacks to sedans, from
            premium sedans to SUVs and luxury cars.
          </p>
          <a
            href="#"
            className="bg-blue-400 hover:bg-blue-500 pt-1.5 pb-2 px-5 rounded-md text-white duration-200 text-sm md:text-base cursor-pointer"
          >
            Book ride
          </a>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://blog.hubspot.com/hs-fs/hubfs/good%20car%20salesperson%20closing%20a%20deal%20with%20a%20car%20shopper.jpg?width=893&height=600&name=good%20car%20salesperson%20closing%20a%20deal%20with%20a%20car%20shopper.jpg)",
          }}
          className="w-[350px] h-[175px] md:w-[700px] md:h-[350px] bg-cover bg-center rounded-xl"
        ></div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-32">
        <div
          style={{
            backgroundImage:
              "url(https://www.ezidrive.in/blog/wp-content/uploads/2019/06/blog-2.jpg)",
          }}
          className="w-[350px] h-[175px] md:w-[700px] md:h-[350px] bg-cover bg-center rounded-xl"
        ></div>
        <div className="w-auto md:w-[700px] mt-2.5 lg:mt-0">
          <h1 className="text-xl md:text-3xl">
            <span className="text-red-400">Airport</span> rides
          </h1>
          <p className="text-xs md:text-sm mt-1 lg:mt-2.5 mb-2.5 lg:mb-5">
            Airport cab service is our forte! Our airport taxi service is
            operational at 5 major airports of India with dedicated airport taxi
            booking counters set up within the airport premises.
          </p>
          <a
            href="#"
            className="bg-blue-400 hover:bg-blue-500 pt-1.5 pb-2 px-5 rounded-md text-white duration-200 text-sm md:text-base cursor-pointer"
          >
            Book ride
          </a>
        </div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row items-center justify-center space-x-0 lg:space-x-32">
        <div className="w-auto md:w-[700px] mt-2.5 lg:mt-0">
          <h1 className="text-xl md:text-3xl">
            <span className="text-red-400">Rentals</span> rides
          </h1>
          <p className="text-xs md:text-sm mt-1 lg:mt-2.5 mb-2.5 lg:mb-5">
            For comfortable rides in Hatchbacks, Sedans and MUVs All city car
            rentals are equipped with water bottle, tissue box, etc.
          </p>
          <a
            href="#"
            className="bg-blue-400 hover:bg-blue-500 pt-1.5 pb-2 px-5 rounded-md text-white duration-200 text-sm md:text-base cursor-pointer"
          >
            Book ride
          </a>
        </div>
        <div
          style={{
            backgroundImage:
              "url(https://images.hertz.com/rentacar/content/US/product_services/one-way-car-rentals.jpg)",
          }}
          className="w-[350px] h-[175px] md:w-[700px] md:h-[350px] bg-cover bg-center rounded-xl"
        ></div>
      </section>
    </main>
  );
};

export default Info;
