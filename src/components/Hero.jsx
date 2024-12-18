import React from 'react';
import { Zoom, Fade } from 'react-awesome-reveal';
import Button from './Button';
import { AR } from 'country-flag-icons/react/3x2'
import { MX } from 'country-flag-icons/react/3x2'
import { CL } from 'country-flag-icons/react/3x2'
import { BR } from 'country-flag-icons/react/3x2'
import { UY } from 'country-flag-icons/react/3x2'

const Hero = () => {
  return (
    <div
      className="relative w-full h-[400px] bg-cover bg-center md:h-[500px]"
      style={{ backgroundImage: `url(/images/eminence_hero.png)` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <Zoom triggerOnce duration={1200}>
          <h1 className="text-3xl font-bold font-poppins text-white text-center px-2 md:text-5xl hover:transform hover:scale-105 transition duration-1000 ease-in-out">
            Transforma tu negocio{' '}
            <Fade direction="up" cascade triggerOnce duration={1000} delay={500}>
              <span className='text-brightYellow'>digitalmente</span>
            </Fade>
          </h1>
          <Fade direction="up" cascade triggerOnce duration={1000} delay={800}>
            <div className="w-80 md:w-[550px] mt-2 flex justify-center gap-2">
              <AR title="Argentina" className='w-6 h-6 md:w-8 md:h-8 hover:transform hover:scale-105 transition duration-1000 ease-in-out' />
              <MX title="Mexico" className='w-6 h-6 md:w-8 md:h-8 hover:transform hover:scale-105 transition duration-1000 ease-in-out' />
              <CL title="Chile" className='w-6 h-6 md:w-8 md:h-8 hover:transform hover:scale-105 transition duration-1000 ease-in-out' />
              <UY title="Uruguay" className='w-6 h-6 md:w-8 md:h-8 hover:transform hover:scale-105 transition duration-1000 ease-in-out' />
            </div>
          </Fade>
        </Zoom>

        <Zoom triggerOnce duration={1200}>
          <Fade direction="up" cascade triggerOnce duration={1000} delay={600}>
            <p className="text-lg mt-2 px-1 font-montserrat text-white text-center max-w-lg md:text-2xl hover:transform hover:scale-105 transition duration-1000 ease-in-out">
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
};

export default Hero;
