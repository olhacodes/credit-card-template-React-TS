import React from 'react';
import './Box.css';

interface BoxProps {
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return (
    <div className='box__container'>
      <div className='box__content'>{children}</div>
    </div>
  );
};

export default Box;
