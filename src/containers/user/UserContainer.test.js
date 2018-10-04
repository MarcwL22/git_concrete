import React from 'react';
import { shallow, mount } from 'enzyme';
import { UserContainer } from './UserContainer';

describe('UserContainer', () => {
  let props = {
    homeReducer: {
      loading: false,
      error: false,
      user: {}
    },
    loadingRepos: false,
    loadingRepoDetail: false,
    errorRepos: false,
    errorRepoDetail: false,
    modalRepoOpen: false,
    repositories: [],
    repository: {}
  };
  let userContainer = shallow(<UserContainer {...props} />);
  it('should renders properly', () => {
    expect(userContainer).toMatchSnapshot();
  });
  describe.skip('should when mounted', () => {
    const mockFetchUser = jest.fn();
    const mockFetchUserRepositories = jest.fn();
    beforeEach(() => {
      props.fetchUser = mockFetchUser;
      props.fetchUserRepositories = mockFetchUserRepositories;
      console.log('props: ', props);
      userContainer = mount(<UserContainer {...props} />);
    });
    it('should dispatches the `fetchUser()` method it receives from props', () => {
      expect(mockFetchUser).toHaveBeenLastCalledWith('Marcwl22');
    });
  });
});
