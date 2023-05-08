import React from 'react';
import Button from '../Button';
import {
  ToggleContainer,
  ToggleBody,
  Content
} from './styles';
import PropTypes from 'prop-types';

function Toggle(
  {
    content, buttonText, onClick
  }
) {
  return (
    <ToggleContainer>
      <ToggleBody>
        <Content>
          {content}
        </Content>
        <Button
          className="primary large"
          size="medium"
          onClick={() => { onClick(); }}
          label={buttonText}
        />
      </ToggleBody>
    </ToggleContainer>
  );
}

Toggle.propTypes = {
  /**
   * Alert title
   */
  content: PropTypes.string,
  /**
   * Alert content
   */
  buttonText: PropTypes.string,
  /**
   * Button onClick
   */
  onClick: PropTypes.func
};

Toggle.defaultProps = {
  buttonText: 'Modal Alert',
  content: 'Lorep Ipsum'
};

export default Toggle;
