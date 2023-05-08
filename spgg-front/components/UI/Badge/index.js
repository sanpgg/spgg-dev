import React from 'react';
import {
  BadgeContainer,
  BadgeLabel
} from './styles';
import PropTypes from 'prop-types';

function Badge(
  {
    label
  }
) {
  return (
    <BadgeContainer>
      <BadgeLabel>
        {label}
      </BadgeLabel>
    </BadgeContainer>
  );
}

Badge.propTypes = {
  /**
   * How large should the Input be?
   */
  // size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Input label
   */
  label: PropTypes.string
};

Badge.defaultProps = {
  // size: 'large',
  label: 'Etiqueta'
};

export default Badge;
