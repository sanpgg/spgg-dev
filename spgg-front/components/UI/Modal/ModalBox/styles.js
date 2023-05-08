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
    transform: translate(-0, -50%);
    width: 75%;
    height: 100vh;
    left: initial;
    right: 0;
    box-sizing: border-box;
    > div {
      > div{
        height: 100vh;
        > div{
          display: flex;
          height: 100%;
          .imageContainer{
            height:100vh;
            max-width: 500px;
          }
          .profileData{
            padding: 150px 130px 100px 100px;
            width: calc(100% - 500px);
            height: 100vh;
            overflow-y: scroll;
          }
        }
      }
    }
    @media only screen and (max-width: 900px) {
      width:100%;
      height: calc(100vh - 15vh);
      transform: translate(0);
      top: initial;
      left: 0;
      bottom: 0;
      > div {
        height:100%;
        overflow-y: auto;
        > div{
          height: 100vh;
          > div{
            flex-direction: column;
            .imageContainer{
              min-height: 375px;
              max-height: 375px;
              max-width: 100%;
            }
            .profileData{
              padding: 40px 18px 40px;
              width: calc(100%);
              overflow-y: initial;
              height: initial;
            }
          }
        }
      }
    }
  }
`;

export const ModalContainer = styled.div`
`;

export const ModalHeader = styled.div`
  height: 38px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const ModalContent = styled.div`
    height: 315px;
    overflow-y: auto;
    &.large{
      height: auto;
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
