import {
  ADD_ORGANIZATION_FAIL,
  ADD_ORGANIZATION_REQUEST,
  ADD_ORGANIZATION_SUCCESS,
} from "./constants";

const addInitialState = {
  loading: false,
  data: null,
  error: null,
};

export const addOrganizationReducer = (
  state = addInitialState,
  { type, payload }
) => {
  switch (type) {
    case ADD_ORGANIZATION_REQUEST:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case ADD_ORGANIZATION_SUCCESS:
      return {
        loading: false,
        data: payload,
        error: null,
      };
    case ADD_ORGANIZATION_FAIL:
      return {
        loading: false,
        data: null,
        error: payload,
      };
    default:
      return state;
  }
};
