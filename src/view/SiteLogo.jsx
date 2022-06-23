import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-email-components';

const Link = styled.a`
  text-decoration: none;
  display: block;
  margin: ${({ marginTop }) => marginTop}px auto 0;
`;

const Img = styled.img`
  width: 100%;
`;

const SiteLogo = ({ href, marginTop }) => {
  return (
    <Link marginTop={marginTop} href={href} className="generic-site-logo">
      <Img
        src={'https://res.cloudinary.com/pdr-app/image/upload/v1648557559/test-crew-code/header-logo.png'}
        alt={'logo'}
      />
    </Link>
  );
};

SiteLogo.propTypes = {
  href: PropTypes.string,
  marginTop: PropTypes.number,
};

SiteLogo.defaultProps = {};

export default SiteLogo;
