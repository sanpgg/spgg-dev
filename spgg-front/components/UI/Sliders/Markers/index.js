import React from 'react';
import {
  MarkersContainer,
  Marker
} from './styles';
import PropTypes from 'prop-types';
import { hero_example_slides } from 'components/Hero/data';

function Markers(
  {
    slides, currentSlide, setCurrentSlide, bg
  }
) {
  return (
    <MarkersContainer className={bg}>
      {slides.length > 0 ? slides.map((slide, index) => (
        <Marker key={slide.id} className={`${index === currentSlide ? 'active' : ''}`} onClick={() => { setCurrentSlide(index); }} />
      )) : null }
    </MarkersContainer>
  );
}

Markers.propTypes = {
  /**
  * Colors
  * */
  bg: PropTypes.oneOf(['default', 'dark', 'light']),
  /**
   * Slides
   */
  slides: PropTypes.arrayOf(PropTypes.object),
  /**
   * Current Slide
   */
  currentSlide: PropTypes.number,
  /**
   * Set Current Slide
   */
  setCurrentSlide: PropTypes.func,
  /**
   * OnClick
   */
  onClick: PropTypes.func
};

Markers.defaultProps = {
  bg: 'default',
  slides: hero_example_slides,
  currentSlide: 1
};

export default Markers;
