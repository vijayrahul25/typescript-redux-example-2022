import { combineReducers } from "redux";

import { categoriesReducers } from "./categories";
import { topicsReducer } from "./topics";
import { postsReducers } from "./posts";
import { commonReducers } from "./common";

export const Reducers = combineReducers({
    categoriesReducers,
    topicsReducer,
    postsReducers,
    commonReducers
  });