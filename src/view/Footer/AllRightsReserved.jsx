import React from 'react';
import styled from 'styled-email-components';
import { cool_grey } from '../../constants/colors';
import { ptSans } from '../../constants/fonts';
import PropTypes from 'prop-types';

const Text = styled.span`
  font-family: ${ptSans};
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.52;
  letter-spacing: 1.4px;
  text-align: center;
  color: ${cool_grey};
  display: block;
`;

const AllRightsReserved = ({ className, children }) => {
  return <Text className={className}>{children}</Text>;
};

AllRightsReserved.propTypes = {
  className: PropTypes.string,
};

AllRightsReserved.defaultProps = {};

export default AllRightsReserved;
