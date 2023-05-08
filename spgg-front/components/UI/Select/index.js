import React from 'react';
import {
  InputContainer,
  InputStyled,
  SelectElement,
  SelectTitle,
  SelectSubTitle
} from './styles';
import PropTypes from 'prop-types';
import { example_data } from './data';

const itemRenderer = ({
  item,
  props,
  methods
}) => (
  <SelectElement
    onClick={() => methods.addItem(item)}
    selected={methods.isSelected(item)}
  >
    <SelectTitle>
      {item[props.labelField]}
    </SelectTitle>
    <SelectSubTitle>
      {item.sublabel}
    </SelectSubTitle>
  </SelectElement>
);

function Select({
  size, options, placeHolder, onChange, labelField
}) {
  return (
    <InputContainer className={`${size}`}>
      <InputStyled
        placeholder={placeHolder}
        options={options}
        labelField={labelField || 'label'}
        searchable={false}
        onChange={(item) => onChange(item)}
        itemRenderer={
          (item, props, methods) => itemRenderer(item, props, methods)
        }
      />
    </InputContainer>
  );
}

Select.propTypes = {
  /**
   * How large should the Input be?
   */
  size: PropTypes.oneOf(['medium', 'large']),
  /**
   * Input placeholder
   */
  placeHolder: PropTypes.string,
  /**
   * Input Label
   */
  labelField: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional change handler
   */
  onChange: PropTypes.func,
  /**
   * Optional click handler
   */
  options: PropTypes.arrayOf(PropTypes.object)
  /**
   * Label and sublabel fields are required in the objects to avoid errors
   */
};

Select.defaultProps = {
  size: 'large',
  placeHolder: 'DropDown 1',
  options: example_data,
  onClick: undefined
};

export default Select;
