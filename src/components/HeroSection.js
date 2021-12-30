import React from 'react';
import './HeroSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

function HeroSection({
  lightBg,
  home,
  available,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  data
}) {

  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                {!home ? 
                  <div className={available ? 'available' : 'not-available'}>{available ? 'Available' : 'Not available'}</div>
                  : null
                }
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                { available ?
                  <Link to='/puppies'>
                    <Button buttonSize='btn--wide' buttonColor='red'>
                      {buttonLabel}
                    </Button>
                  </Link>
                  : null
                }
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <AliceCarousel 
                  items={data}
                  responsive={true}
                  autoPlayInterval={4000}
                  autoPlayDirection="ltr"
                  autoPlay={true}
                  infinite={true}
                  fadeOutAnimation={true}
                  disableAutoPlayOnAction={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
