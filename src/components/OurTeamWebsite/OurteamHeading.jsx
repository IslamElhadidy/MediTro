import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './OurteamHeading.css'
import imgone from '../../images/download (16).png'
import imgtwo from '../../images/download (17).png'
function OurteamHeading() {
  return (
    <>
        <div className="our-team-heading">
            <h2>Our Team</h2>
            <p> <FontAwesomeIcon icon={faHouse} /> <Link to="/">Home</Link> / <span>Our Team</span> </p>
            <div className="images-deocre-ourteam">
                <img src={imgone} alt="" />
                <img src={imgtwo} alt="" />
            </div>
        </div>
    </>
  )
}

export default OurteamHeading