import React from 'react';

const DataAnalyticsSection = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-screen overflow-hidden md:min-h-[600px]">
      {/* Primera mitad (título e imagen) */}
      <div className="bg-gradient-to-b from-brightYellow via-brightYellow to-darkBlue p-8 md:p-10 md:w-1/2 flex flex-col justify-center items-center text-center md:text-left order-1 md:order-1">
        <div>
          <h2 className="text-3xl text-darkBlue md:text-4xl font-bold font-poppins mb-6 leading-10">
            Servicios de <span className="bg-darkBlue text-brightYellow px-1">Reporting</span> 
            para la <span className="bg-darkBlue text-brightYellow px-1">Toma de Decisiones</span>
          </h2>
          <p className="text-lg md:text-xl font-montserrat text-darkBlue mb-6">
            Transforma tus datos en información valiosa y toma decisiones estratégicas basadas en análisis precisos. 
            Maximiza el potencial de tu negocio con herramientas avanzadas y consultoría profesional.
          </p>
        </div>
        <div className="flex justify-center">
          <img 
            src="/images/reports.png" 
            alt="Data & Analytics" 
            className="w-64 md:w-80 lg:w-96 rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* Segunda mitad (lista de servicios) */}
      <div className="bg-white p-8 md:p-10 md:w-1/2 flex flex-col justify-center text-darkBlue order-2 md:order-2">
        <div className="text-center md:text-left">
          <h3 className="text-2xl text-darkBlue md:text-3xl font-semibold font-montserrat mb-6">
            Nuestros Servicios de <span className="bg-darkBlue text-brightYellow px-1">Data & Analytics</span>
          </h3>
          <ul className="text-lg text-darkBlue md:text-xl font-montserrat space-y-4 list-none text-start pl-4">
            <li>
              <span className="block md:hidden">📊 Análisis de Datos Avanzado</span>
              <span className="hidden md:block">📊 <b>Análisis de Datos Avanzado</b>: Descubre patrones clave en tus datos.</span>
            </li>
            <li>
              <span className="block md:hidden">📋 Informes Personalizados</span>
              <span className="hidden md:block">📋 <b>Informes Personalizados</b>: Información precisa adaptada a tus necesidades.</span>
            </li>
            <li>
              <span className="block md:hidden">📈 Dashboards Interactivos</span>
              <span className="hidden md:block">📈 <b>Dashboards Interactivos</b>: Visualización clara para un seguimiento continuo.</span>
            </li>
            <li>
              <span className="block md:hidden">🧠 Consultoría Estratégica</span>
              <span className="hidden md:block">🧠 <b>Consultoría y Recomendaciones Estratégicas</b>: Impulsa tu estrategia empresarial.</span>
            </li>
            <li>
              <span className="block md:hidden">⏱ Monitoreo Continuo</span>
              <span className="hidden md:block">⏱ <b>Monitoreo y Evaluación Continua</b>: Optimización constante del rendimiento.</span>
            </li>
            <li>
              <span className="block md:hidden">📊 Benchmarking Competitivo</span>
              <span className="hidden md:block">📊 <b>Benchmarking Competitivo</b>: Compara tu desempeño frente a la competencia.</span>
            </li>
            <li>
              <span className="block md:hidden">💡 Evaluación del ROI</span>
              <span className="hidden md:block">💡 <b>Evaluación del ROI</b>: Mide el impacto real de tus decisiones.</span>
            </li>
            <li>
              <span className="block md:hidden">🔒 Seguridad de Datos</span>
              <span className="hidden md:block">🔒 <b>Seguridad y Confidencialidad de Datos</b>: Gestión segura y ética de tu información.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DataAnalyticsSection;

