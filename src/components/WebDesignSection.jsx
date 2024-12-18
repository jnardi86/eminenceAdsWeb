import React from 'react';

const WebDesignSection = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-screen overflow-hidden md:min-h-[600px]">
      {/* Segunda mitad (móvil primero) */}
      <div className="bg-darkBlue p-8 md:p-10 md:w-1/2 flex items-center order-1 md:order-2">
        <div className="text-start md:text-left">
          <h2 className="text-3xl text-brightYellow md:text-4xl font-bold font-poppins mb-4 leading-10">
            Diseñamos y desarrollamos <span className="bg-brightYellow text-darkBlue px-1">sitios web</span> 
            que reflejan la esencia de tu marca y ofrecen una experiencia de usuario excepcional.
          </h2>
        </div>
      </div>

      {/* Primera mitad (móvil segunda) */}
      <div className="bg-white p-8 md:p-10 md:w-1/2 flex flex-col justify-center text-white order-2 md:order-1">
        <div className="text-center md:text-left">
          <h3 className="text-2xl text-darkBlue md:text-3xl font-semibold font-montserrat mb-4">
            Nuestros Servicios de <span className="bg-darkBlue text-brightYellow px-1">Diseño y Desarrollo Web</span>
          </h3>
          <ul className="text-lg text-darkBlue text-start md:text-xl font-montserrat space-y-4 list-disc list-outside">
            <li>Diseño personalizado y adaptativo (responsive)</li>
            <li>Optimización UX/UI para mejorar la experiencia de usuario</li>
            <li>Integración de sistemas y herramientas avanzadas</li>
            <li>Estrategias SEO para posicionar tu sitio web</li>
            <li>Mantenimiento y soporte técnico continuo</li>
            <li>Optimización para dispositivos móviles</li>
            <li>Diseño gráfico y branding integrado</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WebDesignSection;
