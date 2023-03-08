import React from 'react';
import {
  VideoContainer,
  Video
} from './styles';
import PropTypes from 'prop-types';

function VideoPlayer(
  {
    video
  }
) {
  const { src, title } = video;
  return (
    <VideoContainer>
      <Video src={src} title={title} controls autoPlay />
    </VideoContainer>
  );
}

VideoPlayer.propTypes = {
  /**
   * Input label
   */
  video: PropTypes.objectOf(PropTypes.string)
};

VideoPlayer.defaultProps = {
  video: {
    src: '',
    title: ''
  }
};

export default VideoPlayer;
