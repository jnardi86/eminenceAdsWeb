// components/NavbarMobile.jsx
import React from 'react';

const NavbarMobile = ({ isOpen }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-darkBlue bg-opacity-90 text-center flex flex-col justify-center z-40">
        <a href="#inicio" className="text-white font-poppins font-medium text-xl py-2 hover:text-yellow-500">Inicio</a>
        <a href="#contacto" className="text-white font-poppins font-medium text-xl py-2 hover:text-yellow-500">Contacto</a>
        {/* Agrega más enlaces si es necesario */}
      </div>
    )
  );
};

export default NavbarMobile;
