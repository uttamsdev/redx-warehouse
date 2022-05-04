import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
  return (
    <div className='login-container'>
        <div className='login-area'>
                <h4>LOGIN TO REDX</h4>
                    <form className='login-items'>
                    <label htmlFor="username">Email</label>
                    <input type="email" className='login' name="username" placeholder='your-email@gmail.com' required/>
                    <label htmlFor="password">Password</label>
                    <input type="password" className='login' name="password" placeholder="Your Password" required/>
                    <input type="submit" className='login-btn' value="Login" />
                    </form>
                    <p className='p'>New to RedX? <Link className='a' to="/register">Create new Account</Link></p>
                    <p className='p'>Forgot password? <button className='btn btn-link a'>Rest Password</button></p>
                    <SocialLogin></SocialLogin>
        </div>
    </div>
  )
}

export default Login;