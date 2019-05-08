import { LOGIN_SUCCESS, LOGIN_FAILED } from '../actions';

const initialState = {
  loginFailed: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginFailed: false
      };

      case LOGIN_FAILED:
        return {
          ...state,
          loginFailed: true
        };

    default:
      return state;
  }
};

export default reducer;
