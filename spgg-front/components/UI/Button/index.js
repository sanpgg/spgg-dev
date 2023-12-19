import React from 'react';
import PropTypes from 'prop-types';

import { ButtonStyled } from './styles';
import Loading from 'components/UI/Loading';

function Button({
  loading, className, label, onClick
}) {
  return (
    <ButtonStyled
      className={`${className} ${loading ? 'Cargando' : ''}`}
      onClick={() => onClick()}
    >
      {loading
        ? (
          <Loading />
        )
        : label && (
          label
        )}
    </ButtonStyled>
  );
}

Button.propTypes = {
  /**
     * Wich Style the button is going to be?
     */
  className: PropTypes.oneOf(['primary', 'secondary', 'link', 'danger']),
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Optional Loading
   */
  loading: PropTypes.bool,
  /**
   * Optional Loading
   */
  label: PropTypes.string
};

Button.defaultProps = {
  className: 'primary',
  label: 'Button',
  loading: false
};

export default Button;
