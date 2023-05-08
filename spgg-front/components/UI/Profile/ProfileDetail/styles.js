import { palette } from 'components/Layout/ThemeProvider';
import { textStyles } from 'components/Layout/ThemeProvider/textStyles';
import styled from 'styled-components';

export const ProfileContainer = styled.div`
  /* Style sub-classes */
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.img`
  /* Style sub-classes */
  width: 60px;
  height: 60px;
  border-radius: 40px;
  object-fit: cover;
  overflow: hidden;
`;

export const ProfileData = styled.div`
  /* Style sub-classes */
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const ProfileName = styled.span`
  /* Style sub-classes */
  margin-bottom: 4px;
  ${textStyles.H22}
`;

export const ProfileOccupation = styled.span`
  /* Style sub-classes */
  color: ${palette.lightGray};
  ${textStyles.P16A}
`;
