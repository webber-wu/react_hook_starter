import * as types from "./actionType";

export const increment = counter => {
  return {
    type: types.INCREMENT,
    counter
  };
};
