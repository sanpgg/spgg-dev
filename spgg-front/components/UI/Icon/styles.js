import { palette } from 'components/Layout/ThemeProvider';
import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:40px;
  width: 24px;
  height: 24px;
  font-size: 24px;
  color: ${palette.gray};
  cursor: pointer;


  &.checkbox {
    color: ${palette.dark} !important;
    background-color: transparent !important;
    border: 0px !important;
  }

  /* Style sub-classes */

  .btn{
    background-color: transparent !important;
  }

  &.black {
    background-color: ${palette.dark};
    color: ${palette.white};
    border: 1.4px solid ${palette.dark};
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;

  }

  &.active {
    background-color: transparent;
    color: ${palette.dark};
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
  }

  &.dark {
    background-color: transparent;
    color: ${palette.dark};
    border: 0;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
  }

  &.gray {
    background-color: transparent;
    color: ${palette.gray};
    border: 0;
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;

  }

  &.transparent {
    background-color: transparent !important; 
    color: ${palette.lightGray} !important;
    border: 0;
    height: 24px;
    height: 24px;
  }

  &.circle{
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    cursor: pointer;
    &:hover{
      background-color: ${palette.light};
    }
  }

  &.white{
    width: 38px;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    background-color: transparent;
    color: ${palette.white};
    &.rounded{
      background-color: ${palette.white};
      color: ${palette.gray};
      border-radius: 40px !important;
      cursor: pointer;
    }
  }

  &.input{
    background-color: transparent !important; 
    color: ${palette.lightGray} !important;
    border: 0;
    height: 24px;
    height: 24px;
    &.active, &:hover{
      color: ${palette.dark} !important;
    }
  }


  /* &.hoverBlack {
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
  } */
`;
