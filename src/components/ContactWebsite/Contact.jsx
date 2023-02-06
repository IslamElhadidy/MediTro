import Footer from '../Footer/Footer'
import Links from '../links/Links'
import ContactContent from './ContactContent'
import ContactHeading from './ContactHeading'
import './ContactContent.css'
import { faEnvelope, faLocationDot, faTty } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact() {
  return (
    <>
            <Links />
            <ContactHeading />
            <ContactContent />
            <div className="info pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                            <div className="box-info first-info">
                                <FontAwesomeIcon icon={faTty} />
                                <h4>Contact Number</h4>
                                <span>+001 123 456 790</span>
                                <span>+002 3424 44 00</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                            <div className="box-info sec-info">
                                <FontAwesomeIcon icon={faEnvelope} />
                                <h4>Email Address</h4>
                                <span>info@yourdomain.com</span>
                                <span>example@support.com</span>
                            </div>                            
                        </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                                <div className="box-info thrd-info">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <h4>Location</h4>
                                    <span>Mansoura Qism 2, El Mansoura, Dakahlia Governorate , Egypt</span>
                                </div>                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default Contact