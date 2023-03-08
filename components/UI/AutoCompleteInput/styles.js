import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';
import Icon from '../Icon';

export const AutoCompleteContainer = styled.div`
  /* Style sub-classes */
  background: ${palette.white};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div{
    width: calc(100% - 80px);
    .react-dropdown-select{
      width: 100%;
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
  }
`;

export const SearchIcon = styled(Icon)`
  
`;
