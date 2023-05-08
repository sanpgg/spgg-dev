import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
  cursor: pointer;
  padding-left: 34px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
`;

export const InputLabel = styled.label`
  /* Style sub-classes */
  color: ${palette.darkGray};
  ${textStyles.P16A}
  display: flex;
  align-items: center;
    input:checked ~ div:after {
    display: block;
  }
`;

export const InputStyled = styled.input`
  /* Style sub-classes */
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CheckMark = styled.div`
   position: absolute;
    top: 0;
    left: 0;
    height: 24px;
    width: 24px;
    border-radius: 15px;
    border: 1.6px solid ${palette.darkGray};
    background-color: ${palette.white};
    
    &:after{
      content: '';
      display: none;
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 8px;
      background: ${palette.black};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
`;

export const InputAlert = styled.p`
  /* Style sub-classes */
  &.success {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
    color: green;
  }

  &.error {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
    color: red;
  }

`;
