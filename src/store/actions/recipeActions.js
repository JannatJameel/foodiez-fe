import instance from "./instance";
import * as types from "./types";

export const fetchRecipes = () => {
    return async (dispatch) => {
        try {
            const res = await instance.get("/recipes");
            dispatch({
                type: types.FETCH_RECIPES, 
                payload: {recipes: res.data}
            });
        } catch (error) {
            console.log("error:", error);
        }
    }
};

export const createCategory = (newRecipe) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            for(const Key in newRecipe) formData.append(Key, newRecipe[Key]);
            const res = await instance.post(`/recipes`, formData);
            dispatch({
                type: types.CREATE_RECIPE, 
                payload: {newRecipe: res.data}
            });
        } catch(error) {
            console.log("error:", error);
        }
    }
}