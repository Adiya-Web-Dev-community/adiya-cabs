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
<section className="w-full flex flex-col xl:flex-row mb-6 md:pt-6 bg-gray-50 justify-center md:px-8 px-6 items-center">
  <RentalsSubscription />
  <img src={rentalImg} className="w-[310px] md:w-[40rem] lg:w-[40rem] xl:w-[45rem] right-0 top-0" />
</section>

      <section className="md:px-10">
        <TrendingOffers />
      </section>
      <section className="md:px-10 mt-24">
        <SaleRentalCar />
      </section>
      <section className="md:px-10 mt-24 ">
        <BookingRules />
      </section>
      <section className="md:px-10 mt-24">
        <Features />
      </section>
      <section className="md:px-10 mt-24">
        <Info />
      </section>
    </main>
  );
};

export default AdiyaRental;
