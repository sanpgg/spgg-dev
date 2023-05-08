import React from 'react';
import Button from '../../Button';
import {
  AlertContainer,
  AlertBody,
  AlertFooter,
  AlertTitle,
  AlertContent
} from './styles';
import PropTypes from 'prop-types';

function Alert(
  {
    title, content, onCancel, onConfirm
  }
) {
  return (
    <AlertContainer>
      <AlertBody>
        <AlertTitle>
          {title}
        </AlertTitle>
        <AlertContent>
          {content}
        </AlertContent>
      </AlertBody>
      <AlertFooter>
        <Button className="secondary grouped mr-2" size="medium" onClick={() => { onCancel(); }} />
        <Button className="primary grouped" size="medium" onClick={() => { onConfirm(); }} />
      </AlertFooter>
    </AlertContainer>
  );
}

Alert.propTypes = {
  /**
   * Alert title
   */
  title: PropTypes.string,
  /**
   * Alert content
   */
  content: PropTypes.string,
  /**
   * Alert Cancel
   */
  onCancel: PropTypes.func,
  /**
   * Alert Confirm
   */
  onConfirm: PropTypes.func
};

Alert.defaultProps = {
  title: 'Fusce eu nulla pretium porta',
  content: 'Donec vitae nibh nisl. Etiam volutpat nunc id dui ut convallis nibh blandit. Mauris semper sem ac vestibulum congue. In sed hendrerit justo.'
};

export default Alert;
