import React from 'react';
import PuppyBio from './HeroSection';
import { puppies } from './Data';

const PuppyBios = () => (

    <>
      {puppies.map(puppy => (
        puppy.available == true ? <PuppyBio puppy={puppy} />
        : null
      ))}
      {puppies.map(puppy => (
        puppy.available == false ? <PuppyBio puppy={puppy} />
        : null
      ))}
    </>
  );


export default PuppyBios;
