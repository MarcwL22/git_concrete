import * as Creators from './actions';
import axios from 'axios';
// Config
import config from '../../../config';

export const handleModal = () => {
  return dispatch => dispatch(Creators.handleModalOpenClose());
};

export const fetchUserRepositories = user => {
  return dispatch => {
    dispatch(Creators.getUserReposStart());
    axios
      .get(`${config.baseUrl}/users/${user}/repos`)
      .then(({ data }) => dispatch(Creators.getUserReposComplete(data)))
      .catch(() => dispatch(Creators.getUserReposError()));
  };
};

export const fetchRepositoryDetail = repoFullName => {
  console.log('repoFullName: ', repoFullName);
  return dispatch => {
    dispatch(Creators.getRepoDetailStart());
    axios
      .get(`${config.baseUrl}/repos/${repoFullName}`)
      .then(({ data }) => dispatch(Creators.getRepoDetailComplete(data)))
      .catch(() => dispatch(Creators.getRepoDetailError()));
  };
};
