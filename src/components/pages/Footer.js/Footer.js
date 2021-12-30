import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import { FaPaw } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/puppies'>Who we are</Link>
            <Link to='/'>Our dogs</Link>
            <Link to='/'>Location</Link>
            <Link to='/'>Contact us</Link>

          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Pictures</h2>
            <Link to='/'>Current puppies</Link>
            <Link to='/'>Past litters</Link>
            <Link to='/'>Parents</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Facebook</Link>
            <Link to='/'>AKC Marketplace</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <FaPaw className='navbar-icon' />
              North Country Cockers
            </Link>
          </div>
          <small className='website-rights'>North Country Cockers © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
