import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './BookingHeading.css'
import imgone from '../../images/download (16).png'
import imgtwo from '../../images/download (17).png'
function BookingHeading() {
  return (
    <>
        <div className="booking-us-heading">
            <h2>Booking</h2>
            <p> <FontAwesomeIcon icon={faHouse} /> <Link to="/">Home</Link> / <span>Booking</span> </p>
            <div className="images-deocre-booking">
                <img src={imgone} alt="" />
                <img src={imgtwo} alt="" />
            </div>
        </div>
    </>
  )
}

export default BookingHeading