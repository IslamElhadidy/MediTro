import React from 'react'
import img from '../../images/doctor.7c2bc96d.png'
import './Home.css'
import img1 from '../../images/download (1).png'
import img2 from '../../images/download (2).png'
import img3 from '../../images/download (3).png'
import img5 from '../../images/download (5).png'
function Home() {
  return (
    <>
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h5>We Provide All Health Care Solution</h5>
                        <h2>Protect Your Health And Take Care To Of Your Health</h2>
                        <button>Read More</button>
                    </div>
                    <div className="col-md-4 img">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
            <div className="images">
                <img className='img-one' src={img1} alt="" />
                <img className='img-two' src={img2} alt="" />
                <img className='img-three' src={img3} alt="" />
                <img className='img-five' src={img5} alt="" />
            </div>
        </header>
    </>
  )
}

export default Home