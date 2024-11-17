import React from 'react';

const MercadoAdsSection = () => {
  return (
    <section className="flex flex-col md:flex-row">
      {/* Primera mitad - Azul Oscuro */}
      <div className="bg-white text-brightYellow p-8 md:w-1/2 flex items-center">
        <div className="text-start md:text-left">
          <h2 className="text-3xl text-darkBlue md:text-4xl font-bold font-poppins mb-4">
            ¿Queres posicionar tus <span className="bg-brightYellow text-darkBlue text-4xl xl:text-5xl xl:leading-relaxed px-1">productos</span>, profesionalizar tus <span className="bg-brightYellow text-darkBlue text-4xl xl:text-5xl xl:leading-relaxed px-1">publicaciones</span> y aumentar tus <span className="bg-brightYellow text-darkBlue text-4xl xl:text-5xl xl:leading-relaxed px-1">ventas</span>?
          </h2>
        </div>
      </div>

      {/* Segunda mitad - Imagen de fondo con gradiente de darkBlue */}
      <div 
        className="relative p-8 md:w-1/2 flex flex-col justify-center text-white" 
        style={{ 
          backgroundImage: `linear-gradient(to right, rgba(1, 21, 36, 0.9) 20%, rgba(1, 21, 36, 0.5) 60%, rgba(0, 0, 0, 0) 100%), url('/images/mercado_libre_imagen.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="relative z-10 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-semibold font-montserrat mb-4">
            Nuestros Servicios
          </h3>
          <ul className="text-lg md:text-xl font-montserrat space-y-2 list-none">
            <li>Creación de la publicación</li>
            <li>Posicionamiento de publicaciones</li>
            <li>Estudio de títulos y palabras clave</li>
            <li>Publicaciones Institucionales</li>
            <li>Fotos descriptivas con especificaciones</li>
            <li>Participación de eventos comerciales</li>
            <li>Análisis de competencia</li>
            <li>Actualización de Stock</li>
            <li>Campañas de publicidad</li>
            <li>Reportes e Indicadores</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MercadoAdsSection;
