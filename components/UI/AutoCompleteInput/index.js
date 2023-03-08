/* eslint-disable no-shadow */
import React from 'react';
import Input from 'components/UI/Input';
import { AutoCompleteContainer, SearchIcon } from './styles';
import PropTypes from 'prop-types';

function AutoComplete(
  {
    size, icon, placeHolder, onChange, value
  }
) {
  return (
    <AutoCompleteContainer className={`${size}`}>
      <Input
        value={value}
        placeholder={placeHolder}
        className={`${size}`}
        label=""
        onChange={(value) => onChange(value)}
      />
      <SearchIcon
        className="black"
        size={size}
        icon={icon}
      />
    </AutoCompleteContainer>
  );
}

AutoComplete.propTypes = {
  /**
  * Wich style the Icon is going to be?
  */
  className: PropTypes.oneOf(['black', 'white']),
  /**
   * How large should the AutoComplete be?
   */
  size: PropTypes.oneOf(['medium', 'large']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional change handler
   */
  onChange: PropTypes.func,
  /**
   * Icon
   */
  icon: PropTypes.string,
  /**
   * Value
   */
  value: PropTypes.string,
  /**
   * Placeholder
  */
  placeHolder: PropTypes.string
};

AutoComplete.defaultProps = {
  size: 'large',
  className: 'black',
  icon: 'bx bx-search',
  onClick: undefined
};

export default AutoComplete;
