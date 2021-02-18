import instance from "./instance";
import * as types from "./types";

export const fetchIngredients = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/ingredients");
      dispatch({
        type: types.FETCH_INGREDIENTS,
        payload: { ingredients: res.data },
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};

export const createIngredient = (newIngredient) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const Key in newIngredient) formData.append(Key, newIngredient[Key]);
      const res = await instance.post(
        `/categories/${newIngredient.categoryId}/ingredients`,
        formData
      );
      dispatch({
        type: types.CREATE_INGREDIENT,
        payload: { newIngredient: res.data },
      });
    } catch (error) {
      console.log("error:", error);
    }
  };
};
