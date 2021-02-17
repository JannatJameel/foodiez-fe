import { combineReducers } from "redux";
import category from "./categoryReducer";
import ingredient from "./ingredientReducer";
import recipe from "./recipeReducer";


const rootReducer = combineReducers({ category, ingredient,  recipe});

export default rootReducer;