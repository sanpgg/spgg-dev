import React from 'react';
import {
  ProfileContainer,
  ProfileImage,
  ProfileData,
  ProfileName,
  ProfileOccupation
} from './styles';
import PropTypes from 'prop-types';
import profileImage from 'assets/profileImage.svg';

function ProfileDetail(
  {
    image, size, name, occupation
  }
) {
  return (
    <ProfileContainer className={`${size}`}>
      <ProfileImage className={`${size}`} src={image} alt={`${name} ${occupation}`} />
      <ProfileData>
        <ProfileName>
          {name}
        </ProfileName>
        <ProfileOccupation>
          {occupation}
        </ProfileOccupation>
      </ProfileData>
    </ProfileContainer>
  );
}

ProfileDetail.propTypes = {
  /**
   * How large should the Input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Image src
   */
  image: PropTypes.string,
  /**
   * Profile Name
   */
  name: PropTypes.string,
  /**
   * Profile Occupation
   */
  occupation: PropTypes.string
};

ProfileDetail.defaultProps = {
  size: 'large',
  image: profileImage,
  name: 'Sonny Gzz',
  occupation: 'Developer'
};

export default ProfileDetail;
