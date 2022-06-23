import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-email-components';
import { ptSans } from '../constants/fonts';
import { black, greyish_brown } from '../constants/colors';
import Grid from '../layout/Grid';

const Item = styled.div``;

const Img = styled.img`
  max-width: 100%;
`;

const Link = styled.a`
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
`;

const LinkArrow = styled.img`
  width: 7px;
  margin-left: 11px;
  margin-bottom: 1px;
`;

const Text = styled.span`
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
const RowWrapper = styled.div`
  padding: 0;
`;

const GridStyle = {
  width: '100%',
};

const GenericProduct = ({ linkHref, imgSrc, linkText, text, linkArrowSrc }) => {
  // <Grid style={GridStyle}>
  //   <Grid.Row>
  //     <RowWrapper>
  //       <Img src={imgSrc} alt="product-image" />
  //     </RowWrapper>
  //   </Grid.Row>
  //   <Grid.Row>
  //     <RowWrapper style={{ marginTop: 33, height: 65 }}>
  //       <Text>{text}</Text>
  //     </RowWrapper>
  //   </Grid.Row>
  //   <Grid.Row>
  //     <RowWrapper style={{ marginTop: 18 }}>
  //       <Link href={linkHref}>
  //         {linkText}
  //         <LinkArrow src={linkArrowSrc} alt={'arrow'} />
  //       </Link>
  //     </RowWrapper>
  //   </Grid.Row>
  // </Grid>
  return (
    <>
      <RowWrapper>
        <Img src={imgSrc} alt="product-image" />
      </RowWrapper>

      <RowWrapper style={{ marginTop: 33, height: 65 }}>
        <Text>{text}</Text>
      </RowWrapper>

      <RowWrapper style={{ marginTop: 18 }}>
        <Link href={linkHref}>
          {linkText}
          <LinkArrow src={linkArrowSrc} alt={'arrow'} />
        </Link>
      </RowWrapper>
    </>
  );
};

GenericProduct.propTypes = {
  linkHref: PropTypes.string,
};

GenericProduct.defaultProps = {};

export default GenericProduct;
