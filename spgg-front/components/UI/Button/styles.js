import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';

export const ButtonStyled = styled.button`
  color: ${palette.white};
  ${textStyles.bodyMedium}
  padding: 11px 20px;
  border: 1px solid ${palette.dark};
  cursor: pointer;

  /* Style sub-classes */
  
  &.mr-2{
    margin-right: 20px;
  }
  &.primary {
    background-color: ${palette.dark};
    color: ${palette.white}; 
    &:hover{
      background-color: ${palette.gray}
    }
    &.disabled, &:disabled{
      color: ${palette.white};
      background-color: ${palette.bordes};
      border-color: ${palette.bordes};
      &:hover{
        color: ${palette.white};
        background-color: ${palette.bordes};
        border-color: ${palette.bordes};
      }
    }
    div{
      i{
        color: ${palette.white}
      }
    }
  }

  &.secondary {
    color: ${palette.lightGray};
    background-color: ${palette.white};
    border-color: ${palette.light};
    &:hover{
      background-color: ${palette.light};
      color: ${palette.gray};
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
      color: ${palette.bordes};
      background-color: ${palette.white};
      border-color: ${palette.light};
      &:hover{
        color: ${palette.bordes};
        background-color: ${palette.white};
        border-color: ${palette.light};
      }
    }
  }

  &.link {
    color: ${palette.gray};
    background-color: ${palette.white};
    border-color: ${palette.white};
    &:hover{
      text-decoration: underline;
    }
    &.disabled, &:disabled{
      color: ${palette.lightGray};
      background-color: ${palette.white};
      border-color: ${palette.bordes};
      &:hover{
        color: ${palette.lightGray};
        background-color: ${palette.white};
        border-color: ${palette.bordes};
        text-decoration: underline;
      }
    }
    &.loading{
      border-color: ${palette.light};
      div{
        i{
          color: ${palette.gray}
        }
      }
    }
  }

  &.danger {
    color: ${palette.red};
    background-color: ${palette.lightRed};
    border-color: ${palette.red};
    &:hover{
      background-color: ${palette.red};
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
      color: ${palette.white};
      background-color: ${palette.red};
      border-color: ${palette.bordes};
      &:hover{
        color: ${palette.lightGray};
        background-color: ${palette.white};
        border-color: ${palette.bordes};
      }
    }
    &.loading{
      border-color: ${palette.red};
      background-color: ${palette.red};
      div{
        i{
          color: ${palette.white}
        }
      }
    }
    
  }
  &.loading{
    width: 83px;
    height: 44px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  &.profile-btn {
    background-color: ${palette.white};
    color: ${palette.dark}; 
    border: 1px solid ${palette.bordes};
    &:hover{
      background-color: ${palette.dark}
      color: ${palette.white};
      border: 1px solid ${palette.dark};
    }

    div{
      i{
        color: ${palette.white}
      }
    }
  }
`;
