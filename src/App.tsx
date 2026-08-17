import './App.css';
import Header from './components/header';
import HeroStart from './components/heroStart';
import Preloader from './components/preloader';
import AboutSection from './components/about';
import OurServices from './components/ourServices';
import OurProjects from './components/ourProjects';
import OurTeam from './components/ourTeam';
import {CounterSection} from './components/counterSection';
import OurPricing from './components/pricing';
import CallToActionSection from './components/callToAction';
import MaintenanceTipsSection from './components/maintenanceTips';
import BlogSection from './components/ourBlog';
import ContactUs from './components/contactUs';
import BackToTop from './components/backToTop';
import FooterSection from './components/footer';

import { useState, useEffect } from 'react';

function App() {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    setIsAppLoading(false);
  }, []);

  if (isAppLoading) {
    return (
      <Preloader />
    );
  }

  return (
    <main>
      <Header />
      <HeroStart />
      <AboutSection />
      <OurServices />
      <OurProjects />
      <OurTeam />
      <CounterSection />
      <OurPricing />
      <CallToActionSection />
      <MaintenanceTipsSection />
      <BlogSection />
      <ContactUs />
      <BackToTop />
      <FooterSection />
    </main>
  )
}

export default App
