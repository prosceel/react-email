import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-email-components';
import SiteLogo from './SiteLogo';

const Header = styled.div`
  display: block;
  padding-top: 60px;
`;

const SiteHeader = ({ headerImgSrc, link }) => {
  return (
    <Header>
      <SiteLogo href={'/'} />
    </Header>
  );
};

SiteHeader.propTypes = {
  headerImgSrc: PropTypes.string,
  link: PropTypes.string,
};

SiteHeader.defaultProps = {};

export default SiteHeader;
