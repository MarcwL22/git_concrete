import React from 'react';
import styled from 'styled-components';
// UIComponents
import { Heading2 } from './Typography';
// Assets
import Cross from '../assets/images/cross.svg';

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const ErrorImg = styled.img`
  height: 5rem;
  margin-bottom: 2rem;
`;
const ErrorMessage = styled(Heading2)`
  color: #ccc;
`;

export const Error = () => (
  <ErrorContainer>
    <ErrorImg alt={'errorImg'} src={Cross} />
    <ErrorMessage>Ops, algo deu errado!</ErrorMessage>
  </ErrorContainer>
);
