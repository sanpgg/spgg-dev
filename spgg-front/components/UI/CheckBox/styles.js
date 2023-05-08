import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';
import Checkbox from 'react-custom-checkbox';

export const InputContainer = styled.div`
  /* Style sub-classes */

`;

export const InputLabel = styled.label`
  ${palette.darkGray};
  ${textStyles.P16A}
`;

export const CheckboxStyled = styled(Checkbox)`
  /* Style sub-classes */
  background-color: ${palette.white} !important;
  width: 24px !important;
  height: 24px !important;
  border: 1px solid ${palette.darkGray} !important;
  border-radius: 0 !important;
  position: relative;
  .checkbox{
    background-color: ${palette.black} !important;
    color: ${palette.white} !important;
    position: absolute;
    width: 24px;
    height: 24px;
    border:0;
    border-radius: 0 !important;
    &:hover{
      i{
        position: relative;
        &:before{
          content:'';
          background-color: ${palette.white};
          width: 14px;
          height: 3px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
`;

export const InputAlert = styled.p`
  /* Style sub-classes */
  &.success {   
    color: green;
  }

  &.error {
    color: red;
  }

`;
