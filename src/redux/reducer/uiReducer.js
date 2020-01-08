import * as types from "../action/actionType";

const initialState = {
  xxxxxx: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.XXXXXX:
      return {
        ...state,
        xxxxxx: action.xxxxxx
      };
    default:
      return state;
  }
};
