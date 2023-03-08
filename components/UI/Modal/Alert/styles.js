import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';

export const AlertContainer = styled.div`
  /* Style sub-classes */
  background: #fff;
  border: 1px solid ${palette.bordes};
  max-width: 480px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
  padding: 40px 60px;
  box-sizing: border-box;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export const AlertBody = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AlertTitle = styled.span`
  text-align: center;
  ${textStyles.H26}
`;

export const AlertContent = styled.span`
  text-align: center;
  margin: 20px 0;
  ${textStyles.P16A}
`;

export const AlertFooter = styled.div`
  display: flex;
  justify-content: center;

`;
