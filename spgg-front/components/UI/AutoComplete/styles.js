import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';
import Icon from '../Icon';
import Select from 'react-dropdown-select';

export const AutoCompleteContainer = styled.div`
  /* Style sub-classes */
  background: ${palette.white};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;


  &.large{
    > div {
      &:first-child{
        height: 60px;
        width: calc(100% - 80px);

        .react-dropdown-select{
          width: 100%;
          padding: 10px;
          text-indent: 10px; 
        }
        .react-dropdown-select-input{
          min-width: 200px;
          text-indent: 10px;
          ${textStyles.P16A}
        }
        .react-dropdown-select-clear{
          font-size: 24px;
          color: ${palette.darkGray};
          &:hover{
            color: ${palette.darkGray};
          }
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

      }
    }
  
  }

  &.medium{
    > div{
      &:first-child{
        height: 50px;
        width: 100%;
        .react-dropdown-select{
        width: 100%;
        height: 50px;
        text-indent: 10px; 
        border-radius: 0 !important;
        &:focus-within{
          border-color: ${palette.black} !important;
        }
      }
      .react-dropdown-select-input{
        min-width: 200px;
        text-indent: 10px;
        border-radius: 0 !important;
        ${textStyles.P16A}
      }
      .react-dropdown-select{
        border-radius: 0 !important;
        &:hover{
          border-radius: 0 !important;
          border-color: ${palette.black};
        }
        &:focus-within{
          border-radius: 0 !important;
          outline: 0;
          box-shadow:initial;
          border-color: ${palette.black} !important;

        }
      }
      }
      
    }
  }

  > div{
   
    .react-dropdown-select-dropdown{
      ::-webkit-scrollbar {
        display: none;
      }
      background-color: ${palette.white};
      box-sizing: border-box;
      max-width: 100%;
      padding: 10px;
      border: 1px solid ${palette.lightGray};
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
      .react-dropdown-select-item, .react-dropdown-select-item-selected  {
        background-color: ${palette.white};
        padding: 10px;
        color: ${palette.lightGray};
        ${textStyles.P16A}
        &:hover{
          background-color: ${palette.bordes};
          color: ${palette.black}
        }
      }
    }

    .react-dropdown-select-dropdown-handle {
      display: none;
    }
  }
`;

export const SearchIcon = styled(Icon)`

  &.gray{
    position: absolute;
    top: 13px;
    right: 13px;
  }
  
`;

export const InputStyled = styled(Select)`
  height:60px;
  border: 1px solid ${palette.bordes};
  ${textStyles.P16A}
  /* Style sub-classes */
  &:hover {
    border-color: ${palette.black};
  }

  &:focus, &:active, &:focus-within{
    border-color: ${palette.black} !important;
  }

  &:disabled {
    color: #337ab7;
    background-color: transparent;
    border: none;
    border-radius: 0;
    font-weight: 400;
  }
`;
