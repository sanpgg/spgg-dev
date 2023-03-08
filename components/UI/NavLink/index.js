import React from 'react';
import { LinkStyled } from './styles';
import PropTypes from 'prop-types';
// import { navigateTo } from 'components/Layout/ThemeProvider';

function NavLink({
  href, label, className, target
}) {
  return (
    <LinkStyled href={href} className={className} target={ target === true ? '_self' : '_blank'}>
      {label}
    </LinkStyled>
  );
}

NavLink.propTypes = {
  /**
  * Link Label
  */
  label: PropTypes.string,
  /**
  * Link href
  */
  href: PropTypes.string,
  /**
  * Link ClassName
  */
  className: PropTypes.string,
  /**
  * Link open blank
  */
  target: PropTypes.string,
  icon: PropTypes.string
};

NavLink.defaultProps = {
  label: 'Home',
  href: '/',
  className: '',
  target: false
};

export default NavLink;
