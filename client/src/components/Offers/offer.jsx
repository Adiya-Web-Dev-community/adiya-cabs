import React from "react";
import { ImTruck } from "react-icons/im";
import { GiFlexibleStar } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa6";

const Offers = () => {
  return (
    <div>
      <div className="md:px-20 px-3 mt-20">
        <div class="flex flex-col sm:flex-row justify-between gap-10 sm:gap-20 sm:p-0">
  <div class="sm:w-1/2 px-4">
    <h1 class="text-4xl lg:text-6xl">
      <span>Discover</span> Your Ideal <br class="hidden lg:block" />
      Transportation
    </h1>
    <p class="text-lg lg:text-xl py-8">
      How do I find the perfect transportation option? You can explore various transportation choices through our mobile App or Adiya websites. Simply specify your destination, select your travel date, and find the ideal transportation solution for your needs.
    </p>
    <p class="text-lg">Download Our App for Free</p>
  </div>
  <div class="w-full sm:w-1/2 flex justify-center">
    <img
      src="src/assets/mobile.svg"
      alt="Transportation Image"
      class="max-w-xs sm:max-w-full"
    />
  </div>
</div>

      </div>
      <hr />
      <div className="flex justify-between text-center flex-wrap px-5 md:px-20">
        <div className="w-full md:w-1/2 lg:w-auto flex flex-col items-center py-5">
          <p className="text-xl mt-4 md:mt-0">10k+</p>
          <p>delivers</p>
          <p className="text-xl">100k+</p>
          <p>Users using the App</p>
        </div>
  
        <div className="w-full md:w-1/2 lg:w-auto mt-5 flex flex-col items-center">
  <p>
    <ImTruck size={30} />
  </p>
  <p className="text-xl text-black-700">Travels like a Boss</p>
  <p className="text-center">
    Simple Search for your <br />
    Destination, Choose the Date
  </p>
</div>

        <div className="w-full md:w-1/2 lg:w-auto mt-5 flex flex-col items-center">
          <p>
            <GiFlexibleStar size={30} />
          </p>
          <p className="text-xl">Flexible rentals</p>
          <p>
            you want to travel And Pick <br /> Carpool That Suits your Best
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-auto mt-5 flex flex-col items-center">
          <p>
            <FaDollarSign size={30} />
          </p>
          <p className="text-xl">Flexible rentals</p>
          <p>
            you want to travel And Pick <br /> Carpool That Suits your Best
          </p>
        </div>
      </div>

      <hr />
      <div>
        <div>
          <h1 className="text-center text-4xl py-8 mt-10">
            WHY RIDE WITH ADIYACAB
          </h1>
        </div>


<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 justify-between lg:px-25 px-2">
  <div class="max-w-sm mx-auto mb-4 rounded-lg overflow-hidden shadow-lg bg-white">
    <img src="https://plus.unsplash.com/premium_photo-1661290470322-a313098e7c2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVudGFscyUyMGNhcnN8ZW58MHx8MHx8fDA%3D" class="w-full" alt="Rentals for Every Occasion" />
    <div class="text-center mt-4">
      <p class="text-xl font-bold">Rentals for Every Occasion</p>
      <p class="mt-3 text-gray-700">
        It could mean having access to rental options for every occasion or event, providing convenient transportation solutions tailored to your needs.
      </p>
    </div>
  </div>

  <div class="max-w-sm mx-auto mb-4 rounded-lg overflow-hidden shadow-lg bg-white ">
    <img src="src/assets/driving.svg" class="w-full" alt="Flexible Riding Services" />
    <div class="text-center mt-4">
      <p class="text-xl font-bold">Flexible Riding Services</p>
      <p class="mt-3 text-gray-700">
        Experience flexibility with our riding services, whether it's a short commute or a leisurely ride, we've got you covered with reliable options to get you where you need to go.
      </p>
    </div>
  </div>
  <div class="max-w-sm mx-auto mb-4 rounded-lg overflow-hidden shadow-lg bg-white">
    <img src="https://images.unsplash.com/photo-1485739139909-d0d1783a7196?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENvbnZlbmllbnQlMjBDYWIlMjBTb2x1dGlvbnN8ZW58MHx8MHx8fDA%3D" class="w-full" alt="Convenient Cab Solutions" />
    <div class="text-center mt-4">
      <p class="text-xl font-bold">Convenient Cab Solutions</p>
      <p class="mt-3 text-gray-700">
        Discover convenient cab solutions tailored to your needs, offering hassle-free transportation options for your daily commute or special occasions.
      </p>
    </div>
  </div>
</div>


        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8  px-3 mb-4">
  <div class="max-w-sm rounded-lg  mx-auto overflow-hidden shadow-lg bg-white px-3 py-3">
    <img src="src/assets/driving.svg" class="w-full" />
    <div class="text-center mt-4">
      <p class="text-xl font-bold">Rentals for Every Need</p>
      <p class="mt-3 text-gray-700">
        Explore a wide range of rental options tailored to your needs, ensuring you have the right transportation solution for any occasion.
      </p>
    </div>
  </div>

  <div class="max-w-sm rounded-lg  mx-auto overflow-hidden shadow-lg bg-white px-3 py-3">
    <img src="https://images.unsplash.com/photo-1682687219356-e820ca126c92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbmFsaXplJTIwcmlkaWluZyUyMGFuZCUyMGV4cGVyaWVuY2UlMjBpbiUyMGNhcnN8ZW58MHx8MHx8fDA%3D" class="w-full" />
    <div class="text-center mt-4">
      <p class="text-xl font-bold">Personalized Riding Experiences</p>
      <p class="mt-3 text-gray-700">
        Enjoy personalized riding experiences designed to match your preferences and schedule, making every journey convenient and comfortable.
      </p>
    </div>
  </div>
  <div class="max-w-sm rounded-lg mx-auto overflow-hidden shadow-lg bg-white px-3 py-3">
    <img src="data:image/jpeg;base64,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" class="w-full" />
    <div class="text-center mt-4">
      <p class="text-xl font-bold">Efficient Cab Services</p>
      <p class="mt-3 text-gray-700">
        Experience efficient cab services that prioritize your time and comfort, ensuring seamless transportation for all your travel needs.
      </p>
    </div>
  </div>
</div>

      
      </div>
    </div>
  );
};

export default Offers;
