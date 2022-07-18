import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import footerLogo from '../../images/Logo White Black-s(272-90)-8.png';
import ScrollButton from '../elements/ScrollButton';

const containerStyle = {
  width: '400px',
  height: '250px'
};

const center = {
  lat: 23.79739393428414, 
  lng: 90.37202475275093
};

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  

  return (
    <>
    <ScrollButton/>
    <footer className="footerSection">
      <div className='container'>
        <div className='grid grid-cols-12'>
    <div className='footer-items col-span-12 md:col-span-6'>
      <div className='footer-logo'>
         <img src={footerLogo} alt="" />
      </div>
    <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker
      position={center}
    />
      </GoogleMap>
    </LoadScript>
    <p>ITCO Ltd.<br/>Fusing Innovations with Technology since 2020</p>
    <p className='contact-info'>
    <span>+8801586368223</span>  |  info@itco.site
    </p>
    <p className='footer-items--icons'>
      <span><i className="fa-brands fa-facebook"></i></span>
      <span><i className="fa-brands fa-twitter"></i></span>
      <span><i className="fa-brands fa-linkedin-in"></i></span>
      <span><i className="fa-brands fa-instagram"></i></span>
      <span><i className="fa-brands fa-youtube"></i></span>
    </p>
  </div> 
  <ul className='footer-items col-span-12 md:col-span-2'>
    <span className="footer--title">Services</span> 
    <li><a href='https://google.com'>Branding</a> </li>
    <li><a href='https://google.com'>Design</a> </li>
    <li><a href='https://google.com'>Marketing</a> </li>
    <li><a href='https://google.com'>Advertisement</a></li>
  </ul> 
  <ul className='footer-items col-span-12 md:col-span-2'>
    <span className="footer--title">Company</span> 
    <li><a href='https://google.com'>About us</a> </li>
    <li><a href='https://google.com'>Contact</a> </li>
    <li><a href='https://google.com'>Jobs</a> </li>
    <li><a href='https://google.com'>Press kit</a></li>
  </ul> 
  <ul className='footer-items col-span-12 md:col-span-2'>
    <span className="footer--title">Legal</span> 
    <li><a href='https://google.com'>Terms of use</a> </li>
    <li><a href='https://google.com'>Privacy policy</a></li>
    <li><a href='https://google.com'>Cookie policy</a></li>
  </ul>
        </div>
        <p className='text-center'>Copyright © {year} - All right reserved by ITCO Ltd.</p>
      </div>
    </footer>
    </>
    
  );
};

export default Footer;
