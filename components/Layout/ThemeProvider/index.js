/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { downloadFile } from 'utils/ApiFunctions';
import constants from 'utils/constants';

export const breakpoints = {
  breakpoints: {
    mobileSmall: 320,
    mobileLarge: 480,
    tablet: 768,
    desktop: 1024,
    desktopLarge: 1440,
    maxWidth: '1168px'
  }
};

export const palette = {
  // Palette with nested attributes only works for arrays, not objects unfortunately
  transparent: 'transparent',
  // Solids
  black: '#000000',
  darkGray: '#333333',
  bordes: '#EEEEEE',
  white: '#FFFFFF',
  lightGray: '#999999',
  red: '#EB2A2A',
  green: '#56B766',
  dark: '#212121'
};

export const navigateTo = (url) => {
  if (url) {
    if (url.includes('https') || url.includes('www')) {
      window.open(url, '_blank').focus();
    } else {
      window.location.assign(url);
    }
  }
};

export const SectionContainer = styled.div`
  ${(props) => (props.marginTop ? ` padding-top: ${props.marginTop} !important;` : 'padding-top: 40px !important;')};
  ${(props) => (props.marginBottom ? ` padding-bottom: ${props.marginBottom} !important;` : 'padding-bottom: 40px !important;')};
  ${(props) => (props.borderTop ? `border-top: 1px solid ${palette.bordes};` : '')};
  ${(props) => (props.borderBottom ? `border-bottom: 1px solid ${palette.bordes};` : '')};
`;
