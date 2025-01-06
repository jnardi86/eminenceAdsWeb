import React from 'react';

const SalesBoostSection = () => {
  return (
    <section 
      className="flex flex-col md:flex-row max-w-screen overflow-hidden md:min-h-[600px] bg-white"
      style={{
        background: 'linear-gradient(to bottom, rgba(1, 21, 36, 0.05), rgba(255, 255, 255, 1))',
      }}
    >
      {/* Primera mitad - Texto motivacional */}
      <div className="p-8 md:p-10 md:w-1/2 flex flex-col justify-center items-start text-left">
        <h2 className="text-3xl text-darkBlue md:text-4xl font-bold font-poppins mb-6 leading-10">
          ¡Es hora de <span className="text-brightYellow">acelerar</span> tus ventas online! 🚀
        </h2>
        <p className="text-lg md:text-xl font-montserrat text-darkBlue mb-6">
          ¿Listo para desbloquear todo el potencial de tu negocio en el mundo digital? 
          Nuestro equipo de expertos está preparado para ayudarte a alcanzar tus objetivos. 
        </p>
        <p className="text-lg md:text-xl font-montserrat text-darkBlue">
          Desde estrategias personalizadas hasta herramientas avanzadas, transformamos tus desafíos en 
          <span className="text-brightYellow font-bold"> oportunidades de éxito.</span>
        </p>
      </div>

      {/* Segunda mitad - Imagen */}
      <div className="p-8 md:p-10 md:w-1/2 flex justify-center items-center">
        <img 
          src="/images/mercado_libre_imagen.png" 
          alt="Aceleración de Ventas Online" 
          className="w-64 md:w-80 lg:w-96 rounded-md shadow-lg"
        />
      </div>
    </section>
  );
};

export default SalesBoostSection;


