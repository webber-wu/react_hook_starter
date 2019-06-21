import * as types from "../action/actionType";

const initialState = {
  counter: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        counter: action.counter
      };
    default:
      return state;
  }
};
