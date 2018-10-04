import * as types from './types';

const INITIAL_STATE = {
  loadingRepos: false,
  loadingRepoDetail: false,
  errorRepos: false,
  errorRepoDetail: false,
  modalRepoOpen: false,
  repositories: [],
  repository: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_USER_REPOS_START:
      return { ...state, loadingRepos: true };
    case types.FETCH_USER_REPOS_FINISH:
      return { ...state, loadingRepos: false, errorRepos: false, repositories: action.payload };
    case types.FETCH_USER_REPOS_ERROR:
      return { ...state, loadingRepos: false, errorRepos: true, repositories: [] };

    case types.FETCH_REPO_DETAIL_START:
      return { ...state, loadingRepoDetail: true, modalRepoOpen: true };
    case types.FETCH_REPO_DETAIL_FINISH:
      return { ...state, loadingRepoDetail: false, errorRepoDetail: false, repository: action.payload };
    case types.FETCH_REPO_DETAIL_ERROR:
      return { ...state, loadingRepoDetail: false, errorRepoDetail: true, repository: {} };

    case types.HANDLE_USER_MODAL:
      return { ...state, modalRepoOpen: !state.modalRepoOpen };
    default:
      return state;
  }
};
