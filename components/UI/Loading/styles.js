import styled from 'styled-components';

export const LoadingStyled = styled.img`
  width: 40px;
  /* Style sub-classes */

  animation: turn 0.7s infinite linear;
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
  
  @keyframes turn {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
