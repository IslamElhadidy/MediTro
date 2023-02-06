import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCapsules, faDiagnoses, faSyringe, faUserDoctor } from '@fortawesome/free-solid-svg-icons';
function Slider() {
  return (
        <Swiper
        autoplay={{
            delay:  1000,
        }}
        loop={true}
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={3}


    >
            <div className="all-swipers">
            <SwiperSlide>
            <div className="uniq-box one-box">
                <FontAwesomeIcon icon={faDiagnoses} />
                <h2>Diagnostics</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>View More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="uniq-box two-box">
                <FontAwesomeIcon icon={faCapsules} />
                <h2>Treatment</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>View More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="uniq-box three-box">
                <FontAwesomeIcon icon={faUserDoctor} />
                <h2>Surgery</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>View More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>            <div className="uniq-box four-box">
                <FontAwesomeIcon icon={faSyringe} />
                <h2>Vaccine</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button>View More</button>
            </div></SwiperSlide>
            </div>
      
    </Swiper>
  )
}

export default Slider