import React from 'react';
import Hero from '../components/home/Hero';
import TrustedBy from '../components/home/TrustedBy';
import ValueProposition from '../components/home/ValueProposition';
import ImpactStats from '../components/home/ImpactStats';
import Portfolio from '../components/home/Portfolio';
import MarketChallenges from '../components/home/MarketChallenges';
import Services from '../components/home/Services';
import Platform from '../components/home/Platform';
import IrradianceGraphs from '../components/home/IrradianceGraphs';
import Testimonials from '../components/home/Testimonials';
import FAQsSection from '../components/home/FAQsSection';
import ContactUs from '../components/home/ContactUs';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ValueProposition />
      <ImpactStats />
      <Portfolio />
      <MarketChallenges />
      <Services />
      <Platform />
      <IrradianceGraphs />
      <Testimonials />
      <FAQsSection />
      <ContactUs />
    </>
  );
};

export default Home;
