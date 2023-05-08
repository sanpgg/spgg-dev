import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

import { ButtonStyled } from './styles';

function Button({
  icon, className, label, size, onClick
}) {
  return (
    <ButtonStyled
      className={`${className} ${size} ${icon ? 'icon' : ''}`}
      onClick={onClick}
    >
      {label && (
        label
      )}
      {icon && (
        <Icon size="medium" icon={icon} />
      )}
    </ButtonStyled>
  );
}

Button.propTypes = {
  /**
     * Wich Style the button is going to be?
     */
  className: PropTypes.oneOf(['primary', 'secondary', 'grouped']),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['default', 'medium']),
  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional icon
   */
  icon: PropTypes.string
};

Button.defaultProps = {
  className: 'primary',
  size: 'default',
  label: 'Button',
  onClick: undefined
};

export default Button;
