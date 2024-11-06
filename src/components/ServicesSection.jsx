import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// Importación de los íconos SVG como componentes
import MercadoLibreIcon from './icons/MercadoLibreIcon';
import OnlineAdvertisingIcon from './icons/OnlineAdvertisingIcon';
import WebDesignIcon from './icons/WebDesignIcon';
import DataAnalyticsIcon from './icons/DataAnalyticsIcon';


const services = [
    {
        icon: <MercadoLibreIcon width="100px" height="100px" color="#ffce10" />,
        title: "Mercado Libre",
        description: "Nos especializamos en la estrategia integral para el desarrollo del canal de MercadoLibre.",
    },
    {
        icon: <OnlineAdvertisingIcon width="100px" height="100px" color="#FFD700" />,
        title: "Publicidad Online",
        description: "Creamos y gestionamos campañas en Google, Facebook, Instagram, YouTube y TikTok.",
    },
    {
        icon: <WebDesignIcon width="100px" height="100px" color="#FFD700" />,
        title: "Diseño Web",
        description: "Diseñamos sitios web optimizados para tus objetivos comerciales.",
    },
    {
        icon: <DataAnalyticsIcon width="100px" height="100px" color="#FFD700" />,
        title: "Data Analytics",
        description: "Elaboramos informes detallados con datos clave sobre los principales indicadores de tu empresa.",
    },
];

const ServicesSection = () => {
    return (
        <section className="bg-darkBlue mt-64 py-12 px-6 text-brightYellow">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 font-poppins">Conocé nuestros Servicios</h3>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                        <div className="bg-gradient-to-b from-darkBlue to-lightBlue px-4 py-8 rounded-lg w-full max-w-sm h-96 text-center border-solid border-4 border-brightYellow">
                            <h3 className="text-3xl font-bold mb-4 py-4 font-poppins">{service.title}</h3>
                            <div className="flex justify-center items-center mb-4 py-2">{service.icon}</div>
                            <p className="text-base text-white font-medium font-montserrat">{service.description}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default ServicesSection;
