import { combineReducers } from "redux";
import counterslice  from "../Slice/counter.slice";
import categorySlice from "../Slice/category.slice";
import subcategorySlice from "../Slice/subcategory.slice";



export const rootReducer = combineReducers({
    count : counterslice,
    categoryfire : categorySlice,
    subcategoryfire : subcategorySlice
})