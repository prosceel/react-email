import React from 'react';
import GenericButton from './view/GenericButton';
import HeroBackground from './view/HeroBackground';
import SiteHeader from './view/SiteHeader';
import Hero from './view/Hero';
import SecondSection from './view/SecondSection';
import SiteLogo from './view/SiteLogo';
import Footer from './view/Footer/Footer';

function App() {
  return (
    <>
      <HeroBackground>
        <SiteHeader link={'/'} />
        <Hero
          text={
            '\n' +
            '        Hey [FNAME/there], we notice you haven’t ordered in a while. We have some new looks we think your customers will\n' +
            '        love.'
          }
          heroLogoSrc={
            'https://res.cloudinary.com/pdr-app/image/upload/v1648555199/test-crew-code/These_New_Styles_.png'
          }
          heroLogoMobileSrc={
            'https://res.cloudinary.com/pdr-app/image/upload/v1648814642/test-crew-code/These_New_Styles_mobile.png'
          }
          heroImgSrc={'https://res.cloudinary.com/pdr-app/image/upload/v1648559544/test-crew-code/hero-img.png'}
        />
        <GenericButton linkHref={'/'}>Shop New Releases</GenericButton>
      </HeroBackground>
      <SecondSection headingFirstLine={'Create Your Next'} headingSecondLine={'Winning Collection'} />
      <SiteLogo href={'/'} marginTop={51} />
      <Footer />
    </>
  );
}

export default App;
