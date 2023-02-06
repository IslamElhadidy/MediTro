import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import './BlogsHeading.css'
import imgone from '../../images/download (16).png'
import imgtwo from '../../images/download (17).png'
function BlogsHeading() {
  return (
    <>
        <div className="blogs-heading">
            <h2>Blog Grid 3</h2>
            <p> <FontAwesomeIcon icon={faHouse} /> <Link to="/">Home</Link> / <span>Blog Grid 3</span> </p>
            <div className="images-deocre-blogs">
                <img src={imgone} alt="" />
                <img src={imgtwo} alt="" />
            </div>
        </div>
    </>
  )
}

export default BlogsHeading