import { USER_AUTH, USER_AUTH_ERROR, SIGN_OUT } from "../actions/type";

const INIT_STATE = {
  token: "",
  error: "",
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_AUTH:
      return { ...state, ...action.payload };
    case USER_AUTH_ERROR:
      return { ...state, ...action.payload };
    case SIGN_OUT:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
