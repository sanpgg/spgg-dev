import React from 'react';
import PropTypes from 'prop-types';

import { IconContainer } from './styles';

function Icon({
  className, icon, onClick, active
}) {
  return (
    <>
      <IconContainer
        className={`${className}${active ? 'active' : ''}`}
        onClick={onClick}
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
  className: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Wich style the Icon is going to be?
   */
  icon: PropTypes.string,
  /**
   * Wich status has the button
   */
  active: PropTypes.bool
};

Icon.defaultProps = {
  className: 'transparent',
  icon: 'bx bx-search',
  onClick: undefined,
  active: false
};

export default Icon;
