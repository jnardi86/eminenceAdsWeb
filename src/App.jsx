// App.jsx
import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import WhatsAppIcon from './components/WhatsAppIcon';
import SectionWrapper from './components/SectionWrapper';
import BriefSection from './components/BriefSection';
import ServicesSection from './components/ServicesSection';
import MercadoLibreSection from './components/MercadoLibreSection';
import MercadoAdsSection from './components/MercadoAdsSection';
import ContactContainer from './components/ContactContainer';
import CertificationsSection from './components/CertificationsSection';


function App() {
  return (
    <Layout>
      <Hero />
      <SectionWrapper>
        <BriefSection/>
      </SectionWrapper>
      <SectionWrapper>
        <ServicesSection/>
      </SectionWrapper>
      <SectionWrapper>
        <MercadoLibreSection/>
      </SectionWrapper>
      <SectionWrapper>
        <MercadoAdsSection/>
      </SectionWrapper>
      <SectionWrapper>
        <ContactContainer/>
      </SectionWrapper>
      <SectionWrapper>
        <CertificationsSection/>
      </SectionWrapper>
      <WhatsAppIcon />
    </Layout>
  );
}

export default App;

