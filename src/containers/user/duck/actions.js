import * as types from './types';

export const getRepoDetailStart = () => ({ type: types.FETCH_REPO_DETAIL_START });
export const getRepoDetailError = () => ({ type: types.FETCH_REPO_DETAIL_ERROR });
export const getRepoDetailComplete = repo => ({
  type: types.FETCH_REPO_DETAIL_FINISH,
  payload: repo
});

export const getUserReposStart = () => ({ type: types.FETCH_USER_REPOS_START });
export const getUserReposError = () => ({ type: types.FETCH_USER_REPOS_ERROR });
export const getUserReposComplete = repos => ({
  type: types.FETCH_USER_REPOS_FINISH,
  payload: repos
});

export const handleModalOpenClose = () => ({ type: types.HANDLE_USER_MODAL });
