import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';

export const PagesContainer = styled.div`
  /* Style sub-classes */
  display:flex;
`;

export const Page = styled.div`
  color: ${palette.black} !important;
  line-height: 24px;
  ${textStyles.P16A}
  display: flex;
`;

export const PageTitle = styled.span`
  // max-width: 150px;
  // text-overflow: ellipsis;
  // white-space: nowrap;
  // overflow: hidden;
`;

export const PageTitleLink = styled.a`
  cursor: pointer;
  text-decoration: none;
  // max-width: 150px;
  // text-overflow: ellipsis;
  // white-space: nowrap;
  // overflow: hidden;
  color: ${palette.lightGray}
`;

export const Arrow = styled.img`
  margin: 0 10px;
  width: 8px;
  height: auto;
`;
