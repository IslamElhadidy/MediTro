import './New.css'
import NSlider from './NSlider'
import imgnews1 from '../../images/download (4).png'
import imgnews2 from '../../images/download (13).png'
import imgnews3 from '../../images/download (10).png'
import imgnews4 from '../../images/download (7).png'
function New() {
  return (
    <>
        <div className="news">
            <div className="container">
                <h4>Latest News</h4>
                <h3>Our Latest News</h3>
                <div className="row">
                    <div className="sliderr-box">
                      <NSlider />
                    </div>
                </div>
            </div>
            <div className="image-news-decore">
              <img src={imgnews1} alt="" />
              <img src={imgnews2} alt="" />
              <img src={imgnews3} alt="" />
              <img src={imgnews4} alt="" />
            </div>
        </div>
    </>
  )
}

export default New