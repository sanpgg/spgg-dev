import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';

export const InputContainer = styled.div`
  /* Style sub-classes */
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;
  .password-icon{
    position: absolute;
    bottom: 10px;
    right: 15px;
    cursor: pointer;
  }

&:hover{
  input{
    border-color: ${palette.lightGray};
  }

  input.disabled, input:disabled{
    border-color: ${palette.bordes};
  }
}

&.error{
  input{
    border-color: ${palette.red};
    background-color: ${palette.lightRed};
    &:hover{
      background-color: ${palette.lightRed};
    }
  }
}

input:focus + label, input:active + label{
    color: ${palette.dark};
    border-color: ${palette.bordes};
}

input:disabled + label, input.disabled + label{
    color: ${palette.lightGray};
    border-color: ${palette.bordes};
    &:hover{
      color: ${palette.lightGray};
      border-color: ${palette.bordes};
    }
}

/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active
{
 -webkit-box-shadow: 0 0 0 30px ${palette.white} inset !important;
}

`;

export const InputInner = styled.div`
display: flex;
flex-direction: column-reverse;
`;

export const InputLabel = styled.label`
  ${textStyles.label}
  color: ${palette.lightGray};
  margin: 0 0 10px;
`;

export const RecoverLabel = styled.a`
  ${textStyles.label}
  color: ${palette.lightGray};
  margin: 0 0 10px;
`;

export const InputStyled = styled.input`
  padding: 0 15px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid ${palette.bordes};
  background-color: ${palette.gray};
  ${textStyles.body}
  color: ${palette.black};

  &::placeholder{
      opacity: 1;
      color: ${palette.placeholder};
  }
  &:hover {
    border-color: ${palette.lightGray};
  }

  &:focus {
  
    border-color: ${palette.red};
  }

  &:focus {
    outline: none;
    border-color: ${palette.dark};
  }

  &:disabled, &.disabled {
    background-color: ${palette.light};
    border-color: ${palette.bordes};
    color: ${palette.lightGray};
    &:hover{
      border-color: ${palette.bordes};
    }
  }

  &.success {
    color: ${palette.green};
  }

  &.error {
    color: ${palette.red};
  }
`;

export const InputAlert = styled.p`
  /* Style sub-classes */
  margin: 10px 0 0;
  line-height: 16px;
  ${textStyles.labelMedium}

  &.success {
   
    color: ${palette.green};
  }

  &.error {
    
    color: ${palette.red};
  }

`;
