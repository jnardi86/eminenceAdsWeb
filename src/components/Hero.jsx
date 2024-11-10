import React from 'react';
import { Zoom, Fade, Slide } from 'react-awesome-reveal';
import Button from './Button';

const Hero = () => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center md:h-[500px]"
      style={{ backgroundImage: `url(/images/eminence_hero.png)` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        {/* Zoom en el título principal */}
        <Zoom triggerOnce duration={1200}>
          <h1 className="text-3xl font-bold mb-4 font-poppins text-white text-center px-2 md:text-5xl hover:transform hover:scale-105 transition duration-1000 ease-in-out">
            Transforma tu negocio{' '}
            {/* Fade para la palabra resaltada */}
            <Fade direction="up" cascade triggerOnce duration={1000} delay={500}>
              <span className='text-brightYellow'>digitalmente</span>
            </Fade>
          </h1>
        </Zoom>

        {/* Slide en un subtítulo o descripción, si quieres agregarlo */}
        {/* <Slide direction="up" triggerOnce duration={1000} delay={1500}>
          <p className="text-lg mt-2 px-1 font-montserrat text-white text-start max-w-lg md:text-2xl">
            Llevamos tu presencia digital al siguiente nivel con estrategias a medida.
          </p>
        </Slide> */}
        <Zoom triggerOnce duration={1200}>
          <Fade direction="up" cascade triggerOnce duration={1000} delay={600}>
            <p className="text-lg mt-2 px-1 font-montserrat text-white text-start max-w-lg md:text-2xl hover:transform hover:scale-105 transition duration-1000 ease-in-out">
              Llevamos tu presencia digital al siguiente nivel con estrategias a medida.
            </p>
            <div className='mt-6 flex justify-center px-4'>
              <Button text="Contactanos" targetId="contactForm" />
            </div>

          </Fade>
        </Zoom>
      </div>
    </div>
  );
}

export default Hero;

