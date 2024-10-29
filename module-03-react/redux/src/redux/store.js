import { createStore, combineReducers } from "redux";
import { countReducer, todoReducer } from "./reducers";

const mainReducers = combineReducers({
  count: countReducer,
  todo: todoReducer,
});

const store = createStore(mainReducers);

export default store;
