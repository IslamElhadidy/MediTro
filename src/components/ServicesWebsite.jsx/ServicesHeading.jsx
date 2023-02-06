import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './ServicesHeading.css'
import imgone from '../../images/download (16).png'
import imgtwo from '../../images/download (17).png'


function ServicesHeading() {
    return (
      <>
            <div className="services-heading">
                <h2>Services</h2>
                <p> <FontAwesomeIcon icon={faHouse} /> <Link to="/">Home</Link> / <span>Services</span> </p>
                <div className="images-deocre-services">
                    <img src={imgone} alt="" />
                    <img src={imgtwo} alt="" />
                </div>
            </div>
      </>
    )
  }
  
  export default ServicesHeading