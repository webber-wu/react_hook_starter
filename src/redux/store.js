import { createStore } from "redux";
import reducer from "./rootReducer";

export const store =
  process.env.NODE_ENV === "production"
    ? createStore(reducer)
    : createStore(
        reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      );
