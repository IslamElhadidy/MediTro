import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './ErrorHeading.css'
import imgone from '../../images/download (16).png'
import imgtwo from '../../images/download (17).png'

function ErrorHeading() {
  return (
    <>
    <div className="Error-heading">
        <h2>Page Not Found</h2>
        <p> <FontAwesomeIcon icon={faHouse} /> <Link to="/">Home</Link> / <span>Error404</span> </p>
        <div className="images-deocre-Error">
            <img src={imgone} alt="" />
            <img src={imgtwo} alt="" />
        </div>
    </div>
</>
  )
}

export default ErrorHeading