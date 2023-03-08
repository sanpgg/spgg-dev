import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import { getTrackBackground } from 'react-range';
import styled from 'styled-components';

export const InputContainer = styled.div`
  /* Style sub-classes */
  
`;

export const InputLabel = styled.label`
  color: ${palette.darkGray};
  display: block;
  margin-bottom: 5px;
  ${textStyles.L13}
`;

export const RenderTrack = styled.div`
  height: 2px;
  
  background: ${(props) => getTrackBackground({
    values: props.value,
    colors: [palette.black, palette.bordes],
    min: 0,
    max: 100
  })}

  /* Style sub-classes */
  /* &:hover {
    color: #fff;
    background: red;
    border-color: #2e6da4;
  }

  &:focus {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c;
  }

  &:disabled {
    color: #337ab7;
    background-color: transparent;
    border: none;
    border-radius: 0;
    font-weight: 400;
  } */
`;

export const RenderThumb = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${palette.black};
  border-radius: 12px;
  border: 3px solid ${palette.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  /* Style sub-classes */
 
`;

export const InputAlert = styled.p`
  /* Style sub-classes */
  &.success {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
    color: green;
  }

  &.error {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
    color: red;
  }

`;
