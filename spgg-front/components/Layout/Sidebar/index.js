import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'components/Layout/Navbar';
import {
  SidebarContainer
} from './styles';

function Sidebar(){
  return (
    <SidebarContainer className="print:hidden">
      <Navbar/>
    </SidebarContainer>
  );
 }

Sidebar.propTypes = {
  /**
   * links content
   */
  links: PropTypes.arrayOf(PropTypes.object),
  /**
   * contacts content
   */
  contacts: PropTypes.arrayOf(PropTypes.object),
  /**
   * copyrightLinks content
   */
  copyrightLinks: PropTypes.arrayOf(PropTypes.object),
  /**
   * socialMedia content
   */
  socialMedia: PropTypes.arrayOf(PropTypes.object),
  /**
   * footerImage content
   */
  footerImage: PropTypes.arrayOf(PropTypes.object)
};

export default Sidebar;
