import React from 'react';
import PuppyBio from '../PuppyBios/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../Pricing';

function Puppies() {
  return (
    <>
      <Pricing />
      <PuppyBio {...homeObjOne} />
      <PuppyBio {...homeObjThree} />
    </>
  );
}

export default Puppies;
