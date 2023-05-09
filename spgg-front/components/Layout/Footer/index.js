/* eslint-disable no-undef */
import PropTypes from 'prop-types';
import React from 'react';
import Script from 'next/script';
import {
  FooterContainer,
} from './styles';
import { Container } from '../Grid/styles';

function Footer() {
  return (
    <Container>
      <FooterContainer>
          Footer Content
      </FooterContainer>
    </Container>
  );
}

export default Footer;
