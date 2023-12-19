import React from 'react';
import {
  LoadingStyled
} from './styles';
import PropTypes from 'prop-types';
import Icon from '../Icon';

function Loading(
  {
    size
  }
) {
  return (
    <LoadingStyled className={`${size}`}>
      <Icon className="transparent" size="medium" icon="bx bx-loader-alt"></Icon>
    </LoadingStyled>
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
