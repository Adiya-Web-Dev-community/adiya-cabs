import { useParams } from "react-router-dom"
import BookingProcess from "./process/BookingProcees"
import PickUp from "./process/PickUp"

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer
} from "@react-google-maps/api";

const BokkingCart = ({ booking }) => {

  const {bookingStatus} = useParams()


  return (
    <section className={`bg-white shadow-2xl xl:mt-4 rounded-md sm:rounded text-sm items-center md:w-[24.5rem] w-full h-[34rem] mx-9  ${ booking ? 'z-10' : '' }`}>
      <BookingProcess booking={booking}>
        {(booking?<PickUp/>:<PickUp button/>)}
      </BookingProcess>
    </section>
  )
}

export default BokkingCart;


