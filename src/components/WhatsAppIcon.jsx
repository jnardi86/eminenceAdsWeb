import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  return (
    <a
      href="https://wa.me/+5491169687423"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 duration-1000 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
};

export default WhatsAppIcon;
