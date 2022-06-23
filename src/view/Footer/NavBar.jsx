import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-email-components';
import FooterLink from './FooterLink';
import Grid from '../../layout/Grid';

const Wrapper = styled(Grid)``;

const links = [
  { url: '/', text: 'Exclusives' },
  { url: '/', text: 'Sale' },
  { url: '/', text: 'about us' },
  { url: '/', text: 'contact us' },
  { url: '/', text: 'unsubscribe' },
];

const NavBar = () => {
  return (
    <>
      <Wrapper className="footer-navigation" bodyStyle={{ display: 'table', margin: '0 auto' }}>
        <Grid.Row style={{ display: 'inline', textAlign: 'center' }}>
          {links.map((item, index) => {
            return (
              <Grid.Cell style={{ position: 'relative', float: 'left', display: 'flex', textAlign: 'center' }}>
                <FooterLink
                  className="footer-link"
                  href={item.url}
                  isFirst={index === 0}
                  isLast={index === links.length - 1}
                >
                  {item.text}
                </FooterLink>
              </Grid.Cell>
            );
          })}
        </Grid.Row>
      </Wrapper>
      <Wrapper
        className="footer-navigation footer-navigation--is-mobile"
        bodyStyle={{ display: 'table', margin: '0 auto' }}
      >
        <Grid.Row style={{ textAlign: 'center', margin: '1px auto 0', display: 'table' }}>
          <Grid.Cell style={{ position: 'relative', display: 'flex', float: 'left', textAlign: 'center' }}>
            <FooterLink href="/" className="footer-link" isFirst={true}>
              Exclusives
            </FooterLink>
          </Grid.Cell>
          <Grid.Cell style={{ position: 'relative', display: 'flex', float: 'left', textAlign: 'center' }}>
            <FooterLink href="/" className="footer-link">
              Sale
            </FooterLink>
          </Grid.Cell>
          <Grid.Cell style={{ position: 'relative', display: 'flex', float: 'left', textAlign: 'center' }}>
            <FooterLink href="/" className="footer-link" isLast={true}>
              about us
            </FooterLink>
          </Grid.Cell>
        </Grid.Row>
        <Grid.Row style={{ textAlign: 'center', margin: '5px auto 0', display: 'table' }}>
          <Grid.Cell style={{ position: 'relative', display: 'flex', float: 'left', textAlign: 'center' }}>
            <FooterLink href="/" className="footer-link" isFirst={true}>
              contact us
            </FooterLink>
          </Grid.Cell>
          <Grid.Cell style={{ position: 'relative', display: 'flex', float: 'left', textAlign: 'center' }}>
            <FooterLink href="/" className="footer-link" isLast={true}>
              unsubscribe
            </FooterLink>
          </Grid.Cell>
        </Grid.Row>
      </Wrapper>
    </>
  );
};

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
