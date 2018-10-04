import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as types from './types';
import { userOperations } from './index';
import config from '../../../config';

import { userRepositories } from './mockResponse';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({
  loadingRepos: false,
  loadingRepoDetail: false,
  errorRepos: false,
  errorRepoDetail: false,
  modalRepoOpen: false,
  repositories: [],
  repository: {}
});
const mock = new MockAdapter(axios);

describe('userActions', () => {
  it('should creates an async action to fetch the fetchUserRepositories', () => {
    const mockResp = userRepositories;
    const expectedActions = [
      { type: types.FETCH_USER_REPOS_START },
      { type: types.FETCH_USER_REPOS_FINISH, payload: mockResp }
    ];
    mock.onGet(`${config.baseUrl}/users/Marcwl22/repos`).reply(200, mockResp);
    store.dispatch(userOperations.fetchUserRepositories('Marcwl22')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
