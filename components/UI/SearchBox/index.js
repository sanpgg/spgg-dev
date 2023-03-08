import React from 'react';
import { SearchBoxContainer, SearchIcon, InputSearchStyled } from './styles';
import PropTypes from 'prop-types';

function SearchBox({
  size, icon, placeHolder, onChange, onClick, className, textColor
}) {
  return (
    <SearchBoxContainer
      textColor={textColor}
      className={`${size} ${className}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick();
        }
      }}
    >
      <InputSearchStyled
        className={`${size} ${className}`}
        placeholder={placeHolder}
        onChange={(e) => { onChange(e.target.value); }}
      />
      <SearchIcon
        className={`${size === 'medium' ? 'gray' : 'white'}`}
        size="medium"
        icon={icon}
        onClick={() => onClick()}
      />
    </SearchBoxContainer>
  );
}

SearchBox.propTypes = {
  /**
   * Wich style the Icon is going to be?
   */
  /**
   * Input PlaceHolder
   */
  placeHolder: PropTypes.string,
  /**
   * How large should the SearchBox be?
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
   * onChange input value function
   */
  onChange: PropTypes.func,
  className: PropTypes.string,
  textColor: PropTypes.string
};

SearchBox.defaultProps = {
  size: 'medium',
  placeHolder: 'Buscar...',
  icon: 'bx bx-search'
};

export default SearchBox;
