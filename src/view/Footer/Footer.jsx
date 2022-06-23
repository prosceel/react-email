import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-email-components';
import Image from './Image';
import Grid from '../../layout/Grid';
import NavBar from './NavBar';
import AllRightsReserved from './AllRightsReserved';

const StyledFooter = styled.div``;

const GridCell = {
  padding: 0,
};

const GridCellMobile = {
  padding: 0,
  display: 'flex',
};

const GridRowMobile = {
  display: 'flex',
};

const Footer = () => {
  return (
    <StyledFooter className="footer">
      <Grid className="footer-image-grid">
        <Grid.Row>
          <Grid.Cell style={GridCell}>
            <Image
              href={'/'}
              imgSrc={'https://res.cloudinary.com/pdr-app/image/upload/v1648555198/test-crew-code/footer-1.png'}
            />
          </Grid.Cell>
          <Grid.Cell style={GridCell}>
            <Image
              href={'/'}
              imgSrc={'https://res.cloudinary.com/pdr-app/image/upload/v1648555198/test-crew-code/footer-2.png'}
            />
          </Grid.Cell>
          <Grid.Cell style={GridCell}>
            <Image
              href={'/'}
              imgSrc={'https://res.cloudinary.com/pdr-app/image/upload/v1648555198/test-crew-code/footer-3.png'}
            />
          </Grid.Cell>
          <Grid.Cell style={GridCell}>
            <Image
              href={'/'}
              imgSrc={'https://res.cloudinary.com/pdr-app/image/upload/v1648555198/test-crew-code/footer-4.png'}
            />
          </Grid.Cell>
        </Grid.Row>
      </Grid>
      <Grid className="footer-image-grid footer-image-grid--is-mobile">
        <Grid.Row style={GridRowMobile}>
          <Grid.Cell style={GridCellMobile}>
            <Image
              href={'/'}
              imgSrc={'https://res.cloudinary.com/pdr-app/image/upload/v1649165578/test-crew-code/footer-1-mobile.png'}
            />
          </Grid.Cell>
          <Grid.Cell style={GridCellMobile}>
            <Image
              href={'/'}
              imgSrc={'https://res.cloudinary.com/pdr-app/image/upload/v1649165681/test-crew-code/footer-2-mobile.png'}
            />
          </Grid.Cell>
        </Grid.Row>
        <Grid.Row style={{ display: 'flex' }}>
          <Grid.Cell style={GridCellMobile}>
            <Image
              href={'/'}
              imgSrc={'https://res.cloudinary.com/pdr-app/image/upload/v1649165682/test-crew-code/footer-3-mobile.png'}
            />
          </Grid.Cell>
          <Grid.Cell style={GridCellMobile}>
            <Image
              href={'/'}
              imgSrc={'https://res.cloudinary.com/pdr-app/image/upload/v1648555198/test-crew-code/footer-4-mobile.png'}
            />
          </Grid.Cell>
        </Grid.Row>
      </Grid>
      <NavBar />
      <AllRightsReserved className="all-rights-reserved">
        Copyright © 2021 Hayden Los Angeles - All rights reserved.
      </AllRightsReserved>
    </StyledFooter>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
