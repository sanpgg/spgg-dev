import { palette } from 'components/Layout/ThemeProvider';
import styled from 'styled-components';

export const IconContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:40px;
  width: 24px;
  height: 24px;
  font-size: 24px;
  }

  &.checkbox {
    color: black !important;
    background-color: transparent !important;
    border: 0px !important;
  }

  /* Style sub-classes */

  &.large {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }

  .btn{
    background-color: transparent !important;
  }

  &.date {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }

  &.medium {
    width: 40px;
    height: 40px;
    font-size: 24px;
  }

  &.small {
    width: 24px;
    height: 24px;
    font-size: 24px;
  }

  &.black {
    background-color: ${palette.black};
    color: ${palette.white};
    border: 1.4px solid ${palette.black};
  }

  &.white {
    background-color: ${palette.white} !important; 
    color: ${palette.darkGray} !important;
    border: 1.4px solid ${palette.darkGray}!important;
    transition: all 300ms linear;
    &:hover{
      background-color: ${palette.black} !important; 
      color: ${palette.white} !important;
      border: 1.4px solid ${palette.black}!important;
    }
  }

  &.gray {
    background-color: transparent !important; 
    color: ${palette.lightGray} !important;
    border:0;
  }

  &.icon {
    background-color: transparent !important; 
    color: ${palette.darkGray} !important;
    border:0;
  }

  &.active {
    background-color: transparent !important; 
    color: ${palette.black} !important;
    border:0;
  }


  &.transparent {
    background-color: transparent !important; 
    color: ${palette.darkGray} !important;
    border:0;
    i{
      font-size: 24px;
    }
  }

  &.social {
    background-color: transparent !important; 
    color: ${palette.white} !important;
    border:0;
    i{
      font-size: 24px;
    }
    &:hover{
      color: ${palette.lightGray} !important;
      border: 1.4px solid ${palette.black}!important;
    }
  }

  &.noHover{
  
  }

  &.hoverBlack {
    background-color: ${palette.white};
    color: ${palette.darkGray};
    border: 1.4px solid ${palette.darkGray};
    &:hover {
      background-color: ${palette.white};
      color: ${palette.darkGray};
      border: 1.4px solid ${palette.darkGray};
    }
  }

  &.hoverWhite {
    background-color: ${palette.black};
    color: ${palette.white};
    border: 1.4px solid ${palette.black};
    &:hover {
      background-color: ${palette.black};
      color: ${palette.white};
      border: 1.4px solid ${palette.black};
    }
  }
  
  &.hoverGray{
    transition: all 0.3s linear;
    &:hover{
      background-color: ${palette.darkGray};
    }
  }
`;
