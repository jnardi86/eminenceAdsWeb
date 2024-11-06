import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {

  console.log(isOpen)

  return (
    <button onClick={toggleMenu} className="text-2xl md:hidden z-50">
      {isOpen ? <FaTimes /> : <FaBars />}
    </button>
  );
};

export default HamburgerMenu;
