import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';

export const StepsContainer = styled.div`
  /* Style sub-classes */
  display: flex;
  align-items: center;
`;

export const Step = styled.div`
  cursor: pointer;
  background-color: ${palette.black};
  color: ${palette.white};
  width: 40px;
  height: 40px;
  border-radius: 25px;
  color: ${palette.white};
  display: flex;
  justify-content: center;
  align-items: center;
  ${textStyles.P16A}
  /* Style sub-classes */
  &.active, &:hover {
    background-color: ${palette.bordes};
    color: ${palette.lightGray}
  }
`;

export const StepSeparator = styled.div`
  width: 40px;
  height: 2px;
  background-color: ${palette.black};
  margin: 0 10px;
  &.active{
    background-color: ${palette.border};
  }
`;
