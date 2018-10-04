import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
// Actions
import { homeOperations } from './duck';
// Components
import HomeLogo from './components/HomeLogo';
import HomeSearchForm from './components/HomeSearchForm';

const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export class HomeContainer extends Component {
  state = { userInput: '' };

  onChangeText = e => {
    const { value } = e.target;
    this.setState({ userInput: value });
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.props.fetchUser(value);
    }, 200);
  };

  searchFormSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/${this.state.userInput}`);
  };

  render() {
    const { userInput } = this.state;
    const { loading, error, user } = this.props;
    console.log('this.props: ', this.props);
    return (
      <HomeSection>
        <HomeLogo />
        <HomeSearchForm
          error={error}
          loading={loading}
          onChangeText={this.onChangeText}
          result={user}
          value={userInput}
          onSubmit={this.searchFormSubmit}
        />
      </HomeSection>
    );
  }
}

const mapStateToProps = ({ homeReducer }) => {
  return { ...homeReducer };
};

export default connect(
  mapStateToProps,
  { ...homeOperations }
)(HomeContainer);
