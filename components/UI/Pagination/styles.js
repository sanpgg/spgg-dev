import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';

export const PagesContainer = styled.div`
  /* Style sub-classes */
  background: ${palette.white};
  height: 50px;
  padding: 0 5px;
  border: 1px solid ${palette.bordes};
  display: inline-flex;
  align-items: center;

  /* &.large {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
  }

  &.medium {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
  }

  &.small {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
  } */
`;

export const Page = styled.div`
  /* Style sub-classes */
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${palette.lightGray};
  ${textStyles.P16A};
  &.active{
    color: ${palette.black};
  }
  /* &.large {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
  }

  &.medium {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
  }

  &.small {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
  } */
`;

export const ArrowLeft = styled.img`
    cursor: pointer;
`;

export const ArrowRight = styled.img`
    cursor: pointer;
`;
