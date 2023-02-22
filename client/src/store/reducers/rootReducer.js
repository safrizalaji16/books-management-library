import { combineReducers } from "redux";

import categoriesReducer from "./categoriesReducer";
import booksReducer from "./booksReducer";

const rootReducer = combineReducers({
  categoriesReducer,
  booksReducer,
});

export default rootReducer;
