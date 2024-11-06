import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Iconos para el menú hamburguesa

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

    // Bloquear/desbloquear el scroll en el cuerpo de la página
    useEffect(() => {
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden'; 
      } else {
        document.body.style.overflow = 'auto'; 
      }
    }, [isMobileMenuOpen]);

  return (
    <nav className="bg-Blue text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo y nombre de la agencia */}
        <div className="flex items-center">
          <img src='/images/logo.png' alt="Eminence Ads Logo" className="h-14 w-14 mx-1" />
          <span className="text-2xl font-bold hidden md:block">Eminence</span>
          <span className="text-2xl font-bold text-accent hidden md:block">Ads</span>
        </div>

        {/* Menú desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-yellow-500">Inicio</a>
          <a href="#contacto" className="hover:text-yellow-500">Contacto</a>
          {/* Agrega más enlaces según sea necesario */}
        </div>

        {/* Ícono de menú hamburguesa (visible solo en mobile) */}
        <div className="md:hidden fixed top-4 right-2 z-50">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes className="text-2xl z-50" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Menú mobile (visible solo cuando el menú hamburguesa está abierto) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-Blue bg-opacity-90 text-center z-40 flex flex-col justify-center items-center h-screen">
          <a href="#inicio" className="block py-2 hover:text-yellow-500">Inicio</a>
          {/* Agrega más enlaces si es necesario */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;


