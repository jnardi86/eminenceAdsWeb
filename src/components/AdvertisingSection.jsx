import React from 'react';

const AdvertisingSection = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-screen overflow-hidden md:min-h-[600px]">
      {/* Segunda mitad (móvil primero) */}
      <div className="bg-white text-darkBlue p-8 md:p-10 md:w-1/2 flex items-center order-1 md:order-2">
        <div className="text-start md:text-left">
          <h2 className="text-3xl text-darkBlue md:text-4xl font-bold font-poppins mb-4 leading-10">
            ¡Obtené resultados inmediatos con anuncios pagos! Publicidad en{' '}
            <span className="bg-darkBlue text-brightYellow xl:leading-relaxed px-1">Google,</span>{' '}
            <span className="bg-darkBlue text-brightYellow xl:leading-relaxed px-1">Facebook,</span>{' '}
            <span className="bg-darkBlue text-brightYellow xl:leading-relaxed px-1">Instagram</span>
          </h2>
        </div>
      </div>

      {/* Primera mitad (móvil segunda) */}
      <div className="bg-brightYellow p-8 md:p-10 md:w-1/2 flex flex-col justify-center text-white order-2 md:order-1">
        <div className="text-center md:text-left">
        <h3 className="text-2xl text-darkBlue md:text-3xl font-semibold font-montserrat mb-4">
            Nuestros Servicios en <span className="bg-darkBlue text-brightYellow xl:leading-relaxed px-1">Redes</span>
          </h3>
          <ul className="text-lg text-darkBlue text-start md:text-xl font-montserrat space-y-2 list-disc list-outside">
            <li>Investigación de Palabras Clave y Presupuesto</li>
            <li>Configuración y Gestión de Campañas</li>
            <li>Optimización de Anuncios</li>
            <li>Seguimiento y Conversión</li>
            <li>Informe y Análisis</li>
            <li>Estrategia de Audiencia</li>
            <li>Diseño Creativo de Anuncios</li>
            <li>Implementación de Píxeles</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingSection;

