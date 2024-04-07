import React from 'react';
import './Button.css';

interface ButtonProps {
    onClick?: () => void;
    children: React.ReactNode;
    type: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
