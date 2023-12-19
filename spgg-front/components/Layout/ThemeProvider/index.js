/* eslint-disable react/prop-types */
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import { BaseModalBackground } from 'styled-react-modal';

export const SpggTheme = {
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
  gray: '#F1F1F2',
  darkGray: '#333333',
  bordes: '#D4D4D4',
  white: '#FFFFFF',
  lightGray: '#9E9E9E',
  red: '#F5000A',
  lightRed: 'rgba(245, 0, 10, 0.05)',
  green: '#2C5D35',
  dark: '#212121',
  placeholder: '#C4C4C4',
  light: '#F5F5F5',
  blue: '#3B70D5'
};

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${(props) => props.opacity};
  transition: all 0.3s ease-in-out;
`;

export const notify = (alert, type) => {
  toast(alert, {
    position: 'top-right',
    autoClose: 4000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    type,
    progress: undefined
  });
};

export const emptyCollection = {
  name: '',
  items: []
};
