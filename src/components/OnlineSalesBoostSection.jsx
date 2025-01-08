import React from 'react';
import { Zoom, Fade } from 'react-awesome-reveal';
import Button from './Button';

const SalesBoostSection = () => {
  return (
    <section
      className="flex flex-col md:flex-row max-w-screen overflow-hidden md:min-h-[600px] bg-white"
      style={{
        background: 'linear-gradient(to bottom, rgba(1, 21, 36, 0.05), rgba(255, 255, 255, 1))',
      }}
    >
      {/* Primera mitad - Texto motivacional */}
      <div className="p-8 md:p-10 md:w-3/4 flex flex-col justify-center items-center text-center">
      <div className='md:w-3/4'>
      <h2 className="text-3xl text-darkBlue md:text-4xl font-bold font-poppins mb-6 leading-10">
          ¡Es hora de <span className="text-brightYellow">acelerar</span> tus ventas online! 🚀
        </h2>
        <p className="text-lg md:text-xl md:text-start font-montserrat text-darkBlue mb-6">
          ¿Listo para desbloquear todo el potencial de tu negocio en el mundo digital?
          Nuestro equipo de expertos está preparado para ayudarte a alcanzar tus objetivos.
        </p>
        <p className="text-lg md:text-xl md:text-start font-montserrat text-darkBlue mb-6">
          Desde estrategias personalizadas hasta herramientas avanzadas, transformamos tus desafíos en
          <span className="bg-darkBlue text-brightYellow font-bold py-1"> oportunidades de éxito.</span>
        </p>
      </div>
        {/* Botón de llamada a la acción */}
        <Zoom triggerOnce duration={1200}>
          <Fade direction="up" cascade triggerOnce duration={1000} delay={600}>
            <div className='mt-6 flex justify-center px-4'>
              <Button text="Conocenos!" targetId="contactForm" />
            </div>
          </Fade>
        </Zoom>
      </div>

      {/* Segunda mitad - Imagen */}
      <div className="p-8 md:p-10 md:w-1/4 flex justify-center items-center">
        <img
          src="/images/eminence_cel.png"
          alt="Aceleración de Ventas Online"
          className="w-32 md:w-36 lg:w-40"
        />
      </div>
    </section>
  );
};

export default SalesBoostSection;


