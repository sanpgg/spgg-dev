import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';
import Select from 'react-dropdown-select';

export const InputContainer = styled.div`
  position: relative;
  .react-dropdown-select-dropdown-handle {
    color: ${palette.gray};

    svg {
      height: 24px;
      width: 24px;
      top: 50%;
      bottom: 50%;
    }
  }
  /* Style sub-classes */
  background: ${palette.white};
  width: 100%;
  > div{
    width: 100%;
    .react-dropdown-select{
      width: 100%;
      text-indent: 10px; 
      height: 44px;
      border-radius: 0;
      ${textStyles.body}
    }
    .react-dropdown-select-input{
      text-indent: 10px;
      ${textStyles.body}
    }
    .react-dropdown-select{
      &:hover{
        border-color: ${palette.lightGray};
      }
      &:focus-within, &:active{
        outline: 0;
        box-shadow:initial;
        border: 1px solid ${palette.dark};
      }
    }
    .react-dropdown-select-dropdown{
      ::-webkit-scrollbar {
        display: none;
      }
      background-color: ${palette.white};
      box-sizing: border-box;
      max-width: 100%;
      border: 1px solid ${palette.lightGray};
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
      .react-dropdown-select-item, .react-dropdown-select-item-selected  {
        background-color: ${palette.white};
        padding: 15px 10px;
        line-height: 22px;
        color: ${palette.gray};
        ${textStyles.body}
        &:hover{
          background-color: ${palette.light};
          color: ${palette.dark}
        }
      }
    }
  }
`;

export const InputStyled = styled(Select)`
  /* Style sub-classes */
  height:44px;
  border: 1px solid ${palette.bordes};
  ${textStyles.body}
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

export const InputInner = styled.div`
  position: relative;
`;

export const DropDownIcon = styled.div`
  position: absolute;
  bottom: 10px;
  right: 15px;
`;

export const DropDownBox = styled.div`
  border: 1px solid ${palette.bordes};
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  left: 0;
  bottom: -10px;
  background-color: ${palette.white};
  transform:translateY(100%);
  z-index: 3;
`;

export const Page = styled.div`
    width:100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: 0 19px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover{
      background-color: ${palette.light};
      p{
        color: ${palette.dark};
      }
    }
`;

export const PageTitle = styled.p`
  color: ${palette.gray};
  ${textStyles.body}
`;

export const PageImage = styled.img`
  width: 38px;
  height: 38px;
  margin: 11px 15px;
`;
