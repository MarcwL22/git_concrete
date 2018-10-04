import React from 'react';
import styled from 'styled-components';
import pT from 'prop-types';
// UIComponents
import { ModalComponent, Loading, Heading3, Error, SmallText } from '../../../components';
// Assets
import Star from '../../../assets/images/star.svg';
import { COLORS, BREAKPOINTS } from '../../../assets/variables';

const ModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${BREAKPOINTS.phone}) {
    flex-direction: column;
  }
`;
const ModalLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  flex: 1;
  @media (max-width: ${BREAKPOINTS.phone}) {
    flex: auto;
  }
`;
const ModalRightContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ModalLoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ModalText = styled(Heading3)`
  color: #000;
  text-align: left;
  letter-spacing: 0px;
  font-weight: 500;
`;
const ModalGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const ModalGroupStar = styled(ModalGroup)`
  flex-direction: row;
  align-self: flex-end;
`;
const ModalStarImg = styled.img`
  margin-right: 0.5rem;
`;
const ModalLink = styled.a`
  text-decoration: none;
  font-size: 1.4rem;
  color: ${COLORS.blueStrong};
  word-break: break-all;
`;

const UserModalRepository = ({ modalOpen, repo, onClose, loading, error }) => {
  return (
    <ModalComponent onClose={onClose} isOpen={modalOpen} showFooterBtn={!loading}>
      {loading ? (
        <ModalLoadingContainer>
          <Loading />
        </ModalLoadingContainer>
      ) : !loading && error ? (
        <Error />
      ) : (
        <ModalContainer>
          <ModalLeftContainer>
            <ModalGroup>
              <SmallText>Nome</SmallText>
              <ModalText>{repo.name}</ModalText>
            </ModalGroup>
            {repo.description !== null && (
              <ModalGroup>
                <SmallText>Descrição</SmallText>
                <ModalText>{repo.description}</ModalText>
              </ModalGroup>
            )}
            <ModalGroup>
              <SmallText>Link</SmallText>
              <ModalLink target="blank" href={repo.url}>
                {repo.url}
              </ModalLink>
            </ModalGroup>
          </ModalLeftContainer>
          <ModalRightContainer>
            <ModalGroupStar>
              <ModalStarImg src={Star} alt="starImg" />
              <ModalText>{repo.stargazers_count}</ModalText>
            </ModalGroupStar>
            {repo.language !== null && (
              <ModalGroup>
                <SmallText>Linguagem</SmallText>
                <ModalText>{repo.language}</ModalText>
              </ModalGroup>
            )}
          </ModalRightContainer>
        </ModalContainer>
      )}
    </ModalComponent>
  );
};

UserModalRepository.propTypes = {
  modalOpen: pT.bool,
  loading: pT.bool,
  error: pT.bool,
  onClose: pT.func,
  repo: pT.shape({
    name: pT.string,
    description: pT.string,
    stargazers_count: pT.number,
    language: pT.string,
    url: pT.string
  })
};

UserModalRepository.defaultProps = {
  modalOpen: false,
  loading: false,
  error: false,
  onClose: () => {},
  repo: {
    name: 'Nome Repositorio',
    description: 'Descrição Repositorio',
    stargazers_count: 0,
    language: 'C++',
    url: 'https://concrete.com.br'
  }
};

export default UserModalRepository;
