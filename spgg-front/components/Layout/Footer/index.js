import PropTypes from 'prop-types';
import React from 'react';
import {
  FooterContainer
} from './styles';

function Footer({
  links, contacts, copyrightLinks, socialMedia, footerImage
}) {
  return (
    <FooterContainer className="border-t border-gray-200 text-center p-4">
      <span>Copyright © 2023  | Innovación</span>
    </FooterContainer>
  );
 }

Footer.propTypes = {
  /**
   * links content
   */
};

Footer.defaultProps = {
};

export default Footer;
