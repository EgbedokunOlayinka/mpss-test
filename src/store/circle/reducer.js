import {
  ADD_CIRCLE_FAIL,
  ADD_CIRCLE_REQUEST,
  ADD_CIRCLE_SUCCESS,
  GET_CIRCLES_REQUEST,
  GET_CIRCLES_SUCCESS,
  GET_CIRCLES_FAIL,
} from "./constants";

const addInitialState = {
  loading: false,
  error: null,
  success: false,
  data: null,
};

const getsInitialState = {
  loading: false,
  data: null,
  error: null,
};

export const addCircleReducer = (
  state = addInitialState,
  { type, payload }
) => {
  switch (type) {
    case ADD_CIRCLE_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
        data: null,
      };
    case ADD_CIRCLE_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        data: payload,
      };
    case ADD_CIRCLE_FAIL:
      return {
        loading: false,
        error: payload,
        success: false,
        data: null,
      };
    default:
      return state;
  }
};

export const getCirclesReducer = (
  state = getsInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_CIRCLES_REQUEST:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case GET_CIRCLES_SUCCESS:
      return {
        loading: false,
        data: payload,
        error: null,
      };
    case GET_CIRCLES_FAIL:
      return {
        loading: false,
        data: null,
        error: payload,
      };
    default:
      return state;
  }
};
