import React from 'react';
import Icon from '../../Icon';
import {
  StepsContainer,
  Step,
  StepContainer,
  StepSeparator
} from './styles';
import PropTypes from 'prop-types';
import stepBar from '../../../../assets/stepBar.svg';
import stepBase from '../../../../assets/step.svg';
import stepActive from '../../../../assets/stepActive.svg';

function Steps2(
  {
    size, steps, onClick
  }
) {
  return (
    <StepsContainer className={`${size}`}>
      {steps.length > 0 ? steps?.map((step, index) => (
        <StepContainer>
          <Step 
            key={step.id}
            className={`${size}`}
            src={step.active ? stepActive : stepBase}
            onClick={() => { onClick(); }}
          />
          {index < steps.length - 1 ?
            <StepSeparator src={stepBar}/>
            :
            null
          }
        </StepContainer>
      )): null
      }
    </StepsContainer>
  );
}

Steps2.propTypes = {
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

Steps2.defaultProps = {
  size: 'large',
  steps: [{ id: 1, active: false }, { id: 2, active: true }]
};

export default Steps2;
