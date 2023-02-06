
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function TSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="slider-box">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem omnis eveniet tempora error tempore debitis obcaecati deleniti nihil. Rem, qui dignissimos repudiandae doloremque quos quo, cupiditate eum modi quae atque ab?</p>

                <h6>JOE DEO</h6>
                <h3>Patient</h3>
                <span>i,,Z</span>
            </div>
            <div className="slider-svg">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slider-box">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem omnis eveniet tempora error tempore debitis obcaecati deleniti nihil. Rem, qui dignissimos repudiandae doloremque quos quo, cupiditate eum modi quae atque ab?</p>

                <h6>John Deo</h6>
                <h3>Patient</h3>
                <span>ii,,Z</span>
            </div>
            <div className="slider-svg">
              <FontAwesomeIcon icon={faQuoteLeft} />
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
