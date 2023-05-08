import { FadingBackground } from 'components/Layout/ThemeProvider';
import React from 'react';
import { ModalProvider } from 'styled-react-modal';
import PropTypes from 'prop-types';

function ModalBoxWrapper({ children }) {
  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      {children}
    </ModalProvider>
  );
}

ModalBoxWrapper.propTypes = {
  children: PropTypes.element
};

export default ModalBoxWrapper;
