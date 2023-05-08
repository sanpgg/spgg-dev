import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';

export const Container = styled.div`
  ${textStyles.P16A}
  line-height: 24px;
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

export const TitleContainer = styled.div``;

export const TitleAccordionContainer = styled.div``;

export const TitleAccordionContent = styled.div``;

export const Title = styled.h2`
  letter-spacing: 0.02em;
  ${textStyles.H28}
  span{
    font-style: italic;
  }
`;

export const Content = styled.div``;

export const AccordionContainer = styled.div`
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



  .ReactCollapse--collapse{
    transition: 0.3s ease-in-out;
  }

`;

export const AccordionHead = styled.div`
  display: flex;
  // justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${palette.bordes};
  padding: 18px 0;
  cursor: pointer;
  &.active{
    border-color: ${palette.black};
  }
`;

export const AccordionTitle = styled.span``;

export const AccordionBody = styled.div`
  padding: 20px;
  line-height: 24px;
`;

export const AccordionContent = styled.span``;
