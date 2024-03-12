import Outstation from "../pages/Outstation";
import About from "../pages/About";
import MeruBizz from "../pages/MeruBizz";
import CollaboratewithUs from "../pages/CollaboratewithUs";
import { Login } from "../pages/Login";
import Booking from "../pages/Booking";
import AdiyaRentals from "../pages/AdiyaRental";
import RentalsBooking from "../pages/RentalsBooking";
import BookingSummary from "../pages/RentalsBooking/BookingSummary";
import offers from "../components/Offers/Offer";
import Service from "../components/ourservices/Service";
import Journey from "../components/ourjourney/Journey";
import Offers from "../components/Offers/Offer";

const routes = [
  {
    path: "/collobrate-with-us",
    name: "Collobrate with us",
    element: CollaboratewithUs,
  },
  { path: "/:outstation/:route", name: "Outstation", element: Outstation },
  { path: "about/:query", name: "About Page", element: About },
  { path: "/meru-biz", name: "Meru Page", element: MeruBizz },
  { path: "/sign-in", name: "Sign in", element: Login },
  { path: "/book-ride/:bookingStatus", name: "Sign in", element: Booking },
  { path: "/rentals", name: "Adiya Rentals", element: AdiyaRentals },
  {
    path: "/rentals-booking",
    name: "Rentals Booking",
    element: RentalsBooking,
  },
  {
    path: "/rentals/booking-summary",
    name: "Rentals Booking Summary",
    element: BookingSummary,
  },
  {
    path: "/offers",
    name: "offer",
    element: Offers,
  },
  {
    path: "/ourservices/service",
    name: "ourservices",
    element: Service,
  },
  {
    path: "/ourservices/ourjourney",
    name: "ourservices",
    element: Journey,
  }
];

export default routes;
