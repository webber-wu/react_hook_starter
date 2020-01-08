import * as types from "../action/actionType";

const initialState = {
  fbInit: false,
  gaInit: false,
  gapiInit: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FB_INITIALIZED:
      return {
        ...state,
        fbInit: action.fbInit
      };
    case types.GA_INITIALIZED:
      return {
        ...state,
        gaInit: action.gaInit
      };
    case types.GAPI_INITIALIZED:
      return {
        ...state,
        gapiInit: action.gapiInit
      };
    default:
      return state;
  }
};
