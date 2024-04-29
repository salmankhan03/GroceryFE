import { combineReducers } from "redux";
import { ProductListReducer } from "./ProductListReducer";
import { CartReducer } from "./AddToCartReducer";
import { CategoryReducer } from "./CategoryReducer";
import { BrandReducer } from "./BrandReducer";
import { AuthReducer } from "./AuthReducer";

export const rootReducer = combineReducers({
    ProductReducer: ProductListReducer,
    CartReducer:CartReducer,
    CategoryReducer:CategoryReducer,
    BrandReducer:BrandReducer,
    AuthReducer:AuthReducer

})
