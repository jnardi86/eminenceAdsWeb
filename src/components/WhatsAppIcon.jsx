import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  return (
    <a 
      href="https://wa.me/1234567890" // Aquí va tu número de WhatsApp con código de país
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppIcon;
