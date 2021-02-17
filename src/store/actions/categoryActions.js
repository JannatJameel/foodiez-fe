import instance from "./instance";
import * as types from "./types";

export const fetchCategories = () => {
    return async (dispatch) => {
        try {
            const res = await instance.get("/categories");
            dispatch({
                type: types.FETCH_CATEGORIES, 
                payload: {categories: res.data}
            });
        } catch (error) {
            console.log("error:", error);
        }
    }
};

export const createCategory = (newCategory) => {
    return async (dispatch) => {
        try {
            const formData = new FormData();
            for(const Key in newCategory) formData.append(Key, newCategory[Key]);
            const res = await instance.post(`/categories`, formData);
            dispatch({
                type: types.CREATE_CATEGORY, 
                payload: {newCategory: res.data}
            });
        } catch(error) {
            console.log("error:", error);
        }
    }
}