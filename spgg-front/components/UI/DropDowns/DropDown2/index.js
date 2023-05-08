import React, { useEffect, useState } from 'react';
import {
  DropDownBox,
  DropDownIcon,
  InputContainer,
  InputInner,
  Option,
  OptionText
} from './styles';
import PropTypes from 'prop-types';
import Input from 'components/UI/Input';
import Icon from 'components/UI/Icon';
import { dropdown_static } from './data';

function DropDown({
  size,
  options,
  value,
  onChange,
  id,
  label
}) {
  // eslint-disable-next-line no-unused-vars
  const [currentValue, setCurrentValue] = useState(value);
  const [inputLabel, setInputLabel] = useState('');
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const option = options.find((opt) => opt.id === id);
    if (option) {
      setInputLabel(option.label);
      setCurrentValue(option);
    } else {
      setInputLabel(dropdown_static.defaultText);
    }
  }, []);

  function openDropdown() {
    setOpened(!opened);
  }

  function setValue(data) {
    openDropdown();
    setCurrentValue(data.id);
    setInputLabel(data.label);
    onChange(data);
  }

  function clearInput() {
    setCurrentValue();
    setInputLabel(dropdown_static.defaultText);
  }

  return (
    <InputContainer className={`${size}`}>
      <InputInner>
        <Input
          className="medium"
          label={label}
          value={inputLabel}
          onClick={openDropdown}
          readOnly
        />
        <DropDownIcon>
          {currentValue
            ? (
              <Icon
                icon="bx bx-x"
                onClick={clearInput}
              />
            )
            : (
              <Icon
                icon={opened ? 'bx bx-chevron-down' : 'bx bx-chevron-up'}
                onClick={openDropdown}
              />
            )}
        </DropDownIcon>
      </InputInner>
      {opened && (
        <DropDownBox>
          {options.map((option) => (
            <Option onClick={() => { setValue(option); }}>
              <OptionText>
                {option.label}
              </OptionText>
            </Option>
          ))}
        </DropDownBox>
      )}
    </InputContainer>
  );
}

DropDown.propTypes = {
  /**
   * How large should the Input be?
   */
  size: PropTypes.oneOf(['medium', 'large']),
  /**
   * Input label
   */
  label: PropTypes.string,
  /**
   * Input value
   */
  value: PropTypes.string,
  /**
   * Id value
   */
  id: PropTypes.number,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional click handler
   */
  onChange: PropTypes.func,
  /**
   * Optional click handler
   */
  options: PropTypes.arrayOf(PropTypes.object)
};

DropDown.defaultProps = {
  size: 'medium',
  value: ''
};

export default DropDown;
