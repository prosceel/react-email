import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-email-components';
import { black } from '../constants/colors';
import { openSans, ptSans } from '../constants/fonts';
import GenericContent from './GenericContent';
import Grid from '../layout/Grid';
import Image from './GenericProduct/Image';
import Text from './GenericProduct/Text';
import Link from './GenericProduct/Link';
import GenericButton from './GenericButton';

const Wrapper = styled.div`
  padding: 89px 36px 48px;
`;

const Heading = styled.h3`
  font-family: ${openSans};
  font-size: 35px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: center;
  color: ${black};
  margin: 0;

  ${({ isBold }) => {
    if (isBold) {
      return `
          font-weight: bold;
      `;
    }
  }}
`;

const StyledGrid = {
  marginTop: 41,
  tableLayout: 'auto',
  width: '100%',
  direction: 'ltr',
};

const StyledGridMobile = {};

const GridRowMobile = {
  display: 'block',
  marginTop: '28px',
};

const GridCell = {
  padding: '0 14px',
  width: '33%',
};

const GridCellMobile = {
  width: '100%',
  textAlign: 'center',
};

const SecondSection = ({ headingFirstLine, headingSecondLine }) => {
  return (
    <Wrapper>
      <Heading isBold={true}>{headingFirstLine}</Heading>
      <Heading>{headingSecondLine}</Heading>
      <GenericContent className="second-section-text" maxWidth={285} marginTop={32}>
        Turn browsers into buyers with these popular new styles:
      </GenericContent>
      <Grid style={StyledGrid} className="second-section-grid">
        <Grid.Row>
          <Grid.Cell style={GridCell}>
            <Image
              src={'https://res.cloudinary.com/pdr-app/image/upload/v1648555200/test-crew-code/section-2.jpg'}
              alt={'product-image'}
            />
          </Grid.Cell>
          <Grid.Cell style={GridCell}>
            <Image
              src={'https://res.cloudinary.com/pdr-app/image/upload/v1648555200/test-crew-code/section-2-1.jpg'}
              alt={'product-image'}
            />
          </Grid.Cell>
          <Grid.Cell style={GridCell}>
            <Image
              src={'https://res.cloudinary.com/pdr-app/image/upload/v1648555200/test-crew-code/section-2-2.jpg'}
              alt={'product-image'}
            />
          </Grid.Cell>
        </Grid.Row>
        <Grid.Row style={{ verticalAlign: 'text-top' }}>
          <Grid.Cell style={GridCell}>
            <Text style={{ marginTop: 26 }}>
              Girls Button Down Peplum Western Tencel Shirt (GY2570 Light Denim Pack)
            </Text>
          </Grid.Cell>
          <Grid.Cell style={GridCell}>
            <Text style={{ marginTop: 26 }}>Plus Floral Print V Neck Smock Waist Tiered Mini Dress</Text>
          </Grid.Cell>
          <Grid.Cell style={GridCell}>
            <Text style={{ marginTop: 26 }}>Womens Floral Tiered Midi Skirt (HY2242 Black Pack)</Text>
          </Grid.Cell>
        </Grid.Row>
        <Grid.Row>
          <Grid.Cell style={GridCell}>
            <Link href={'/'} style={{ marginTop: 19 }}>
              buy NOW
            </Link>
          </Grid.Cell>
          <Grid.Cell style={GridCell}>
            <Link href={'/'} style={{ marginTop: 19 }}>
              buy NOW
            </Link>
          </Grid.Cell>
          <Grid.Cell style={GridCell}>
            <Link href={'/'} style={{ marginTop: 19 }}>
              buy NOW
            </Link>
          </Grid.Cell>
        </Grid.Row>
      </Grid>
      <Grid style={StyledGridMobile} className="second-section-grid second-section-grid--is-mobile">
        <Grid.Row>
          <Grid.Cell style={GridCellMobile}>
            <Image
              className="second-section-item-image"
              src={'https://res.cloudinary.com/pdr-app/image/upload/v1649075525/test-crew-code/section-2-mobile.png'}
              alt={'product-image'}
            />
            <Text className="second-section-item-text" style={{ marginTop: 26 }}>
              Girls Button Down Peplum Western Tencel Shirt (GY2570 Light Denim Pack)
            </Text>
            <Link href={'/'} style={{ marginTop: 19 }} className="second-section-item-link">
              buy NOW
            </Link>
          </Grid.Cell>
        </Grid.Row>
        <Grid.Row style={GridRowMobile}>
          <Grid.Cell style={GridCellMobile}>
            <Image
              className="second-section-item-image"
              src={'https://res.cloudinary.com/pdr-app/image/upload/v1649162749/test-crew-code/section-2-2-mobile.png'}
              alt={'product-image'}
            />
            <Text className="second-section-item-text" style={{ marginTop: 26 }}>
              Plus Floral Print V Neck Smock Waist Tiered Mini Dress
            </Text>
            <Link href={'/'} style={{ marginTop: 19 }} className="second-section-item-link">
              buy NOW
            </Link>
          </Grid.Cell>
        </Grid.Row>
        <Grid.Row style={GridRowMobile}>
          <Grid.Cell style={GridCellMobile}>
            <Image
              className="second-section-item-image"
              src={'https://res.cloudinary.com/pdr-app/image/upload/v1649162749/test-crew-code/section-2-3-mobile.png'}
              alt={'product-image'}
            />
            <Text className="second-section-item-text" style={{ marginTop: 26 }}>
              Womens Floral Tiered Midi Skirt (HY2242 Black Pack)
            </Text>
            <Link href={'/'} style={{ marginTop: 19 }} className="second-section-item-link">
              buy NOW
            </Link>
          </Grid.Cell>
        </Grid.Row>
      </Grid>
      <GenericContent className="second-section-text second-section-text--is-last" maxWidth={370} marginTop={39}>
        You know your customers best, so you can order 1 pack per style to test the waters or go all-in with a large
        order, it’s up to you.
      </GenericContent>
      <GenericButton linkHref={'/'} style={{ marginTop: 41 }}>
        Order Now
      </GenericButton>
    </Wrapper>
  );
};

SecondSection.propTypes = {
  headingFirstLine: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  headingSecondLine: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isBig: PropTypes.bool,
  textFirst: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  textSecond: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SecondSection.defaultProps = {
  isBig: false,
};

export default SecondSection;
