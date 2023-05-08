import styled from 'styled-components';

export const StepsContainer = styled.div`
  /* Style sub-classes */
  display: flex;
  align-items: center;
`;

export const StepContainer = styled.div`
  cursor: pointer;
  background-color: white;
  display: flex;
  align-items: center;
  /* Style sub-classes */
  &.active {
    /* font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px; */
  }
`;

export const Step = styled.img`
  /* Style sub-classes */
  /* &.large {
    font-size: 1.2em;
    padding: 10px 26px;
    border-radius: 6px;
  }

  &.medium {
    font-size: 1.2em;
    padding: 10px 20px;
    border-radius: 6px;
  }

  &.small {
    font-size: 1.2em;
    padding: 10px 16px;
    border-radius: 6px;
  } */
`;

export const StepSeparator = styled.img`
  max-width: 20px;
  margin: 0 10px;
`;
