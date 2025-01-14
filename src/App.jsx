// App.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
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
    <>
      <Helmet>
        {/* Title and Meta Tags */}
        <title>Eminence Ads | Agencia de Marketing Digital</title>
        <meta
          name="description"
          content="Servicios especializados para maximizar tus ventas en Mercado Libre y plataformas digitales. Descubre cómo podemos ayudarte."
        />
        <meta
          name="keywords"
          content="Mercado Libre, ventas online, estrategias digitales, marketing digital, diseño web, transformación digital, data & analytics"
        />
        <meta name="author" content="Eminence Ads" />
        <link rel="canonical" href="https://www.eminenceads.com/" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Eminence Ads | Aumenta tus Ventas" />
        <meta
          property="og:description"
          content="Potencia tus ventas online con nuestros servicios de marketing digital."
        />
        <meta property="og:image" content="https://www.eminenceads.com/images/logo_negro.png" />
        <meta property="og:url" content="https://www.eminenceads.com/" />
        <meta property="og:type" content="website" />

        {/* SEO for Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Google Search Console */}
        <meta name="google-site-verification" content="qcSRHE0U9SspY0npP03aPTX-lZtZCEhlnIwAPCsLxwE" />
      </Helmet>
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
          <OnlineSalesBoostSection />
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
          <DataAnalyticsSection />
        </SectionWrapper>
        <SectionWrapper>
          <ContactContainer />
        </SectionWrapper>
        <SectionWrapper>
          <CertificationsSection />
        </SectionWrapper>
        <WhatsAppIcon />
      </Layout>
    </>
  );
}

export default App;


