import { async } from '@firebase/util';
import React from 'react'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer, useToast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const [updateProfile, updating, error1] = useUpdateProfile(auth); 
  if(loading || updating){
    return <Loading></Loading>
  }


  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await createUserWithEmailAndPassword(email,password);
    await updateProfile({ displayName: name});
          toast('Registration Successful Please verify your email.')
          navigate('/');
  }
  return (
    <div className='login-container'>
    <div className='login-area'>
            <h4>REGISTER TO REDX</h4>
                <form onSubmit={handleRegister} className='login-items'>
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
    <ToastContainer/>
</div>
  )
}

export default Register;