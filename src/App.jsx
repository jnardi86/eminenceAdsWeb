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
import AdvertisingSection from './components/AdvertisingSection';
import WebDesignSection from './components/WebDesignSection';
import DataAnalyticsSection from './components/DataAnalyticsSection';
import OnlineSalesBoostSection from './components/OnlineSalesBoostSection';


function App() {
  return (
    <Layout>
      <Hero />
      <SectionWrapper>
        <BriefSection />
      </SectionWrapper>
      <SectionWrapper>
        <ServicesSection />
      </SectionWrapper>
      <SectionWrapper>
        <MercadoLibreSection />
      </SectionWrapper>
      <SectionWrapper>
        <OnlineSalesBoostSection/>
      </SectionWrapper>
      <SectionWrapper>
        <MercadoAdsSection />
      </SectionWrapper>
      <SectionWrapper>
        <AdvertisingSection />
      </SectionWrapper>
      <SectionWrapper>
        <WebDesignSection />
      </SectionWrapper>
      <SectionWrapper>
        <DataAnalyticsSection/>
      </SectionWrapper>
      <SectionWrapper>
        <ContactContainer />
      </SectionWrapper>
      <SectionWrapper>
        <CertificationsSection />
      </SectionWrapper>
      <WhatsAppIcon />
    </Layout>
  );
}

export default App;

