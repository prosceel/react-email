// import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-email-components';
import { ptSans } from '../../constants/fonts';
import { greyish_brown } from '../../constants/colors';
import PropTypes from 'prop-types';

const StyledText = styled.span`
  font-family: ${ptSans};
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: left;
  color: ${greyish_brown};
  min-height: 75px;
  display: block;
`;

const Text = ({ className, children, style }) => {
  return (
    <StyledText className={className} style={style}>
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
};

Text.defaultProps = {
  style: {},
};

export default Text;
