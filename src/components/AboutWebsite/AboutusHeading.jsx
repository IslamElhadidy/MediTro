import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './AboutusHeading.css'
import imgone from '../../images/download (16).png'
import imgtwo from '../../images/download (17).png'
function AboutusHeading() {
  return (
    <>
        <div className="about-us-heading">
            <h2>About Us</h2>
            <p> <FontAwesomeIcon icon={faHouse} /> <Link to="/">Home</Link> / <span>About Us</span> </p>
            <div className="images-deocre-aboutusWebsite">
                <img src={imgone} alt="" />
                <img src={imgtwo} alt="" />
            </div>
        </div>
    </>
  )
}

export default AboutusHeading