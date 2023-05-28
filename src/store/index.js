import { createStore, combineReducers } from "redux";
import { CategoriesReducer } from "./reducers/index";

const rootReducer = combineReducers({
  categories: CategoriesReducer,
});

export default createStore(rootReducer);
