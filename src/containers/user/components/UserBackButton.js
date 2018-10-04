import React from 'react';
import styled from 'styled-components';
import pT from 'prop-types';
// Assets
import Arrow from '../../../assets/images/arrow-left.svg';

const BackButtonImg = styled.img`
  transform: rotate(-180deg);
  transition: all 0.3s;
`;
const BackButton = styled.a`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  margin: 2rem 0;
  &:hover ${BackButtonImg} {
    transform: scale(1.2) rotate(-180deg);
  }
`;

const UserBackButton = ({ onPress = () => {} }) => (
  <BackButton onClick={onPress}>
    <BackButtonImg src={Arrow} />
  </BackButton>
);

UserBackButton.propTypes = {
  onPress: pT.func
};

export default UserBackButton;
