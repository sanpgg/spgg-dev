import React, { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import {
  InputContainer,
  InputLabel,
  RenderThumb,
  RenderTrack,
  InputAlert
} from './styles';
import PropTypes from 'prop-types';

function RangeInput(
  {
    label, alert, alertText
  }
) {
  const [value, setValue] = useState([50]);
  return (
    <InputContainer>
      {label && (
        <InputLabel>
            {label}
        </InputLabel>
      )}
      <Range
        step={0.1}
        min={0}
        max={100}
        values={value}
        onChange={(values) => { setValue(values); }}
        renderTrack={({ props, children }) => (
          <RenderTrack
            getColor={getTrackBackground}
            value={value}
            {...props}
          >
            {children}
          </RenderTrack>
        )}
        renderThumb={({ props }) => (
          <RenderThumb
            {...props}
          />
        )}
      />
      {(alert && alertText) && (
        <InputAlert className={`${alert}`}>
          {alertText}
        </InputAlert>
      )}
    </InputContainer>
  );
}

RangeInput.propTypes = {
  /**
   * Input label
   */
  label: PropTypes.string,
  /**
   * Alert type
   */
  alert: PropTypes.oneOf(['success', 'error']),
  /**
   * Alert type
   */
  alertText: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func
};

RangeInput.defaultProps = {
  label: 'Input',
  onClick: undefined
};

export default RangeInput;
