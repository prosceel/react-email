import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-email-components';

const Link = styled.a`
  display: flex;
  width: 100%;
  text-decoration: none;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  max-height: 340px;
  object-fit: scale-down;
  display: flex;
`;

const Image = ({ href, imgSrc }) => {
  return (
    <Link href={href}>
      <Img src={imgSrc} alt={'product-image'} />
    </Link>
  );
};

Image.propTypes = {
  href: PropTypes.string,
  imgSrc: PropTypes.string,
};

Image.defaultProps = {};

export default Image;
