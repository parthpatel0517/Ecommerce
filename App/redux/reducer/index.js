import { combineReducers } from "redux";
import counterslice  from "../Slice/counter.slice";
import { categoryslice } from "../Slice/category.slice";






export const rootReducer = combineReducers({
    count : counterslice,
    categoryfire : categoryslice
})