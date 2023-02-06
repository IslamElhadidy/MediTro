import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
function RegisterForm() {
  return (
    <>
         <div className="login">
            <div className="container">
                <div className="box-login">
                    <img src={logo} alt="" />
                    <div className="inputs">
                      <input type="text" name="" id="" placeholder='Name' />
                      <input type="email" name="" id="" placeholder='Email' />
                      <input type="text" name="" id="" placeholder='Username' />
                      <input type="password" name="" id="" placeholder='Password' />
                    </div>
                    <div className="submit">
                      <Link to="/">Register Now</Link>
                    </div>
                    <span>Already Have Account?</span>
                    <div className="register">
                      <Link to="/login">Login</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default RegisterForm