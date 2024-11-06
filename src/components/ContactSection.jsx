import React from 'react';

const ContactSection = () => {
  return (
    <section className="w-full overflow-hidden py-40 px-4 md:px-8">
      <div className="w-full max-w-4xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
          ¡Querés conocer nuestra propuesta?
        </h3>
        <h1 className="text-4xl font-bold text-yellow-500 mb-6 font-poppins">
          <span className='bg-darkPurple px-2 py-2 rounded-sm'>¡Contactanos!</span>
          
        </h1>
        <p className="text-lg md:text-xl text-darkPurple mb-8 font-montserrat">
          Estamos listos para ayudarte a llevar tu empresa al próximo nivel. Podés escribirnos directamente a nuestro 
          <span className="text-green-500 font-bold"> WhatsApp</span> o completar nuestro formulario de contacto. ¡Nuestro equipo te responderá a la brevedad para asesorarte en todo lo que necesites!
        </p>
      </div>
    </section>
  );
};

export default ContactSection;

