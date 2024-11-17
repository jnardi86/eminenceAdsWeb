import React from 'react';
import ContactSection from './ContactSection';
import ContactForm from './ContactForm';

const ContactContainer = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-gray-100 lg:space-x-8 w-full px-4 md:px-8">
      {/* Componente ContactSection */}
      <div className="lg:w-1/2">
        <ContactSection />
      </div>
      
      {/* Componente ContactForm */}
      <div className="lg:w-1/2">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactContainer;
