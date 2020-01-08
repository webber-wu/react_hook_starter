import * as types from "./actionType";

export const FBInitialized = () => {
  return {
    type: types.FB_INITIALIZED,
    fbInit: true
  };
};

export const GAInitialized = () => {
  return {
    type: types.GA_INITIALIZED,
    gaInit: true
  };
};

export const GapiInitialized = () => {
  return {
    type: types.GAPI_INITIALIZED,
    gapiInit: true
  };
};
