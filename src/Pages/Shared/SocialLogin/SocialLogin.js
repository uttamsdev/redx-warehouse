import React from 'react'
import {ImGoogle,ImGithub} from 'react-icons/im';
import './SocialLogin.css'

const SocialLogin = () => {
  return (
    <div className='social-login-container'>
        <p className='prompt'>or</p>
        <div className='social-login'>
        <button className='google-signin'><ImGoogle className='social-icon'></ImGoogle> Login with Google</button>
        <button className='github-signin'><ImGithub className='social-icon'></ImGithub>Login with Github</button>
        </div>
    </div>
  )
}

export default SocialLogin;