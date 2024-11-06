import React from 'react';

const NavbarDesktop = () => {
  return (
    <div className="hidden md:flex space-x-6">
      <a href="#inicio" className="hover:text-brightYellow hover:transform hover:scale-105 transition duration-1000 ease-in-out">Inicio</a>
      {/* Agrega más enlaces si es necesario */}
    </div>
  );
};

export default NavbarDesktop;
