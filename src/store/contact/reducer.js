import {
  ADD_CONTACT_FAIL,
  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
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

export const addContactReducer = (
  state = addInitialState,
  { type, payload }
) => {
  switch (type) {
    case ADD_CONTACT_REQUEST:
      return {
        loading: true,
        error: null,
        success: false,
        data: null,
      };
    case ADD_CONTACT_SUCCESS:
      return {
        loading: false,
        error: null,
        success: true,
        data: payload,
      };
    case ADD_CONTACT_FAIL:
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

export const getContactsReducer = (
  state = getsInitialState,
  { type, payload }
) => {
  switch (type) {
    case GET_CONTACTS_REQUEST:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case GET_CONTACTS_SUCCESS:
      return {
        loading: false,
        data: payload,
        error: null,
      };
    case GET_CONTACTS_FAIL:
      return {
        loading: false,
        data: null,
        error: payload,
      };
    default:
      return state;
  }
};
