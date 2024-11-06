import React from 'react';

const BriefSection = () => {
  return (
    <section className="bg-brightYellow text-darkBlue py-12 md:py-20 mt-64">
      <div className="max-w-5xl mx-auto px-6 md:flex md:items-center md:space-x-8">
        
        {/* Logo grande centrado en mobile y alineado a la izquierda en desktop */}
        <div className="flex justify-center md:justify-start md:flex-1 mb-6 md:mb-0">
          <img src='images/logo_negro.png' alt="Eminence Ads Marketing Logo" className="w-72 md:w-64 lg:w-96" />
        </div>

        {/* Contenido de texto */}
        <div className="md:flex-1 md:text-left">
          <h2 className="text-3xl text-center md:text-4xl font-bold font-poppins mb-4">
            Impulsa tu negocio con nuestra agencia de marketing digital
          </h2>
          <p className="text-lg md:text-xl font-montserrat mb-6 leading-relaxed">
            Especialistas en posicionar tu marca y aumentar tus ventas.
          </p>
          <ul className="text-md md:text-lg font-montserrat mb-6 space-y-2 text-start">
            <li>🎯 Publicidad en redes sociales: Facebook, Instagram, TikTok, Google, YouTube, X</li>
            <li>🛒 Marketplace: Mercado Libre</li>
            <li>📈 SEO y análisis de resultados con informes detallados</li>
          </ul>
          <p className="text-lg md:text-xl font-montserrat font-semibold">
            Hace crecer tu empresa con soluciones digitales efectivas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BriefSection;
