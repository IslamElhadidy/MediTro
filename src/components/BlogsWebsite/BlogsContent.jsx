import newsone from '../../images/news-1.jpg'
import doctoreone from '../../images/doctor-1.jpg'

import newstwo from '../../images/news.2.jpg'
import doctoretwo from '../../images/doctor-2.jpg'

import newsthree from '../../images/news-3.jpg'
import doctorethree from '../../images/doctor-3.jpg'

import newsfour from '../../images/news-4.jpg'
import doctorefour from '../../images/doctor-4.jpg'

import newsfive from '../../images/news-5.jpg'
import doctorefive from '../../images/doctor-5.jpg'

import newsseven from '../../images/news-7.jpg'
import newseight from '../../images/news8.jpg'
import newsnine from '../../images/news9.jpg'
import newsten from '../../images/news10.jpg'

import '../News/New.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

function BlogsContent() {
  return (
    <>
        <div className="blogs mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="news-box">
                    <img src={newsone} alt="" />
                    <div className="info">
                        <div className="name">
                            <img src={doctoreone} alt="" />
                            <h6>Sally</h6>
                        </div>
                        <div className="date">
                            <FontAwesomeIcon icon={faCalendarCheck} />
                            22 May 2000
                        </div>
                    </div>
                    <p>In This Hospital There Are Special Surgeon</p>
                    <button>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="news-box">
                    <img src={newstwo} alt="" />
                    <div className="info">
                        <div className="name">
                            <img src={doctoretwo} alt="" />
                            <h6>Maria</h6>
                        </div>
                        <div className="date">
                        <FontAwesomeIcon icon={faCalendarCheck} />
                            30 Mars 2003
                        </div>
                    </div>
                    <p>Health Will Be A Thing Of The Past And Here's Why</p>
                    <button>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="news-box">
                    <img src={newsthree} alt="" />
                    <div className="info">
                        <div className="name">
                            <img src={doctorethree} alt="" />
                            <h6>John Deo</h6>
                        </div>
                        <div className="date">
                        <FontAwesomeIcon icon={faCalendarCheck} />
                            11 Mars 2003
                        </div>
                    </div>
                    <p>Dental Care for Women is very important</p>
                    <button>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="news-box">
                    <img src={newsfour} alt="" />
                    <div className="info">
                        <div className="name">
                            <img src={doctorefour} alt="" />
                            <h6>Maichel</h6>
                        </div>
                        <div className="date">
                        <FontAwesomeIcon icon={faCalendarCheck} />
                            14 July 2021
                        </div>
                    </div>
                    <p>Can you get a diflucan prescription online?</p>
                    <button>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="news-box">
                    <img src={newsfive} alt="" />
                    <div className="info">
                        <div className="name">
                            <img src={doctorefive} alt="" />
                            <h6>Koller</h6>
                        </div>
                        <div className="date">
                        <FontAwesomeIcon icon={faCalendarCheck} />
                            24 Sept 1992
                        </div>
                    </div>
                    <p>Why Is Skin Surgeon Considered Underrated</p>
                    <button>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>







                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="news-box">
                    <img src={newsseven} alt="" />
                    <div className="info">
                        <div className="name">
                            <img src={doctoreone} alt="" />
                            <h6>Michel</h6>
                        </div>
                        <div className="date">
                            <FontAwesomeIcon icon={faCalendarCheck} />
                            17 July 2021
                        </div>
                    </div>
                    <p>Health Will Be A Thing Of The Past And Here</p>
                    <button>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="news-box">
                    <img src={newseight} alt="" />
                    <div className="info">
                        <div className="name">
                            <img src={doctoreone} alt="" />
                            <h6>Peter Baker</h6>
                        </div>
                        <div className="date">
                            <FontAwesomeIcon icon={faCalendarCheck} />
                            16 July 2021
                        </div>
                    </div>
                    <p>Can you get a diflucan prescription online?</p>
                    <button>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="news-box">
                    <img src={newsnine} alt="" />
                    <div className="info">
                        <div className="name">
                            <img src={doctoreone} alt="" />
                            <h6>Sonar Moyna</h6>
                        </div>
                        <div className="date">
                            <FontAwesomeIcon icon={faCalendarCheck} />
                            15 July 2021
                        </div>
                    </div>
                    <p>Ten tremendous effects on health do you know them?</p>
                    <button>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                    <div className="news-box">
                    <img src={newsten} alt="" />
                    <div className="info">
                        <div className="name">
                            <img src={doctoreone} alt="" />
                            <h6>Michel</h6>
                        </div>
                        <div className="date">
                            <FontAwesomeIcon icon={faCalendarCheck} />
                            13 July 2021
                        </div>
                    </div>
                    <p>Everyone need to go Dentist regularly</p>
                    <button>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogsContent