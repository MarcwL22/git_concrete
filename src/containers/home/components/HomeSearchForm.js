import React from 'react';
import pT from 'prop-types';
import styled, { keyframes } from 'styled-components';
// Component
import HomeSearchResults from './HomeSearchResults';
// Variables and assets
import { BREAKPOINTS } from '../../../assets/variables';
import MaginifyImg from '../../../assets/images/magnifier.svg';

const appear = keyframes`
  0% { transform: scale(0); }
  100% { transform: scale(360deg); }
`;

const Form = styled.form`
  display: flex;
  width: 50%;
  margin: 0 auto;
  position: relative;
  animation: ${appear} 0.2s ease;
  @media (max-width: ${BREAKPOINTS.tabletPortrait}) {
    width: 70%;
  }
  @media (max-width: ${BREAKPOINTS.phone}) {
    width: 100%;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex: 1;
`;

const Input = styled.input`
  flex: 1;
  padding: 1.4rem 2rem;
  font-size: 1.6rem;
  border-top-left-radius: 3px;
  border-bottom-left-radius: ${props => (props.isOpen ? '0px' : '3px')};
  border-width: 0;
  transition: all 0.3s;
  &:focus {
    outline: none;
    background-color: #f8f8f8;
  }
`;
const InputButton = styled.button`
  cursor: pointer;
  padding: 0rem 2rem;
  background-color: #ffda64;
  border-top-right-radius: 3px;
  border-width: 0;
  border-bottom-right-radius: ${props => (props.isOpen ? '0px' : '3px')};
  transition: all 0.2s;
  &:hover {
    background-color: #c1991b;
  }
  img {
    height: 2rem;
  }
`;

const HomeSearchForm = ({ onSubmit, onChangeText, value, loading, error, result }) => {
  return (
    <Form onSubmit={onSubmit}>
      <InputGroup>
        <Input
          isOpen={value !== ''}
          type="text"
          value={value}
          placeholder="Procure por um repositório"
          onChange={onChangeText}
        />
        <InputButton type="submit" isOpen={value !== ''}>
          <img src={MaginifyImg} alt="MagnifyImg" />
        </InputButton>
      </InputGroup>
      <HomeSearchResults error={error} loading={loading} isOpen={value !== ''} result={result} />
    </Form>
  );
};

HomeSearchForm.propTypes = {
  onSubmit: pT.func,
  onChangeText: pT.func,
  value: pT.string,
  loading: pT.bool,
  error: pT.bool,
  result: pT.object
};
HomeSearchForm.defaultProps = {
  onSubmit: () => {},
  onChangeText: () => {},
  value: '',
  loading: false,
  error: false,
  result: {}
};

export default HomeSearchForm;
