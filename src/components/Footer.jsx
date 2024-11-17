import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-darkBlue text-gray-300 py-32">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Nombre de la agencia y desarrollo */}
        <div className="text-center px-2 md:text-left mb-10 md:mb-0 hover:transform hover:scale-105 transition duration-500 ease-in-out">
          <h2 className="text-lg font-bold font-montserrat text-yellow-500">Eminence Ads</h2>
          <p className="text-sm font-montserrat">© 2024 Todos los derechos reservadoss</p>
        </div>

        {/* Redes sociales */}
        <div className="flex space-x-6 mb-10 md:mb-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:transform hover:scale-105 transition duration-500 ease-in-out'>
            <FaFacebook className="text-2xl hover:text-yellow-500 " />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:transform hover:scale-105 transition duration-500 ease-in-out'>
            <FaInstagram className="text-2xl hover:text-yellow-500 " />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:transform hover:scale-105 transition duration-500 ease-in-out'>
            <FaTwitter className="text-2xl hover:text-yellow-500 " />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:transform hover:scale-105 transition duration-500 ease-in-out'>
            <FaLinkedin className="text-2xl hover:text-yellow-500 " />
          </a>
        </div>

        {/* Ubicación */}
        <div className="text-center font-montserrat px-2 md:text-right hover:transform hover:scale-105 transition duration-500 ease-in-out">
          <p>Buenos Aires, Argentina</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
