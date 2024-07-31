import { combineReducers } from "redux";
import counterslice  from "../Slice/counter.slice";
import categorySlice from "../Slice/category.slice";
import subcategorySlice from "../Slice/subcategory.slice";
import productSlice from "../Slice/product.slice";
import shoppingSlice from "../Slice/shopping.slice";



export const rootReducer = combineReducers({
    count : counterslice,
    categoryfire : categorySlice,
    subcategoryfire : subcategorySlice,
    productfire:productSlice,
    shoppingfire:shoppingSlice
})