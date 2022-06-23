import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-email-components';
import { ptSans } from '../../constants/fonts';
import { black } from '../../constants/colors';

const StyledLink = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-family: ${ptSans};
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.75px;
  text-align: left;
  color: ${black};
  display: block;
`;

const LinkArrow = styled.img`
  width: 7px;
  margin-left: 11px;
  margin-bottom: 1px;
`;

const Link = ({ className, href, children, style }) => {
  return (
    <StyledLink className={className} href={href} style={style}>
      {children}
      <LinkArrow
        src={'https://res.cloudinary.com/pdr-app/image/upload/v1648555199/test-crew-code/right-arrow.png'}
        alt={'arrow'}
      />
    </StyledLink>
  );
};

Link.propTypes = {
  style: PropTypes.object,
  href: PropTypes.string,
  className: PropTypes.string,
};

Link.defaultProps = {
  style: {},
};

export default Link;
