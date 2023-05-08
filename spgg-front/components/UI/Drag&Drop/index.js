import React, { useRef } from 'react';
import {
  DropZone, DropCenter, DropText, HiddenInput
} from './styles';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import Button from '../Button';

function DragAndDrop({
  dropText, onChange, buttonText, icon
}) {
  const fileInputRef = useRef(null);

  function handleUpload(files) {
    // console.log(files);
    onChange(files);
  }

  const onTargetClick = () => {
    fileInputRef.current.click();
    // console.log('click');
  };

  return (
    <DropZone
      onDrop={(files) => handleUpload(files)}
      onTargetClick={onTargetClick}
    >
      <DropCenter>
        <Icon icon={icon} size="medium" className="transparent" />
        <Button
          label={buttonText}
          size="medium"
          className="secondary"
        />
        <HiddenInput
          onChange={handleUpload}
          ref={fileInputRef}
          type="file"
        />
        <DropText>
          {dropText}
        </DropText>
      </DropCenter>
    </DropZone>
  );
}

DragAndDrop.propTypes = {
  /**
  * Button Text
  */
  dropText: PropTypes.string,
  /**
   * Button Text
   */
  buttonText: PropTypes.string,
  /**
  * Button Text
  */
  icon: PropTypes.string,
  /**
  * onChange function
  */
  onChange: PropTypes.func
};

DragAndDrop.defaultProps = {
  dropText: 'ó arrastra y suelta',
  buttonText: 'Explorar...',
  icon: 'bx bx-upload'
};

export default DragAndDrop;
