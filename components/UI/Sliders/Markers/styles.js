import { palette } from 'components/Layout/ThemeProvider';
import styled from 'styled-components';

export const MarkersContainer = styled.div`
  width: 152px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  &.default{
    div{
      background-color: ${palette.white};
    }
  }
  &.dark{
    background-color: ${palette.white};
    div{
      background-color: ${palette.black};
    }
  }
  &.light{
    background-color: ${palette.black};
    div{
      background-color: ${palette.white};
    }
  }
`;

export const Marker = styled.div`
  width: 16px;
  height: 2px;
  opacity: 0.25;
  margin: 0 5px;
  &.active {
    opacity: 1;
  }
`;
