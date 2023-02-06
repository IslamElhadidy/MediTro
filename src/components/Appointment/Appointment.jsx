import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import './Appointment.css';
import img1 from '../../images/download (11).png'
import img2 from '../../images/download (9).png'
import img3 from '../../images/download (4).png'

function Appointment() {
    const container = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: require("../../animations/appointment.json")
        });
    
        return () => {
          lottie.destroy();
        };
      }, []);

  return (
    <>
        <div className="appointment">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-sm-12 mb-5 appointment-section">
                          <form>
                            <h2>Book Appointment</h2>
                            <div className="select-group one-select">
                                <select name="" id="">
                                    <option value="">Select Dept</option>
                                    <option value="">One</option>
                                    <option value="">Two</option>
                                    <option value="">Three</option>
                                </select>
                            </div>
                            <div className="select-group two-select">
                                <select name="" id="">
                                    <option value="">Select Doctor</option>
                                    <option value="">One</option>
                                    <option value="">Two</option>
                                    <option value="">Three</option>
                                </select>
                            </div>
                            <input type="text" name="" id="" placeholder='Your Name' />
                            <input type="number" name="" id="" placeholder='Phone Number' />
                            <input type="date" name="" id="" />
                            <button>Appointment Now</button>

                          </form>  
                    </div>
                    <div className="col-lg-7 col-md-6 col-sm-12 mb-5 app-image">
                        <div className="img" ref={container}></div>
                    </div>
                </div>
                <div className="images-decore">
                    <img className='img-one-decore' src={img1} alt="" />
                    <img className='img-two-decore' src={img2} alt="" />
                    <img className='img-three-decore' src={img3} alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Appointment