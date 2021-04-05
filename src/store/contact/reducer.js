import {
  ADD_CONTACT_FIRST_FAIL,
  ADD_CONTACT_FIRST_REQUEST,
  ADD_CONTACT_FIRST_SUCCESS,
} from "./constants";

const addInitialState = {
  loading: false,
  data: null,
  error: null,
};

export const addContactReducer = (
  state = addInitialState,
  { type, payload }
) => {
  switch (type) {
    case ADD_CONTACT_FIRST_REQUEST:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case ADD_CONTACT_FIRST_SUCCESS:
      return {
        loading: false,
        data: payload,
        error: null,
      };
    case ADD_CONTACT_FIRST_FAIL:
      return {
        loading: false,
        data: null,
        error: payload,
      };
    default:
      return state;
  }
};
