import React from 'react';
import Icon from '../../Icon';
import {
  StepsContainer,
  Step,
  StepSeparator
} from './styles';
import PropTypes from 'prop-types';
//import stepBar from '../../../../assets/stepBar.svg';

function Steps(
  {
    size, steps, onClick
  }
) {
  return (
    <StepsContainer className={`${size}`}>
      {steps.length > 0 ? steps?.map((step, index) => (
        <>
          <Step 
            key={step.id}
            className={`${size} ${step.active ? 'active' : ''}`}
            onClick={() => { onClick(); }}
          >
            {index + 1}
          </Step>
          {index < steps.length - 1 ?
            <StepSeparator className={`${step.active ? 'active' : ''}`} />
            :
            null
          }
        </>
      )): null
      }
    </StepsContainer>
  );
}

Steps.propTypes = {
  /**
   * How large should the Steps be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Steps
   */
  steps: PropTypes.arrayOf(PropTypes.object),
  /**
   * OnClick
   */
  onClick: PropTypes.func
};

Steps.defaultProps = {
  size: 'large',
  steps: [{ id: 1, active: false }, { id: 2, active: false },{ id: 3, active: true }]
};

export default Steps;
