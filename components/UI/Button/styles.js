import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';

export const ButtonStyled = styled.button`
  color: ${palette.white};
  ${textStyles.P16A}
  height: 50px;
  padding: 0 36px;
  border: 1px solid ${palette.black};
  border-radius: 100px;
  cursor: pointer;

  /* Style sub-classes */
  
  &.mr-2{
    margin-right: 20px;
  }
  &.primary {
    background-color: ${palette.black};
    color: ${palette.white}; 
    &:hover{
      background-color: ${palette.darkGray}
    }
    &.disabled, &:disabled{
      color: ${palette.lightGray};
      background-color: ${palette.bordes};
      border-color: ${palette.bordes};
      &:hover{
        color: ${palette.lightGray};
        background-color: ${palette.bordes};
        border-color: ${palette.bordes};
      }
    }
    &.icon {
      
      div{
        font-size: 24px;
        background-color: transparent;
        border: 0;
        font-size: 24px;
        &:hover{
          background-color: transparent;
          border: 0;
        }
      }
    }
  }

  &.secondary {
    color: ${palette.darkGray};
    background-color: ${palette.white};
    border-color: ${palette.darkGray};
    &:hover{
      background-color: ${palette.darkGray};
      color: ${palette.white};
      &.icon{
        div{
        background-color: transparent;
        border: 0;
        color: ${palette.white};
        &:hover{
          background-color: transparent;
          border: 0;
        }
      }
      }
    }
    &.disabled, &:disabled{
      color: ${palette.lightGray};
      background-color: ${palette.white};
      border-color: ${palette.bordes};
      &:hover{
        color: ${palette.lightGray};
        background-color: ${palette.white};
        border-color: ${palette.bordes};
      }
    }
    &.icon {
      div{
        background-color: transparent;
        border: 0;
        color: ${palette.darkGray};
        &:hover{
          background-color: transparent;
          border: 0;
        }
      }
    }
  }
  &.gray{
    color: ${palette.darkGray};
    background-color: ${palette.bordes};
    border-color: ${palette.bordes};
    &:hover{
      color: ${palette.darkGray};
      background-color: ${palette.white};
      border-color: ${palette.bordes};
    }
  }

  .grouped{
    div{
      background-color: transparent !important;
      &:hover{
        border: 0 !important;
      }
    }
  }

  &.medium {
    padding: 0 26px !important;
    height: 50px;
  }

  &.link{
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid ${palette.white};
    color: ${palette.darkGray};
    padding: 0 !important;
    &:hover{
      border-bottom: 1px solid ${palette.darkGray};
    }
    div {
      background-color: transparent;
      color: ${palette.darkGray} !important;
    }
  }

  &.icon {
    display:flex;
    align-items: center;
    div{
      margin: 0 0 0 10px;
      padding: 0;
      border: 0;
      border-radius: 0;
      color: ${palette.white};
    }
  }
  @media only screen and (max-width: 767px) {
    height: 40px;
    padding: 0 26px;
    ${textStyles.P15A}
  }
`;

export const GroupedContainer = styled.div`
  display: flex;
  .grouped{
    &:first-child{
      margin-right: 20px;
      color: ${palette.darkGray};
      background-color: ${palette.white};
      border-color: ${palette.darkGray};
      div{
        background-color: transparent !important;
        color: ${palette.darkGray};
      }
      &:hover{
        background-color: ${palette.darkGray};
        color: ${palette.white};
        div{
          color: white;
          border: 0;
        }
      }
    }
    &:last-child{
      background-color: ${palette.black};
      color: ${palette.white}; 
      div{
        background-color: transparent !important;
        color: ${palette.white};
      }
      &:hover{
        background-color: ${palette.darkGray};
        div{
          border: 0;
        }
      }
    }
  }
`;
