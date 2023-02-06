import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './FaqsHeading.css'
import imgone from '../../images/download (16).png'
import imgtwo from '../../images/download (17).png'

function FaqsHeading() {
  return (
    <>
        <div className="faqs-heading">
            <h2>FAQ'S</h2>
            <p> <FontAwesomeIcon icon={faHouse} /> <Link to="/">Home</Link> / <span>Faq's</span> </p>
            <div className="images-deocre-faqswebsite">
                <img src={imgone} alt="" />
                <img src={imgtwo} alt="" />
            </div>
        </div>
    </>
  )
}

export default FaqsHeading