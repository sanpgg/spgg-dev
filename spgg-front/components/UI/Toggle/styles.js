import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';

export const ToggleContainer = styled.div`
  /* Style sub-classes */
  background: ${palette.white};
  max-width: 690px;
  padding: 20px 40px;
  border: 1px solid ${palette.bordes};
  box-sizing: border-box;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.05);
`;

export const ToggleBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.span`
  color: ${palette.black}
  ${textStyles.P16A}
`;
