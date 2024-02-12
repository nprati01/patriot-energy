import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <p>Patriot Energy LLC</p>
      <p>Address: Patriot Energy LLC Midland TX 12346 </p>
      <div className='social-links'>
        <Link to="https://www.facebook.com/profile.php?id=100067577536763">
        <i class="fa-brands fa-facebook"></i>
        </Link>
        <Link to="https://www.linkedin.com/company/patriot-energy-services-llc/about/">
        <i class="fa-brands fa-linkedin"></i>
        </Link>
      </div>


    </div>
  )
}

export default Footer
