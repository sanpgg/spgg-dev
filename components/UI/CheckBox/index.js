import React, { useState } from 'react';
import {
  InputContainer,
  InputLabel,
  CheckboxStyled,
  InputAlert
} from './styles';
import PropTypes from 'prop-types';
import Icon from 'components/UI/Icon';

function CheckBox(
  {
    label, alert, alertText, checked, icon
  }
) {
  const [currentValue, setCurrentValue] = useState(checked);
  return (
    <InputContainer>
      <CheckboxStyled
        icon={<Icon icon={icon} className="checkbox black" />}
        checked={currentValue}
        onChange={(value) => { setCurrentValue(value); }}
        label={label && (
          <InputLabel>
              {label}
          </InputLabel>
        )}
      />
      {(alert && alertText) && (
        <InputAlert className={`${alert}`}>
          {alertText}
        </InputAlert>
      )}
    </InputContainer>
  );
}

CheckBox.propTypes = {
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
   * Icon
   */
  icon: PropTypes.string,
  /**
   * Checked
   */
  checked: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};

CheckBox.defaultProps = {
  label: 'Input',
  checked: true,
  onClick: undefined,
  icon: 'bx bx-check'
};

export default CheckBox;
