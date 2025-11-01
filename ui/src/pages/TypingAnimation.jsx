import React from 'react';
import { ReactTyped } from 'react-typed';

const TypingAnimation = () => {
  return (
    <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'white'}}>
      <ReactTyped
        strings={[
          'Hello World!',
          'Welcome to my website!',
          'Enjoy your stay',
        ]}
        typeSpeed={80}     // typing speed
        backSpeed={50}     // backspacing speed
        loop               // repeats forever
      />
    </h1>
  );
};

export default TypingAnimation;
