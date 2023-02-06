import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import './LoginForm.css'
function LoginForm() {
  return (
    <>
        <div className="login">
            <div className="container">
                <div className="box-login">
                    <img src={logo} alt="" />
                    <div className="inputs">
                      <input type="text" name="" id="" placeholder='Username' />
                      <input type="password" name="" id="" placeholder='Password' />
                    </div>
                    <div className="submit">
                      <Link to="/">Login</Link>
                    </div>
                    <div className="forgett">
                      <Link to="/forget  ">Forget Password?</Link>
                    </div>
                    <span>Dont Have Any Account?</span>
                    <div className="register">
                      <Link to="/register">register</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginForm