// src/components/Button.js
import React from 'react';

const Button = ({ text, targetId }) => {
  const handleScroll = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className="w-80 bg-brightYellow font-poppins text-darkBlue font-semibold text-2xl py-2 px-4 rounded shadow-lg transition-transform transform hover:scale-105 duration-1000 focus:outline-none"
    >
      {text}
    </button>
  );
};

export default Button;
