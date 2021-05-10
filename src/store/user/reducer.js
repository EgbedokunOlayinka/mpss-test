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
  USER_FORGOT_PASSWORD_RESET,
  USER_REGISTER_RESET,
  USER_VERIFY_REQUEST,
  USER_VERIFY_SUCCESS,
  USER_VERIFY_FAIL,
  USER_LOGOUT,
  USER_LAST_LINK,
} from "./constants";

// const initialState = {
//   loading: false,
//   user: null,
//   error: null,
//   forgotLoading: false,
//   forgotSuccess: false,
//   forgotError: null,
//   redirect: false,
// };

const loginInitialState = {
  loading: false,
  user: null,
  error: null,
  loginLoading: false,
};

const registerInitialState = {
  loading: false,
  redirect: false,
  error: null,
};

const forgotInitialState = {
  loading: false,
  redirect: false,
  mail: null,
  error: null,
};

const linkInitialState = {
  lastLink: null,
};

export const userLinkReducer = (
  state = linkInitialState,
  { type, payload }
) => {
  switch (type) {
    case USER_LAST_LINK:
      return {
        lastLink: payload,
      };
    default:
      return state;
  }
};

export const userLoginReducer = (
  state = loginInitialState,
  { type, payload }
) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        // loading: false,
        user: null,
        error: null,
        loginLoading: true,
      };
    case USER_VERIFY_REQUEST:
      return {
        loading: true,
        user: null,
        error: null,
      };
    case USER_LOGIN_SUCCESS:
      return {
        // loading: false,
        user: payload,
        error: null,
        loginLoading: false,
      };
    case USER_VERIFY_SUCCESS:
      return {
        loading: false,
        user: payload,
        error: null,
      };
    case USER_LOGIN_FAIL:
      return {
        // loading: false,
        user: null,
        error: payload,
        loginLoading: false,
      };
    case USER_VERIFY_FAIL:
      return {
        loading: false,
        user: null,
        error: null,
      };
    case USER_LOGOUT:
      return {
        loading: false,
        user: null,
        error: null,
        loginLoading: false,
      };
    default:
      return state;
  }
};

export const userRegisterReducer = (
  state = registerInitialState,
  { type, payload }
) => {
  switch (type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
        redirect: false,
        error: null,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        redirect: true,
        error: null,
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        redirect: false,
        error: payload,
      };
    case USER_REGISTER_RESET:
      return registerInitialState;
    default:
      return state;
  }
};

export const userForgotReducer = (
  state = forgotInitialState,
  { type, payload }
) => {
  switch (type) {
    case USER_FORGOT_PASSWORD_REQUEST:
      return {
        loading: true,
        redirect: false,
        error: null,
        mail: null,
      };
    case USER_FORGOT_PASSWORD_SUCCESS:
      return {
        loading: false,
        redirect: true,
        error: null,
        mail: payload,
      };
    case USER_FORGOT_PASSWORD_FAIL:
      return {
        loading: false,
        redirect: false,
        error: payload,
        mail: null,
      };
    case USER_FORGOT_PASSWORD_RESET:
      return forgotInitialState;
    default:
      return state;
  }
};
