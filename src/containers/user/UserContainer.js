import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// Actions
import { userOperations } from './duck';
import { homeOperations } from '../home/duck';
// Components
import UserLoading from './components/UserLoading';
import UserBackButton from './components/UserBackButton';
import UserModalRepository from './components/UserModalRepository';
import UserError from './components/UserError';
import UserInfo from './components/UserInfo';
import UserRepositories from './components/UserRepositories';
// import UserLoading from ''
// Varibles
import { BREAKPOINTS } from '../../assets/variables';
// Mocks
import userMock from './userMock.json';
import reposMock from './repositoriesMock.json';
import repoMock from './repository.json';

const MainContainer = styled.div`
  display: flex;
  @media (max-width: ${BREAKPOINTS.phone}) {
    flex-direction: column;
  }
`;

export class UserContainer extends Component {
  componentDidMount() {
    const { user } = this.props.match.params;
    // this.props.fetchUser(user);
    // this.props.fetchUserRepositories(user);
  }

  backHome = () => {
    this.props.history.push('/');
  };

  onRepoClick = fullName => {
    this.props.fetchRepositoryDetail(fullName);
  };

  closeModal = () => {
    this.props.handleModal();
  };

  renderContent = () => {
    const { homeReducer, loadingRepos, errorRepos, repositories } = this.props;
    const { loading, error, user } = homeReducer;
    if (loading && loadingRepos) {
      return <UserLoading />;
    } else if (errorRepos && error) {
      return <UserError />;
    } else {
      return (
        <React.Fragment>
          {/* <UserInfo userData={userMock} /> */}
          <UserInfo userData={userMock} />
          {/* <UserRepositories repositories={repositories} onRepositoryPress={this.onRepoClick} /> */}
          <UserRepositories repositories={reposMock} onRepositoryPress={this.onRepoClick} />
        </React.Fragment>
      );
    }
  };

  render() {
    const { modalRepoOpen, errorRepoDetail, loadingRepoDetail, repository } = this.props;
    return (
      <React.Fragment>
        <UserBackButton onPress={this.backHome} />
        <MainContainer>{this.renderContent()}</MainContainer>
        <UserModalRepository
          repo={repository}
          modalOpen={modalRepoOpen}
          onClose={this.closeModal}
          error={errorRepoDetail}
          loading={loadingRepoDetail}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ homeReducer, userReducer }) => {
  return { ...userReducer, homeReducer };
};

export default connect(
  mapStateToProps,
  { ...userOperations, ...homeOperations }
)(UserContainer);
