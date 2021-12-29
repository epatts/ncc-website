import React from 'react';
import HeroSection from '../../HeroSection';
import { puppy1, homeObjTwo, puppy2, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function PuppyBios() {
  return (
    <>
      <HeroSection {...puppy1} />
      <HeroSection {...puppy2} />
    </>
  );
}

export default PuppyBios;
