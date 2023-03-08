import styled from 'styled-components';
import { palette } from 'components/Layout/ThemeProvider';
import Icon from '../Icon';
import { InputStyled } from '../Input/styles';

export const SearchBoxContainer = styled.div`
  /* Style sub-classes */
  width: 100%;
  display: flex;
  justify-content: space-between;
  &.large {
    input{
      width: calc(100% - 80px);
      &:focus + .white{
      background-color: ${palette.black} !important;
      color: ${palette.white} !important;
    }
    }
  }
  &.search-hero{

  }

  &.medium {
    position:relative;
    div{
      position: absolute;
      top:0;
      right: 0;
      margin: 13px;
      width: 24px;
      height: 24px;
    }

    input{
      padding-top: 0;
      padding-bottom: 0;
      height: 50px;
      width: calc(100%);
      &:focus + .gray{
        color: ${palette.black} !important;
      }
    }
  }
  &.dark {
    position:relative;
    div{
      position: absolute;
      top:0;
      right: 0;
      margin: 13px;
      width: 24px;
      height: 24px;
    }

    input{
      background-color: transparent;
      border-radius: 100px;
      padding-top: 0;
      padding-bottom: 0;
      height: 50px;
      width: calc(100%);
      // border-color: white;
      // color: ${palette.white};

      border-color: ${(props) => (props.textColor ? props.textColor : `${palette.white}`)} !important;
      color: ${(props) => (props.textColor ? props.textColor : `${palette.white}`)} !important;
     &:focus + .gray{
        // color: ${palette.white} !important;
        color: ${(props) => (props.textColor ? props.textColor : `${palette.white}`)} !important;
     }
    }
  }
`;

export const InputSearchStyled = styled(InputStyled)`
  /* Style sub-classes */
  &.search-hero{
    
  }
`;

export const SearchIcon = styled(Icon)`
  /* Style sub-classes */
  
`;
