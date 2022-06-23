// import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-email-components';

const ImgSrc = 'https://res.cloudinary.com/pdr-app/image/upload/v1648562022/test-crew-code/hero-background.png';

const Wrapper = styled.div`
  z-index: -1;
  background: url(${ImgSrc}) center repeat;
  padding-bottom: 75px;
`;

const HeroBackground = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

HeroBackground.propTypes = {};

HeroBackground.defaultProps = {};

export default HeroBackground;
