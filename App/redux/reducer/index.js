import { combineReducers } from "redux";
import counterslice  from "../Slice/counter.slice";
import categorySlice from "../Slice/category.slice";



export const rootReducer = combineReducers({
    count : counterslice,
    categoryfire : categorySlice
})