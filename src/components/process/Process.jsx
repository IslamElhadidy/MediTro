import './Process.css'
import img1 from '../../images/download (9).png'
import img2 from '../../images/download (1).png'
import img3 from '../../images/download (10).png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

function Process() {
  return (
    <>
        <div className="process">
            <div className="container">
                <div className="heading-title">
                    <h6>Working Process</h6>
                    <h2>How We Works?</h2>
                </div>
                <div className=" box-container">
                    <div className="onebox">
                        <span>01</span>
                        <h4>Make Appointmnet</h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                        <button>View More <FontAwesomeIcon icon={faArrowCircleRight} /></button>
                    </div>
                    <div className="onebox active mb-lg-5 mb-md-5">
                        <span>02</span>
                        <h4>Take Treatment</h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                        <button>View More <FontAwesomeIcon icon={faArrowCircleRight} /></button>
                    </div>
                    <div className="onebox">
                        <span>03</span>
                        <h4>Registration</h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of.</p>
                        <button>View More <FontAwesomeIcon icon={faArrowCircleRight} /></button>
                    </div>
                </div>
                <div className="images-decore">
                    <img className='image-one-d' src={img1} alt="" />
                    <img className='image-two-d' src={img2} alt="" />
                    <img className='image-three-d' src={img3} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Process