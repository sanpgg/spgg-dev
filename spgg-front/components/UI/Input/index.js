import React, { useEffect, useState } from 'react';
import {
  InputContainer,
  InputInner,
  InputLabel,
  InputStyled,
  InputAlert,
  RecoverLabel
} from './styles';
import PropTypes from 'prop-types';
import Icon from '../Icon';

function Input(
  {
    label,
    alert,
    alertText,
    placeHolder,
    onChange,
    value,
    onClick,
    type,
    password,
    disabled,
    readOnly
  }
) {
  const [currentType, setCurrentType] = useState(type);
  const [currentValue, setCurrentValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (value) {
      setCurrentValue(value);
    } else {
      setCurrentValue('');
    }
    setIsDisabled(disabled || false);
  }, [value, disabled]);

  return (
    <InputContainer className={`${alertText ? alert : ''}`}>
      <InputInner>
        <InputStyled
          placeholder={placeHolder}
          type={currentType}
          value={currentValue}
          onChange={(e) => {
            onChange(e.target.value);
            setCurrentValue(e.target.value);
          }}
          onClick={onClick}
          disabled={isDisabled}
          readOnly={readOnly}
        />
        <div className="flex justify-between">
          {label && (
            <InputLabel className="label">
                {label}
            </InputLabel>
          )}
        </div>
        {password && (
          currentType === 'password'
            ? <Icon className="password-icon transparent" icon="bx bx-show-alt" onClick={() => setCurrentType('text')} />
            : <Icon className="password-icon transparent" icon="bx bx-hide" onClick={() => setCurrentType('password')} />
        )}
      </InputInner>
      {(alert && alertText) && (
        <InputAlert className={`${alert}`}>
          {alertText}
        </InputAlert>
      )}
    </InputContainer>
  );
}

Input.propTypes = {
  /**
   * Input label
   */
  label: PropTypes.string,
  /**
   * Input PlaceHolder
   */
  placeHolder: PropTypes.string,
  /**
   * Alert type
   */
  alert: PropTypes.oneOf(['error']),
  /**
   * Alert type
   */
  alertText: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional change handler
   */
  onChange: PropTypes.func,
  /**
   * Input value
   */
  value: PropTypes.string,
  /**
   * Input type
   */
  type: PropTypes.oneOf(['text', 'password', 'email']),
  /**
   * Password type
   */
  password: PropTypes.bool,
  /**
   * Disabled prop
   */
  disabled: PropTypes.bool,
  /**
   * Read Only prop
   */
  readOnly: PropTypes.bool,
  /**
   * Recover prop
   */
  recover: PropTypes.bool
};

Input.defaultProps = {
  placeHolder: '',
  alert: 'error'
};

export default Input;
