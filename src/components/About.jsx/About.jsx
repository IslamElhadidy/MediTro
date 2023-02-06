import './About.css'
import person1 from '../../images/person-1.jpg'
import person2 from '../../images/person-2.jpg'
import person3 from '../../images/person-3.jpg'
import rotateimg from '../../images/download (6).png'
import sqareimg from '../../images/download (7).png'
import dottedimg from '../../images/download (2).png'
import waveimg from '../../images/download (5).png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faSyringe, faTruck, faUserPlus } from '@fortawesome/free-solid-svg-icons'
function About() {
  return (
    <>
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <ul>
                            <li><img className='person1' src={person1} alt="" /></li>
                            <li><img className='person2' src={person2} alt="" /></li>
                            <li><img className='person3'src={person3} alt="" /></li>
                            <li>
                                <div className="box">
                                    10
                                    <span>Year Experience</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="titles">
                        <h5>About us</h5>
                        <h3>The Great Place Of Medical Hospital Center</h3>
                        <p>We provide the special tips and advice’s of heath care treatment and high level of best technology involve in the our hospital.  </p>
                        <div className="box-row-one">
                            <h4><FontAwesomeIcon icon={faTruck} />Emergency Help</h4>
                            <h4><FontAwesomeIcon icon={faBed} />Qualified Doctors</h4>
                        </div>
                        <div className="box-row-two">
                            <h4><FontAwesomeIcon icon={faUserPlus} />Emergency Help</h4> 
                            <h4><FontAwesomeIcon icon={faSyringe} />Qualified Doctors</h4>
                        </div>
                        <div className="button">Read More</div>
                        </div>
                    </div>
                    <div className="images-div">
                        <img className='img-rotate' src={rotateimg} alt="" />
                        <img className='img-square' src={sqareimg} alt="" />
                        <img className='img-dotted' src={dottedimg} alt="" />
                        <img className='img-wave' src={waveimg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About