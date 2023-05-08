import React, { useEffect, useRef, useState } from 'react';
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
import useOnClickOutside from 'hooks/useOutsideClick';

function DropDown({
  size,
  options,
  value,
  onChange,
  // eslint-disable-next-line no-unused-vars
  id,
  label,
  labelField,
  attribute,
  alertText,
  placeHolder
}) {
  // eslint-disable-next-line no-unused-vars
  const [currentValue, setCurrentValue] = useState(value);
  const [inputLabel, setInputLabel] = useState('');
  const [opened, setOpened] = useState(false);

  const dropDown = useRef();

  useOnClickOutside(dropDown, () => {
    setOpened(false);
  });

  useEffect(() => {
    if (options) {
      const option = options.find((opt) => opt[`${attribute}`] === value);
      if (option) {
        setInputLabel(option[labelField]);
        setCurrentValue(option);
      } else {
        setInputLabel(placeHolder || dropdown_static.defaultText);
        setCurrentValue('');
      }
    }
    console.log(value, 'value');
  }, [value, options]);

  function openDropdown() {
    setOpened(!opened);
  }

  function setValue(data) {
    openDropdown();
    setCurrentValue(data.id);
    setInputLabel(data[labelField]);
    onChange(data);
  }

  function clearInput() {
    setCurrentValue();
    setInputLabel(placeHolder || dropdown_static.defaultText);
    onChange();
  }

  return (
    <InputContainer
      className={`${size}`}
      ref={dropDown}
    >
      <InputInner>
        <Input
          label={label}
          placeHolder={placeHolder}
          value={inputLabel}
          onClick={openDropdown}
          readOnly
          alertText={alertText}
          size="medium"
        />
        <DropDownIcon>
          {currentValue
            ? (
              <Icon
                size="medium"
                className="input"
                icon="bx bx-x"
                onClick={clearInput}
              />
            )
            : (
              <Icon
                size="medium"
                className={opened ? 'input active' : 'input'}
                icon={opened ? 'bx bx bx-chevron-up' : 'bx bx-chevron-down'}
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
                {option[labelField]}
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
   * Input label field
   */
  labelField: PropTypes.string,
  /**
   * Input value
   */
  value: PropTypes.string,
  /**
   * Attribute to filter value
   */
  attribute: PropTypes.string,
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
  options: PropTypes.arrayOf(PropTypes.object),
  /**
   * Error text
   */
  alertText: PropTypes.string,
  /**
   * Placeholder
   */
  placeHolder: PropTypes.string
};

DropDown.defaultProps = {
  size: 'large',
  value: '',
  attribute: 'id'
};

export default DropDown;
