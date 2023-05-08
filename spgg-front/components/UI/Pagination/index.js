import React from 'react';
import {
  PagesContainer,
  Page,
  ArrowLeft,
  ArrowRight
} from './styles';
import PropTypes from 'prop-types';
import arrowLeft from '../../../assets/arrowLeft.svg';
import arrowRight from '../../../assets/arrowRight.svg';
import { v4 as uuidv4 } from 'uuid';

function Pagination(
  {
    size, pages, onClick, onPrev, onNext, currentPage
  }
) {
  return (
    <PagesContainer className={`${size}`}>
      {currentPage + 1 > 1 && (
        <Page className={`${size}`} onClick={() => { onPrev(currentPage - 1); }}>
          <ArrowLeft src={arrowLeft} />
        </Page>
      )}
      {pages?.map((page, index) => (
        <Page key={uuidv4()} className={`${size} ${index === currentPage ? 'active' : ''}`} onClick={() => { onClick(index); }}>
          {index + 1}
        </Page>
      ))}
      {currentPage + 1 < pages.length && (
        <Page className={`${size}`} onClick={() => { onNext(currentPage + 1); }}>
          <ArrowRight src={arrowRight} />
        </Page>
      )}
    </PagesContainer>
  );
}

Pagination.propTypes = {
  /**
   * How large should the Pagination be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Slides
   */
  pages: PropTypes.arrayOf(PropTypes.object),
  /**
   * OnClick
   */
  onClick: PropTypes.func,
  /**
   * Previous
   */
  onPrev: PropTypes.func,
  /**
   * Next
   */
  onNext: PropTypes.func
};

Pagination.defaultProps = {
  size: 'large',
  pages: [{ id: 1 }, { id: 2 }]
};

export default Pagination;
