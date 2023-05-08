import React, { useState } from 'react';
import { AutoCompleteContainer, InputStyled, SearchIcon } from './styles';
import PropTypes from 'prop-types';
import { example_data } from '../DropDowns/data';

function AutoComplete(
  {
    size, icon, options, placeHolder
  }
) {
  const [currentValue, setCurrentValue] = useState();
  return (
    <AutoCompleteContainer className={`${size}`}>
      <InputStyled
        placeholder={placeHolder}
        className={`${size}`}
        options={options}
        labelField="name"
        searchable
        onChange={(value) => { setCurrentValue(value); console.log(value, 'value'); }}
        clearable={!!currentValue}
        onClearAll={() => setCurrentValue()}
        searchBy="name"
      />
      <SearchIcon
        className={`${size === 'medium' ? 'gray' : 'white'}`}
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
   * Icon
   */
  icon: PropTypes.string,
  /**
   * Placeholder
  */
  placeHolder: PropTypes.string,
  /**
  * Options
  */
  options: PropTypes.arrayOf(PropTypes.object)
};

AutoComplete.defaultProps = {
  size: 'small',
  className: 'black',
  icon: 'bx bx-search',
  options: example_data,
  onClick: undefined
};

export default AutoComplete;
