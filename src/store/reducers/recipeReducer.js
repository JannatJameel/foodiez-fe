import * as types from "../actions/types";

const initialState = {
    recipes: [],
    loading: true
}

const recipeReducer = (state=initialState, action) => {
    switch (action.type){
        case types.FETCH_RECIPES:
            return {
                ...state,
                recipes: action.payload.recipes, 
                loading: false
            };
        case types.CREATE_RECIPE:
            const {newRecipe} = action.payload;
            return{
                ...state, 
                categories: [...state.recipes, newRecipe]
            };
        default: return state;
    };
};

export default recipeReducer;