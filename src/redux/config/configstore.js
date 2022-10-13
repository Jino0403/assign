import { createStore } from "redux";
import { combineReducers } from "redux";
import todo from "../modules/todo";

const rootReducer = combineReducers({
  Todo: todo,
});

const store = createStore(rootReducer);

export default store;
