const initialState = {
    ingredients: [],
    loading: true
}

const ingredientReducer = (state=initialState, action) => {
    switch (action.type){
        case "FETCH_INGREDIENTS":
            return {
                ...state,
                ingredients: action.payload.ingredients, 
                loading: false
            };
        case "CREATE_INGREDIENT":
            const {newIngredient} = action.payload;
            return{
                ...state, 
                categories: [...state.ingredients, newIngredient]
            };
        default: return state;
    };
};

export default ingredientReducer;