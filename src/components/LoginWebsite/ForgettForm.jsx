import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import './LoginForm.css'
function ForgettForm() {
  return (
    <>
        <div className="forget pt-5">
            <div className="container pt-5">
                <div className="box-login">
                        <img src={logo} alt="" />
                        <div className="inputs">
                        <input type="password" name="" id="" placeholder='Password' />
                        <input type="password" name="" id="" placeholder='New Password' />
                        </div>
                        <div className="submit">
                        <Link to="/">Submit</Link>
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

export default ForgettForm