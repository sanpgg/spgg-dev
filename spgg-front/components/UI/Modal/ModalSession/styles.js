import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const StyledModal = Modal.styled`
  width: 618px;
  height: 518px;
  background-color: ${palette.white};
  box-shadow: 0px 6px 24px rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;
  &.large{

    width: 80%;
    height: 600px;
    iframe{
      height: 600px !important;
    }
  }
`;

export const ModalContainer = styled.div`
  height: 100%;
`;

export const CloseBtn = styled.div`
position: absolute;
  top: 0;
  right: 0;
  margin-top: -25px;
  margin-right: -25px;
`;

export const ModalHeader = styled.div`
  height: 38px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ModalContent = styled.div`
    height: 100%;
    overflow-y: auto;
    &.large{
      height: 100%;
    }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 20px;
`;

export const ModalTitle = styled.h3`
    color: ${palette.dark};
    ${textStyles.h1Title}
`;

export const CloseButton = styled.div``;
