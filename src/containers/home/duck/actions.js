import * as types from './types';

export const getUserStart = () => ({ type: types.FETCH_USER_START });
export const getUserError = () => ({ type: types.FETCH_USER_ERROR });
export const getUserComplete = user => ({
  type: types.FETCH_USER_FINISH,
  payload: user
});
