import React from 'react';
import pT from 'prop-types';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: solid #ccc;
  border-radius: 50%;
  border-top: solid #000;
  border-width: ${props => (props.small ? '.4rem' : '1.6rem')};
  width: ${props => (props.small ? '2rem' : '6rem')};
  height: ${props => (props.small ? '2rem' : '6rem')};
  animation: ${spin} 0.4s linear infinite;
`;

export const Loading = ({ small = false }) => {
  return <Spinner small={small} />;
};

Loading.propTypes = {
  small: pT.bool
};
