import React from 'react';
import PuppyBio from '../PuppyBios/HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

function Home() {
  return (
    <>
      <PuppyBio {...homeObjOne} />
      {/* <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;
