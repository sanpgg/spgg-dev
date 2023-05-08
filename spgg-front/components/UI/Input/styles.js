import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';

export const InputContainer = styled.div`
  /* Style sub-classes */
  display: flex;
  flex-direction: column;

  &.medium{
    background-color: blue !important;
    input{
      height: 50px;
    }
  }


  //input states

&:hover{
  input{
    border-color: ${palette.lightGray};
  }
}

&.success{
  input{
    border-color: ${palette.green}
  }
}

&.error{
  input{
    border-color: ${palette.red};
  }
}

`;

export const InputLabel = styled.label`
  ${textStyles.L13}
  color: ${palette.lightGray};
  line-height: 24px;
  margin: 0 0 5px;

  &.success {
      color: ${palette.green};
  }

  &.error {
    
    color: ${palette.red};
  }
  /* Style sub-classes */
  
  /*
  &.large {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
  }

  &.medium {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
  }

  &.small {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
  }
  */
`;

export const InputStyled = styled.input`
  padding: 0 20px;
  height: 60px;
  border: 1px solid ${palette.bordes};
  ${textStyles.P16A}
  color: ${palette.black};

  /* Style sub-classes */

  &.medium{
    height: 50px;
  }
  
  &:hover {
    border-color: ${palette.lightGray};
  }

  &:focus{
    outline: none;
    border-radius: 0;
    border-color: ${palette.black};


  &:disabled, &.disabled {
    
    background-color: ${palette.bordes};
    border-color: ${palette.bordes};
    color: ${palette.lightGray};
  }

  &.success {
    color: ${palette.green};
  }

  &.error {
    
    color: ${palette.red};
  }
`;

export const InputInner = styled.div`
  display: flex;
  flex-direction: column-reverse;

  input:focus + label, input:active + label{
    color: ${palette.black};
  }

`;

export const InputAlert = styled.p`
  /* Style sub-classes */
  margin: 10px 0 0;
  line-height: 16px;
  ${textStyles.L13}

  &.success {
   
    color: ${palette.green};
  }

  &.error {
    
    color: ${palette.red};
  }

`;
