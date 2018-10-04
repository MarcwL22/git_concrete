import React from 'react';
import pT from 'prop-types';
import styled from 'styled-components';
// UIComponents
import { Heading3, Heading2, Button } from '../../../components';
// Assets and Variables
import { BREAKPOINTS } from '../../../assets/variables';
import Star from '../../../assets/images/star.svg';

const UserRepositoriesContainer = styled.div`
  flex: 1;
  @media (max-width: ${BREAKPOINTS.phone}) {
    margin-top: 3rem;
  }
`;

const UserRepositoriesHeader = styled.div`
  margin-bottom: 1rem;
`;
const Title = styled(Heading2)`
  font-weight: 500;
  color: #ccc;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;
const FilterTitle = styled(Heading3)`
  color: #ccc;
`;

const GoBtn = styled.span`
  font-size: 1.4rem;
  color: white;
  position: absolute;
  padding: 0.5rem;
  transform: translate(-50%);
  top: -50%;
  left: 50%;
  transition: all 0.3s;
  text-shadow: 1px 1px 1px #000;
`;
const RepositoryBox = styled.a`
  cursor: pointer;
  padding: 2rem;
  border-radius: 3px;
  margin-bottom: 2rem;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
  &:hover {
    background-color: #dbdbdb;
  }
  &:hover ${GoBtn} {
    top: 0;
  }
  @media (max-width: ${BREAKPOINTS.phone}) {
    margin-bottom: 1rem;
  }
`;
const RepositoryInnerContainer = styled.div``;
const RepositoryTitle = styled(Heading2)`
  color: #000;
  font-weight: 500;
`;
const RepositorySubtitle = styled(Heading3)`
  color: rgba(0, 0, 0, 0.5);
  letter-spacing: 0px;
  font-weight: 300;
  text-align: left;
`;
const RepositoryStarGroup = styled.div`
  display: flex;
`;
const RepositoryStarsImg = styled.img`
  height: 2rem;
  margin-right: 0.5rem;
`;
const RepositoryStarDetail = styled(Heading3)`
  color: #000;
  margin-top: -2px;
`;

const UserRepositories = ({ onRepositoryPress, repositories, starOrdered, onPressOrderStar }) => {
  return (
    <UserRepositoriesContainer>
      <UserRepositoriesHeader>
        <Title>Repositórios:</Title>
        {repositories.length > 1 && (
          <FilterContainer>
            <FilterTitle>Filtrar por:</FilterTitle>
            <Button small outline={starOrdered} onClick={onPressOrderStar}>
              Stars
            </Button>
          </FilterContainer>
        )}
      </UserRepositoriesHeader>
      {repositories &&
        repositories.map(repo => {
          return (
            <RepositoryBox key={repo.id} onClick={() => onRepositoryPress(repo.full_name)}>
              <RepositoryInnerContainer>
                <RepositoryTitle>{repo.name}</RepositoryTitle>
                <RepositorySubtitle>{repo.language}</RepositorySubtitle>
              </RepositoryInnerContainer>
              <RepositoryStarGroup>
                <RepositoryStarsImg src={Star} alt={`StarImg${repo.id}`} />
                <RepositoryStarDetail>{repo.stargazers_count}</RepositoryStarDetail>
              </RepositoryStarGroup>
              <GoBtn>Ver Mais</GoBtn>
            </RepositoryBox>
          );
        })}
    </UserRepositoriesContainer>
  );
};

UserRepositories.propTypes = {
  onRepositoryPress: pT.func,
  repositories: pT.array,
  starOrdered: pT.bool,
  onPressOrderStar: pT.func
};
UserRepositories.defaultProps = {
  onRepositoryPress: () => {},
  repositories: [],
  starOrdered: false,
  onPressOrderStar: () => {}
};

export default UserRepositories;
