import React from 'react';

const Button = ({ handleClick, children }) => {
  return (
    <button className='
    text-primary-dark font-medium text-base bg-gray-300   py-2 px-5 rounded-2xl
    hover:scale-110 transform transition-all duration-300
    shadow-lg
    '
    onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button;