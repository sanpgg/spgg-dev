import React from 'react';
//import RenderSections from './RenderSections';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';

const RenderSections = dynamic(() => import('./RenderSections'), { suspense: true });

function LandingPage({ page = {} }) {
  const { components = [] } = page;
  return (
    <>
      <RenderSections sections={components} />
    </>
  );
}

LandingPage.propTypes = {
  /**
   * Page data
   */
  page: PropTypes.objectOf(PropTypes.object)
};

export default LandingPage;
