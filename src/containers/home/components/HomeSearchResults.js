import React from 'react';
import pT from 'prop-types';
import styled from 'styled-components';
// UIComponents
import { Loading, Heading3, SmallText } from '../../../components';
// Assets
import Arrow from '../../../assets/images/arrow-left.svg';

const ResultContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 100%;
  background-color: #fff;
  padding: 0rem;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top: 1px solid #ccc;
  transition: all 0.3s;
  transform-origin: top;
  transform: ${props => (props.isOpen ? 'scaleY(1)' : 'scaleY(0)')};
  display: flex;
  justify-content: center;
`;
const ResultCenter = styled.div`
  padding: 1.4rem 0rem;
`;
const ResultBtnImg = styled.img`
  transition: all 0.3s;
`;
const Result = styled.a`
  flex: 1;
  display: flex;
  padding: 1.4rem 2rem;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #f8f8f8;
  }
  &:hover ${ResultBtnImg} {
    transform: scale(1.1);
  }
`;
const ResultImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;
const ResultUserName = styled(Heading3)`
  color: #000;
  text-align: left;
`;
const ResultGroup = styled.div`
  margin-left: 2rem;
  flex: 1;
`;

const HomeSearchResults = ({ loading, isOpen, error, onResultPress, result }) => {
  return (
    <ResultContainer isOpen={isOpen}>
      {loading ? (
        <ResultCenter>
          <Loading small />
        </ResultCenter>
      ) : error && !loading ? (
        <ResultCenter>
          <Heading3>Não foi identificado nenhum usuário</Heading3>
        </ResultCenter>
      ) : (
        <Result onClick={onResultPress}>
          <ResultImg src={result.avatar_url} />
          <ResultGroup>
            <SmallText>Usuário</SmallText>
            <ResultUserName>{result.login}</ResultUserName>
          </ResultGroup>
          <ResultBtnImg src={Arrow} alt="ArrowImg" />
        </Result>
      )}
    </ResultContainer>
  );
};

HomeSearchResults.propTypes = {
  error: pT.bool,
  loading: pT.bool,
  isOpen: pT.bool,
  onResultPress: pT.func,
  result: pT.shape({
    login: pT.string,
    avatar_url: pT.string
  })
};
HomeSearchResults.defaultProps = {
  error: false,
  loading: false,
  isOpen: false,
  onResultPress: () => {},
  result: {
    login: 'user',
    avatar_url: ''
  }
};

export default HomeSearchResults;
