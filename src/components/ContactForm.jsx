import React, { useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Todos los campos son obligatorios.',
      });
      return false;
    }
    // Validación básica de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, ingrese un correo electrónico válido.',
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs.sendForm(
        'service_a2jvjt6',
        'template_1mdiyap',
        e.target,
        '9VRhnCIzRVEMebgQ9'
      )
      .then(() => {
        Swal.fire({ 
          icon: 'success',
          iconColor: '#ffce10',
          title: 'Formulario enviado',
          confirmButtonColor: '#011524',
          text: 'Gracias por tu mensaje. A la brevedad nuestro equipo se pondrá en contacto con vos!'
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        Swal.fire({ 
          icon: 'error', 
          title: 'Error', 
          text: 'Hubo un problema al enviar el mensaje.' 
        });
      });
    }
  };

  return (
    <div
      className="max-w-md mx-auto px-6 py-12 lg:mt-4 bg-darkBlue rounded-sm shadow-md"
      id='contactForm'
    >
      <h2 className="text-2xl text-center font-bold mb-6 text-brightYellow font-poppins">Dejanos tu consulta!</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white font-montserrat py-2">Nombre</label>
          <input
            type="text"
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-sm bg-white text-backgroundDark"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white font-montserrat py-2">Correo Electrónico</label>
          <input
            type="email"
            name="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-sm bg-white text-backgroundDark"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-white font-montserrat py-2">Mensaje</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-sm bg-white text-backgroundDark"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 rounded-md font-poppins font-regular text-2xl text-darkPurple bg-brightYellow shadow-lg hover:transform hover:scale-105 transition duration-1000 ease-in-out hover:shadow-xl"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

