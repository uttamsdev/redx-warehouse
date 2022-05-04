import React from 'react'
import { Link } from 'react-router-dom';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
  return (
    <div className='login-container'>
    <div className='login-area'>
            <h4>REGISTER TO REDX</h4>
                <form className='login-items'>
                <label htmlFor="name">Name</label>
                <input type="text" className='login' name="name" placeholder='Your name' required/>
                <label htmlFor="email">Email</label>
                <input type="email" className='login' name="email" placeholder="your-email@gmail.com" required/>
                <label htmlFor="password">Password</label>
                <input type="password" className='login' name="password" id="" placeholder='Enter password' required/>
                <input type="submit" className='login-btn' value="Register" />
                </form>
                <p className='p'>Already have an account? <Link className='a' to="/login">Please Login</Link></p>
                <SocialLogin></SocialLogin>
    </div>
</div>
  )
}

export default Register;