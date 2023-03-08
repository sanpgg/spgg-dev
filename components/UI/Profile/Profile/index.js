import React from 'react';
import {
  ProfileContainer,
  ProfileImage
} from './styles';
import PropTypes from 'prop-types';
import defaultProfile from 'assets/defaultProfile.svg';

function Profile(
  {
    image, size
  }
) {
  return (
    <ProfileContainer className={`${size}`}>
      <ProfileImage className={`${size}`} src={image} />
    </ProfileContainer>
  );
}

Profile.propTypes = {
  /**
   * How large should the Input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Input label
   */
  image: PropTypes.string
};

Profile.defaultProps = {
  size: 'large',
  image: defaultProfile
};

export default Profile;
