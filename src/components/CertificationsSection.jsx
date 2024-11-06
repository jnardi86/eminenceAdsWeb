import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Rutas de las imágenes de las certificaciones
const certifications = [
    { imgSrc: '/images/facebook_ads.png', title: "Certificación 1", description: "Descripción 1." },
    { imgSrc: '/images/google_ads.png', title: "Certificación 2", description: "Descripción 2." },
    { imgSrc: '/images/instagram_ads.png', title: "Certificación 3", description: "Descripción 3." },
    { imgSrc: '/images/mercado_ads.png', title: "Certificación 4", description: "Descripción 4." },
    { imgSrc: '/images/tiktok_ads.png', title: "Certificación 5", description: "Descripción 5." },
    { imgSrc: '/images/x_ads.png', title: "Certificación 6", description: "Descripción 6." },
    { imgSrc: '/images/youtube_ads.png', title: "Certificación 7", description: "Descripción 7." },
];

const CertificationsSection = () => {
    return (
        <section
        className="mt-64 py-12 px-6"
        style={{
            backgroundImage: 'url(/images/Eminence_section_2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}
        >
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-10 font-poppins text-white">
                Las certificaciones que avalan a
                <span className="text-brightYellow"> Eminence</span>
                <span className="text-white">Ads</span>
            </h3>
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                modules={[Navigation]}
                navigation
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {certifications.map((certification, index) => (
                    <SwiperSlide key={index} className="flex justify-center">
                            <div className="flex justify-center items-center mb-4">
                                <img src={certification.imgSrc} alt={certification.title} width="300px" height="300px" />
                            </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default CertificationsSection;
