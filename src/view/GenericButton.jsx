import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-email-components';
import { ptSans } from '../constants/fonts';
import { black, white } from '../constants/colors';
import Grid from '../layout/Grid';

const Wrapper = styled(Grid)``;

const Button = styled.button`
  border: none;
  background-color: ${black};
  height: 55px;
  padding: 5px 37px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  text-align: center;
  color: ${white};
  font-family: ${ptSans};
`;

const Link = styled.a`
  text-decoration: none;
  display: table;
  margin-left: auto;
  margin-right: auto;
`;

const GenericButton = ({ children, linkHref, style }) => {
  return (
    <Wrapper style={style}>
      <Grid.Row>
        <Grid.Cell>
          <Link href={linkHref}>
            <Button>{children}</Button>
          </Link>
        </Grid.Cell>
      </Grid.Row>
    </Wrapper>
  );
};

GenericButton.propTypes = {
  linkHref: PropTypes.string,
  style: PropTypes.object,
};

GenericButton.defaultProps = {
  style: {},
};

export default GenericButton;
