import { faCapsules, faDiagnoses, faSyringe, faTruckMedical, faUserDoctor, faUserNurse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './SevvicesContent.css'
import '../Services/Services.css'

function ServicesContent() {
  return (
    <>
        <div className="services-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="uniq-box one-box">
                            <FontAwesomeIcon icon={faDiagnoses} />
                            <h2>Diagnostics</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button>View More</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="uniq-box two-box">
                            <FontAwesomeIcon icon={faCapsules} />
                            <h2>Treatment</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button>View More</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="uniq-box three-box">
                            <FontAwesomeIcon icon={faUserDoctor} />
                            <h2>Surgery</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button>View More</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="uniq-box four-box">
                            <FontAwesomeIcon icon={faSyringe} />
                            <h2>Vaccine</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button>View More</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="uniq-box five-box">
                            <FontAwesomeIcon icon={faTruckMedical} />
                            <h2>Emergency</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button>View More</button>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                        <div className="uniq-box six-box">
                            <FontAwesomeIcon icon={faUserNurse} />
                            <h2>Qualified Doctors</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <button>View More</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default ServicesContent