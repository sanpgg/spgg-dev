import React from 'react';
import PropTypes from 'prop-types';

import { IconContainer } from './styles';

function Icon({
  className, size, icon, hover, onClick
}) {
  return (
    <>
      <IconContainer
        className={`${className} ${size} ${hover}`}
        onClick={() => { onClick(); }}
      >
        <i className={`${icon}`} />
      </IconContainer>
    </>
  );
}

Icon.propTypes = {
  /**
     * Wich style the Icon is going to be?
     */
  className: PropTypes.oneOf(['black', 'white', 'transparent', 'gray']),
  /**
     * Wich style the Icon is going to be?
     */
  hover: PropTypes.oneOf(['hoverBlack', 'hoverWhite', 'hoverGray', 'noHover']),
  /**
   * How large should the Icon be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Wich style the Icon is going to be?
   */
  icon: PropTypes.string
};

Icon.defaultProps = {
  className: 'black',
  hover: 'noHover',
  size: 'large',
  icon: 'bx bx-search',
  onClick: undefined
};

export default Icon;
