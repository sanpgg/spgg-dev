import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ModalContainer,
  ModalContent,
  StyledModal,
  CloseBtn
} from './styles';
import Icon from 'components/UI/Icon';

function ModalSession({
  size,
  openModal,
  open,
  children,
  unsavedChanges
}) {
  // eslint-disable-next-line react/prop-types
  const [opacity, setOpacity] = useState(0);

  function toggleModal() {
    setOpacity(0);
    openModal(!open);
  }

  function unsavedToggle() {
    openModal(open);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  return (
    <StyledModal
      size="large"
      className={size}
      isOpen={open}
      afterOpen={afterOpen}
      beforeClose={beforeClose}
      onBackgroundClick={unsavedChanges ? unsavedToggle : toggleModal}
      onEscapeKeydown={unsavedChanges ? unsavedToggle : toggleModal}
      opacity={opacity}
      backgroundProps={{ opacity }}
    >
      <ModalContainer>
        <CloseBtn><Icon className="white" icon="bx bx-x" size="medium" onClick={() => openModal(false)} /></CloseBtn>
        <ModalContent className={size}>
          {children}
        </ModalContent>
      </ModalContainer>
    </StyledModal>
  );
}

ModalSession.propTypes = {
  /**
  * Modal Size
  */
  size: PropTypes.oneOf(['medium', 'large', '']),
  /**
  * Modal Title
  */
  title: PropTypes.string,
  /**
  * Modal footer
  */
  footer: PropTypes.bool,
  /**
  * Modal close button
  */
  closeButton: PropTypes.bool,
  /**
  * Modal button confirm text
  */
  confirmButtonText: PropTypes.string,
  /**
  * Modal button cancel text
  */
  cancelButtonText: PropTypes.string,
  /**
  * Open modal function
  */
  openModal: PropTypes.func,
  /**
  * Modal state
  */
  open: PropTypes.bool,
  /**
  * Unsaved changes to avoid modal closing
  */
  unsavedChanges: PropTypes.bool,
  /**
  * Modal children elements
  */
  children: PropTypes.element,
  /**
  * Open modal confirm function
  */
  onConfirm: PropTypes.func
};

ModalSession.defaultProps = {
  size: 'medium',
  title: 'Modal Title',
  footer: true,
  closeButton: true,
  unsavedChanges: false,
  confirmButtonText: 'Guardar',
  cancelButtonText: 'Cancelar'
};

export default ModalSession;
