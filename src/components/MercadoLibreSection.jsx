import React from 'react';

const MercadoLibreSection = () => {
  return (
    <section 
      className="relative py-12 md:py-20 mt-64 bg-cover bg-center text-white" 
      style={{ backgroundImage: `url(/images/banner_section.png)` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-10"></div> {/* Overlay oscuro para mayor legibilidad */}
      
      <div className="relative max-w-5xl mx-auto px-6 md:flex md:items-center md:space-x-8">
        
        {/* Imagen centrada en mobile y alineada a la izquierda en desktop */}
        <div className="flex justify-center md:justify-start md:flex-1 mb-6 md:mb-0">
          <img src='/images/certificacion_mercado_ads.png' alt="Mercado Libre Logo" className="w-96 md:w-[580px] lg:w-96" /> 
        </div>

        {/* Contenido de texto */}
        <div className="md:flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Prepárate para vender en <p className=' bg-brightYellow text-darkBlue px-2 py-2 rounded-sm inline-block'>Mercado Libre </p>con nuestra Agencia Certificada
          </h2>
          <ul className="text-start text-lg md:text-xl font-montserrat mb-6 leading-relaxed space-y-2">
            <li>✅ Mercado Libre es la plataforma líder en Latinoamérica, con presencia en 18 países.</li>
            <li>✅ Te brinda la oportunidad de conectar con millones de usuarios y expandir tu negocio.</li>
            <li>✅ Para tener éxito en Mercado Libre, es esencial estar bien preparado. Por eso, ofrecemos servicios para que tu empresa esté lista para vender y crecer en esta plataforma.</li>
          </ul>
          <p className="text-lg md:text-xl font-montserrat font-semibold">
            Potencia tu negocio con expertos en ventas online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MercadoLibreSection;
