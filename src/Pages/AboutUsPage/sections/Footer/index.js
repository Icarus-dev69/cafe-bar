import React from 'react';
import './style.css'

const Footer = () => {
  return <section className='footer-sec'>
      <div className='footer-links-container'>
          <div className='restaurent'>
              <p className='footer-link-header'>Restaurent</p>
              <a href='#'>About Us</a>
              <a href='#'>Privacy Policy</a>
              <a href='#'>Our Official Stuff</a>
          </div>
          <div className='get-help'>
            <p className='footer-link-header'>Get Help</p>
              <a href='#'>FAQ</a>
              <a href='#'>Payment Options</a>
              <a href='#'>Booking Status</a>
          </div>
          <div className='pages'>
            <p className='footer-link-header'>Pages</p>
              <a href='#'>Home</a>
              <a href='#'>About</a>
              <a href='#'>Categories</a>
              <a href='#'>Contact</a>
              <a href='#'>Book a table</a>
          </div>
          <div className='follow-us'>
            <p className='footer-link-header'>Follow Us</p>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
          </div>

      </div>
      <p className='copyright'>@2022 brandname.com, All Rights Reserved.</p>
  </section>;
};

export default Footer;
