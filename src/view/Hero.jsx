import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-email-components';
import { black } from '../constants/colors';
import { ptSans } from '../constants/fonts';
import Grid from '../layout/Grid';

const Wrapper = styled.div`
  padding-top: 119px;
  display: block;
  margin: 0 auto;
  padding-bottom: 50px;
`;

const HeroLogo = styled.img`
  margin: 0 auto;
`;

const HeroImg = styled.img``;

const Text = styled.span`
  font-family: ${ptSans};
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: ${black};
  max-width: 450px;
  margin: 0 auto -10px;
  display: block;
`;

const Hero = ({ heroLogoSrc, heroImgSrc, text, heroLogoMobileSrc }) => {
  return (
    <Wrapper className="hero-wrapper">
      <HeroLogo src={heroLogoSrc} alt="hero-logo" className="hero-logo" />
      <HeroLogo src={heroLogoMobileSrc} alt="hero-logo" className="hero-logo-mobile" />
      <Grid>
        <Grid.Row style={{ display: 'block' }}>
          <Grid.Cell style={{ display: 'table', margin: '20px auto -15px' }}>
            <HeroImg src={heroImgSrc} alt="hero-image" className="hero-image" />
          </Grid.Cell>
        </Grid.Row>
      </Grid>
      <Text className="hero-text">{text}</Text>
    </Wrapper>
  );
};

Hero.propTypes = {
  heroLogoSrc: PropTypes.string,
  heroLogoMobileSrc: PropTypes.string,
  heroImgSrc: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Hero.defaultProps = {};

export default Hero;
