import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import organization from "../../assets/mobile.svg";

const Service = () => {
  return (
    <div>
      <div className="flex md:px-20 md:mt-16 mt-2 px-5">
        <div className=" bg-gradient-to-r from-[#e4e5e9] to-[#f4efef] ">
          <div className="flex md:gap-15  lg:flex-row flex-col px-5 md:px-0">
            <div className=" md:mx-20  md:mt-20 mt-5">
              <p className="flex justify-center items-center text-lg">TAKE A CAB WHERE YOU ARE</p>
              <p className="md:text-4xl text-1xl mt-4 flex justify-center items-center">
                MAKE YOUR RIDE <br />
                SMART AND EASY
              </p>
              <p className="mt-5 text-center">
                The best taxi booking for the century to save time and
                make your payment.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center">
                <span className="flex md:gap-6 gap-1 mt-12">
                  <FaStar size={30} color="gold" />
                  <span className="flex-col">
                    <p>5.0</p>
                    <p>reviews</p>
                  </span>
                </span>
                <span className="flex md:gap-6 mt-12 gap-1 md:ml-10">
                  <AiOutlineMessage size={30} color="gold" />
                  <span className="flex-col">
                    <p>2K+</p>
                    <p>Good response</p>
                  </span>
                </span>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={organization}
                alt="Enterprises-Image"
                className=" w-[250px] md:w-[800px] md:h-[600px] h-[350px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="md:px-20 px-5">
       
      "Leading the Revolution in Tech-Enabled Ride-Hailing"

Adiya Cab Solutions has been at the forefront of introducing innovative tech-enabled ride-hailing services in India.
With a legacy spanning over two decades and serving millions of customers, we take immense pride in being the foremost trusted cab service provider nationwide.
Adiya Cab Solutions' extensive fleet of meticulously maintained cars, coupled with cutting-edge technology integration, ensures a seamless and secure ride-hailing experience for our valued customers across 24 cities in India.
     
      </div>
      <div className="md:px-20 px-5">
        <p className="text-2xl mt-6">Adiya cab solution</p>
        <p>Get a chauffeured ride anywhere, anytime</p>
      </div>

      <div class="md:px-20 grid grid-cols-1 md:grid-cols-2 px-5 md:gap-11 mt-6 gap-4">
        <div class="bg-white rounded-lg shadow-md">
          <div class="p-6">
            <div class="flex items-center">
              <li></li>
              <p class="text-2xl ml-3">Adiya city rides</p>
            </div>
            <p class="mt-2">
              Get a reliable ride at any time and pay as you use it!
            </p>
            <p class="mt-4">
            Rely on Adiya Cab Solutions for effortless travel arrangements! Simply book your ride through our user-friendly app and have a professional chauffeur waiting at your doorstep. Explore the city comfortably in your choice of air-conditioned cab - whether it's a Hatchback, Sedan, or SUV, driven by our well-trained and verified driver-partners. Our fleet comes equipped with advanced GPRS-based safety features such as ICE alerts and trip tracking for added peace of mind. Plus, our 24/7 contact center ensures that assistance is readily available throughout your journey.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md">
  <div class="p-6">
    <div class="flex items-center">
      <li></li>
      <p class="text-2xl ml-3">Adiya Airport Transfers</p>
    </div>
    <p class="mt-2">
      We are a licensed fleet operator serving all major airports in India, including Mumbai, Delhi, Bengaluru, and Hyderabad.
    </p>
    <p class="mt-4">
      Ensure timely arrival at the airport by choosing a trusted airport cab service provider like Adiya Cab Solutions! With our Schedule a Ride feature, you can book your airport transportation in advance. Upon your arrival, find our dedicated fleet waiting for you in the 'priority lane' at major airports across India, including Mumbai, Delhi, Bengaluru, and Hyderabad. We have been serving passengers for over a decade with excellence. Simply approach our booking counters or airport managers for assistance.
    </p>
  </div>
</div>


<div class="bg-white rounded-lg shadow-md">
  <div class="p-6">
    <div class="flex items-center">
      <li></li>
      <p class="text-2xl ml-3">Adiya Hourly Car Rentals</p>
    </div>
    <p class="mt-2">Looking to rent a car? Look no further.</p>
    <p class="mt-4">
      Explore Adiya Cab Solutions' affordable and flexible hourly rental packages, offering chauffeured cars in various categories including hatchbacks, sedans, SUVs, as well as luxury and premium vehicles. Whether it's a multi-stop itinerary, a day-long excursion, or a short trip with loved ones, our diverse and modern fleet has the perfect ride for every occasion.
    </p>
  </div>
</div>


<div class="bg-white rounded-lg shadow-md">
  <div class="p-6">
    <div class="flex items-center">
      <li></li>
      <p class="text-2xl ml-3">Adiya Outstation</p>
    </div>
    <p class="mt-2">Enjoy chauffeured rides for intercity travel</p>
    <p class="mt-4">
      Whether it's for business trips, adventurous road journeys with friends and family, spiritual pilgrimages, or romantic getaways, Adiya Cab Solutions has got you covered! With a rich history of serving millions of customers, Adiya Outstation connects you to over 7000 destinations across 100 cities in India. Our chauffeurs are specially trained for long drives, ensuring a safe and comfortable journey. Now you can escape whenever you desire with a secure, reliable, and trusted Adiya Outstation ride.
    </p>
  </div>
</div>

      </div>
      <div className="md:px-20">
  <div className="md:px-20 mt-7 px-4">
    Easily book your one-way or round trip on the Adiya Cab Solutions App, on our website, or connect with our 24/7 call center, and get moving in no time!
  </div>

  <div class=" px-5">
    <p class="text-lg font-bold mb-4">AdiyaBiz</p>
    <p class="text-lg text-gray-700">Comprehensive tech-driven travel management system tailored for corporates and businesses</p>
  </div>

  <div class=" px-5 mt-6">
    <p class="text-lg font-semibold">AdiyaBiz offers an all-in-one solution for efficient corporate travel management, aimed at reducing costs and enhancing workplace productivity.</p>
    <p class="text-base text-gray-700 mt-2 leading-relaxed">We handle everything from bookings, billing, and reporting to seamlessly integrating ground operations with corporate resources in a fully automated travel management system, customized to streamline your business travel needs. Experience seamless corporate mobility with our fleet of chauffeured hatchbacks, sedans, MUVs, premium sedans, SUVs, and electric cars (Adiya EVGO).</p>
  </div>

  <div className=" px-5">
    <p>Our Corporate Travel Solutions include,</p>
  </div>
</div>

<div className="md:px-20 px-5 grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="mt-6 shadow-lg p-5">
    <div className="flex">
      <li></li>
      <p className="text-2xl">Corporate Commute Solutions</p>
    </div>
    <div className="px-5">
      Streamline employee transportation to reduce costs and commuting hassles.
    </div>
  </div>
  <div className="mt-6 shadow-lg p-5">
    <div className="flex">
      <li></li>
      <p className="text-2xl">Airport Shuttle Services</p>
    </div>
    <div className="px-5">Reliable transportation for seamless airport transfers.</div>
  </div>
  <div className="mt-6 shadow-lg p-5">
    <div className="flex">
      <li></li>
      <p className="text-2xl">Car Rentals</p>
    </div>
    <div className="px-5">
      Rent chauffeured cars with flexible hourly, weekly, and monthly packages for both city and executive needs.
    </div>
  </div>
  <div className="mt-6 shadow-lg p-5">
    <div className="flex">
      <li></li>
      <p className="text-2xl">City Transportation</p>
    </div>
    <div className="px-5">
      On-demand city rides for efficient point-to-point travel within urban areas.
    </div>
  </div>
  <div className="mt-6 shadow-lg p-5">
    <div className="flex">
      <li></li>
      <p className="text-2xl">Intercity Business Travel</p>
    </div>
    <div className="px-5">
      Reliable chauffeured outstation cabs for corporate travel between cities.
    </div>
  </div>
  <div className="mt-6 shadow-lg p-5">
    <div className="flex">
      <li></li>
      <p className="text-2xl">Event Transportation</p>
    </div>
    <div className="px-5">
      Efficient management of bulk bookings for events, conferences, and group travel.
    </div>
  </div>
</div>

<div className="md:px-20 mt-7">
  <div className="px-5">Discover the Advantages of Adiya Services!</div>
  <div className="md:px-20 text-base md:text-1xl mt-7 md:mt-0 md:flex md:justify-center md:items-center flex flex-col md:flex-row justify-center items-center">
    <span className="mx-2">Cost-Efficient Solutions</span>
    <span className="hidden md:inline">|</span>
    <span className="mx-2">Reliable Transportation</span>
    <span className="hidden md:inline">|</span>
    <span className="mx-2">Transparent Operations</span>
    <span className="hidden md:inline">|</span>
    <span className="mx-2">Flexible Service Options</span>
    <span className="hidden md:inline">|</span>
    <span className="mx-2">Competitive Pricing</span>
    <span className="hidden md:inline">|</span>
    <span className="mx-2">No Hidden Fees</span>
  </div>
</div>
<div className="md:px-20">
<div className=" px-5 mt-7">
  Revolutionize your business transportation experience with Adiya Cab Services…
</div>
<div className=" mt-6 px-5">
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Get Started
  </button>
</div>
<div className=" px-5">
  <p>Adiya Spot</p>
  <p className="mt-6">
    Get an Adiya cab on the spot! Cabs can be boarded ‘on-the-spot’ by your teams, guests, and customers within minutes as a fleet of chauffeured cars will be present in your premises at all times!
  </p>
</div>
<div className=" mt-7 px-5">
  A unique proposition for all corporate parks, business houses, IT hubs, malls, and large residential complexes, wherein Adiya offers assured cabs available right at the doorstep. Rides can be booked directly at the dedicated booking counters or self-service kiosks at your lobby, or via the Adiya App in a few simple steps. So, even your guests can avail an Adiya cab easily for their commute.
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 md:px-20 gap-4">
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">City Rides</div>
      <p class="text-gray-700 text-base">
        On-demand, point-to-point and efficient in-city travel solution
      </p>
    </div>
  </div>

  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Airport Transfers</div>
      <p class="text-gray-700 text-base">
        For reliable airport pick-ups and drops
      </p>
    </div>
  </div>

  <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Corporate Shuttle Services</div>
    <p class="text-gray-700 text-base">
      Dedicated shuttle services with fixed routes and timings for convenient pick-up and drop-off for employees and guests.
    </p>
  </div>
</div>

<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">Inter-city Executive Travel</div>
    <p class="text-gray-700 text-base">
      Chauffeured luxury cars available for seamless outstation corporate travel, ensuring comfort and convenience.
    </p>
  </div>
</div>

</div>

<div className="md:px-20">
  <div className="mt-5 px-5 md:px-0">
    <p>Get In Touch</p>
  </div>
</div>
<div className="md:px-20 px-5">
  <div>
    For business collaborations and queries, write to us at corporate@adiya.com
  </div>
  <div className="mt-4">
    And for ride-based queries, call or mail.
  </div>
</div>
</div>
  );
};

export default Service;
