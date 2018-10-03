import * as types from './types';

const INITIAL_STATE = {
  loading: false,
  error: false,
  user: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_USER_START:
      return { ...state, loading: true };
    case types.FETCH_USER_FINISH:
      return { ...state, loading: false, error: false, user: action.payload };
    case types.FETCH_USER_ERROR:
      return { ...state, loading: false, error: true, user: {} };
    default:
      return state;
  }
};
