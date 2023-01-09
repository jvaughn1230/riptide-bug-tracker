import { combineReducers } from "@reduxjs/toolkit";
import user from "./userSlice";
import bug from "./bugSlice";

export const rootReducer = combineReducers({
  user,
  bug,
});
