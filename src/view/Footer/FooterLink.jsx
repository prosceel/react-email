import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-email-components';
import { ptSans } from '../../constants/fonts';
import { black } from '../../constants/colors';
import Grid from '../../layout/Grid';

const Link = styled.a`
  font-family: ${ptSans};
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 1.4px;
  text-align: left;
  color: ${black};
  text-transform: uppercase;
  text-decoration: none;
  display: flex;

  ${({ isLast }) => {
    if (isLast) {
      return `
        padding-right: 0 !important;
      `;
    }
  }}

  ${({ isFirst }) => {
    if (isFirst) {
      return `
        padding-left: 0 !important;
      `;
    }
  }}
`;

const After = styled.div`
  width: 2px;
  height: 12px;
  padding: 0;
  background-color: ${black};
  display: flex;
  position: absolute;
  right: 0;
  top: 4px;
`;

const FooterLink = ({ className, href, children, isLast, isFirst }) => {
  return (
    <>
      <Link className={className} href={href} isLast={isLast} isFirst={isFirst}>
        {children}
      </Link>
      {!isLast && <After />}
    </>
  );
};

FooterLink.propTypes = {
  isLast: PropTypes.bool,
  isFirst: PropTypes.bool,
  href: PropTypes.string,
  className: PropTypes.string,
};

FooterLink.defaultProps = {
  isLast: false,
  isFirst: false,
};

export default FooterLink;
