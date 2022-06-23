import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-email-components';
import { ptSans } from '../constants/fonts';
import { black } from '../constants/colors';

const Text = styled.span`
  font-family: ${ptSans};
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: center;
  color: ${black};
  display: block;
  margin: ${({ marginTop }) => marginTop}px auto 0;
  max-width: ${({ maxWidth }) => maxWidth}px;
`;

const GenericContent = ({ children, maxWidth, marginTop, className }) => {
  return (
    <Text className={className} maxWidth={maxWidth} marginTop={marginTop}>
      {children}
    </Text>
  );
};

GenericContent.propTypes = {
  maxWidth: PropTypes.number,
  marginTop: PropTypes.number,
  className: PropTypes.string,
};

GenericContent.defaultProps = {
  maxWidth: 200,
};

export default GenericContent;
