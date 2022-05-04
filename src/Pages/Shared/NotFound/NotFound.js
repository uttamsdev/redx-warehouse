import React from 'react';
import './NotFound.css'
import {FaInstagram,FaLinkedinIn,FaTwitter,FaSkype} from 'react-icons/fa';

const NotFound = () => {
  return (
    <div>
      <div id="notfound">
		<div class="notfound">
			<div class="notfound-bg">
				<div></div>
				<div></div>
				<div></div>
			</div>
			<h1>oops!</h1>
			<h2>Error 404 : Page Not Found</h2>
			<a href="#">go back</a>
			<div class="notfound-social">
				<a href="#"><FaInstagram></FaInstagram></a>
				<a href="#"><FaLinkedinIn></FaLinkedinIn></a>
				<a href="#"><FaTwitter></FaTwitter></a>
				<a href="#"><FaSkype></FaSkype></a>
			</div>
		</div>
	</div>
    </div>
  )
}

export default NotFound;