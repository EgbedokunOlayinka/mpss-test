import {
  ADD_CIRCLE_FAIL,
  ADD_CIRCLE_REQUEST,
  ADD_CIRCLE_SUCCESS,
} from "./constants";

const addInitialState = {
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
        data: null,
        error: null,
      };
    case ADD_CIRCLE_SUCCESS:
      return {
        loading: false,
        data: payload,
        error: null,
      };
    case ADD_CIRCLE_FAIL:
      return {
        loading: false,
        data: null,
        error: payload,
      };
    default:
      return state;
  }
};
