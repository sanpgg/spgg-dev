import React from 'react';
import {
  InputContainer,
  InputLabel,
  InputStyled,
  InputAlert,
  CheckMark,
} from './styles';
import PropTypes from 'prop-types';

function RadioInput(
  {
    label, size, alert, alertText
  }
) {
  return (
    <InputContainer className={`${size}`}>
      {label && (
        <InputLabel className={`${size}`}>
            <InputStyled
              type="radio"
            />
            <CheckMark></CheckMark>
            {label}
        </InputLabel>
      )}
      
      {(alert && alertText) && (
        <InputAlert className={`${alert}`}>
          {alertText}
        </InputAlert>
      )}
    </InputContainer>
  );
}

RadioInput.propTypes = {
  /**
   * How large should the Input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Input label
   */
  label: PropTypes.string,
  /**
   * Alert type
   */
  alert: PropTypes.oneOf(['success', 'error']),
  /**
   * Alert type
   */
  alertText: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};

RadioInput.defaultProps = {
  size: 'large',
  label: 'Input',
  onClick: undefined
};

export default RadioInput;
