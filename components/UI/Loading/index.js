import React from 'react';
import {
  LoadingStyled
} from './styles';
import PropTypes from 'prop-types';
import loading from '../../../assets/loading.svg';

function Loading(
  {
    size
  }
) {
  return (
    <LoadingStyled
      className={`${size}`}
      src={loading}
    />
  );
}

Loading.propTypes = {
  /**
  * How large should the Input be?
  */
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

Loading.defaultProps = {
  size: 'large'
};

export default Loading;
