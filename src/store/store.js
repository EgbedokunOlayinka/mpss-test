import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import count from "./count/reducer";
import {
  userForgotReducer,
  userLoginReducer,
  userRegisterReducer,
  userLinkReducer,
} from "./user/reducer";
import {
  addOrganizationReducer,
  getOrganizationsReducer,
} from "./organization/reducer";
import { addContactReducer, getContactsReducer } from "./contact/reducer";
import { addCircleReducer, getCirclesReducer } from "./circle/reducer";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const combinedReducer = combineReducers({
  count,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userForgot: userForgotReducer,
  userLink: userLinkReducer,
  addOrganization: addOrganizationReducer,
  getOrganizations: getOrganizationsReducer,
  getContacts: getContactsReducer,
  getCircles: getCirclesReducer,
  addContact: addContactReducer,
  addCircle: addCircleReducer,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count.count) nextState.count.count = state.count.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);
