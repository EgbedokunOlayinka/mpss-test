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

export const userLoginReducer = (
  state = loginInitialState,
  { type, payload }
) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
        user: null,
        error: null,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        user: payload,
        error: null,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        user: null,
        error: payload,
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

// const userReducer = (state = initialState, { type, payload }) => {
//   switch (type) {
//     case USER_REGISTER_REQUEST:
//       return {
//         ...state,
//         redirect: false,
//         loading: true,
//         error: null,
//       };
//     case USER_REGISTER_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         redirect: true,
//         error: null,
//       };
//     case USER_REGISTER_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: payload,
//         redirect: false,
//       };
//     case USER_LOGIN_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//         redirect: false,
//       };
//     case USER_LOGIN_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         user: payload,
//         error: null,
//         redirect: false,
//       };
//     case USER_LOGIN_FAIL:
//       return {
//         ...state,
//         loading: false,
//         user: null,
//         error: payload,
//         redirect: false,
//       };
//     case USER_FORGOT_PASSWORD_REQUEST:
//       return {
//         ...state,
//         forgotLoading: true,
//         forgotSuccess: false,
//         forgotError: null,
//         redirect: false,
//       };
//     case USER_FORGOT_PASSWORD_SUCCESS:
//       return {
//         ...state,
//         forgotLoading: false,
//         forgotSuccess: true,
//         forgotError: null,
//         redirect: false,
//       };
//     case USER_FORGOT_PASSWORD_FAIL:
//       return {
//         ...state,
//         forgotLoading: false,
//         forgotSuccess: false,
//         forgotError: payload,
//         redirect: false,
//       };
//     default:
//       return state;
//   }
// };

// export default userReducer;
