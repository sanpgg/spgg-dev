import styled from 'styled-components';
import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';

export const BadgeContainer = styled.div`
  /* Style sub-classes */
  background: ${palette.bordes};
  color: ${palette.darkGray};
  display: inline-flex;
  padding: 5px 10px;
  &:hover{
    background-color: ${palette.black};
    color: ${palette.white};
  }
`;

export const BadgeLabel = styled.p`
  ${textStyles.L13}
  /* Style sub-classes */
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
