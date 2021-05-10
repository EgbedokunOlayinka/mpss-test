import {
  ADD_ORGANIZATION_FAIL,
  ADD_ORGANIZATION_REQUEST,
  ADD_ORGANIZATION_SUCCESS,
  GET_ORGANIZATIONS_REQUEST,
  GET_ORGANIZATIONS_SUCCESS,
  GET_ORGANIZATIONS_FAIL,
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

export const addOrganizationReducer = (
  state = addInitialState,
  { type, payload }
) => {
  switch (type) {
    case ADD_ORGANIZATION_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
        data: null,
      };
    case ADD_ORGANIZATION_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        data: payload,
      };
    case ADD_ORGANIZATION_FAIL:
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

export const getOrganizationsReducer = (
  state = getsInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_ORGANIZATIONS_REQUEST:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case GET_ORGANIZATIONS_SUCCESS:
      return {
        loading: false,
        data: payload,
        error: null,
      };
    case GET_ORGANIZATIONS_FAIL:
      return {
        loading: false,
        data: null,
        error: payload,
      };
    default:
      return state;
  }
};
