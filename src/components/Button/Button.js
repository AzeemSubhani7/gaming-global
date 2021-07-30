import React from 'react';

const Button = ({ handleClick, children }) => {
  return (
    <button className='
    text-white font-medium text-base bg-gradient-to-r from-blue-400 via-purple-500 to-red-500  py-2 px-5 rounded-2xl
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