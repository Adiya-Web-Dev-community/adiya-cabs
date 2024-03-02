import React from "react";
import { ImTruck } from "react-icons/im";
import { GiFlexibleStar } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa6";

const Offers = () => {
  return (
    <div>
      <div className="md:px-20 px-3 mt-20">
        <div class="flex flex-col sm:flex-row justify-between gap-10 sm:gap-20 sm:p-0">
  <div class="sm:w-1/2">
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

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-5 py-5">
  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white px-3 py-3">
    <img src="src/assets/driving.svg" class="w-full" />
    <div class="text-center mt-4">
      <p class="text-xl font-bold">Rentals for Every Occasion</p>
      <p class="mt-3 text-gray-700">
        It could mean having access to rental options for every occasion or event, providing convenient transportation solutions tailored to your needs.
      </p>
    </div>
  </div>

  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white px-3 py-3">
    <img src="src/assets/driving.svg" class="w-full" />
    <div class="text-center mt-4">
      <p class="text-xl font-bold">Flexible Riding Services</p>
      <p class="mt-3 text-gray-700">
        Experience flexibility with our riding services, whether it's a short commute or a leisurely ride, we've got you covered with reliable options to get you where you need to go.
      </p>
    </div>
  </div>
  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white px-3 py-3">
    <img src="src/assets/driving.svg" class="w-full" />
    <div class="text-center mt-4">
      <p class="text-xl font-bold">Convenient Cab Solutions</p>
      <p class="mt-3 text-gray-700">
        Discover convenient cab solutions tailored to your needs, offering hassle-free transportation options for your daily commute or special occasions.
      </p>
    </div>
  </div>
</div>


        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-5 py-5">
  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white px-3 py-3">
    <img src="src/assets/driving.svg" class="w-full" />
    <div class="text-center mt-4">
      <p class="text-xl font-bold">Rentals for Every Need</p>
      <p class="mt-3 text-gray-700">
        Explore a wide range of rental options tailored to your needs, ensuring you have the right transportation solution for any occasion.
      </p>
    </div>
  </div>

  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white px-3 py-3">
    <img src="src/assets/driving.svg" class="w-full" />
    <div class="text-center mt-4">
      <p class="text-xl font-bold">Personalized Riding Experiences</p>
      <p class="mt-3 text-gray-700">
        Enjoy personalized riding experiences designed to match your preferences and schedule, making every journey convenient and comfortable.
      </p>
    </div>
  </div>
  <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white px-3 py-3">
    <img src="src/assets/driving.svg" class="w-full" />
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
