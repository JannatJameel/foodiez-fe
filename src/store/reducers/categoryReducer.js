const initialState = {
    categories: [],
    loading: true
}

const categoryReducer = (state=initialState, action) => {
    switch (action.type){
        case "FETCH_CATEGORIES":
            return {
                ...state,
                categories: action.payload.categories, 
                loading: false
            };
        case "CREATE_CATEGORY":
            const {newCategory} = action.payload;
            return{
                ...state, 
                categories: [...state.categories, newCategory]
            };
        default: return state;
    };
};

export default categoryReducer;