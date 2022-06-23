import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-email-components';

const Img = styled.img`
  max-width: 100%;
`;

const Image = ({ className, src, alt }) => {
  return <Img className={className} src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {};

export default Image;
