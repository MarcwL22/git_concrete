import * as Creators from './actions';
import axios from 'axios';
// Config
import config from '../../../config';

export const fetchUser = user => {
  return dispatch => {
    dispatch(Creators.getUserStart());
    axios
      .get(`${config.baseUrl}/users/${user}`)
      .then(({ data }) => dispatch(Creators.getUserComplete(data)))
      .catch(error => dispatch(Creators.getUserError()));
  };
};
