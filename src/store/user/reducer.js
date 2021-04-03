import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_FORGOT_PASSWORD_FAIL,
  USER_FORGOT_PASSWORD_REQUEST,
  USER_FORGOT_PASSWORD_SUCCESS,
} from "./constants";

const initialState = {
  loading: false,
  user: null,
  error: null,
  forgotLoading: false,
  forgotSuccess: false,
  forgotError: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        error: null,
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        error: payload,
      };
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload,
        error: null,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        user: null,
        error: payload,
      };
    case USER_FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        forgotLoading: true,
        forgotSuccess: false,
        forgotError: null,
      };
    case USER_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotLoading: false,
        forgotSuccess: true,
        forgotError: null,
      };
    case USER_FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        forgotLoading: false,
        forgotSuccess: false,
        forgotError: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
