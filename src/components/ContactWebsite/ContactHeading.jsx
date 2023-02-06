import './ContactHeading.css'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import imgone from '../../images/download (16).png'
import imgtwo from '../../images/download (17).png'
function ContactHeading() {
  return (
    <>
        <div className="contact-heading">
            <h2>Contact Us</h2>
            <p> <FontAwesomeIcon icon={faHouse} /> <Link to="/">Home</Link> / <span>Contact Us</span> </p>
            <div className="images-deocre-contact">
                <img src={imgone} alt="" />
                <img src={imgtwo} alt="" />
            </div>
        </div>
    </>
  )
}

export default ContactHeading