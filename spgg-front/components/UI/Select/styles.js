import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';
import Select from 'react-dropdown-select';

export const InputContainer = styled.div`
  /* Style sub-classes */
  background: ${palette.white};
  width: 100%;
  justify-content: space-between;
  > div{
    //width: calc(100% - 80px);
    .react-dropdown-select{
      padding: 10px;
      text-indent: 10px; 
    }
    .react-dropdown-select-input{
      text-indent: 10px;
      ${textStyles.P16A}
    }
    .react-dropdown-select{
      &:hover{
        border-color: ${palette.black};
      }
      &:focus-within{
        outline: 0;
        box-shadow:initial;
      }
    }
    .react-dropdown-select-dropdown{
      ::-webkit-scrollbar {
        display: none;
      }
      background-color: ${palette.white};
      box-sizing: border-box;
      width: 300px;
      padding: 10px;
      border: 1px solid ${palette.lightGray};
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
      div {
        background-color: ${palette.white};
        padding: 10px;
        color: ${palette.lightGray};
        ${textStyles.P16A}
        display: flex;
        flex-direction: column;
        span{
          &:nth-child(1){
            color: ${palette.black};
            margin-bottom: 5px;
            ${textStyles.P16A}
          }
        }
        &:hover{
          background-color: ${palette.bordes};
        }
      }
    }
  }
`;

export const InputStyled = styled(Select)`
  /* Style sub-classes */
  height:50px;
  border: 1px solid ${palette.bordes};
  ${textStyles.P16A}
  /* Style sub-classes */
  &:hover {
    border-color: ${palette.black};
  }

  &:focus {
    border-color: ${palette.black};
  }
  &:disabled {
    color: #337ab7;
    background-color: transparent;
    border: none;
    border-radius: 0;
    font-weight: 400;
  }
`;

export const SelectElement = styled.div``;

export const SelectTitle = styled.span``;

export const SelectSubTitle = styled.span``;
