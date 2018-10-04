import rootReducer from './reducers';

describe('rootReducer', () => {
  it('should initializes the default store', () => {
    expect(rootReducer({}, {})).toEqual({
      homeReducer: {
        loading: false,
        error: false,
        user: {}
      },
      userReducer: {
        loadingRepos: false,
        loadingRepoDetail: false,
        errorRepos: false,
        errorRepoDetail: false,
        modalRepoOpen: false,
        repositories: [],
        repository: {}
      }
    });
  });
});
