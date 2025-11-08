import React from 'react';
import { ReactTyped } from 'react-typed';

const TypingAnimation = () => {
  return (
    <h1 className=' text-xl sm:text-3xl md:text-4xl font-bold text-white'
    >
      <ReactTyped
        strings={[
          'Hello World!',
          'Welcome to my website!',
          'Enjoy your stay',
        ]}
        typeSpeed={80}     
        backSpeed={50}     
        loop               
      />
    </h1>
  );
};

export default TypingAnimation;
