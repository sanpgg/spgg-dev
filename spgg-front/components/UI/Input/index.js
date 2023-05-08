import React, { useState } from 'react';
import {
  InputContainer,
  InputInner,
  InputLabel,
  InputStyled,
  InputAlert
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
    readOnly,
    size
  }
) {
  const [currentType, setCurrentType] = useState(type);
  return (
    <InputContainer className={`${alertText ? alert : ''}`}>
      <InputInner>
        <InputStyled
          placeholder={placeHolder}
          type={currentType}
          value={value}
          onChange={(e) => {
            if (!readOnly) {
              onChange(e.target.value);
            }
          }}
          onClick={onClick}
          disabled={disabled}
          readOnly={readOnly}
          className={size}
        />
        {label && (
          <InputLabel className="label">
              {label}
          </InputLabel>
        )}
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
  type: PropTypes.oneOf(['text', 'password']),
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
   * Size
   */
  size: PropTypes.oneOf(['large', 'medium'])
};

Input.defaultProps = {
  placeHolder: '',
  alert: 'error'
};

export default Input;
