import React from 'react';
import pT from 'prop-types';
import styled from 'styled-components';
// UIComponents
import { SmallText, Heading3 } from '../../../components';
// Variables
import { BREAKPOINTS } from '../../../assets/variables';

const UserInfoContainer = styled.div`
  flex: 0 0 25%;
  margin-right: 2rem;
  @media (max-width: ${BREAKPOINTS.tabletPortrait}) {
    flex: 0 0 30%;
  }
  @media (max-width: ${BREAKPOINTS.phone}) {
    flex: 0 0 100%;
    margin-right: 0;
  }
  position: relative;
`;

const UserBox = styled.div`
  background-color: #f0f0f0;
  padding: 5px;
  display: flex;
  padding: 2rem;
  border-radius: 5px;
  flex-wrap: nowrap;
  flex-direction: column;
`;
const UserBoxImage = styled.img`
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  @media (max-width: ${BREAKPOINTS.phone}) {
    margin-bottom: 2rem;
  }
`;
const UserFollowersBox = styled.div`
  @media (max-width: ${BREAKPOINTS.phone}) {
    position: absolute;
    top: 2rem;
    right: 0;
    padding: 0 2rem;
  }
`;
const UserBoxGroup = styled.div`
  margin-bottom: ${props => (props.hasMb ? '1rem' : 0)};
  @media (max-width: ${BREAKPOINTS.phone}) {
    margin-bottom: 0;
  }
`;
UserBoxGroup.defaultProps = {
  hasMb: true
};
const UserBoxDetail = styled(Heading3)`
  color: #575555;
  text-align: left;
  letter-spacing: 0;
`;
const UserFollowersText = styled(SmallText)``;

const UserInfo = ({ userData }) => {
  return (
    <UserInfoContainer>
      <UserBox>
        <UserBoxGroup>
          <UserBoxImage src={userData.avatar_url} alt="AvatarImg" />
        </UserBoxGroup>
        <UserBoxGroup>
          <SmallText>Nome</SmallText>
          <UserBoxDetail>{userData.name}</UserBoxDetail>
        </UserBoxGroup>
        {userData.email !== null && (
          <UserBoxGroup>
            <SmallText>E-Mail</SmallText>
            <UserBoxDetail>{userData.email}</UserBoxDetail>
          </UserBoxGroup>
        )}
        {userData.bio !== null && (
          <UserBoxGroup>
            <SmallText>Bio</SmallText>
            <UserBoxDetail>{userData.bio}</UserBoxDetail>
          </UserBoxGroup>
        )}
        <UserFollowersBox>
          <UserBoxGroup>
            <UserFollowersText>Seguidores</UserFollowersText>
            <UserBoxDetail>{userData.followers}</UserBoxDetail>
          </UserBoxGroup>
          <UserBoxGroup hasMb={false}>
            <UserFollowersText>Seguindo</UserFollowersText>
            <UserBoxDetail>{userData.following}</UserBoxDetail>
          </UserBoxGroup>
        </UserFollowersBox>
      </UserBox>
    </UserInfoContainer>
  );
};

UserInfo.propTypes = {
  userData: pT.shape({
    avatar_url: pT.string,
    bio: pT.string,
    email: pT.string,
    name: pT.string,
    followers: pT.number,
    following: pT.number
  })
};

UserInfo.defaultProps = {
  userData: {
    avatar_url: '',
    email: 'marcus@email.com',
    bio: 'Descrição Usuário',
    name: 'Nome',
    followers: 0,
    following: 0
  }
};

// número de seguidores, número de seguidos, imagem do avatar, e-mail e bio

export default UserInfo;
