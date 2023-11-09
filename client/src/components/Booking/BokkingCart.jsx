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
    <section className={`bg-white shadow-2xl  rounded-md sm:rounded text-sm    w-[27.2rem]  h-[32rem] mx-3  ${ booking ? 'z-10' : '' }`}>
      <BookingProcess booking={booking}>
        {(booking?<PickUp/>:<PickUp button/>)}
      </BookingProcess>
    </section>
  )
}

export default BokkingCart


