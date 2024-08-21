import { combineReducers } from "redux";
import counterslice  from "../Slice/counter.slice";
import categorySlice from "../Slice/category.slice";
import subcategorySlice from "../Slice/subcategory.slice";
import productSlice from "../Slice/product.slice";
import shoppingSlice from "../Slice/shopping.slice";
import colorslice  from "../Slice/color.slice";
import brandSlice from "../Slice/brand.slice";
import favouriteSlice from "../Slice/favourite.slice";
import cartSlice from "../Slice/cart.slice";




export const rootReducer = combineReducers({
    count : counterslice,
    categoryfire : categorySlice,
    subcategoryfire : subcategorySlice,
    productfire:productSlice,
    shoppingfire:shoppingSlice,
    color : colorslice,
    brand : brandSlice,
    favourite : favouriteSlice,
    cart : cartSlice
})