import RentalsSubscription from "../components/rentals/RentalsSubscription";
import BookingRules from "../components/rentals/BookingRules";
import Features from "../components/rentals/Features";
import rentalImg from "../assets/rentals/frontPage/rental-image.png";
import TrendingOffers from "../components/rentals/TrendingOffers";
import SaleRentalCar from "../components/rentals/SaleRentalCar";
import Info from "../components/rentals/Info";
const AdiyaRental = () => {
  return (
    <main>
      <section className="h-screen w-full relative  mb pt-6 bg-gray-50 flex items-center  px-20 z-[5]">
        <RentalsSubscription />
        <img src={rentalImg} className="w-[45rem] absolute right-0 top-0 " />
      </section>
      <section>
        <TrendingOffers />
      </section>
      <section className="px-20 mt-24 ">
        <SaleRentalCar />
      </section>
      <section className="px-20 mt-24 ">
        <BookingRules />
      </section>
      <section className="px-20  mt-24 ">
        <Features />
      </section>
      <section className="px-20  mt-24 ">
        <Info />
      </section>
    </main>
  );
};

export default AdiyaRental;
