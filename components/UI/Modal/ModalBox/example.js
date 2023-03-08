import { FadingBackground } from 'components/Layout/ThemeProvider';
import Button from 'components/UI/Button';
import React, { useState } from 'react';
import { ModalProvider } from 'styled-react-modal';
import ModalBox from 'components/UI/Modal/ModalBox';
import PropTypes from 'prop-types';

function ModalBoxPreview({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <div className="App">
        <h1>Modal Box Example</h1>
        <Button className="primary" label="Open Modal" onClick={() => setIsOpen(!isOpen)} />
        <ModalBox
          open={isOpen}
          openModal={setIsOpen}
        >
          {children}
        </ModalBox>
      </div>
    </ModalProvider>
  );
}

ModalBoxPreview.propTypes = {
  children: PropTypes.element
};

export default ModalBoxPreview;
