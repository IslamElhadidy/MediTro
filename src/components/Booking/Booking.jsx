import Appointment from '../Appointment/Appointment'
import Footer from '../Footer/Footer'
import Links from '../links/Links'
import './Booking.css'
import BookingHeading from './BookingHeading'
function Booking() {
  return (
    <>
        <Links />
        <BookingHeading />
        <div className="private-image">
            <Appointment />
        </div>
        <Footer />
    </>
  )
}

export default Booking